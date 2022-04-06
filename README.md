# GIR2TS

Reads [GObject Introspection][GI site] GIR files to produce [TypeScript][TS] declaration files aimed for use with [GJS][GJS]. It is a NodeJS script itself written in TypeScript.

[GI site]: https://wiki.gnome.org/Projects/GObjectIntrospection
[TS]: http://www.typescriptlang.org/
[GJS]: https://wiki.gnome.org/Projects/Gjs

## Status

Currently the project only generates simple types (no generics or any advanced usage coming from the GObject Introspection XML files) and need to be modified/extended manually through the files in `modifiers` and `extensions` folder.

**This project currently contains `.gir` files and their typings for the Cinnamon desktop environment.** With little work (assuming you get the `.gir` files) you can easily generate typings for Gnome or any other Desktop environment using GJS.

## Alternatives

[Evan Welsh / gi.ts · GitLab](https://gitlab.gnome.org/ewlsh/gi.ts) is a more mature version of generators of this type. It has a different approach of generating typings that is most likely better for Gnome, but I never verified it or tried it because my main target was Cinnamon (and to be honest I found it late in development).

## Future work

* Automatically generate generics

* Add `$gtype` members for all constructs

## Usage

Put the .gir files in a directory. In this case it's `./gir`.

```
git clone https://github.com/Gr3q/GIR2TS.git
cd GIR2TS
npm install
npm run build
npm run generate
```

To run the generated script directly, observe the `generate` command in `package.json`

### Options:

`--outdir`      The directory to put the .d.ts files in.

`--girdir`      The directory to read the .gir files from

`--overridesdir`  The directory from which to read the json files describing the manual overrides to exclude parts from generation 

`--modifiersdir` The directory from which to read the json files describing the modifiers to modify classes, functions of the generated output.

## Working

Currently applies the following mappings:

### Class

Generates an interface corresponding to the instance side of the class, then a mixin type to facilitate inheritance without errors (Multi-class extends are not allowed in Typescript, but allowed in C).

Then it generates an interface corresponding extending the mixin and a matching class of the same name as the constructor that contains the constructor and static methods.  Properties that are write-only or conflicting with methods/signals are not included in the declarations. Most properties should be accessed using getters and setters anyway and for the rare times when that's not an option we can always cast to ```any```.

```typescript
/** This construct is only for enabling class multi-inheritance,
 * use {@link Window} instead.
 */
interface IWindow {
    set_default_size (width: number, height: number): void;
    set_title (title: string): void;
    // rest of methods
}

/** This construct is only for enabling class multi-inheritance,
 * use {@link Window} instead.
 */
type WindowMixin = IWindow & IBin & Atk.IImplementorIface & IBuildable;

interface Window extends WindowMixin {}
class Window {
    public static new(_type: WindowType): Widget;
}
```

### Interfaces

Maps to typescript interfaces.

### Functions

Map to typescript function declarations.

### Enums and Bitfields

Maps to typescript enums.

### Record

Maps to typescript classes with properties and methods.

### Callbacks

Map to typescript interfaces with call signatures. For example:

```typescript
interface CellAllocCallback {
    (renderer: CellRenderer, cell_area: Gdk.Rectangle, cell_background: Gdk.Rectangle, data: any) : boolean;
}
```

### Unions

Maps to the same structure as classes.

### Alias

Map to typescript ```type``` declarations. For example:

```typescript
type Allocation = Gdk.Rectangle;
```

### Manual Overrides

Sometimes, since the GObject property names are computed dynamically, methods, signals and properties often end up having the same names and interfaces overload inherited methods which doesn't fly with TypeScript. For this reason, certain classes, methods, etc. are omitted manually. These are commented out in the declaration files.

These manual overrides are specified in json files, one for each GIR file. The ```exceptions``` directory contains these files.
For example, this is the overrides file for Gtk:

```json
{
    "exclude": {
        "class": {
            "Widget": [
                "activate",
                "child_notify",
                "get_window",
                "mnemonic_activate",
                "get_direction",
                "get_state",
                "grab_focus",
                "set_direction",
                "set_state",
                "set_style",
                "get_style"
            ],
            "Container": [
                "remove"
            ],
            "CellAreaBox": [
                "pack_end",
                "pack_start"
            ]
        },
        "function": [
            "false",
            "true"
        ]
    }
}
```

### Manual modifiers

Sometimes gir files can be incorrect or this generator can still be incorrect. For this reason classes, functions, parameters and properties can be modified.

These modifiers are specified in json files, one for each GIR file. The `modifiers` directory contains these files.
For example, this is the overrides file for Gtk:

```json
{
    "$schema": "./schema.json",
    "amend": {
        "class": {
            "Label": {
                "function": {
                    "constructor": {
                        "newParam": [
                            {
                                "type": "Partial<LabelOptions>",
                                "name": "options",
                                "optional": true,
                                "docs": ""
                            }
                        ]
                    }
                }
            },
            "Window": {
                "function": {
                    "constructor": {
                        "newParam": [
                            {
                                "type": "Partial<WindowOptions>",
                                "name": "options",
                                "optional": true,
                                "docs": ""
                            }
                        ]
                    }
                }
            }
        },
        "function": {
            "init": {
                "param": {
                    "argc": {
                        "type_extension": ["null"]
                    },
                    "argv": {
                        "optional": true
                    }
                }
            }
        }
    }
}
```
