/** Generated with https://github.com/Gr3q/GIR2TS - If possible do not modify. */
declare namespace imports.gi.Clutter {
	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Action} instead.
	 */
	interface IAction {

	}

	type ActionInitOptionsMixin = ActorMetaInitOptions
	export interface ActionInitOptions extends ActionInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Action} instead.
	 */
	type ActionMixin = IAction & ActorMeta;

	/**
	 * The {@link Action} structure contains only private data and
	 * should be accessed using the provided API.
	 */
	interface Action extends ActionMixin {}

	class Action {
		public constructor(options?: Partial<ActionInitOptions>);
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Actor} instead.
	 */
	interface IActor {
		/**
		 * The allocation for the actor, in pixels
		 * 
		 * This is property is read-only, but you might monitor it to know when an
		 * actor moves or resizes
		 */
		readonly allocation: ActorBox;
		/**
		 * @deprecated
		 * Use {@link Actor.pivot_point} instead
		 * 
		 * The anchor point expressed as a {@link Gravity}
		 * 
		 * It is highly recommended not to use #ClutterActor:anchor-x,
		 * #ClutterActor:anchor-y, and #ClutterActor:anchor-gravity in newly
		 * written code; the anchor point adds an additional translation that
		 * will affect the actor's relative position with regards to its
		 * parent, as well as the position of its children. This change needs
		 * to always be taken into account when positioning the actor. It is
		 * recommended to use the #ClutterActor:pivot-point property instead,
		 * as it will affect only the transformations.
		 */
		anchor_gravity: Gravity;
		/**
		 * @deprecated
		 * Use {@link Actor.pivot_point} instead
		 * 
		 * The X coordinate of an actor's anchor point, relative to
		 * the actor coordinate space, in pixels.
		 * 
		 * It is highly recommended not to use {@link Actor.anchor_x},
		 * #ClutterActor:anchor-y, and #ClutterActor:anchor-gravity in newly
		 * written code; the anchor point adds an additional translation that
		 * will affect the actor's relative position with regards to its
		 * parent, as well as the position of its children. This change needs
		 * to always be taken into account when positioning the actor. It is
		 * recommended to use the #ClutterActor:pivot-point property instead,
		 * as it will affect only the transformations.
		 */
		anchor_x: number;
		/**
		 * @deprecated
		 * Use {@link Actor.pivot_point} instead
		 * 
		 * The Y coordinate of an actor's anchor point, relative to
		 * the actor coordinate space, in pixels
		 * 
		 * It is highly recommended not to use {@link Actor.anchor_x},
		 * #ClutterActor:anchor-y, and #ClutterActor:anchor-gravity in newly
		 * written code; the anchor point adds an additional translation that
		 * will affect the actor's relative position with regards to its
		 * parent, as well as the position of its children. This change needs
		 * to always be taken into account when positioning the actor. It is
		 * recommended to use the #ClutterActor:pivot-point property instead,
		 * as it will affect only the transformations.
		 */
		anchor_y: number;
		/**
		 * Paints a solid fill of the actor's allocation using the specified
		 * color.
		 * 
		 * The {@link Actor.background_color} property is animatable.
		 */
		background_color: Color;
		/**
		 * Whether the {@link Actor.background_color} property has been set.
		 */
		readonly background_color_set: boolean;
		/**
		 * Applies a transformation matrix on each child of an actor.
		 * 
		 * Setting this property with a {@link Matrix} will set the
		 * #ClutterActor:child-transform-set property to %TRUE as a side effect;
		 * setting this property with %NULL will set the
		 * #ClutterActor:child-transform-set property to %FALSE.
		 * 
		 * The #ClutterActor:child-transform property is animatable.
		 */
		child_transform: any;
		/**
		 * Whether the {@link Actor.child_transform} property is set.
		 */
		readonly child_transform_set: boolean;
		/**
		 * The visible region of the actor, in actor-relative coordinates,
		 * expressed as a #graphene_rect_t.
		 * 
		 * Setting this property to %NULL will unset the existing clip.
		 * 
		 * Setting this property will change the {@link Actor.has_clip}
		 * property as a side effect.
		 */
		clip_rect: Graphene.Rect;
		/**
		 * Whether the clip region should track the allocated area
		 * of the actor.
		 * 
		 * This property is ignored if a clip area has been explicitly
		 * set using {@link Clutter.Actor.set_clip}.
		 */
		clip_to_allocation: boolean;
		/**
		 * The {@link Content} implementation that controls the content
		 * of the actor.
		 */
		content: Content;
		/**
		 * The bounding box for the {@link Content} used by the actor.
		 * 
		 * The value of this property is controlled by the #ClutterActor:allocation
		 * and #ClutterActor:content-gravity properties of #ClutterActor.
		 * 
		 * The bounding box for the content is guaranteed to never exceed the
		 * allocation's of the actor.
		 */
		readonly content_box: ActorBox;
		/**
		 * The alignment that should be honoured by the {@link Content}
		 * set with the #ClutterActor:content property.
		 * 
		 * Changing the value of this property will change the bounding box of
		 * the content; you can use the #ClutterActor:content-box property to
		 * get the position and size of the content within the actor's
		 * allocation.
		 * 
		 * This property is meaningful only for #ClutterContent implementations
		 * that have a preferred size, and if the preferred size is smaller than
		 * the actor's allocation.
		 * 
		 * The #ClutterActor:content-gravity property is animatable.
		 */
		content_gravity: ContentGravity;
		/**
		 * The repeat policy for the actor's {@link Actor.content}.
		 */
		content_repeat: ContentRepeat;
		/**
		 * @deprecated
		 * Use {@link Actor.z_position} instead.
		 * 
		 * The position of the actor on the Z axis.
		 * 
		 * The {@link Actor.depth} property is relative to the parent's
		 * modelview matrix.
		 * 
		 * Setting this property will call {@link #ClutterContainerIface.sort.depth_order}
		 * which is usually a no-op, and it's most likely not what you want.
		 * 
		 * The #ClutterActor:depth property is animatable.
		 */
		depth: number;
		/**
		 * The actor's first child.
		 */
		readonly first_child: Actor;
		/**
		 * This flag controls whether the {@link Actor.fixed_x} and
		 * #ClutterActor:fixed-y properties are used
		 */
		fixed_position_set: boolean;
		/**
		 * The fixed X position of the actor in pixels.
		 * 
		 * Writing this property sets {@link Actor.fixed_position_set}
		 * property as well, as a side effect
		 */
		fixed_x: number;
		/**
		 * The fixed Y position of the actor in pixels.
		 * 
		 * Writing this property sets the {@link Actor.fixed_position_set}
		 * property as well, as a side effect
		 */
		fixed_y: number;
		/**
		 * Whether the actor has the {@link Actor.clip} property set or not
		 */
		// readonly has_clip: boolean;
		/**
		 * Whether the actor contains the pointer of a {@link InputDevice}
		 * or not.
		 */
		// readonly has_pointer: boolean;
		/**
		 * Height of the actor (in pixels).  If written, forces the minimum and
		 * natural size request of the actor to the given height. If read, returns
		 * the allocated height if available, otherwise the height request.
		 * 
		 * The {@link Actor.height} property is animatable.
		 */
		height: number;
		/**
		 * The actor's last child.
		 */
		readonly last_child: Actor;
		/**
		 * A delegate object for controlling the layout of the children of
		 * an actor.
		 */
		layout_manager: LayoutManager;
		magnification_filter: ScalingFilter;
		/**
		 * Whether the actor is mapped (will be painted when the stage
		 * to which it belongs is mapped)
		 */
		readonly mapped: boolean;
		/**
		 * The margin (in pixels) from the bottom of the actor.
		 * 
		 * This property adds a margin to the actor's preferred size; the margin
		 * will be automatically taken into account when allocating the actor.
		 * 
		 * The {@link Actor.margin_bottom} property is animatable.
		 */
		margin_bottom: number;
		/**
		 * The margin (in pixels) from the left of the actor.
		 * 
		 * This property adds a margin to the actor's preferred size; the margin
		 * will be automatically taken into account when allocating the actor.
		 * 
		 * The {@link Actor.margin_left} property is animatable.
		 */
		margin_left: number;
		/**
		 * The margin (in pixels) from the right of the actor.
		 * 
		 * This property adds a margin to the actor's preferred size; the margin
		 * will be automatically taken into account when allocating the actor.
		 * 
		 * The {@link Actor.margin_right} property is animatable.
		 */
		margin_right: number;
		/**
		 * The margin (in pixels) from the top of the actor.
		 * 
		 * This property adds a margin to the actor's preferred size; the margin
		 * will be automatically taken into account when allocating the actor.
		 * 
		 * The {@link Actor.margin_top} property is animatable.
		 */
		margin_top: number;
		/**
		 * A forced minimum height request for the actor, in pixels
		 * 
		 * Writing this property sets the {@link Actor.min_height_set} property
		 * as well, as a side effect. This property overrides the usual height
		 * request of the actor.
		 */
		min_height: number;
		/**
		 * This flag controls whether the {@link Actor.min_height} property
		 * is used
		 */
		min_height_set: boolean;
		/**
		 * A forced minimum width request for the actor, in pixels
		 * 
		 * Writing this property sets the {@link Actor.min_width_set} property
		 * as well, as a side effect.
		 * 
		 * This property overrides the usual width request of the actor.
		 */
		min_width: number;
		/**
		 * This flag controls whether the {@link Actor.min_width} property
		 * is used
		 */
		min_width_set: boolean;
		minification_filter: ScalingFilter;
		/**
		 * The name of the actor
		 */
		name: string;
		/**
		 * A forced natural height request for the actor, in pixels
		 * 
		 * Writing this property sets the {@link Actor.natural_height_set}
		 * property as well, as a side effect. This property overrides the
		 * usual height request of the actor
		 */
		natural_height: number;
		/**
		 * This flag controls whether the {@link Actor.natural_height} property
		 * is used
		 */
		natural_height_set: boolean;
		/**
		 * A forced natural width request for the actor, in pixels
		 * 
		 * Writing this property sets the {@link Actor.natural_width_set}
		 * property as well, as a side effect. This property overrides the
		 * usual width request of the actor
		 */
		natural_width: number;
		/**
		 * This flag controls whether the {@link Actor.natural_width} property
		 * is used
		 */
		natural_width_set: boolean;
		/**
		 * Determines the conditions in which the actor will be redirected
		 * to an offscreen framebuffer while being painted. For example this
		 * can be used to cache an actor in a framebuffer or for improved
		 * handling of transparent actors. See
		 * {@link Clutter.Actor.set_offscreen_redirect} for details.
		 */
		offscreen_redirect: OffscreenRedirect;
		/**
		 * Opacity of an actor, between 0 (fully transparent) and
		 * 255 (fully opaque)
		 * 
		 * The {@link Actor.opacity} property is animatable.
		 */
		opacity: number;
		/**
		 * The point around which the scaling and rotation transformations occur.
		 * 
		 * The pivot point is expressed in normalized coordinates space, with (0, 0)
		 * being the top left corner of the actor and (1, 1) the bottom right corner
		 * of the actor.
		 * 
		 * The default pivot point is located at (0, 0).
		 * 
		 * The {@link Actor.pivot_point} property is animatable.
		 */
		pivot_point: Graphene.Point;
		/**
		 * The Z component of the {@link Actor.pivot_point}, expressed as a value
		 * along the Z axis.
		 * 
		 * The #ClutterActor:pivot-point-z property is animatable.
		 */
		pivot_point_z: number;
		/**
		 * The position of the origin of the actor.
		 * 
		 * This property is a shorthand for setting and getting the
		 * {@link Actor.x} and #ClutterActor:y properties at the same
		 * time.
		 * 
		 * The #ClutterActor:position property is animatable.
		 */
		position: Graphene.Point;
		/**
		 * Whether the actor is reactive to events or not
		 * 
		 * Only reactive actors will emit event-related signals
		 */
		reactive: boolean;
		/**
		 * Whether the actor has been realized
		 */
		readonly realized: boolean;
		/**
		 * Request mode for the {@link Actor}. The request mode determines the
		 * type of geometry management used by the actor, either height for width
		 * (the default) or width for height.
		 * 
		 * For actors implementing height for width, the parent container should get
		 * the preferred width first, and then the preferred height for that width.
		 * 
		 * For actors implementing width for height, the parent container should get
		 * the preferred height first, and then the preferred width for that height.
		 * 
		 * For instance:
		 * 
		 * |[<!-- language="C" -->
		 *   ClutterRequestMode mode;
		 *   gfloat natural_width, min_width;
		 *   gfloat natural_height, min_height;
		 * 
		 *   mode = clutter_actor_get_request_mode (child);
		 *   if (mode == CLUTTER_REQUEST_HEIGHT_FOR_WIDTH)
		 *     {
		 *       clutter_actor_get_preferred_width (child, -1,
		 *                                          &min_width,
		 *                                          &natural_width);
		 *       clutter_actor_get_preferred_height (child, natural_width,
		 *                                           &min_height,
		 *                                           &natural_height);
		 *     }
		 *   else if (mode == CLUTTER_REQUEST_WIDTH_FOR_HEIGHT)
		 *     {
		 *       clutter_actor_get_preferred_height (child, -1,
		 *                                           &min_height,
		 *                                           &natural_height);
		 *       clutter_actor_get_preferred_width (child, natural_height,
		 *                                          &min_width,
		 *                                          &natural_width);
		 *     }
		 *   else if (mode == CLUTTER_REQUEST_CONTENT_SIZE)
		 *     {
		 *       ClutterContent *content = clutter_actor_get_content (child);
		 * 
		 *       min_width, min_height = 0;
		 *       natural_width = natural_height = 0;
		 * 
		 *       if (content != NULL)
		 *         clutter_content_get_preferred_size (content, &natural_width, &natural_height);
		 *     }
		 * ]|
		 * 
		 * will retrieve the minimum and natural width and height depending on the
		 * preferred request mode of the #ClutterActor "child".
		 * 
		 * The {@link Clutter.Actor.get_preferred_size} function will implement this
		 * check for you.
		 */
		request_mode: RequestMode;
		/**
		 * The resource-scale of the {@link Actor} if any or -1 if not available
		 */
		readonly resource_scale: number;
		/**
		 * The rotation angle on the X axis.
		 * 
		 * The {@link Actor.rotation_angle_x} property is animatable.
		 */
		rotation_angle_x: number;
		/**
		 * The rotation angle on the Y axis
		 * 
		 * The {@link Actor.rotation_angle_y} property is animatable.
		 */
		rotation_angle_y: number;
		/**
		 * The rotation angle on the Z axis
		 * 
		 * The {@link Actor.rotation_angle_z} property is animatable.
		 */
		rotation_angle_z: number;
		/**
		 * @deprecated
		 * Use {@link Actor.pivot_point} instead
		 * 
		 * The rotation center on the X axis.
		 */
		rotation_center_x: Graphene.Point3D;
		/**
		 * @deprecated
		 * Use {@link Actor.pivot_point} instead
		 * 
		 * The rotation center on the Y axis.
		 */
		rotation_center_y: Graphene.Point3D;
		/**
		 * @deprecated
		 * Use {@link Actor.pivot_point} instead
		 * 
		 * The rotation center on the Z axis.
		 */
		rotation_center_z: Graphene.Point3D;
		/**
		 * @deprecated
		 * Use {@link Actor.pivot_point} instead
		 * 
		 * The rotation center on the Z axis expressed as a {@link Gravity}.
		 */
		rotation_center_z_gravity: Gravity;
		/**
		 * @deprecated
		 * Use {@link Actor.pivot_point} instead
		 * 
		 * The horizontal center point for scaling
		 */
		scale_center_x: number;
		/**
		 * @deprecated
		 * Use {@link Actor.pivot_point} instead
		 * 
		 * The vertical center point for scaling
		 */
		scale_center_y: number;
		/**
		 * @deprecated
		 * Use {@link Actor.pivot_point} instead
		 * 
		 * The center point for scaling expressed as a {@link Gravity}
		 */
		scale_gravity: Gravity;
		/**
		 * The horizontal scale of the actor.
		 * 
		 * The {@link Actor.scale_x} property is animatable.
		 */
		scale_x: number;
		/**
		 * The vertical scale of the actor.
		 * 
		 * The {@link Actor.scale_y} property is animatable.
		 */
		scale_y: number;
		/**
		 * The scale factor of the actor along the Z axis.
		 * 
		 * The {@link Actor.scale_y} property is animatable.
		 */
		scale_z: number;
		/**
		 * If %TRUE, the actor is automatically shown when parented.
		 * 
		 * Calling {@link Clutter.Actor.hide} on an actor which has not been
		 * parented will set this property to %FALSE as a side effect.
		 */
		show_on_set_parent: boolean;
		/**
		 * The size of the actor.
		 * 
		 * This property is a shorthand for setting and getting the
		 * {@link Actor.width} and #ClutterActor:height at the same time.
		 * 
		 * The #ClutterActor:size property is animatable.
		 */
		size: Graphene.Size;
		/**
		 * The direction of the text inside a {@link Actor}.
		 */
		text_direction: TextDirection;
		/**
		 * Overrides the transformations of a {@link Actor} with a custom
		 * matrix.
		 * 
		 * The matrix specified by the #ClutterActor:transform property is
		 * applied to the actor and its children relative to the actor's
		 * #ClutterActor:allocation and #ClutterActor:pivot-point.
		 * 
		 * Application code should rarely need to use this function directly.
		 * 
		 * Setting this property with a #ClutterMatrix will set the
		 * #ClutterActor:transform-set property to %TRUE as a side effect;
		 * setting this property with %NULL will set the
		 * #ClutterActor:transform-set property to %FALSE.
		 * 
		 * The #ClutterActor:transform property is animatable.
		 */
		transform: any;
		/**
		 * Whether the {@link Actor.transform} property is set.
		 */
		readonly transform_set: boolean;
		/**
		 * An additional translation applied along the X axis, relative
		 * to the actor's {@link Actor.pivot_point}.
		 * 
		 * The #ClutterActor:translation-x property is animatable.
		 */
		translation_x: number;
		/**
		 * An additional translation applied along the Y axis, relative
		 * to the actor's {@link Actor.pivot_point}.
		 * 
		 * The #ClutterActor:translation-y property is animatable.
		 */
		translation_y: number;
		/**
		 * An additional translation applied along the Z axis, relative
		 * to the actor's {@link Actor.pivot_point}.
		 * 
		 * The #ClutterActor:translation-z property is animatable.
		 */
		translation_z: number;
		/**
		 * Whether the actor is set to be visible or not
		 * 
		 * See also {@link Actor.mapped}
		 */
		visible: boolean;
		/**
		 * Width of the actor (in pixels). If written, forces the minimum and
		 * natural size request of the actor to the given width. If read, returns
		 * the allocated width if available, otherwise the width request.
		 * 
		 * The {@link Actor.width} property is animatable.
		 */
		width: number;
		/**
		 * X coordinate of the actor in pixels. If written, forces a fixed
		 * position for the actor. If read, returns the fixed position if any,
		 * otherwise the allocation if available, otherwise 0.
		 * 
		 * The {@link Actor.x} property is animatable.
		 */
		x: number;
		/**
		 * The alignment of an actor on the X axis, if the actor has been given
		 * extra space for its allocation. See also the {@link Actor.x_expand}
		 * property.
		 */
		x_align: ActorAlign | St.Align;
		/**
		 * Whether a layout manager should assign more space to the actor on
		 * the X axis.
		 */
		x_expand: boolean;
		/**
		 * Y coordinate of the actor in pixels. If written, forces a fixed
		 * position for the actor.  If read, returns the fixed position if
		 * any, otherwise the allocation if available, otherwise 0.
		 * 
		 * The {@link Actor.y} property is animatable.
		 */
		y: number;
		/**
		 * The alignment of an actor on the Y axis, if the actor has been given
		 * extra space for its allocation.
		 */
		y_align: ActorAlign | St.Align;
		/**
		 * Whether a layout manager should assign more space to the actor on
		 * the Y axis.
		 */
		y_expand: boolean;
		/**
		 * The actor's position on the Z axis, relative to the parent's
		 * transformations.
		 * 
		 * Positive values will bring the actor's position nearer to the user,
		 * whereas negative values will bring the actor's position farther from
		 * the user.
		 * 
		 * The {@link Actor.z_position} does not affect the paint or allocation
		 * order.
		 * 
		 * The #ClutterActor:z-position property is animatable.
		 */
		z_position: number;
		/**
		 * {@link ActorFlags}
		 */
		readonly flags: number;
		/**
		 * Adds #action to the list of actions applied to #self
		 * 
		 * A {@link Action} can only belong to one actor at a time
		 * 
		 * The #ClutterActor will hold a reference on #action until either
		 * {@link Clutter.Actor.remove_action} or clutter_actor_clear_actions()
		 * is called
		 * @param action a {@link Action}
		 */
		add_action(action: Action): void;
		/**
		 * A convenience function for setting the name of a {@link Action}
		 * while adding it to the list of actions applied to #self
		 * 
		 * This function is the logical equivalent of:
		 * 
		 * |[<!-- language="C" -->
		 *   clutter_actor_meta_set_name (CLUTTER_ACTOR_META (action), name);
		 *   clutter_actor_add_action (self, action);
		 * ]|
		 * @param name the name to set on the action
		 * @param action a {@link Action}
		 */
		add_action_with_name(name: string, action: Action): void;
		/**
		 * Adds #child to the children of #self.
		 * 
		 * This function will acquire a reference on #child that will only
		 * be released when calling {@link Clutter.Actor.remove_child}.
		 * 
		 * This function will take into consideration the {@link Actor.depth}
		 * of #child, and will keep the list of children sorted.
		 * 
		 * This function will emit the #ClutterContainer::actor-added signal
		 * on #self.
		 * @param child a {@link Actor}
		 */
		add_child(child: Actor): void;
		/**
		 * Adds #constraint to the list of {@link Constraint}<!-- -->s applied
		 * to #self
		 * 
		 * The #ClutterActor will hold a reference on the #constraint until
		 * either {@link Clutter.Actor.remove_constraint} or
		 * clutter_actor_clear_constraints() is called.
		 * @param constraint a {@link Constraint}
		 */
		add_constraint(constraint: Constraint): void;
		/**
		 * A convenience function for setting the name of a {@link Constraint}
		 * while adding it to the list of constraints applied to #self
		 * 
		 * This function is the logical equivalent of:
		 * 
		 * |[<!-- language="C" -->
		 *   clutter_actor_meta_set_name (CLUTTER_ACTOR_META (constraint), name);
		 *   clutter_actor_add_constraint (self, constraint);
		 * ]|
		 * @param name the name to set on the constraint
		 * @param constraint a {@link Constraint}
		 */
		add_constraint_with_name(name: string, constraint: Constraint): void;
		/**
		 * Adds #effect to the list of {@link Effect}<!-- -->s applied to #self
		 * 
		 * The #ClutterActor will hold a reference on the #effect until either
		 * {@link Clutter.Actor.remove_effect} or clutter_actor_clear_effects() is
		 * called.
		 * @param effect a {@link Effect}
		 */
		add_effect(effect: Effect): void;
		/**
		 * A convenience function for setting the name of a {@link Effect}
		 * while adding it to the list of effectss applied to #self
		 * 
		 * This function is the logical equivalent of:
		 * 
		 * |[<!-- language="C" -->
		 *   clutter_actor_meta_set_name (CLUTTER_ACTOR_META (effect), name);
		 *   clutter_actor_add_effect (self, effect);
		 * ]|
		 * @param name the name to set on the effect
		 * @param effect a {@link Effect}
		 */
		add_effect_with_name(name: string, effect: Effect): void;
		/**
		 * Adds a #transition to the {@link Actor}'s list of animations.
		 * 
		 * The #name string is a per-actor unique identifier of the #transition: only
		 * one #ClutterTransition can be associated to the specified #name.
		 * 
		 * The #transition will be started once added.
		 * 
		 * This function will take a reference on the #transition.
		 * 
		 * This function is usually called implicitly when modifying an animatable
		 * property.
		 * @param name the name of the transition to add
		 * @param transition the {@link Transition} to add
		 */
		add_transition(name: string, transition: Transition): void;
		/**
		 * Assigns the size of a {@link Actor} from the given #box.
		 * 
		 * This function should only be called on the children of an actor when
		 * overriding the #ClutterActorClass.allocate() virtual function.
		 * 
		 * This function will adjust the stored allocation to take into account
		 * the alignment flags set in the #ClutterActor:x-align and
		 * #ClutterActor:y-align properties, as well as the margin values set in
		 * the #ClutterActor:margin-top, #ClutterActor:margin-right,
		 * #ClutterActor:margin-bottom, and #ClutterActor:margin-left properties.
		 * 
		 * This function will respect the easing state of the #ClutterActor and
		 * interpolate between the current allocation and the new one if the
		 * easing state duration is a positive value.
		 * 
		 * Actors can know from their allocation box whether they have moved
		 * with respect to their parent actor. The #flags parameter describes
		 * additional information about the allocation, for instance whether
		 * the parent has moved with respect to the stage, for example because
		 * a grandparent's origin has moved.
		 * @param box new allocation of the actor, in parent-relative coordinates
		 * @param flags flags that control the allocation
		 */
		allocate(box: ActorBox, flags?: AllocationFlags): void;
		/**
		 * Allocates #self by taking into consideration the available allocation
		 * area; an alignment factor on either axis; and whether the actor should
		 * fill the allocation on either axis.
		 * 
		 * The #box should contain the available allocation width and height;
		 * if the x1 and y1 members of {@link ActorBox} are not set to 0, the
		 * allocation will be offset by their value.
		 * 
		 * This function takes into consideration the geometry request specified by
		 * the #ClutterActor:request-mode property, and the text direction.
		 * 
		 * This function is useful for fluid layout managers using legacy alignment
		 * flags. Newly written layout managers should use the #ClutterActor:x-align
		 * and #ClutterActor:y-align properties, instead, and just call
		 * {@link Clutter.Actor.allocate} inside their #ClutterActorClass.allocate()
		 * implementation.
		 * @param box a {@link ActorBox}, containing the available width and height
		 * @param x_align the horizontal alignment, between 0 and 1
		 * @param y_align the vertical alignment, between 0 and 1
		 * @param x_fill whether the actor should fill horizontally
		 * @param y_fill whether the actor should fill vertically
		 * @param flags allocation flags to be passed to {@link Clutter.Actor.allocate}
		 */
		allocate_align_fill(box: ActorBox, x_align: number, y_align: number, x_fill: boolean, y_fill: boolean, flags: AllocationFlags): void;
		/**
		 * Allocates #self taking into account the {@link Actor}'s
		 * preferred size, but limiting it to the maximum available width
		 * and height provided.
		 * 
		 * This function will do the right thing when dealing with the
		 * actor's request mode.
		 * 
		 * The implementation of this function is equivalent to:
		 * 
		 * |[<!-- language="C" -->
		 *   if (request_mode == CLUTTER_REQUEST_HEIGHT_FOR_WIDTH)
		 *     {
		 *       clutter_actor_get_preferred_width (self, available_height,
		 *                                          &min_width,
		 *                                          &natural_width);
		 *       width = CLAMP (natural_width, min_width, available_width);
		 * 
		 *       clutter_actor_get_preferred_height (self, width,
		 *                                           &min_height,
		 *                                           &natural_height);
		 *       height = CLAMP (natural_height, min_height, available_height);
		 *     }
		 *   else if (request_mode == CLUTTER_REQUEST_WIDTH_FOR_HEIGHT)
		 *     {
		 *       clutter_actor_get_preferred_height (self, available_width,
		 *                                           &min_height,
		 *                                           &natural_height);
		 *       height = CLAMP (natural_height, min_height, available_height);
		 * 
		 *       clutter_actor_get_preferred_width (self, height,
		 *                                          &min_width,
		 *                                          &natural_width);
		 *       width = CLAMP (natural_width, min_width, available_width);
		 *     }
		 *   else if (request_mode == CLUTTER_REQUEST_CONTENT_SIZE)
		 *     {
		 *       clutter_content_get_preferred_size (content, &natural_width, &natural_height);
		 * 
		 *       width = CLAMP (natural_width, 0, available_width);
		 *       height = CLAMP (natural_height, 0, available_height);
		 *     }
		 * 
		 *   box.x1 = x; box.y1 = y;
		 *   box.x2 = box.x1 + available_width;
		 *   box.y2 = box.y1 + available_height;
		 *   clutter_actor_allocate (self, &box, flags);
		 * ]|
		 * 
		 * This function can be used by fluid layout managers to allocate
		 * an actor's preferred size without making it bigger than the area
		 * available for the container.
		 * @param x the actor's X coordinate
		 * @param y the actor's Y coordinate
		 * @param available_width the maximum available width, or -1 to use the
		 *   actor's natural width
		 * @param available_height the maximum available height, or -1 to use the
		 *   actor's natural height
		 * @param flags flags controlling the allocation
		 */
		allocate_available_size(x: number, y: number, available_width: number, available_height: number, flags: AllocationFlags): void;
		/**
		 * Allocates the natural size of #self.
		 * 
		 * This function is a utility call for {@link Actor} implementations
		 * that allocates the actor's preferred natural size. It can be used
		 * by fixed layout managers (like #ClutterGroup or so called
		 * 'composite actors') inside the ClutterActor::allocate
		 * implementation to give each child exactly how much space it
		 * requires, regardless of the size of the parent.
		 * 
		 * This function is not meant to be used by applications. It is also
		 * not meant to be used outside the implementation of the
		 * #ClutterActorClass.allocate virtual function.
		 * @param flags flags controlling the allocation
		 */
		allocate_preferred_size(flags: AllocationFlags): void;
		/**
		 * @deprecated
		 * Use the implicit transition for animatable properties
		 *   in {@link Actor} instead. See {@link Clutter.Actor.save_easing_state},
		 *   clutter_actor_set_easing_mode(), clutter_actor_set_easing_duration(),
		 *   clutter_actor_set_easing_delay(), and clutter_actor_restore_easing_state().
		 * 
		 * Animates the given list of properties of #actor between the current
		 * value for each property and a new final value. The animation has a
		 * definite duration and a speed given by the #mode.
		 * 
		 * For example, this:
		 * 
		 * |[<!-- language="C" -->
		 *   clutter_actor_animate (rectangle, CLUTTER_LINEAR, 250,
		 *                          "width", 100.0,
		 *                          "height", 100.0,
		 *                          NULL);
		 * ]|
		 * 
		 * will make width and height properties of the {@link Actor} "rectangle"
		 * grow linearly between the current value and 100 pixels, in 250 milliseconds.
		 * 
		 * The animation #mode is a logical id, either from the #ClutterAnimationMode
		 * enumeration of from {@link Clutter.Alpha.register_func}.
		 * 
		 * All the properties specified will be animated between the current value
		 * and the final value. If a property should be set at the beginning of
		 * the animation but not updated during the animation, it should be prefixed
		 * by the "fixed::" string, for instance:
		 * 
		 * |[<!-- language="C" -->
		 *   clutter_actor_animate (actor, CLUTTER_EASE_IN_SINE, 100,
		 *                          "rotation-angle-z", 360.0,
		 *                          "fixed::rotation-center-z", &center,
		 *                          NULL);
		 * ]|
		 * 
		 * Will animate the "rotation-angle-z" property between the current value
		 * and 360 degrees, and set the "rotation-center-z" property to the fixed
		 * value of the #graphene_point3d_t "center".
		 * 
		 * This function will implicitly create a #ClutterAnimation object which
		 * will be assigned to the #actor and will be returned to the developer
		 * to control the animation or to know when the animation has been
		 * completed.
		 * 
		 * If a name argument starts with "signal::", "signal-after::",
		 * "signal-swapped::" or "signal-swapped-after::" the two following arguments
		 * are used as callback function and data for a signal handler installed on
		 * the #ClutterAnimation object for the specified signal name, for instance:
		 * 
		 * |[<!-- language="C" -->
		 *   static void
		 *   on_animation_completed (ClutterAnimation *animation,
		 *                           ClutterActor     *actor)
		 *   {
		 *     clutter_actor_hide (actor);
		 *   }
		 * 
		 *   clutter_actor_animate (actor, CLUTTER_EASE_IN_CUBIC, 100,
		 *                          "opacity", 0,
		 *                          "signal::completed", on_animation_completed, actor,
		 *                          NULL);
		 * ]|
		 * 
		 * or, to automatically destroy an actor at the end of the animation:
		 * 
		 * |[<!-- language="C" -->
		 *   clutter_actor_animate (actor, CLUTTER_EASE_IN_CUBIC, 100,
		 *                          "opacity", 0,
		 *                          "signal-swapped-after::completed",
		 *                            clutter_actor_destroy,
		 *                            actor,
		 *                          NULL);
		 * ]|
		 * 
		 * The "signal::" modifier is the equivalent of using g_signal_connect();
		 * the "signal-after::" modifier is the equivalent of using
		 * g_signal_connect_after() or g_signal_connect_data() with the
		 * %G_CONNECT_AFTER; the "signal-swapped::" modifier is the equivalent
		 * of using g_signal_connect_swapped() or g_signal_connect_data() with the
		 * %G_CONNECT_SWAPPED flah; finally, the "signal-swapped-after::" modifier
		 * is the equivalent of using g_signal_connect_data() with both the
		 * %G_CONNECT_AFTER and %G_CONNECT_SWAPPED flags. The clutter_actor_animate()
		 * function will not keep track of multiple connections to the same signal,
		 * so it is your responsability to avoid them when calling
		 * clutter_actor_animate() multiple times on the same actor.
		 * 
		 * Calling this function on an actor that is already being animated
		 * will cause the current animation to change with the new final values,
		 * the new easing mode and the new duration - that is, this code:
		 * 
		 * |[<!-- language="C" -->
		 *   clutter_actor_animate (actor, CLUTTER_LINEAR, 250,
		 *                          "width", 100.0,
		 *                          "height", 100.0,
		 *                          NULL);
		 *   clutter_actor_animate (actor, CLUTTER_EASE_IN_CUBIC, 500,
		 *                          "x", 100.0,
		 *                          "y", 100.0,
		 *                          "width", 200.0,
		 *                          NULL);
		 * ]|
		 * 
		 * is the equivalent of:
		 * 
		 * |[<!-- language="C" -->
		 *   clutter_actor_animate (actor, CLUTTER_EASE_IN_CUBIC, 500,
		 *                          "x", 100.0,
		 *                          "y", 100.0,
		 *                          "width", 200.0,
		 *                          "height", 100.0,
		 *                          NULL);
		 * ]|
		 * 
		 * Unless the animation is looping, the #ClutterAnimation created by
		 * clutter_actor_animate() will become invalid as soon as it is
		 * complete.
		 * 
		 * Since the created #ClutterAnimation instance attached to #actor
		 * is guaranteed to be valid throughout the #ClutterAnimation::completed
		 * signal emission chain, you will not be able to create a new animation
		 * using clutter_actor_animate() on the same #actor from within the
		 * #ClutterAnimation::completed signal handler unless you use
		 * g_signal_connect_after() to connect the callback function, for instance:
		 * 
		 * |[<!-- language="C" -->
		 *   static void
		 *   on_animation_completed (ClutterAnimation *animation,
		 *                           ClutterActor     *actor)
		 *   {
		 *     clutter_actor_animate (actor, CLUTTER_EASE_OUT_CUBIC, 250,
		 *                            "x", 500.0,
		 *                            "y", 500.0,
		 *                            NULL);
		 *   }
		 * 
		 *     ...
		 *     animation = clutter_actor_animate (actor, CLUTTER_EASE_IN_CUBIC, 250,
		 *                                        "x", 100.0,
		 *                                        "y", 100.0,
		 *                                        NULL);
		 *     g_signal_connect (animation, "completed",
		 *                       G_CALLBACK (on_animation_completed),
		 *                       actor);
		 *     ...
		 * ]|
		 * @param mode an animation mode logical id
		 * @param duration duration of the animation, in milliseconds
		 * @param first_property_name the name of a property
		 * @returns a {@link Animation} object. The object is
		 *   owned by the #ClutterActor and should not be unreferenced with
		 *   {@link GObject.Object.unref}
		 */
		animate(mode: number, duration: number, first_property_name: string): Animation;
		/**
		 * @deprecated
		 * Use the implicit transition for animatable properties
		 *   in {@link Actor} instead. See {@link Clutter.Actor.save_easing_state},
		 *   clutter_actor_set_easing_mode(), clutter_actor_set_easing_duration(),
		 *   clutter_actor_set_easing_delay(), and clutter_actor_restore_easing_state().
		 * 
		 * Animates the given list of properties of #actor between the current
		 * value for each property and a new final value. The animation has a
		 * definite duration given by #timeline and a speed given by the #mode.
		 * 
		 * See {@link Clutter.Actor.animate} for further details.
		 * 
		 * This function is useful if you want to use an existing timeline
		 * to animate #actor.
		 * @param mode an animation mode logical id
		 * @param timeline a {@link Timeline}
		 * @param first_property_name the name of a property
		 * @returns a {@link Animation} object. The object is
		 *    owned by the #ClutterActor and should not be unreferenced with
		 *    {@link GObject.Object.unref}
		 */
		animate_with_timeline(mode: number, timeline: Timeline, first_property_name: string): Animation;
		/**
		 * Transforms #point in coordinates relative to the actor into
		 * ancestor-relative coordinates using the relevant transform
		 * stack (i.e. scale, rotation, etc).
		 * 
		 * If #ancestor is %NULL the ancestor will be the {@link Stage}. In
		 * this case, the coordinates returned will be the coordinates on
		 * the stage before the projection is applied. This is different from
		 * the behaviour of {@link Clutter.Actor.apply_transform_to_point}.
		 * @param ancestor A {@link Actor} ancestor, or %NULL to use the
		 *   default #ClutterStage
		 * @param point A point as #graphene_point3d_t
		 * @returns The translated #graphene_point3d_t
		 */
		apply_relative_transform_to_point(ancestor: Actor | null, point: Graphene.Point3D): Graphene.Point3D;
		/**
		 * Transforms #point in coordinates relative to the actor
		 * into screen-relative coordinates with the current actor
		 * transformation (i.e. scale, rotation, etc)
		 * @param point A point as #graphene_point3d_t
		 * @returns The translated #graphene_point3d_t
		 */
		apply_transform_to_point(point: Graphene.Point3D): Graphene.Point3D;
		/**
		 * Binds a #GListModel to a {@link Actor}.
		 * 
		 * If the #ClutterActor was already bound to a #GListModel, the previous
		 * binding is destroyed.
		 * 
		 * The existing children of #ClutterActor are destroyed when setting a
		 * model, and new children are created and added, representing the contents
		 * of the #model. The #ClutterActor is updated whenever the #model changes.
		 * If #model is %NULL, the #ClutterActor is left empty.
		 * 
		 * When a #ClutterActor is bound to a model, adding and removing children
		 * directly is undefined behaviour.
		 * @param model a #GListModel
		 * @param create_child_func a function that creates {@link Actor} instances
		 *   from the contents of the #model
		 */
		bind_model(model: Gio.ListModel | null, create_child_func: ActorCreateChildFunc): void;
		/**
		 * Binds a #GListModel to a {@link Actor}.
		 * 
		 * Unlike {@link Clutter.Actor.bind_model}, this function automatically creates
		 * a child #ClutterActor of type #child_type, and binds properties on the
		 * items inside the #model to the corresponding properties on the child,
		 * for instance:
		 * 
		 * |[<!-- language="C" -->
		 *   clutter_actor_bind_model_with_properties (actor, model,
		 *                                             MY_TYPE_CHILD_VIEW,
		 *                                             "label", "text", G_BINDING_DEFAULT | G_BINDING_SYNC_CREATE,
		 *                                             "icon", "image", G_BINDING_DEFAULT | G_BINDING_SYNC_CREATE,
		 *                                             "selected", "selected", G_BINDING_BIDIRECTIONAL,
		 *                                             "active", "active", G_BINDING_BIDIRECTIONAL,
		 *                                             NULL);
		 * ]|
		 * 
		 * is the equivalent of calling clutter_actor_bind_model() with a
		 * #ClutterActorCreateChildFunc of:
		 * 
		 * |[<!-- language="C" -->
		 *   ClutterActor *res = g_object_new (MY_TYPE_CHILD_VIEW, NULL);
		 * 
		 *   g_object_bind_property (item, "label", res, "text", G_BINDING_DEFAULT | G_BINDING_SYNC_CREATE);
		 *   g_object_bind_property (item, "icon", res, "image", G_BINDING_DEFAULT | G_BINDING_SYNC_CREATE);
		 *   g_object_bind_property (item, "selected", res, "selected", G_BINDING_BIDIRECTIONAL);
		 *   g_object_bind_property (item, "active", res, "active", G_BINDING_BIDIRECTIONAL);
		 * 
		 *   return res;
		 * ]|
		 * 
		 * If the #ClutterActor was already bound to a #GListModel, the previous
		 * binding is destroyed.
		 * 
		 * When a #ClutterActor is bound to a model, adding and removing children
		 * directly is undefined behaviour.
		 * 
		 * See also: clutter_actor_bind_model()
		 * @param model a #GListModel
		 * @param child_type the type of {@link Actor} to use when creating
		 *   children mapping to items inside the #model
		 * @param first_model_property the first property of #model to bind
		 */
		bind_model_with_properties(model: Gio.ListModel, child_type: GObject.Type, first_model_property: string): void;
		/**
		 * Clears the list of actions applied to #self
		 */
		clear_actions(): void;
		/**
		 * Clears the list of constraints applied to #self
		 */
		clear_constraints(): void;
		/**
		 * Clears the list of effects applied to #self
		 */
		clear_effects(): void;
		/**
		 * Determines if #descendant is contained inside #self (either as an
		 * immediate child, or as a deeper descendant). If #self and
		 * #descendant point to the same actor then it will also return %TRUE.
		 * @param descendant A {@link Actor}, possibly contained in #self
		 * @returns whether #descendent is contained within #self
		 */
		contains(descendant: Actor): boolean;
		/**
		 * Run the next stage of the paint sequence. This function should only
		 * be called within the implementation of the ‘run’ virtual of a
		 * {@link Effect}. It will cause the run method of the next effect to
		 * be applied, or it will paint the actual actor if the current effect
		 * is the last effect in the chain.
		 * @param paint_context
		 */
		continue_paint(paint_context: PaintContext): void;
		/**
		 * Run the next stage of the pick sequence. This function should only
		 * be called within the implementation of the ‘pick’ virtual of a
		 * {@link Effect}. It will cause the run method of the next effect to
		 * be applied, or it will pick the actual actor if the current effect
		 * is the last effect in the chain.
		 * @param pick_context
		 */
		continue_pick(pick_context: PickContext): void;
		/**
		 * Creates a #PangoContext for the given actor. The #PangoContext
		 * is already configured using the appropriate font map, resolution
		 * and font options.
		 * 
		 * See also {@link Clutter.Actor.get_pango_context}.
		 * @returns the newly created #PangoContext.
		 *   Use {@link GObject.Object.unref} on the returned value to deallocate its
		 *   resources
		 */
		create_pango_context(): Pango.Context;
		/**
		 * Creates a new #PangoLayout from the same #PangoContext used
		 * by the {@link Actor}. The #PangoLayout is already configured
		 * with the font map, resolution and font options, and the
		 * given #text.
		 * 
		 * If you want to keep around a #PangoLayout created by this
		 * function you will have to connect to the #ClutterBackend::font-changed
		 * and #ClutterBackend::resolution-changed signals, and call
		 * {@link Pango.Layout.context_changed} in response to them.
		 * @param text the text to set on the #PangoLayout, or %NULL
		 * @returns the newly created #PangoLayout.
		 *   Use {@link GObject.Object.unref} when done
		 */
		create_pango_layout(text?: string | null): Pango.Layout;
		/**
		 * Destroys an actor.  When an actor is destroyed, it will break any
		 * references it holds to other objects.  If the actor is inside a
		 * container, the actor will be removed.
		 * 
		 * When you destroy a container, its children will be destroyed as well.
		 * 
		 * Note: you cannot destroy the {@link Stage} returned by
		 * {@link Clutter.Stage.get_default}.
		 */
		destroy(): void;
		/**
		 * Destroys all children of #self.
		 * 
		 * This function releases the reference added by inserting a child
		 * actor in the list of children of #self, and ensures that the
		 * {@link Actor.destroy} signal is emitted on each child of the
		 * actor.
		 * 
		 * By default, #ClutterActor will emit the #ClutterActor::destroy signal
		 * when its reference count drops to 0; the default handler of the
		 * #ClutterActor::destroy signal will destroy all the children of an
		 * actor. This function ensures that all children are destroyed, instead
		 * of just removed from #self, unlike {@link Clutter.Actor.remove_all_children}
		 * which will merely release the reference and remove each child.
		 * 
		 * Unless you acquired an additional reference on each child of #self
		 * prior to calling clutter_actor_remove_all_children() and want to reuse
		 * the actors, you should use clutter_actor_destroy_all_children() in
		 * order to make sure that children are destroyed and signal handlers
		 * are disconnected even in cases where circular references prevent this
		 * from automatically happening through reference counting alone.
		 */
		destroy_all_children(): void;
		/**
		 * This function is used to emit an event on the main stage.
		 * You should rarely need to use this function, except for
		 * synthetising events.
		 * @param event a {@link Event}
		 * @param capture %TRUE if event in in capture phase, %FALSE otherwise.
		 * @returns the return value from the signal emission: %TRUE
		 *   if the actor handled the event, or %FALSE if the event was
		 *   not handled
		 */
		event(event: Event, capture: boolean): boolean;
		/**
		 * Calculates the transformed screen coordinates of the four corners of
		 * the actor; the returned vertices relate to the {@link ActorBox}
		 * coordinates  as follows:
		 * 
		 *  - v[0] contains (x1, y1)
		 *  - v[1] contains (x2, y1)
		 *  - v[2] contains (x1, y2)
		 *  - v[3] contains (x2, y2)
		 * @returns Pointer to a location of an array
		 *   of 4 #graphene_point3d_t where to store the result.
		 */
		get_abs_allocation_vertices(): Graphene.Point3D[];
		/**
		 * Returns the accessible object that describes the actor to an
		 * assistive technology.
		 * 
		 * If no class-specific #AtkObject implementation is available for the
		 * actor instance in question, it will inherit an #AtkObject
		 * implementation from the first ancestor class for which such an
		 * implementation is defined.
		 * 
		 * The documentation of the <ulink
		 * url="http://developer.gnome.org/doc/API/2.0/atk/index.html">ATK</ulink>
		 * library contains more information about accessible objects and
		 * their uses.
		 * @returns the #AtkObject associated with #actor
		 */
		get_accessible(): Atk.Object;
		/**
		 * Retrieves the {@link Action} with the given name in the list
		 * of actions applied to #self
		 * @param name the name of the action to retrieve
		 * @returns a {@link Action} for the given
		 *   name, or %NULL. The returned #ClutterAction is owned by the
		 *   actor and it should not be unreferenced directly
		 */
		get_action(name: string): Action;
		/**
		 * Retrieves the list of actions applied to #self
		 * @returns a copy
		 *   of the list of {@link Action}<!-- -->s. The contents of the list are
		 *   owned by the #ClutterActor. Use {@link GObject.list_free} to free the resources
		 *   allocated by the returned #GList
		 */
		get_actions(): Action[];
		/**
		 * Gets the layout box an actor has been assigned. The allocation can
		 * only be assumed valid inside a paint() method; anywhere else, it
		 * may be out-of-date.
		 * 
		 * An allocation does not incorporate the actor's scale or anchor point;
		 * those transformations do not affect layout, only rendering.
		 * 
		 * Do not call any of the clutter_actor_get_allocation_*() family
		 * of functions inside the implementation of the get_preferred_width()
		 * or get_preferred_height() virtual functions.
		 * @returns the function fills this in with the actor's allocation
		 */
		get_allocation_box(): ActorBox;
		/**
		 * Calculates the transformed coordinates of the four corners of the
		 * actor in the plane of #ancestor. The returned vertices relate to
		 * the {@link ActorBox} coordinates as follows:
		 * 
		 *  - #verts[0] contains (x1, y1)
		 *  - #verts[1] contains (x2, y1)
		 *  - #verts[2] contains (x1, y2)
		 *  - #verts[3] contains (x2, y2)
		 * 
		 * If #ancestor is %NULL the ancestor will be the #ClutterStage. In
		 * this case, the coordinates returned will be the coordinates on
		 * the stage before the projection is applied. This is different from
		 * the behaviour of {@link Clutter.Actor.get_abs_allocation_vertices}.
		 * @param ancestor A {@link Actor} to calculate the vertices
		 *   against, or %NULL to use the #ClutterStage
		 * @returns return
		 *   location for an array of 4 #graphene_point3d_t in which to store the result
		 */
		get_allocation_vertices(ancestor?: Actor | null): Graphene.Point3D[];
		/**
		 * @deprecated
		 * Use {@link Actor.pivot_point} instead.
		 * 
		 * Retrieves the anchor position expressed as a {@link Gravity}. If
		 * the anchor point was specified using pixels or units this will
		 * return %CLUTTER_GRAVITY_NONE.
		 * @returns the {@link Gravity} used by the anchor point
		 */
		get_anchor_point_gravity(): Gravity;
		/**
		 * Retrieves the color set using {@link Clutter.Actor.set_background_color}.
		 * @returns return location for a {@link Color}
		 */
		get_background_color(): Color;
		/**
		 * Retrieves the actor at the given #index_ inside the list of
		 * children of #self.
		 * @param index_ the position in the list of children
		 * @returns a pointer to a {@link Actor}, or %NULL
		 */
		get_child_at_index<T = Actor>(index_: number): T;
		/**
		 * Retrieves the child transformation matrix set using
		 * {@link Clutter.Actor.set_child_transform}; if none is currently set,
		 * the #transform matrix will be initialized to the identity matrix.
		 * @returns a {@link Matrix}
		 */
		get_child_transform(): Matrix;
		/**
		 * Retrieves the list of children of #self.
		 * @returns A newly
		 *   allocated #GList of {@link Actor}<!-- -->s. Use {@link GObject.list_free} when
		 *   done.
		 */
		get_children<T = Actor[]>(): T;
		/**
		 * Gets the clip area for #self, if any is set.
		 * @returns return location for the X offset of
		 *   the clip rectangle, or %NULL
		 * 
		 * return location for the Y offset of
		 *   the clip rectangle, or %NULL
		 * 
		 * return location for the width of
		 *   the clip rectangle, or %NULL
		 * 
		 * return location for the height of
		 *   the clip rectangle, or %NULL
		 */
		get_clip(): [ xoff: number | null, yoff: number | null, width: number | null, height: number | null ];
		/**
		 * Retrieves the value set using {@link Clutter.Actor.set_clip_to_allocation}
		 * @returns %TRUE if the {@link Actor} is clipped to its allocation
		 */
		get_clip_to_allocation(): boolean;
		/**
		 * Retrieves the {@link Constraint} with the given name in the list
		 * of constraints applied to #self
		 * @param name the name of the constraint to retrieve
		 * @returns a {@link Constraint} for the given
		 *   name, or %NULL. The returned #ClutterConstraint is owned by the
		 *   actor and it should not be unreferenced directly
		 */
		get_constraint(name: string): Constraint;
		/**
		 * Retrieves the list of constraints applied to #self
		 * @returns a copy
		 *   of the list of {@link Constraint}<!-- -->s. The contents of the list are
		 *   owned by the #ClutterActor. Use {@link GObject.list_free} to free the resources
		 *   allocated by the returned #GList
		 */
		get_constraints(): Constraint[];
		/**
		 * Retrieves the contents of #self.
		 * @returns a pointer to the {@link Content} instance,
		 *   or %NULL if none was set
		 */
		get_content(): Content;
		/**
		 * Retrieves the bounding box for the {@link Content} of #self.
		 * 
		 * The bounding box is relative to the actor's allocation.
		 * 
		 * If no #ClutterContent is set for #self, or if #self has not been
		 * allocated yet, then the result is undefined.
		 * 
		 * The content box is guaranteed to be, at most, as big as the allocation
		 * of the #ClutterActor.
		 * 
		 * If the #ClutterContent used by the actor has a preferred size, then
		 * it is possible to modify the content box by using the
		 * #ClutterActor:content-gravity property.
		 * @returns the return location for the bounding
		 *   box for the {@link Content}
		 */
		get_content_box(): ActorBox;
		/**
		 * Retrieves the content gravity as set using
		 * {@link Clutter.Actor.set_content_gravity}.
		 * @returns the content gravity
		 */
		get_content_gravity(): ContentGravity;
		/**
		 * Retrieves the repeat policy for a {@link Actor} set by
		 * {@link Clutter.Actor.set_content_repeat}.
		 * @returns the content repeat policy
		 */
		get_content_repeat(): ContentRepeat;
		/**
		 * Retrieves the values set using {@link Clutter.Actor.set_content_scaling_filters}.
		 * @returns return location for the minification
		 *   filter, or %NULL
		 * 
		 * return location for the magnification
		 *   filter, or %NULL
		 */
		get_content_scaling_filters(): [ min_filter: ScalingFilter | null, mag_filter: ScalingFilter | null ];
		/**
		 * Retrieves the default paint volume for #self.
		 * 
		 * This function provides the same {@link PaintVolume} that would be
		 * computed by the default implementation inside #ClutterActor of the
		 * {@link #ClutterActorClass.get.paint_volume} virtual function.
		 * 
		 * This function should only be used by #ClutterActor subclasses that
		 * cannot chain up to the parent implementation when computing their
		 * paint volume.
		 * @returns a pointer to the default
		 *   {@link PaintVolume}, relative to the #ClutterActor, or %NULL if
		 *   the actor could not compute a valid paint volume. The returned value
		 *   is not guaranteed to be stable across multiple frames, so if you
		 *   want to retain it, you will need to copy it using
		 *   {@link Clutter.PaintVolume.copy}.
		 */
		get_default_paint_volume(): PaintVolume;
		/**
		 * @deprecated
		 * Use {@link Clutter.Actor.get_z_position} instead.
		 * 
		 * Retrieves the depth of #self.
		 * @returns the depth of the actor
		 */
		get_depth(): number;
		/**
		 * Retrieves the delay that should be applied when tweening animatable
		 * properties.
		 * @returns a delay, in milliseconds
		 */
		get_easing_delay(): number;
		/**
		 * Retrieves the duration of the tweening for animatable
		 * properties of #self for the current easing state.
		 * @returns the duration of the tweening, in milliseconds
		 */
		get_easing_duration(): number;
		/**
		 * Retrieves the easing mode for the tweening of animatable properties
		 * of #self for the current easing state.
		 * @returns an easing mode
		 */
		get_easing_mode(): AnimationMode;
		/**
		 * Retrieves the {@link Effect} with the given name in the list
		 * of effects applied to #self
		 * @param name the name of the effect to retrieve
		 * @returns a {@link Effect} for the given
		 *   name, or %NULL. The returned #ClutterEffect is owned by the
		 *   actor and it should not be unreferenced directly
		 */
		get_effect(name: string): Effect;
		/**
		 * Retrieves the {@link Effect}<!-- -->s applied on #self, if any
		 * @returns a list
		 *   of {@link Effect}<!-- -->s, or %NULL. The elements of the returned
		 *   list are owned by Clutter and they should not be freed. You should
		 *   free the returned list using {@link GObject.list_free} when done
		 */
		get_effects(): Effect[];
		/**
		 * Retrieves the first child of #self.
		 * 
		 * The returned pointer is only valid until the scene graph changes; it
		 * is not safe to modify the list of children of #self while iterating
		 * it.
		 * @returns a pointer to a {@link Actor}, or %NULL
		 */
		get_first_child(): Actor;
		/**
		 * Checks whether an actor has a fixed position set (and will thus be
		 * unaffected by any layout manager).
		 * @returns %TRUE if the fixed position is set on the actor
		 */
		get_fixed_position_set(): boolean;
		/**
		 * Retrieves the flags set on #self
		 * @returns a bitwise or of {@link ActorFlags} or 0
		 */
		get_flags(): ActorFlags;
		/**
		 * Retrieves the height of a {@link Actor}.
		 * 
		 * If the actor has a valid allocation, this function will return the
		 * height of the allocated area given to the actor.
		 * 
		 * If the actor does not have a valid allocation, this function will
		 * return the actor's natural height, that is the preferred height of
		 * the actor.
		 * 
		 * If you care whether you get the preferred height or the height that
		 * has been assigned to the actor, you should probably call a different
		 * function like {@link Clutter.Actor.get_allocation_box} to retrieve the
		 * allocated size or clutter_actor_get_preferred_height() to retrieve the
		 * preferred height.
		 * 
		 * If an actor has a fixed height, for instance a height that has been
		 * assigned using clutter_actor_set_height(), the height returned will
		 * be the same value.
		 * @returns the height of the actor, in pixels
		 */
		get_height(): number;
		/**
		 * Retrieves the last child of #self.
		 * 
		 * The returned pointer is only valid until the scene graph changes; it
		 * is not safe to modify the list of children of #self while iterating
		 * it.
		 * @returns a pointer to a {@link Actor}, or %NULL
		 */
		get_last_child(): Actor;
		/**
		 * Retrieves the {@link LayoutManager} used by #self.
		 * @returns a pointer to the {@link LayoutManager},
		 *   or %NULL
		 */
		get_layout_manager(): LayoutManager;
		/**
		 * Retrieves all the components of the margin of a {@link Actor}.
		 * @returns return location for a {@link Margin}
		 */
		get_margin(): Margin;
		/**
		 * Retrieves the bottom margin of a {@link Actor}.
		 * @returns the bottom margin
		 */
		get_margin_bottom(): number;
		/**
		 * Retrieves the left margin of a {@link Actor}.
		 * @returns the left margin
		 */
		get_margin_left(): number;
		/**
		 * Retrieves the right margin of a {@link Actor}.
		 * @returns the right margin
		 */
		get_margin_right(): number;
		/**
		 * Retrieves the top margin of a {@link Actor}.
		 * @returns the top margin
		 */
		get_margin_top(): number;
		/**
		 * Retrieves the number of children of #self.
		 * @returns the number of children of an actor
		 */
		get_n_children(): number;
		/**
		 * Retrieves the name of #self.
		 * @returns the name of the actor, or %NULL. The returned string is
		 *   owned by the actor and should not be modified or freed.
		 */
		get_name(): string;
		/**
		 * Retrieves the sibling of #self that comes after it in the list
		 * of children of #self's parent.
		 * 
		 * The returned pointer is only valid until the scene graph changes; it
		 * is not safe to modify the list of children of #self while iterating
		 * it.
		 * @returns a pointer to a {@link Actor}, or %NULL
		 */
		get_next_sibling(): Actor;
		/**
		 * Retrieves whether to redirect the actor to an offscreen buffer, as
		 * set by {@link Clutter.Actor.set_offscreen_redirect}.
		 * @returns the value of the offscreen-redirect property of the actor
		 */
		get_offscreen_redirect(): OffscreenRedirect;
		/**
		 * Retrieves the opacity value of an actor, as set by
		 * {@link Clutter.Actor.set_opacity}.
		 * 
		 * For retrieving the absolute opacity of the actor inside a paint
		 * virtual function, see clutter_actor_get_paint_opacity().
		 * @returns the opacity of the actor
		 */
		get_opacity(): number;
		/**
		 * See {@link Clutter.Actor.set_opacity_override}
		 * @returns the override value for the actor's opacity, or -1 if no override
		 *   is set.
		 */
		get_opacity_override(): number;
		/**
		 * Retrieves the paint volume of the passed {@link Actor}, and
		 * transforms it into a 2D bounding box in stage coordinates.
		 * 
		 * This function is useful to determine the on screen area occupied by
		 * the actor. The box is only an approximation and may often be
		 * considerably larger due to the optimizations used to calculate the
		 * box. The box is never smaller though, so it can reliably be used
		 * for culling.
		 * 
		 * There are times when a 2D paint box can't be determined, e.g.
		 * because the actor isn't yet parented under a stage or because
		 * the actor is unable to determine a paint volume.
		 * @returns %TRUE if a 2D paint box could be determined, else
		 * %FALSE.
		 * 
		 * return location for a {@link ActorBox}
		 */
		get_paint_box(): [ boolean, ActorBox ];
		/**
		 * Retrieves the absolute opacity of the actor, as it appears on the stage.
		 * 
		 * This function traverses the hierarchy chain and composites the opacity of
		 * the actor with that of its parents.
		 * 
		 * This function is intended for subclasses to use in the paint virtual
		 * function, to paint themselves with the correct opacity.
		 * @returns The actor opacity value.
		 */
		get_paint_opacity(): number;
		/**
		 * Retrieves the 'paint' visibility of an actor recursively checking for non
		 * visible parents.
		 * 
		 * This is by definition the same as %CLUTTER_ACTOR_IS_MAPPED.
		 * @returns %TRUE if the actor is visibile and will be painted.
		 */
		get_paint_visibility(): boolean;
		/**
		 * Retrieves the paint volume of the passed {@link Actor}, or %NULL
		 * when a paint volume can't be determined.
		 * 
		 * The paint volume is defined as the 3D space occupied by an actor
		 * when being painted.
		 * 
		 * This function will call the {@link #ClutterActorClass.get.paint_volume}
		 * virtual function of the #ClutterActor class. Sub-classes of #ClutterActor
		 * should not usually care about overriding the default implementation,
		 * unless they are, for instance: painting outside their allocation, or
		 * actors with a depth factor (not in terms of #ClutterActor:depth but real
		 * 3D depth).
		 * 
		 * Note: 2D actors overriding #ClutterActorClass.get_paint_volume()
		 * should ensure that their volume has a depth of 0. (This will be true
		 * as long as you don't call clutter_paint_volume_set_depth().)
		 * @returns a pointer to a {@link PaintVolume},
		 *   or %NULL if no volume could be determined. The returned pointer
		 *   is not guaranteed to be valid across multiple frames; if you want
		 *   to keep it, you will need to copy it using {@link Clutter.PaintVolume.copy}.
		 */
		get_paint_volume(): PaintVolume;
		/**
		 * Retrieves the #PangoContext for #self. The actor's #PangoContext
		 * is already configured using the appropriate font map, resolution
		 * and font options.
		 * 
		 * Unlike {@link Clutter.Actor.create_pango_context}, this context is owend
		 * by the {@link Actor} and it will be updated each time the options
		 * stored by the #ClutterBackend change.
		 * 
		 * You can use the returned #PangoContext to create a #PangoLayout
		 * and render text using cogl_pango_show_layout() to reuse the
		 * glyphs cache also used by Clutter.
		 * @returns the #PangoContext for a {@link Actor}.
		 *   The returned #PangoContext is owned by the actor and should not be
		 *   unreferenced by the application code
		 */
		get_pango_context(): Pango.Context;
		/**
		 * Retrieves the parent of #self.
		 * @returns The {@link Actor} parent, or %NULL
		 *  if no parent is set
		 */
		get_parent(): Actor;
		/**
		 * Retrieves the coordinates of the {@link Actor.pivot_point}.
		 * @returns return location for the normalized X
		 *   coordinate of the pivot point, or %NULL
		 * 
		 * return location for the normalized Y
		 *   coordinate of the pivot point, or %NULL
		 */
		get_pivot_point(): [ pivot_x: number | null, pivot_y: number | null ];
		/**
		 * Retrieves the Z component of the {@link Actor.pivot_point}.
		 * @returns 
		 */
		get_pivot_point_z(): number;
		/**
		 * This function tries to "do what you mean" and tell you where the
		 * actor is, prior to any transformations. Retrieves the fixed
		 * position of an actor in pixels, if one has been set; otherwise, if
		 * the allocation is valid, returns the actor's allocated position;
		 * otherwise, returns 0,0.
		 * 
		 * The returned position is in pixels.
		 * @returns return location for the X coordinate, or %NULL
		 * 
		 * return location for the Y coordinate, or %NULL
		 */
		get_position(): [ x: number | null, y: number | null ];
		/**
		 * Computes the requested minimum and natural heights for an actor,
		 * or if they are already computed, returns the cached values.
		 * 
		 * An actor may not get its request - depending on the layout
		 * manager that's in effect.
		 * 
		 * A request should not incorporate the actor's scale or anchor point;
		 * those transformations do not affect layout, only rendering.
		 * @param for_width available width to assume in computing desired height,
		 *   or a negative value to indicate that no width is defined
		 * @returns return location for minimum height,
		 *   or %NULL
		 * 
		 * return location for natural
		 *   height, or %NULL
		 */
		get_preferred_height(for_width: number): [ min_height_p: number | null, natural_height_p: number | null ];
		/**
		 * Computes the preferred minimum and natural size of an actor, taking into
		 * account the actor's geometry management (either height-for-width
		 * or width-for-height).
		 * 
		 * The width and height used to compute the preferred height and preferred
		 * width are the actor's natural ones.
		 * 
		 * If you need to control the height for the preferred width, or the width for
		 * the preferred height, you should use {@link Clutter.Actor.get_preferred_width}
		 * and clutter_actor_get_preferred_height(), and check the actor's preferred
		 * geometry management using the {@link Actor.request_mode} property.
		 * @returns return location for the minimum
		 *   width, or %NULL
		 * 
		 * return location for the minimum
		 *   height, or %NULL
		 * 
		 * return location for the natural
		 *   width, or %NULL
		 * 
		 * return location for the natural
		 *   height, or %NULL
		 */
		get_preferred_size(): [ min_width_p: number | null, min_height_p: number | null, natural_width_p: number | null, natural_height_p: number | null ];
		/**
		 * Computes the requested minimum and natural widths for an actor,
		 * optionally depending on the specified height, or if they are
		 * already computed, returns the cached values.
		 * 
		 * An actor may not get its request - depending on the layout
		 * manager that's in effect.
		 * 
		 * A request should not incorporate the actor's scale or anchor point;
		 * those transformations do not affect layout, only rendering.
		 * @param for_height available height when computing the preferred width,
		 *   or a negative value to indicate that no height is defined
		 * @returns return location for minimum width,
		 *   or %NULL
		 * 
		 * return location for the natural
		 *   width, or %NULL
		 */
		get_preferred_width(for_height: number): [ min_width_p: number | null, natural_width_p: number | null ];
		/**
		 * Retrieves the sibling of #self that comes before it in the list
		 * of children of #self's parent.
		 * 
		 * The returned pointer is only valid until the scene graph changes; it
		 * is not safe to modify the list of children of #self while iterating
		 * it.
		 * @returns a pointer to a {@link Actor}, or %NULL
		 */
		get_previous_sibling(): Actor;
		/**
		 * Checks whether #actor is marked as reactive.
		 * @returns %TRUE if the actor is reactive
		 */
		get_reactive(): boolean;
		/**
		 * Retrieves the geometry request mode of #self
		 * @returns the request mode for the actor
		 */
		get_request_mode(): RequestMode;
		/**
		 * Retrieves the resource scale for this actor, if available.
		 * 
		 * The resource scale refers to the scale the actor should use for its resources.
		 * For example if an actor draws a a picture of size 100 x 100 in the stage
		 * coordinate space, it should use a texture of twice the size (i.e. 200 x 200)
		 * if the resource scale is 2.
		 * 
		 * The resource scale is determined by calculating the highest {@link StageView}
		 * scale the actor will get painted on.
		 * @returns TRUE if resource scale is set for the actor, otherwise FALSE
		 * 
		 * return location for the resource scale
		 */
		get_resource_scale(): [ boolean, number ];
		/**
		 * @deprecated
		 * Use {@link Clutter.Actor.get_rotation_angle} and
		 *   clutter_actor_get_pivot_point() instead.
		 * 
		 * Retrieves the angle and center of rotation on the given axis,
		 * set using {@link Clutter.Actor.set_rotation}.
		 * @param axis the axis of rotation
		 * @returns the angle of rotation
		 * 
		 * return value for the X coordinate of the center of rotation
		 * 
		 * return value for the Y coordinate of the center of rotation
		 * 
		 * return value for the Z coordinate of the center of rotation
		 */
		get_rotation(axis: RotateAxis): [ number, number, number, number ];
		/**
		 * Retrieves the angle of rotation set by {@link Clutter.Actor.set_rotation_angle}.
		 * @param axis the axis of the rotation
		 * @returns the angle of rotation, in degrees
		 */
		get_rotation_angle(axis: RotateAxis): number;
		/**
		 * Retrieves an actors scale factors.
		 * @returns Location to store horizonal
		 *   scale factor, or %NULL.
		 * 
		 * Location to store vertical
		 *   scale factor, or %NULL.
		 */
		get_scale(): [ scale_x: number | null, scale_y: number | null ];
		/**
		 * @deprecated
		 * Use {@link Clutter.Actor.get_pivot_point} instead.
		 * 
		 * Retrieves the scale center coordinate in pixels relative to the top
		 * left corner of the actor. If the scale center was specified using a
		 * {@link Gravity} this will calculate the pixel offset using the
		 * current size of the actor.
		 * @returns Location to store the X position
		 *   of the scale center, or %NULL.
		 * 
		 * Location to store the Y position
		 *   of the scale center, or %NULL.
		 */
		get_scale_center(): [ center_x: number | null, center_y: number | null ];
		/**
		 * @deprecated
		 * Use {@link Clutter.Actor.get_pivot_point} instead.
		 * 
		 * Retrieves the scale center as a compass direction. If the scale
		 * center was specified in pixels or units this will return
		 * %CLUTTER_GRAVITY_NONE.
		 * @returns the scale gravity
		 */
		get_scale_gravity(): Gravity;
		/**
		 * Retrieves the scaling factor along the Z axis, as set using
		 * {@link Clutter.Actor.set_scale_z}.
		 * @returns the scaling factor along the Z axis
		 */
		get_scale_z(): number;
		/**
		 * This function tries to "do what you mean" and return
		 * the size an actor will have. If the actor has a valid
		 * allocation, the allocation will be returned; otherwise,
		 * the actors natural size request will be returned.
		 * 
		 * If you care whether you get the request vs. the allocation, you
		 * should probably call a different function like
		 * {@link Clutter.Actor.get_allocation_box} or
		 * clutter_actor_get_preferred_width().
		 * @returns return location for the width, or %NULL.
		 * 
		 * return location for the height, or %NULL.
		 */
		get_size(): [ width: number | null, height: number | null ];
		/**
		 * Retrieves the {@link Stage} where #actor is contained.
		 * @returns the stage
		 *   containing the actor, or %NULL
		 */
		get_stage(): Stage;
		/**
		 * Retrieves the value set using {@link Clutter.Actor.set_text_direction}
		 * 
		 * If no text direction has been previously set, the default text
		 * direction, as returned by clutter_get_default_text_direction(), will
		 * be returned instead
		 * @returns the {@link TextDirection} for the actor
		 */
		get_text_direction(): TextDirection;
		/**
		 * Retrieves the current transformation matrix of a {@link Actor}.
		 * @returns a {@link Matrix}
		 */
		get_transform(): Matrix;
		/**
		 * Retrieves the 3D paint volume of an actor like
		 * {@link Clutter.Actor.get_paint_volume} does (Please refer to the
		 * documentation of clutter_actor_get_paint_volume() for more
		 * details.) and it additionally transforms the paint volume into the
		 * coordinate space of #relative_to_ancestor. (Or the stage if %NULL
		 * is passed for #relative_to_ancestor)
		 * 
		 * This can be used by containers that base their paint volume on
		 * the volume of their children. Such containers can query the
		 * transformed paint volume of all of its children and union them
		 * together using clutter_paint_volume_union().
		 * @param relative_to_ancestor A {@link Actor} that is an ancestor of #self
		 *    (or %NULL for the stage)
		 * @returns a pointer to a {@link PaintVolume},
		 *   or %NULL if no volume could be determined. The returned pointer is
		 *   not guaranteed to be valid across multiple frames; if you wish to
		 *   keep it, you will have to copy it using {@link Clutter.PaintVolume.copy}.
		 */
		get_transformed_paint_volume(relative_to_ancestor: Actor): PaintVolume;
		/**
		 * Gets the absolute position of an actor, in pixels relative to the stage.
		 * @returns return location for the X coordinate, or %NULL
		 * 
		 * return location for the Y coordinate, or %NULL
		 */
		get_transformed_position(): [ x: number | null, y: number | null ];
		/**
		 * Gets the absolute size of an actor in pixels, taking into account the
		 * scaling factors.
		 * 
		 * If the actor has a valid allocation, the allocated size will be used.
		 * If the actor has not a valid allocation then the preferred size will
		 * be transformed and returned.
		 * 
		 * If you want the transformed allocation, see
		 * {@link Clutter.Actor.get_abs_allocation_vertices} instead.
		 * 
		 * When the actor (or one of its ancestors) is rotated around the
		 * X or Y axis, it no longer appears as on the stage as a rectangle, but
		 * as a generic quadrangle; in that case this function returns the size
		 * of the smallest rectangle that encapsulates the entire quad. Please
		 * note that in this case no assumptions can be made about the relative
		 * position of this envelope to the absolute position of the actor, as
		 * returned by clutter_actor_get_transformed_position(); if you need this
		 * information, you need to use clutter_actor_get_abs_allocation_vertices()
		 * to get the coords of the actual quadrangle.
		 * @returns return location for the width, or %NULL
		 * 
		 * return location for the height, or %NULL
		 */
		get_transformed_size(): [ width: number | null, height: number | null ];
		/**
		 * Retrieves the {@link Transition} of a #ClutterActor by using the
		 * transition #name.
		 * 
		 * Transitions created for animatable properties use the name of the
		 * property itself, for instance the code below:
		 * 
		 * |[<!-- language="C" -->
		 *   clutter_actor_set_easing_duration (actor, 1000);
		 *   clutter_actor_set_rotation (actor, CLUTTER_Y_AXIS, 360.0, x, y, z);
		 * 
		 *   transition = clutter_actor_get_transition (actor, "rotation-angle-y");
		 *   g_signal_connect (transition, "stopped",
		 *                     G_CALLBACK (on_transition_stopped),
		 *                     actor);
		 * ]|
		 * 
		 * will call the `on_transition_stopped` callback when the transition
		 * is finished.
		 * 
		 * If you just want to get notifications of the completion of a transition,
		 * you should use the #ClutterActor::transition-stopped signal, using the
		 * transition name as the signal detail.
		 * @param name the name of the transition
		 * @returns a {@link Transition}, or %NULL is none
		 *   was found to match the passed name; the returned instance is owned
		 *   by Clutter and it should not be freed
		 */
		get_transition(name: string): Transition;
		/**
		 * Retrieves the translation set using {@link Clutter.Actor.set_translation}.
		 * @returns return location for the X component
		 *   of the translation, or %NULL
		 * 
		 * return location for the Y component
		 *   of the translation, or %NULL
		 * 
		 * return location for the Z component
		 *   of the translation, or %NULL
		 */
		get_translation(): [ translate_x: number | null, translate_y: number | null, translate_z: number | null ];
		/**
		 * Retrieves the width of a {@link Actor}.
		 * 
		 * If the actor has a valid allocation, this function will return the
		 * width of the allocated area given to the actor.
		 * 
		 * If the actor does not have a valid allocation, this function will
		 * return the actor's natural width, that is the preferred width of
		 * the actor.
		 * 
		 * If you care whether you get the preferred width or the width that
		 * has been assigned to the actor, you should probably call a different
		 * function like {@link Clutter.Actor.get_allocation_box} to retrieve the
		 * allocated size or clutter_actor_get_preferred_width() to retrieve the
		 * preferred width.
		 * 
		 * If an actor has a fixed width, for instance a width that has been
		 * assigned using clutter_actor_set_width(), the width returned will
		 * be the same value.
		 * @returns the width of the actor, in pixels
		 */
		get_width(): number;
		/**
		 * Retrieves the X coordinate of a {@link Actor}.
		 * 
		 * This function tries to "do what you mean", by returning the
		 * correct value depending on the actor's state.
		 * 
		 * If the actor has a valid allocation, this function will return
		 * the X coordinate of the origin of the allocation box.
		 * 
		 * If the actor has any fixed coordinate set using {@link Clutter.Actor.set_x},
		 * clutter_actor_set_position(), this function will return that coordinate.
		 * 
		 * If both the allocation and a fixed position are missing, this function
		 * will return 0.
		 * @returns the X coordinate, in pixels, ignoring any
		 *   transformation (i.e. scaling, rotation)
		 */
		get_x(): number;
		/**
		 * Retrieves the horizontal alignment policy set using
		 * {@link Clutter.Actor.set_x_align}.
		 * @returns the horizontal alignment policy.
		 */
		get_x_align(): ActorAlign;
		/**
		 * Retrieves the value set with {@link Clutter.Actor.set_x_expand}.
		 * 
		 * See also: clutter_actor_needs_expand()
		 * @returns %TRUE if the actor has been set to expand
		 */
		get_x_expand(): boolean;
		/**
		 * Retrieves the Y coordinate of a {@link Actor}.
		 * 
		 * This function tries to "do what you mean", by returning the
		 * correct value depending on the actor's state.
		 * 
		 * If the actor has a valid allocation, this function will return
		 * the Y coordinate of the origin of the allocation box.
		 * 
		 * If the actor has any fixed coordinate set using {@link Clutter.Actor.set_y},
		 * clutter_actor_set_position(), this function will return that coordinate.
		 * 
		 * If both the allocation and a fixed position are missing, this function
		 * will return 0.
		 * @returns the Y coordinate, in pixels, ignoring any
		 *   transformation (i.e. scaling, rotation)
		 */
		get_y(): number;
		/**
		 * Retrieves the vertical alignment policy set using
		 * {@link Clutter.Actor.set_y_align}.
		 * @returns the vertical alignment policy.
		 */
		get_y_align(): ActorAlign;
		/**
		 * Retrieves the value set with {@link Clutter.Actor.set_y_expand}.
		 * 
		 * See also: clutter_actor_needs_expand()
		 * @returns %TRUE if the actor has been set to expand
		 */
		get_y_expand(): boolean;
		/**
		 * Retrieves the actor's position on the Z axis.
		 * @returns the position on the Z axis.
		 */
		get_z_position(): number;
		/**
		 * @deprecated
		 * Use the {@link Actor.pivot_point} instead of
		 *   a #ClutterGravity
		 * 
		 * Retrieves the center for the rotation around the Z axis as a
		 * compass direction. If the center was specified in pixels or units
		 * this will return %CLUTTER_GRAVITY_NONE.
		 * @returns the Z rotation center
		 */
		get_z_rotation_gravity(): Gravity;
		/**
		 * Sets the key focus of the {@link Stage} including #self
		 * to this #ClutterActor.
		 */
		grab_key_focus(): void;
		has_accessible(): boolean;
		/**
		 * Returns whether the actor has any actions applied.
		 * @returns %TRUE if the actor has any actions,
		 *   %FALSE otherwise
		 */
		has_actions(): boolean;
		/**
		 * Checks if the actor has an up-to-date allocation assigned to
		 * it. This means that the actor should have an allocation: it's
		 * visible and has a parent. It also means that there is no
		 * outstanding relayout request in progress for the actor or its
		 * children (There might be other outstanding layout requests in
		 * progress that will cause the actor to get a new allocation
		 * when the stage is laid out, however).
		 * 
		 * If this function returns %FALSE, then the actor will normally
		 * be allocated before it is next drawn on the screen.
		 * @returns %TRUE if the actor has an up-to-date allocation
		 */
		has_allocation(): boolean;
		/**
		 * Determines whether the actor has a clip area set or not.
		 * @returns %TRUE if the actor has a clip area set.
		 */
		has_clip(): boolean;
		/**
		 * Returns whether the actor has any constraints applied.
		 * @returns %TRUE if the actor has any constraints,
		 *   %FALSE otherwise
		 */
		has_constraints(): boolean;
		has_damage(): boolean;
		/**
		 * Returns whether the actor has any effects applied.
		 * @returns %TRUE if the actor has any effects,
		 *   %FALSE otherwise
		 */
		has_effects(): boolean;
		/**
		 * Checks whether #self is the {@link Actor} that has key focus
		 * @returns %TRUE if the actor has key focus, and %FALSE otherwise
		 */
		has_key_focus(): boolean;
		/**
		 * Returns whether a {@link Actor} has any mapped clones.
		 * @returns %TRUE if the actor has mapped clones, and %FALSE otherwise
		 */
		has_mapped_clones(): boolean;
		/**
		 * Asks the actor's implementation whether it may contain overlapping
		 * primitives.
		 * 
		 * For example; Clutter may use this to determine whether the painting
		 * should be redirected to an offscreen buffer to correctly implement
		 * the opacity property.
		 * 
		 * Custom actors can override the default response by implementing the
		 * {@link {@link ActorClass}.has.overlaps} virtual function. See
		 * clutter_actor_set_offscreen_redirect() for more information.
		 * @returns %TRUE if the actor may have overlapping primitives, and
		 *   %FALSE otherwise
		 */
		has_overlaps(): boolean;
		/**
		 * Checks whether an actor contains the pointer of a
		 * {@link InputDevice}
		 * @returns %TRUE if the actor contains the pointer, and
		 *   %FALSE otherwise
		 */
		has_pointer(): boolean;
		/**
		 * Flags an actor to be hidden. A hidden actor will not be
		 * rendered on the stage.
		 * 
		 * Actors are visible by default.
		 * 
		 * If this function is called on an actor without a parent, the
		 * {@link Actor.show_on_set_parent} property will be set to %FALSE
		 * as a side-effect.
		 */
		hide(): void;
		/**
		 * Increases the culling inhibitor counter. Inhibiting culling
		 * forces the actor to be painted even when outside the visible
		 * bounds of the stage view.
		 * 
		 * This is usually necessary when an actor is being painted on
		 * another paint context.
		 * 
		 * Pair with {@link Clutter.Actor.uninhibit_culling} when the actor doesn't
		 * need to be painted anymore.
		 */
		inhibit_culling(): void;
		/**
		 * Inserts #child into the list of children of #self, above another
		 * child of #self or, if #sibling is %NULL, above all the children
		 * of #self.
		 * 
		 * This function will acquire a reference on #child that will only
		 * be released when calling {@link Clutter.Actor.remove_child}.
		 * 
		 * This function will not take into consideration the {@link Actor.depth}
		 * of #child.
		 * 
		 * This function will emit the #ClutterContainer::actor-added signal
		 * on #self.
		 * @param child a {@link Actor}
		 * @param sibling a child of #self, or %NULL
		 */
		insert_child_above(child: Actor, sibling?: Actor | null): void;
		/**
		 * Inserts #child into the list of children of #self, using the
		 * given #index_. If #index_ is greater than the number of children
		 * in #self, or is less than 0, then the new child is added at the end.
		 * 
		 * This function will acquire a reference on #child that will only
		 * be released when calling {@link Clutter.Actor.remove_child}.
		 * 
		 * This function will not take into consideration the {@link Actor.depth}
		 * of #child.
		 * 
		 * This function will emit the #ClutterContainer::actor-added signal
		 * on #self.
		 * @param child a {@link Actor}
		 * @param index_ the index
		 */
		insert_child_at_index(child: Actor, index_: number): void;
		/**
		 * Inserts #child into the list of children of #self, below another
		 * child of #self or, if #sibling is %NULL, below all the children
		 * of #self.
		 * 
		 * This function will acquire a reference on #child that will only
		 * be released when calling {@link Clutter.Actor.remove_child}.
		 * 
		 * This function will not take into consideration the {@link Actor.depth}
		 * of #child.
		 * 
		 * This function will emit the #ClutterContainer::actor-added signal
		 * on #self.
		 * @param child a {@link Actor}
		 * @param sibling a child of #self, or %NULL
		 */
		insert_child_below(child: Actor, sibling?: Actor | null): void;
		/**
		 * Checks whether #self is being currently painted by a {@link Clone}
		 * 
		 * This function is useful only inside the ::paint virtual function
		 * implementations or within handlers for the #ClutterActor::paint
		 * signal
		 * 
		 * This function should not be used by applications
		 * @returns %TRUE if the {@link Actor} is currently being painted
		 *   by a #ClutterClone, and %FALSE otherwise
		 */
		is_in_clone_paint(): boolean;
		/**
		 * Checks whether a {@link Actor} has been set as mapped.
		 * 
		 * See also %CLUTTER_ACTOR_IS_MAPPED and #ClutterActor:mapped
		 * @returns %TRUE if the actor is mapped
		 */
		is_mapped(): boolean;
		/**
		 * Checks whether a {@link Actor} is realized.
		 * 
		 * See also %CLUTTER_ACTOR_IS_REALIZED and #ClutterActor:realized.
		 * @returns %TRUE if the actor is realized
		 */
		is_realized(): boolean;
		/**
		 * Checks whether any rotation is applied to the actor.
		 * @returns %TRUE if the actor is rotated.
		 */
		is_rotated(): boolean;
		/**
		 * Checks whether the actor is scaled in either dimension.
		 * @returns %TRUE if the actor is scaled.
		 */
		is_scaled(): boolean;
		/**
		 * Checks whether an actor is marked as visible.
		 * 
		 * See also %CLUTTER_ACTOR_IS_VISIBLE and {@link Actor.visible}.
		 * @returns %TRUE if the actor visible
		 */
		is_visible(): boolean;
		/**
		 * Sets the %CLUTTER_ACTOR_MAPPED flag on the actor and possibly maps
		 * and realizes its children if they are visible. Does nothing if the
		 * actor is not visible.
		 * 
		 * Calling this function is strongly disencouraged: the default
		 * implementation of {@link ActorClass}.map() will map all the children
		 * of an actor when mapping its parent.
		 * 
		 * When overriding map, it is mandatory to chain up to the parent
		 * implementation.
		 */
		map(): void;
		/**
		 * @deprecated
		 * Use {@link Actor.pivot_point} and
		 * {@link Clutter.Actor.set_translation} instead.
		 * 
		 * Sets an anchor point for the actor, and adjusts the actor postion so that
		 * the relative position of the actor toward its parent remains the same.
		 * @param anchor_x X coordinate of the anchor point
		 * @param anchor_y Y coordinate of the anchor point
		 */
		move_anchor_point(anchor_x: number, anchor_y: number): void;
		/**
		 * @deprecated
		 * Use {@link Actor.pivot_point} and
		 * {@link Clutter.Actor.set_translation} instead.
		 * 
		 * Sets an anchor point on the actor based on the given gravity, adjusting the
		 * actor postion so that its relative position within its parent remains
		 * unchanged.
		 * 
		 * Since version 1.0 the anchor point will be stored as a gravity so
		 * that if the actor changes size then the anchor point will move. For
		 * example, if you set the anchor point to %CLUTTER_GRAVITY_SOUTH_EAST
		 * and later double the size of the actor, the anchor point will move
		 * to the bottom right.
		 * @param gravity {@link Gravity}.
		 */
		move_anchor_point_from_gravity(gravity: Gravity): void;
		/**
		 * Moves an actor by the specified distance relative to its current
		 * position in pixels.
		 * 
		 * This function modifies the fixed position of an actor and thus removes
		 * it from any layout management. Another way to move an actor is with an
		 * anchor point, see {@link Clutter.Actor.set_anchor_point}, or with an additional
		 * translation, using clutter_actor_set_translation().
		 * @param dx Distance to move Actor on X axis.
		 * @param dy Distance to move Actor on Y axis.
		 */
		move_by(dx: number, dy: number): void;
		/**
		 * Checks whether an actor, or any of its children, is set to expand
		 * horizontally or vertically.
		 * 
		 * This function should only be called by layout managers that can
		 * assign extra space to their children.
		 * 
		 * If you want to know whether the actor was explicitly set to expand,
		 * use {@link Clutter.Actor.get_x_expand} or clutter_actor_get_y_expand().
		 * @param orientation the direction of expansion
		 * @returns %TRUE if the actor should expand
		 */
		needs_expand(orientation: Orientation): boolean;
		/**
		 * Renders the actor to display.
		 * 
		 * This function should not be called directly by applications.
		 * Call {@link Clutter.Actor.queue_redraw} to queue paints, instead.
		 * 
		 * This function is context-aware, and will either cause a
		 * regular paint or a pick paint.
		 * 
		 * This function will emit the {@link Actor.paint} signal or
		 * the #ClutterActor::pick signal, depending on the context.
		 * 
		 * This function does not paint the actor if the actor is set to 0,
		 * unless it is performing a pick paint.
		 * @param paint_context
		 */
		paint(paint_context: PaintContext): void;
		/**
		 * Asks #actor to perform a pick.
		 * @param pick_context
		 */
		pick(pick_context: PickContext): void;
		/**
		 * Logs (does a virtual paint of) a rectangle for picking. Note that #box is
		 * in the actor's own local coordinates, so is usually {0,0,width,height}
		 * to include the whole actor. That is unless the actor has a shaped input
		 * region in which case you may wish to log the (multiple) smaller rectangles
		 * that make up the input region.
		 * @param pick_context The {@link PickContext}
		 * @param box A rectangle in the actor's own local coordinates.
		 */
		pick_box(pick_context: PickContext, box: ActorBox): void;
		pop_internal(): void;
		push_internal(): void;
		/**
		 * Queues up a redraw of an actor and any children. The redraw occurs
		 * once the main loop becomes idle (after the current batch of events
		 * has been processed, roughly).
		 * 
		 * Applications rarely need to call this, as redraws are handled
		 * automatically by modification functions.
		 * 
		 * This function will not do anything if #self is not visible, or
		 * if the actor is inside an invisible part of the scenegraph.
		 * 
		 * Also be aware that painting is a NOP for actors with an opacity of
		 * 0
		 * 
		 * When you are implementing a custom actor you must queue a redraw
		 * whenever some private state changes that will affect painting or
		 * picking of your actor.
		 */
		queue_redraw(): void;
		/**
		 * Queues a redraw on #self limited to a specific, actor-relative
		 * rectangular area.
		 * 
		 * If #clip is %NULL this function is equivalent to
		 * {@link Clutter.Actor.queue_redraw}.
		 * @param clip a rectangular clip region, or %NULL
		 */
		queue_redraw_with_clip(clip?: cairo.RectangleInt | null): void;
		/**
		 * Indicates that the actor's size request or other layout-affecting
		 * properties may have changed. This function is used inside {@link Actor}
		 * subclass implementations, not by applications directly.
		 * 
		 * Queueing a new layout automatically queues a redraw as well.
		 */
		queue_relayout(): void;
		/**
		 * @deprecated
		 * Actors are automatically realized, and nothing
		 *   requires explicit realization.
		 * 
		 * Realization informs the actor that it is attached to a stage. It
		 * can use this to allocate resources if it wanted to delay allocation
		 * until it would be rendered. However it is perfectly acceptable for
		 * an actor to create resources before being realized because Clutter
		 * only ever has a single rendering context so that actor is free to
		 * be moved from one stage to another.
		 * 
		 * This function does nothing if the actor is already realized.
		 * 
		 * Because a realized actor must have realized parent actors, calling
		 * {@link Clutter.Actor.realize} will also realize all parents of the actor.
		 * 
		 * This function does not realize child actors, except in the special
		 * case that realizing the stage, when the stage is visible, will
		 * suddenly map (and thus realize) the children of the stage.
		 */
		realize(): void;
		/**
		 * Removes #action from the list of actions applied to #self
		 * 
		 * The reference held by #self on the {@link Action} will be released
		 * @param action a {@link Action}
		 */
		remove_action(action: Action): void;
		/**
		 * Removes the {@link Action} with the given name from the list
		 * of actions applied to #self
		 * @param name the name of the action to remove
		 */
		remove_action_by_name(name: string): void;
		/**
		 * Removes all children of #self.
		 * 
		 * This function releases the reference added by inserting a child actor
		 * in the list of children of #self.
		 * 
		 * If the reference count of a child drops to zero, the child will be
		 * destroyed. If you want to ensure the destruction of all the children
		 * of #self, use {@link Clutter.Actor.destroy_all_children}.
		 */
		remove_all_children(): void;
		/**
		 * Removes all transitions associated to #self.
		 */
		remove_all_transitions(): void;
		/**
		 * Removes #child from the children of #self.
		 * 
		 * This function will release the reference added by
		 * {@link Clutter.Actor.add_child}, so if you want to keep using #child
		 * you will have to acquire a referenced on it before calling this
		 * function.
		 * 
		 * This function will emit the {@link Container.actor_removed}
		 * signal on #self.
		 * @param child a {@link Actor}
		 */
		remove_child(child: Actor): void;
		/**
		 * Removes clip area from #self.
		 */
		remove_clip(): void;
		/**
		 * Removes #constraint from the list of constraints applied to #self
		 * 
		 * The reference held by #self on the {@link Constraint} will be released
		 * @param constraint a {@link Constraint}
		 */
		remove_constraint(constraint: Constraint): void;
		/**
		 * Removes the {@link Constraint} with the given name from the list
		 * of constraints applied to #self
		 * @param name the name of the constraint to remove
		 */
		remove_constraint_by_name(name: string): void;
		/**
		 * Removes #effect from the list of effects applied to #self
		 * 
		 * The reference held by #self on the {@link Effect} will be released
		 * @param effect a {@link Effect}
		 */
		remove_effect(effect: Effect): void;
		/**
		 * Removes the {@link Effect} with the given name from the list
		 * of effects applied to #self
		 * @param name the name of the effect to remove
		 */
		remove_effect_by_name(name: string): void;
		/**
		 * Removes the transition stored inside a {@link Actor} using #name
		 * identifier.
		 * 
		 * If the transition is currently in progress, it will be stopped.
		 * 
		 * This function releases the reference acquired when the transition
		 * was added to the #ClutterActor.
		 * @param name the name of the transition to remove
		 */
		remove_transition(name: string): void;
		/**
		 * Replaces #old_child with #new_child in the list of children of #self.
		 * @param old_child the child of #self to replace
		 * @param new_child the {@link Actor} to replace #old_child
		 */
		replace_child(old_child: Actor, new_child: Actor): void;
		/**
		 * Restores the easing state as it was prior to a call to
		 * {@link Clutter.Actor.save_easing_state}.
		 */
		restore_easing_state(): void;
		/**
		 * Saves the current easing state for animatable properties, and creates
		 * a new state with the default values for easing mode and duration.
		 * 
		 * New transitions created after calling this function will inherit the
		 * duration, easing mode, and delay of the new easing state; this also
		 * applies to transitions modified in flight.
		 */
		save_easing_state(): void;
		/**
		 * Stores the allocation of #self as defined by #box.
		 * 
		 * This function can only be called from within the implementation of
		 * the {@link ActorClass}.allocate() virtual function.
		 * 
		 * The allocation should have been adjusted to take into account constraints,
		 * alignment, and margin properties. If you are implementing a #ClutterActor
		 * subclass that provides its own layout management policy for its children
		 * instead of using a #ClutterLayoutManager delegate, you should not call
		 * this function on the children of #self; instead, you should call
		 * clutter_actor_allocate(), which will adjust the allocation box for
		 * you.
		 * 
		 * This function should only be used by subclasses of #ClutterActor
		 * that wish to store their allocation but cannot chain up to the
		 * parent's implementation; the default implementation of the
		 * #ClutterActorClass.allocate() virtual function will call this
		 * function.
		 * 
		 * It is important to note that, while chaining up was the recommended
		 * behaviour for #ClutterActor subclasses prior to the introduction of
		 * this function, it is recommended to call clutter_actor_set_allocation()
		 * instead.
		 * 
		 * If the #ClutterActor is using a #ClutterLayoutManager delegate object
		 * to handle the allocation of its children, this function will call
		 * the clutter_layout_manager_allocate() function only if the
		 * %CLUTTER_DELEGATE_LAYOUT flag is set on #flags, otherwise it is
		 * expected that the subclass will call clutter_layout_manager_allocate()
		 * by itself. For instance, the following code:
		 * 
		 * |[<!-- language="C" -->
		 * static void
		 * my_actor_allocate (ClutterActor *actor,
		 *                    const ClutterActorBox *allocation,
		 *                    ClutterAllocationFlags flags)
		 * {
		 *   ClutterActorBox new_alloc;
		 *   ClutterAllocationFlags new_flags;
		 * 
		 *   adjust_allocation (allocation, &new_alloc);
		 * 
		 *   new_flags = flags | CLUTTER_DELEGATE_LAYOUT;
		 * 
		 *   // this will use the layout manager set on the actor
		 *   clutter_actor_set_allocation (actor, &new_alloc, new_flags);
		 * }
		 * ]|
		 * 
		 * is equivalent to this:
		 * 
		 * |[<!-- language="C" -->
		 * static void
		 * my_actor_allocate (ClutterActor *actor,
		 *                    const ClutterActorBox *allocation,
		 *                    ClutterAllocationFlags flags)
		 * {
		 *   ClutterLayoutManager *layout;
		 *   ClutterActorBox new_alloc;
		 * 
		 *   adjust_allocation (allocation, &new_alloc);
		 * 
		 *   clutter_actor_set_allocation (actor, &new_alloc, flags);
		 * 
		 *   layout = clutter_actor_get_layout_manager (actor);
		 *   clutter_layout_manager_allocate (layout,
		 *                                    CLUTTER_CONTAINER (actor),
		 *                                    &new_alloc,
		 *                                    flags);
		 * }
		 * ]|
		 * @param box a {@link ActorBox}
		 * @param flags allocation flags
		 */
		set_allocation(box: ActorBox, flags: AllocationFlags): void;
		/**
		 * @deprecated
		 * Use {@link Actor.pivot_point} instead.
		 * 
		 * Sets an anchor point for #self. The anchor point is a point in the
		 * coordinate space of an actor to which the actor position within its
		 * parent is relative; the default is (0, 0), i.e. the top-left corner
		 * of the actor.
		 * @param anchor_x X coordinate of the anchor point
		 * @param anchor_y Y coordinate of the anchor point
		 */
		set_anchor_point(anchor_x: number, anchor_y: number): void;
		/**
		 * @deprecated
		 * Use {@link Actor.pivot_point} and
		 * {@link Clutter.Actor.set_translation} instead. E.g. For %CLUTTER_GRAVITY_CENTER set
		 * pivot_point to (0.5,0.5) and the translation to (width/2,height/2).
		 * 
		 * Sets an anchor point on the actor, based on the given gravity (this is a
		 * convenience function wrapping {@link Clutter.Actor.set_anchor_point}).
		 * 
		 * Since version 1.0 the anchor point will be stored as a gravity so
		 * that if the actor changes size then the anchor point will move. For
		 * example, if you set the anchor point to %CLUTTER_GRAVITY_SOUTH_EAST
		 * and later double the size of the actor, the anchor point will move
		 * to the bottom right.
		 * @param gravity {@link Gravity}.
		 */
		set_anchor_point_from_gravity(gravity: Gravity): void;
		/**
		 * Sets the background color of a {@link Actor}.
		 * 
		 * The background color will be used to cover the whole allocation of the
		 * actor. The default background color of an actor is transparent.
		 * 
		 * To check whether an actor has a background color, you can use the
		 * #ClutterActor:background-color-set actor property.
		 * 
		 * The #ClutterActor:background-color property is animatable.
		 * @param color a {@link Color}, or %NULL to unset a previously
		 *  set color
		 */
		set_background_color(color?: Color | null): void;
		/**
		 * Sets #child to be above #sibling in the list of children of #self.
		 * 
		 * If #sibling is %NULL, #child will be the new last child of #self.
		 * 
		 * This function is logically equivalent to removing #child and using
		 * {@link Clutter.Actor.insert_child_above}, but it will not emit signals
		 * or change state on #child.
		 * @param child a {@link Actor} child of #self
		 * @param sibling a {@link Actor} child of #self, or %NULL
		 */
		set_child_above_sibling(child: Actor, sibling?: Actor | null): void;
		/**
		 * Changes the index of #child in the list of children of #self.
		 * 
		 * This function is logically equivalent to removing #child and
		 * calling {@link Clutter.Actor.insert_child_at_index}, but it will not
		 * emit signals or change state on #child.
		 * @param child a {@link Actor} child of #self
		 * @param index_ the new index for #child
		 */
		set_child_at_index(child: Actor, index_: number): void;
		/**
		 * Sets #child to be below #sibling in the list of children of #self.
		 * 
		 * If #sibling is %NULL, #child will be the new first child of #self.
		 * 
		 * This function is logically equivalent to removing #self and using
		 * {@link Clutter.Actor.insert_child_below}, but it will not emit signals
		 * or change state on #child.
		 * @param child a {@link Actor} child of #self
		 * @param sibling a {@link Actor} child of #self, or %NULL
		 */
		set_child_below_sibling(child: Actor, sibling?: Actor | null): void;
		/**
		 * Sets the transformation matrix to be applied to all the children
		 * of #self prior to their own transformations. The default child
		 * transformation is the identity matrix.
		 * 
		 * If #transform is %NULL, the child transform will be unset.
		 * 
		 * The {@link Actor.child_transform} property is animatable.
		 * @param transform a {@link Matrix}, or %NULL
		 */
		set_child_transform(transform?: Matrix | null): void;
		/**
		 * Sets clip area for #self. The clip area is always computed from the
		 * upper left corner of the actor, even if the anchor point is set
		 * otherwise.
		 * @param xoff X offset of the clip rectangle
		 * @param yoff Y offset of the clip rectangle
		 * @param width Width of the clip rectangle
		 * @param height Height of the clip rectangle
		 */
		set_clip(xoff: number, yoff: number, width: number, height: number): void;
		/**
		 * Sets whether #self should be clipped to the same size as its
		 * allocation
		 * @param clip_set %TRUE to apply a clip tracking the allocation
		 */
		set_clip_to_allocation(clip_set: boolean): void;
		/**
		 * Sets the contents of a {@link Actor}.
		 * @param content a {@link Content}, or %NULL
		 */
		set_content(content?: Content | null): void;
		/**
		 * Sets the gravity of the {@link Content} used by #self.
		 * 
		 * See the description of the #ClutterActor:content-gravity property for
		 * more information.
		 * 
		 * The #ClutterActor:content-gravity property is animatable.
		 * @param gravity the {@link ContentGravity}
		 */
		set_content_gravity(gravity: ContentGravity): void;
		/**
		 * Sets the policy for repeating the {@link Actor.content} of a
		 * #ClutterActor. The behaviour is deferred to the #ClutterContent
		 * implementation.
		 * @param repeat the repeat policy
		 */
		set_content_repeat(repeat: ContentRepeat): void;
		/**
		 * Sets the minification and magnification filter to be applied when
		 * scaling the {@link Actor.content} of a #ClutterActor.
		 * 
		 * The #ClutterActor:minification-filter will be used when reducing
		 * the size of the content; the #ClutterActor:magnification-filter
		 * will be used when increasing the size of the content.
		 * @param min_filter the minification filter for the content
		 * @param mag_filter the magnification filter for the content
		 */
		set_content_scaling_filters(min_filter: ScalingFilter, mag_filter: ScalingFilter): void;
		/**
		 * @deprecated
		 * Use {@link Clutter.Actor.set_z_position} instead.
		 * 
		 * Sets the Z coordinate of #self to #depth.
		 * 
		 * The unit used by #depth is dependant on the perspective setup. See
		 * also {@link Clutter.Stage.set_perspective}.
		 * @param depth Z co-ord
		 */
		set_depth(depth: number): void;
		/**
		 * Sets the delay that should be applied before tweening animatable
		 * properties.
		 * @param msecs the delay before the start of the tweening, in milliseconds
		 */
		set_easing_delay(msecs: number): void;
		/**
		 * Sets the duration of the tweening for animatable properties
		 * of #self for the current easing state.
		 * @param msecs the duration of the easing, or %NULL
		 */
		set_easing_duration(msecs: number): void;
		/**
		 * Sets the easing mode for the tweening of animatable properties
		 * of #self.
		 * @param mode an easing mode, excluding %CLUTTER_CUSTOM_MODE
		 */
		set_easing_mode(mode: AnimationMode): void;
		/**
		 * Sets whether an actor has a fixed position set (and will thus be
		 * unaffected by any layout manager).
		 * @param is_set whether to use fixed position
		 */
		set_fixed_position_set(is_set: boolean): void;
		/**
		 * Sets #flags on #self
		 * 
		 * This function will emit notifications for the changed properties
		 * @param flags the flags to set
		 */
		set_flags(flags: ActorFlags): void;
		/**
		 * Forces a height on an actor, causing the actor's preferred width
		 * and height (if any) to be ignored.
		 * 
		 * If #height is -1 the actor will use its preferred height instead of
		 * overriding it, i.e. you can "unset" the height with -1.
		 * 
		 * This function sets both the minimum and natural size of the actor.
		 * @param height Requested new height for the actor, in pixels, or -1
		 */
		set_height(height: number): void;
		/**
		 * Sets the {@link LayoutManager} delegate object that will be used to
		 * lay out the children of #self.
		 * 
		 * The #ClutterActor will take a reference on the passed #manager which
		 * will be released either when the layout manager is removed, or when
		 * the actor is destroyed.
		 * @param manager a {@link LayoutManager}, or %NULL to unset it
		 */
		set_layout_manager(manager?: LayoutManager | null): void;
		/**
		 * Sets all the components of the margin of a {@link Actor}.
		 * @param margin a {@link Margin}
		 */
		set_margin(margin: Margin): void;
		/**
		 * Sets the margin from the bottom of a {@link Actor}.
		 * 
		 * The #ClutterActor:margin-bottom property is animatable.
		 * @param margin the bottom margin
		 */
		set_margin_bottom(margin: number): void;
		/**
		 * Sets the margin from the left of a {@link Actor}.
		 * 
		 * The #ClutterActor:margin-left property is animatable.
		 * @param margin the left margin
		 */
		set_margin_left(margin: number): void;
		/**
		 * Sets the margin from the right of a {@link Actor}.
		 * 
		 * The #ClutterActor:margin-right property is animatable.
		 * @param margin the right margin
		 */
		set_margin_right(margin: number): void;
		/**
		 * Sets the margin from the top of a {@link Actor}.
		 * 
		 * The #ClutterActor:margin-top property is animatable.
		 * @param margin the top margin
		 */
		set_margin_top(margin: number): void;
		/**
		 * Sets the given name to #self. The name can be used to identify
		 * a {@link Actor}.
		 * @param name Textual tag to apply to actor
		 */
		set_name(name: string): void;
		/**
		 * Defines the circumstances where the actor should be redirected into
		 * an offscreen image. The offscreen image is used to flatten the
		 * actor into a single image while painting for two main reasons.
		 * Firstly, when the actor is painted a second time without any of its
		 * contents changing it can simply repaint the cached image without
		 * descending further down the actor hierarchy. Secondly, it will make
		 * the opacity look correct even if there are overlapping primitives
		 * in the actor.
		 * 
		 * Caching the actor could in some cases be a performance win and in
		 * some cases be a performance lose so it is important to determine
		 * which value is right for an actor before modifying this value. For
		 * example, there is never any reason to flatten an actor that is just
		 * a single texture (such as a {@link Texture}) because it is
		 * effectively already cached in an image so the offscreen would be
		 * redundant. Also if the actor contains primitives that are far apart
		 * with a large transparent area in the middle (such as a large
		 * CluterGroup with a small actor in the top left and a small actor in
		 * the bottom right) then the cached image will contain the entire
		 * image of the large area and the paint will waste time blending all
		 * of the transparent pixels in the middle.
		 * 
		 * The default method of implementing opacity on a container simply
		 * forwards on the opacity to all of the children. If the children are
		 * overlapping then it will appear as if they are two separate glassy
		 * objects and there will be a break in the color where they
		 * overlap. By redirecting to an offscreen buffer it will be as if the
		 * two opaque objects are combined into one and then made transparent
		 * which is usually what is expected.
		 * 
		 * The image below demonstrates the difference between redirecting and
		 * not. The image shows two Clutter groups, each containing a red and
		 * a green rectangle which overlap. The opacity on the group is set to
		 * 128 (which is 50%). When the offscreen redirect is not used, the
		 * red rectangle can be seen through the blue rectangle as if the two
		 * rectangles were separately transparent. When the redirect is used
		 * the group as a whole is transparent instead so the red rectangle is
		 * not visible where they overlap.
		 * 
		 * <figure id="offscreen-redirect">
		 *   <title>Sample of using an offscreen redirect for transparency</title>
		 *   <graphic fileref="offscreen-redirect.png" format="PNG"/>
		 * </figure>
		 * 
		 * The default value for this property is 0, so we effectively will
		 * never redirect an actor offscreen by default. This means that there
		 * are times that transparent actors may look glassy as described
		 * above. The reason this is the default is because there is a
		 * performance trade off between quality and performance here. In many
		 * cases the default form of glassy opacity looks good enough, but if
		 * it's not you will need to set the
		 * %CLUTTER_OFFSCREEN_REDIRECT_AUTOMATIC_FOR_OPACITY flag to enable
		 * redirection for opacity.
		 * 
		 * Custom actors that don't contain any overlapping primitives are
		 * recommended to override the {@link Has.overlaps} virtual to return %FALSE
		 * for maximum efficiency.
		 * @param redirect New offscreen redirect flags for the actor.
		 */
		set_offscreen_redirect(redirect: OffscreenRedirect): void;
		/**
		 * Sets the actor's opacity, with zero being completely transparent and
		 * 255 (0xff) being fully opaque.
		 * 
		 * The {@link Actor.opacity} property is animatable.
		 * @param opacity New opacity value for the actor.
		 */
		set_opacity(opacity: number): void;
		/**
		 * Allows overriding the calculated paint opacity (as returned by
		 * {@link Clutter.Actor.get_paint_opacity}). This is used internally by
		 * ClutterClone and ClutterOffscreenEffect, and should be used by
		 * actors that need to mimick those.
		 * 
		 * In almost all cases this should not used by applications.
		 * @param opacity the override opacity value, or -1 to reset
		 */
		set_opacity_override(opacity: number): void;
		/**
		 * @deprecated
		 * Use {@link Clutter.Actor.add_child} instead.
		 * 
		 * Sets the parent of #self to #parent.
		 * 
		 * This function will result in #parent acquiring a reference on #self,
		 * eventually by sinking its floating reference first. The reference
		 * will be released by {@link Clutter.Actor.unparent}.
		 * 
		 * This function should only be called by legacy {@link Actor}<!-- -->s
		 * implementing the #ClutterContainer interface.
		 * @param parent A new {@link Actor} parent
		 */
		set_parent(parent: Actor): void;
		/**
		 * Sets the position of the {@link Actor.pivot_point} around which the
		 * scaling and rotation transformations occur.
		 * 
		 * The pivot point's coordinates are in normalized space, with the (0, 0)
		 * point being the top left corner of the actor, and the (1, 1) point being
		 * the bottom right corner.
		 * @param pivot_x the normalized X coordinate of the pivot point
		 * @param pivot_y the normalized Y coordinate of the pivot point
		 */
		set_pivot_point(pivot_x: number, pivot_y: number): void;
		/**
		 * Sets the component on the Z axis of the {@link Actor.pivot_point} around
		 * which the scaling and rotation transformations occur.
		 * 
		 * The #pivot_z value is expressed as a distance along the Z axis.
		 * @param pivot_z the Z coordinate of the actor's pivot point
		 */
		set_pivot_point_z(pivot_z: number): void;
		/**
		 * Sets the actor's fixed position in pixels relative to any parent
		 * actor.
		 * 
		 * If a layout manager is in use, this position will override the
		 * layout manager and force a fixed position.
		 * @param x New left position of actor in pixels.
		 * @param y New top position of actor in pixels.
		 */
		set_position(x: number, y: number): void;
		/**
		 * Sets #actor as reactive. Reactive actors will receive events.
		 * @param reactive whether the actor should be reactive to events
		 */
		set_reactive(reactive: boolean): void;
		/**
		 * Sets the geometry request mode of #self.
		 * 
		 * The #mode determines the order for invoking
		 * {@link Clutter.Actor.get_preferred_width} and
		 * clutter_actor_get_preferred_height()
		 * @param mode the request mode
		 */
		set_request_mode(mode: RequestMode): void;
		/**
		 * @deprecated
		 * Use {@link Clutter.Actor.set_rotation_angle} and
		 *   clutter_actor_set_pivot_point() instead.
		 * 
		 * Sets the rotation angle of #self around the given axis.
		 * 
		 * The rotation center coordinates used depend on the value of #axis:
		 * 
		 *  - %CLUTTER_X_AXIS requires #y and #z
		 *  - %CLUTTER_Y_AXIS requires #x and #z
		 *  - %CLUTTER_Z_AXIS requires #x and #y
		 * 
		 * The rotation coordinates are relative to the anchor point of the
		 * actor, set using {@link Clutter.Actor.set_anchor_point}. If no anchor
		 * point is set, the upper left corner is assumed as the origin.
		 * @param axis the axis of rotation
		 * @param angle the angle of rotation
		 * @param x X coordinate of the rotation center
		 * @param y Y coordinate of the rotation center
		 * @param z Z coordinate of the rotation center
		 */
		set_rotation(axis: RotateAxis, angle: number, x: number, y: number, z: number): void;
		/**
		 * Sets the #angle of rotation of a {@link Actor} on the given #axis.
		 * 
		 * This function is a convenience for setting the rotation properties
		 * #ClutterActor:rotation-angle-x, #ClutterActor:rotation-angle-y,
		 * and #ClutterActor:rotation-angle-z.
		 * 
		 * The center of rotation is established by the #ClutterActor:pivot-point
		 * property.
		 * @param axis the axis to set the angle one
		 * @param angle the angle of rotation, in degrees
		 */
		set_rotation_angle(axis: RotateAxis, angle: number): void;
		/**
		 * Scales an actor with the given factors.
		 * 
		 * The scale transformation is relative the the {@link Actor.pivot_point}.
		 * 
		 * The #ClutterActor:scale-x and #ClutterActor:scale-y properties are
		 * animatable.
		 * @param scale_x double factor to scale actor by horizontally.
		 * @param scale_y double factor to scale actor by vertically.
		 */
		set_scale(scale_x: number, scale_y: number): void;
		/**
		 * @deprecated
		 * Use {@link Clutter.Actor.set_pivot_point} to control
		 *   the scale center
		 * 
		 * Scales an actor with the given factors around the given center
		 * point. The center point is specified in pixels relative to the
		 * anchor point (usually the top left corner of the actor).
		 * 
		 * The {@link Actor.scale_x} and #ClutterActor:scale-y properties
		 * are animatable.
		 * @param scale_x double factor to scale actor by horizontally.
		 * @param scale_y double factor to scale actor by vertically.
		 * @param center_x X coordinate of the center of the scaling
		 * @param center_y Y coordinate of the center of the scaling
		 */
		set_scale_full(scale_x: number, scale_y: number, center_x: number, center_y: number): void;
		/**
		 * Scales an actor on the Z axis by the given #scale_z factor.
		 * 
		 * The scale transformation is relative the the {@link Actor.pivot_point}.
		 * 
		 * The #ClutterActor:scale-z property is animatable.
		 * @param scale_z the scaling factor along the Z axis
		 */
		set_scale_z(scale_z: number): void;
		/**
		 * Sets the actor's size request in pixels. This overrides any
		 * "normal" size request the actor would have. For example
		 * a text actor might normally request the size of the text;
		 * this function would force a specific size instead.
		 * 
		 * If #width and/or #height are -1 the actor will use its
		 * "normal" size request instead of overriding it, i.e.
		 * you can "unset" the size with -1.
		 * 
		 * This function sets or unsets both the minimum and natural size.
		 * @param width New width of actor in pixels, or -1
		 * @param height New height of actor in pixels, or -1
		 */
		set_size(width: number, height: number): void;
		/**
		 * Sets the {@link TextDirection} for an actor
		 * 
		 * The passed text direction must not be %CLUTTER_TEXT_DIRECTION_DEFAULT
		 * 
		 * If #self implements #ClutterContainer then this function will recurse
		 * inside all the children of #self (including the internal ones).
		 * 
		 * Composite actors not implementing #ClutterContainer, or actors requiring
		 * special handling when the text direction changes, should connect to
		 * the #GObject::notify signal for the #ClutterActor:text-direction property
		 * @param text_dir the text direction for #self
		 */
		set_text_direction(text_dir: TextDirection): void;
		/**
		 * Overrides the transformations of a {@link Actor} with a custom
		 * matrix, which will be applied relative to the origin of the
		 * actor's allocation and to the actor's pivot point.
		 * 
		 * The #ClutterActor:transform property is animatable.
		 * @param transform a {@link Matrix}, or %NULL to
		 *   unset a custom transformation
		 */
		set_transform(transform?: Matrix | null): void;
		/**
		 * Sets an additional translation transformation on a {@link Actor},
		 * relative to the #ClutterActor:pivot-point.
		 * @param translate_x the translation along the X axis
		 * @param translate_y the translation along the Y axis
		 * @param translate_z the translation along the Z axis
		 */
		set_translation(translate_x: number, translate_y: number, translate_z: number): void;
		/**
		 * Forces a width on an actor, causing the actor's preferred width
		 * and height (if any) to be ignored.
		 * 
		 * If #width is -1 the actor will use its preferred width request
		 * instead of overriding it, i.e. you can "unset" the width with -1.
		 * 
		 * This function sets both the minimum and natural size of the actor.
		 * @param width Requested new width for the actor, in pixels, or -1
		 */
		set_width(width: number): void;
		/**
		 * Sets the actor's X coordinate, relative to its parent, in pixels.
		 * 
		 * Overrides any layout manager and forces a fixed position for
		 * the actor.
		 * 
		 * The {@link Actor.x} property is animatable.
		 * @param x the actor's position on the X axis
		 */
		set_x(x: number): void;
		/**
		 * Sets the horizontal alignment policy of a {@link Actor}, in case the
		 * actor received extra horizontal space.
		 * 
		 * See also the #ClutterActor:x-align property.
		 * @param x_align the horizontal alignment policy
		 */
		set_x_align(x_align: ActorAlign): void;
		/**
		 * Sets whether a {@link Actor} should expand horizontally; this means
		 * that layout manager should allocate extra space for the actor, if
		 * possible.
		 * 
		 * Setting an actor to expand will also make all its parent expand, so
		 * that it's possible to build an actor tree and only set this flag on
		 * its leaves and not on every single actor.
		 * @param expand whether the actor should expand horizontally
		 */
		set_x_expand(expand: boolean): void;
		/**
		 * Sets the actor's Y coordinate, relative to its parent, in pixels.#
		 * 
		 * Overrides any layout manager and forces a fixed position for
		 * the actor.
		 * 
		 * The {@link Actor.y} property is animatable.
		 * @param y the actor's position on the Y axis
		 */
		set_y(y: number): void;
		/**
		 * Sets the vertical alignment policy of a {@link Actor}, in case the
		 * actor received extra vertical space.
		 * 
		 * See also the #ClutterActor:y-align property.
		 * @param y_align the vertical alignment policy
		 */
		set_y_align(y_align: ActorAlign): void;
		/**
		 * Sets whether a {@link Actor} should expand horizontally; this means
		 * that layout manager should allocate extra space for the actor, if
		 * possible.
		 * 
		 * Setting an actor to expand will also make all its parent expand, so
		 * that it's possible to build an actor tree and only set this flag on
		 * its leaves and not on every single actor.
		 * @param expand whether the actor should expand vertically
		 */
		set_y_expand(expand: boolean): void;
		/**
		 * Sets the actor's position on the Z axis.
		 * 
		 * See {@link Actor.z_position}.
		 * @param z_position the position on the Z axis
		 */
		set_z_position(z_position: number): void;
		/**
		 * @deprecated
		 * Use {@link Clutter.Actor.set_rotation_angle} and
		 *   clutter_actor_set_pivot_point() instead.
		 * 
		 * Sets the rotation angle of #self around the Z axis using the center
		 * point specified as a compass point. For example to rotate such that
		 * the center of the actor remains static you can use
		 * %CLUTTER_GRAVITY_CENTER. If the actor changes size the center point
		 * will move accordingly.
		 * @param angle the angle of rotation
		 * @param gravity the center point of the rotation
		 */
		set_z_rotation_from_gravity(angle: number, gravity: Gravity): void;
		/**
		 * Should be called inside the implementation of the
		 * {@link Actor.pick} virtual function in order to check whether
		 * the actor should paint itself in pick mode or not.
		 * 
		 * This function should never be called directly by applications.
		 * @returns %TRUE if the actor should paint its silhouette,
		 *   %FALSE otherwise
		 */
		should_pick_paint(): boolean;
		/**
		 * Flags an actor to be displayed. An actor that isn't shown will not
		 * be rendered on the stage.
		 * 
		 * Actors are visible by default.
		 * 
		 * If this function is called on an actor without a parent, the
		 * {@link Actor.show_on_set_parent} will be set to %TRUE as a side
		 * effect.
		 */
		show(): void;
		/**
		 * @deprecated
		 * Actors are visible by default
		 * 
		 * Calls {@link Clutter.Actor.show} on all children of an actor (if any).
		 */
		show_all(): void;
		/**
		 * This function translates screen coordinates (#x, #y) to
		 * coordinates relative to the actor. For example, it can be used to translate
		 * screen events from global screen coordinates into actor-local coordinates.
		 * 
		 * The conversion can fail, notably if the transform stack results in the
		 * actor being projected on the screen as a mere line.
		 * 
		 * The conversion should not be expected to be pixel-perfect due to the
		 * nature of the operation. In general the error grows when the skewing
		 * of the actor rectangle on screen increases.
		 * 
		 * This function can be computationally intensive.
		 * 
		 * This function only works when the allocation is up-to-date, i.e. inside of
		 * the {@link ActorClass}.paint() implementation
		 * @param x x screen coordinate of the point to unproject
		 * @param y y screen coordinate of the point to unproject
		 * @returns %TRUE if conversion was successful.
		 * 
		 * return location for the unprojected x coordinance
		 * 
		 * return location for the unprojected y coordinance
		 */
		transform_stage_point(x: number, y: number): [ boolean, number, number ];
		/**
		 * Decreases the culling inhibitor counter. See {@link Clutter.Actor.inhibit_culling}
		 * for when inhibit culling is necessary.
		 * 
		 * Calling this function without a matching call to
		 * clutter_actor_inhibit_culling() is a programming error.
		 */
		uninhibit_culling(): void;
		/**
		 * Unsets the %CLUTTER_ACTOR_MAPPED flag on the actor and possibly
		 * unmaps its children if they were mapped.
		 * 
		 * Calling this function is not encouraged: the default {@link Actor}
		 * implementation of #ClutterActorClass.unmap() will also unmap any
		 * eventual children by default when their parent is unmapped.
		 * 
		 * When overriding #ClutterActorClass.unmap(), it is mandatory to
		 * chain up to the parent implementation.
		 * 
		 * It is important to note that the implementation of the
		 * #ClutterActorClass.unmap() virtual function may be called after
		 * the #ClutterActorClass.destroy() or the #GObjectClass.dispose()
		 * implementation, but it is guaranteed to be called before the
		 * #GObjectClass.finalize() implementation.
		 */
		unmap(): void;
		/**
		 * @deprecated
		 * Use {@link Clutter.Actor.remove_child} instead.
		 * 
		 * Removes the parent of #self.
		 * 
		 * This will cause the parent of #self to release the reference
		 * acquired when calling {@link Clutter.Actor.set_parent}, so if you
		 * want to keep #self you will have to acquire a reference of
		 * your own, through g_object_ref().
		 * 
		 * This function should only be called by legacy {@link Actor}<!-- -->s
		 * implementing the #ClutterContainer interface.
		 */
		unparent(): void;
		/**
		 * @deprecated
		 * Actors are automatically unrealized, and nothing
		 *   requires explicit realization.
		 * 
		 * Unrealization informs the actor that it may be being destroyed or
		 * moved to another stage. The actor may want to destroy any
		 * underlying graphics resources at this point. However it is
		 * perfectly acceptable for it to retain the resources until the actor
		 * is destroyed because Clutter only ever uses a single rendering
		 * context and all of the graphics resources are valid on any stage.
		 * 
		 * Because mapped actors must be realized, actors may not be
		 * unrealized if they are mapped. This function hides the actor to be
		 * sure it isn't mapped, an application-visible side effect that you
		 * may not be expecting.
		 * 
		 * This function should not be called by application code.
		 * 
		 * This function should not really be in the public API, because
		 * there isn't a good reason to call it. ClutterActor will already
		 * unrealize things for you when it's important to do so.
		 * 
		 * If you were using {@link Clutter.Actor.unrealize} in a dispose
		 * implementation, then don't, just chain up to ClutterActor's
		 * dispose.
		 * 
		 * If you were using clutter_actor_unrealize() to implement
		 * unrealizing children of your container, then don't, ClutterActor
		 * will already take care of that.
		 */
		unrealize(): void;
		/**
		 * Unsets #flags on #self
		 * 
		 * This function will emit notifications for the changed properties
		 * @param flags the flags to unset
		 */
		unset_flags(flags: ActorFlags): void;
		/**
		 * The ::allocation-changed signal is emitted when the
		 * {@link Actor.allocation} property changes. Usually, application
		 * code should just use the notifications for the :allocation property
		 * but if you want to track the allocation flags as well, for instance
		 * to know whether the absolute origin of #actor changed, then you might
		 * want use this signal instead.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - box: a {@link ActorBox} with the new allocation 
		 *  - flags: #ClutterAllocationFlags for the allocation 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "allocation-changed", callback: (owner: this, box: ActorBox, flags: AllocationFlags) => void): number;
		/**
		 * The ::button-press-event signal is emitted each time a mouse button
		 * is pressed on #actor.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - event: a {@link ButtonEvent} 
		 *  - returns %TRUE if the event has been handled by the actor,
		 *   or %FALSE to continue the emission. 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "button-press-event", callback: (owner: this, event: ButtonEvent) => boolean): number;
		/**
		 * The ::button-release-event signal is emitted each time a mouse button
		 * is released on #actor.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - event: a {@link ButtonEvent} 
		 *  - returns %TRUE if the event has been handled by the actor,
		 *   or %FALSE to continue the emission. 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "button-release-event", callback: (owner: this, event: ButtonEvent) => boolean): number;
		/**
		 * The ::captured-event signal is emitted when an event is captured
		 * by Clutter. This signal will be emitted starting from the top-level
		 * container (the {@link Stage}) to the actor which received the event
		 * going down the hierarchy. This signal can be used to intercept every
		 * event before the specialized events (like
		 * ClutterActor::button-press-event or ::key-released-event) are
		 * emitted.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - event: a {@link Event} 
		 *  - returns %TRUE if the event has been handled by the actor,
		 *   or %FALSE to continue the emission. 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "captured-event", callback: (owner: this, event: Event) => boolean): number;
		/**
		 * The ::destroy signal notifies that all references held on the
		 * actor which emitted it should be released.
		 * 
		 * The ::destroy signal should be used by all holders of a reference
		 * on #actor.
		 * 
		 * This signal might result in the finalization of the {@link Actor}
		 * if all references are released.
		 * 
		 * Composite actors and actors implementing the #ClutterContainer
		 * interface should override the default implementation of the
		 * class handler of this signal and call {@link Clutter.Actor.destroy} on
		 * their children. When overriding the default class handler, it is
		 * required to chain up to the parent's implementation.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "destroy", callback: (owner: this) => void): number;
		/**
		 * The ::enter-event signal is emitted when the pointer enters the #actor
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - event: a {@link CrossingEvent} 
		 *  - returns %TRUE if the event has been handled by the actor,
		 *   or %FALSE to continue the emission. 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "enter-event", callback: (owner: this, event: CrossingEvent) => boolean): number;
		/**
		 * The ::event signal is emitted each time an event is received
		 * by the #actor. This signal will be emitted on every actor,
		 * following the hierarchy chain, until it reaches the top-level
		 * container (the {@link Stage}).
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - event: a {@link Event} 
		 *  - returns %TRUE if the event has been handled by the actor,
		 *   or %FALSE to continue the emission. 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "event", callback: (owner: this, event: Event) => boolean): number;
		/**
		 * The ::hide signal is emitted when an actor is no longer rendered
		 * on the stage.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "hide", callback: (owner: this) => void): number;
		/**
		 * The ::key-focus-in signal is emitted when #actor receives key focus.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "key-focus-in", callback: (owner: this) => void): number;
		/**
		 * The ::key-focus-out signal is emitted when #actor loses key focus.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "key-focus-out", callback: (owner: this) => void): number;
		/**
		 * The ::key-press-event signal is emitted each time a keyboard button
		 * is pressed while #actor has key focus (see {@link Clutter.Stage.set_key_focus}).
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - event: a {@link KeyEvent} 
		 *  - returns %TRUE if the event has been handled by the actor,
		 *   or %FALSE to continue the emission. 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "key-press-event", callback: (owner: this, event: KeyEvent) => boolean): number;
		/**
		 * The ::key-release-event signal is emitted each time a keyboard button
		 * is released while #actor has key focus (see
		 * {@link Clutter.Stage.set_key_focus}).
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - event: a {@link KeyEvent} 
		 *  - returns %TRUE if the event has been handled by the actor,
		 *   or %FALSE to continue the emission. 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "key-release-event", callback: (owner: this, event: KeyEvent) => boolean): number;
		/**
		 * The ::leave-event signal is emitted when the pointer leaves the #actor.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - event: a {@link CrossingEvent} 
		 *  - returns %TRUE if the event has been handled by the actor,
		 *   or %FALSE to continue the emission. 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "leave-event", callback: (owner: this, event: CrossingEvent) => boolean): number;
		/**
		 * The ::motion-event signal is emitted each time the mouse pointer is
		 * moved over #actor.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - event: a {@link MotionEvent} 
		 *  - returns %TRUE if the event has been handled by the actor,
		 *   or %FALSE to continue the emission. 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "motion-event", callback: (owner: this, event: MotionEvent) => boolean): number;
		/**
		 * The ::paint signal is emitted each time an actor is being painted.
		 * 
		 * Subclasses of {@link Actor} should override the #ClutterActorClass.paint
		 * virtual function paint themselves in that function.
		 * 
		 * It is strongly discouraged to connect a signal handler to
		 * the #ClutterActor::paint signal; if you want to change the paint
		 * sequence of an existing #ClutterActor instance, either create a new
		 * #ClutterActor class and override the #ClutterActorClass.paint virtual
		 * function, or use a #ClutterEffect. The #ClutterActor::paint signal
		 * will be removed in a future version of Clutter.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - paint_context: a {@link PaintContext} 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "paint", callback: (owner: this, paint_context: PaintContext) => void): number;
		/**
		 * This signal is emitted when the parent of the actor changes.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - old_parent: the previous parent of the actor, or %NULL 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "parent-set", callback: (owner: this, old_parent: Actor | null) => void): number;
		/**
		 * The ::pick signal is emitted each time an actor is being painted
		 * in "pick mode". The pick mode is used to identify the actor during
		 * the event handling phase, or by {@link Clutter.Stage.get_actor_at_pos}.
		 * 
		 * Subclasses of {@link Actor} should override the class signal handler
		 * and paint themselves in that function.
		 * 
		 * It is possible to connect a handler to the ::pick signal in order
		 * to set up some custom aspect of a paint in pick mode.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - pick_context: a {@link PickContext} 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "pick", callback: (owner: this, pick_context: PickContext) => void): number;
		/**
		 * The ::queue_redraw signal is emitted when {@link Clutter.Actor.queue_redraw}
		 * is called on #origin.
		 * 
		 * The default implementation for {@link Actor} chains up to the
		 * parent actor and queues a redraw on the parent, thus "bubbling"
		 * the redraw queue up through the actor graph. The default
		 * implementation for #ClutterStage queues a clutter_stage_ensure_redraw()
		 * in a main loop idle handler.
		 * 
		 * Note that the #origin actor may be the stage, or a container; it
		 * does not have to be a leaf node in the actor graph.
		 * 
		 * Toolkits embedding a #ClutterStage which require a redraw and
		 * relayout cycle can stop the emission of this signal using the
		 * GSignal API, redraw the UI and then call clutter_stage_ensure_redraw()
		 * themselves, like:
		 * 
		 * |[<!-- language="C" -->
		 *   static void
		 *   on_redraw_complete (gpointer data)
		 *   {
		 *     ClutterStage *stage = data;
		 * 
		 *     // execute the Clutter drawing pipeline
		 *     clutter_stage_ensure_redraw (stage);
		 *   }
		 * 
		 *   static void
		 *   on_stage_queue_redraw (ClutterStage *stage)
		 *   {
		 *     // this prevents the default handler to run
		 *     g_signal_stop_emission_by_name (stage, "queue-redraw");
		 * 
		 *     // queue a redraw with the host toolkit and call
		 *     // a function when the redraw has been completed
		 *     queue_a_redraw (G_CALLBACK (on_redraw_complete), stage);
		 *   }
		 * ]|
		 * 
		 * Note: This signal is emitted before the Clutter paint
		 * pipeline is executed. If you want to know when the pipeline has
		 * been completed you should use clutter_threads_add_repaint_func()
		 * or clutter_threads_add_repaint_func_full().
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - origin: the actor which initiated the redraw request 
		 *  - volume: paint volume to redraw 
		 *  - returns  
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "queue-redraw", callback: (owner: this, origin: Actor, volume: PaintVolume) => boolean): number;
		/**
		 * The ::queue_layout signal is emitted when {@link Clutter.Actor.queue_relayout}
		 * is called on an actor.
		 * 
		 * The default implementation for {@link Actor} chains up to the
		 * parent actor and queues a relayout on the parent, thus "bubbling"
		 * the relayout queue up through the actor graph.
		 * 
		 * The main purpose of this signal is to allow relayout to be propagated
		 * properly in the procense of #ClutterClone actors. Applications will
		 * not normally need to connect to this signal.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "queue-relayout", callback: (owner: this) => void): number;
		/**
		 * The ::realize signal is emitted each time an actor is being
		 * realized.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "realize", callback: (owner: this) => void): number;
		/**
		 * The ::scroll-event signal is emitted each time the mouse is
		 * scrolled on #actor
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - event: a {@link ScrollEvent} 
		 *  - returns %TRUE if the event has been handled by the actor,
		 *   or %FALSE to continue the emission. 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "scroll-event", callback: (owner: this, event: ScrollEvent) => boolean): number;
		/**
		 * The ::show signal is emitted when an actor is visible and
		 * rendered on the stage.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "show", callback: (owner: this) => void): number;
		/**
		 * The ::touch-event signal is emitted each time a touch
		 * begin/end/update/cancel event.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - event: a {@link Event} 
		 *  - returns %CLUTTER_EVENT_STOP if the event has been handled by
		 *   the actor, or %CLUTTER_EVENT_PROPAGATE to continue the emission. 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "touch-event", callback: (owner: this, event: Event) => boolean): number;
		/**
		 * The ::transition-stopped signal is emitted once a transition
		 * is stopped; a transition is stopped once it reached its total
		 * duration (including eventual repeats), it has been stopped
		 * using {@link Clutter.Timeline.stop}, or it has been removed from the
		 * transitions applied on #actor, using clutter_actor_remove_transition().
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - name: the name of the transition 
		 *  - is_finished: whether the transition was finished, or stopped 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "transition-stopped", callback: (owner: this, name: string, is_finished: boolean) => void): number;
		/**
		 * The ::transitions-completed signal is emitted once all transitions
		 * involving #actor are complete.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "transitions-completed", callback: (owner: this) => void): number;
		/**
		 * The ::unrealize signal is emitted each time an actor is being
		 * unrealized.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "unrealize", callback: (owner: this) => void): number;

		connect(signal: "notify::allocation", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::anchor-gravity", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::anchor-x", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::anchor-y", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::background-color", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::background-color-set", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::child-transform", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::child-transform-set", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::clip-rect", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::clip-to-allocation", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::content", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::content-box", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::content-gravity", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::content-repeat", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::depth", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::first-child", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::fixed-position-set", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::fixed-x", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::fixed-y", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::has-clip", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::has-pointer", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::height", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::last-child", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::layout-manager", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::magnification-filter", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::mapped", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::margin-bottom", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::margin-left", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::margin-right", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::margin-top", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::min-height", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::min-height-set", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::min-width", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::min-width-set", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::minification-filter", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::name", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::natural-height", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::natural-height-set", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::natural-width", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::natural-width-set", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::offscreen-redirect", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::opacity", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::pivot-point", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::pivot-point-z", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::position", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::reactive", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::realized", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::request-mode", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::resource-scale", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::rotation-angle-x", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::rotation-angle-y", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::rotation-angle-z", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::rotation-center-x", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::rotation-center-y", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::rotation-center-z", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::rotation-center-z-gravity", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::scale-center-x", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::scale-center-y", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::scale-gravity", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::scale-x", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::scale-y", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::scale-z", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::show-on-set-parent", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::size", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::text-direction", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::transform", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::transform-set", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::translation-x", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::translation-y", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::translation-z", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::visible", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::width", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::x", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::x-align", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::x-expand", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::y", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::y-align", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::y-expand", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::z-position", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::flags", callback: (owner: this, ...args: any) => void): number;

	}

	type ActorInitOptionsMixin = GObject.InitiallyUnownedInitOptions & Atk.ImplementorIfaceInitOptions & AnimatableInitOptions & ContainerInitOptions & ScriptableInitOptions & 
	Pick<IActor,
		"anchor_gravity" |
		"anchor_x" |
		"anchor_y" |
		"background_color" |
		"child_transform" |
		"clip_rect" |
		"clip_to_allocation" |
		"content" |
		"content_gravity" |
		"content_repeat" |
		"depth" |
		"fixed_position_set" |
		"fixed_x" |
		"fixed_y" |
		"height" |
		"layout_manager" |
		"magnification_filter" |
		"margin_bottom" |
		"margin_left" |
		"margin_right" |
		"margin_top" |
		"min_height" |
		"min_height_set" |
		"min_width" |
		"min_width_set" |
		"minification_filter" |
		"name" |
		"natural_height" |
		"natural_height_set" |
		"natural_width" |
		"natural_width_set" |
		"offscreen_redirect" |
		"opacity" |
		"pivot_point" |
		"pivot_point_z" |
		"position" |
		"reactive" |
		"request_mode" |
		"rotation_angle_x" |
		"rotation_angle_y" |
		"rotation_angle_z" |
		"rotation_center_x" |
		"rotation_center_y" |
		"rotation_center_z" |
		"rotation_center_z_gravity" |
		"scale_center_x" |
		"scale_center_y" |
		"scale_gravity" |
		"scale_x" |
		"scale_y" |
		"scale_z" |
		"show_on_set_parent" |
		"size" |
		"text_direction" |
		"transform" |
		"translation_x" |
		"translation_y" |
		"translation_z" |
		"visible" |
		"width" |
		"x" |
		"x_align" |
		"x_expand" |
		"y" |
		"y_align" |
		"y_expand" |
		"z_position">;

	export interface ActorInitOptions extends ActorInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Actor} instead.
	 */
	type ActorMixin = IActor & GObject.InitiallyUnowned & Atk.ImplementorIface & Animatable & Container & Scriptable;

	/**
	 * Base class for actors.
	 */
	interface Actor extends ActorMixin {}

	class Actor {
		public constructor(options?: Partial<ActorInitOptions>);
		/**
		 * Creates a new {@link Actor}.
		 * 
		 * A newly created actor has a floating reference, which will be sunk
		 * when it is added to another actor.
		 * @returns the newly created {@link Actor}
		 */
		public static new(): Actor;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ActorMeta} instead.
	 */
	interface IActorMeta {
		/**
		 * The {@link Actor} attached to the #ClutterActorMeta instance
		 */
		readonly actor: Actor;
		/**
		 * Whether or not the {@link ActorMeta} is enabled
		 */
		enabled: boolean;
		/**
		 * The unique name to access the {@link ActorMeta}
		 */
		name: string;
		/**
		 * Retrieves a pointer to the {@link Actor} that owns #meta
		 * @returns a pointer to a {@link Actor} or %NULL
		 */
		get_actor(): Actor;
		/**
		 * Retrieves whether #meta is enabled
		 * @returns %TRUE if the {@link ActorMeta} instance is enabled
		 */
		get_enabled(): boolean;
		/**
		 * Retrieves the name set using {@link Clutter.ActorMeta.set_name}
		 * @returns the name of the {@link ActorMeta}
		 *   instance, or %NULL if none was set. The returned string is owned
		 *   by the #ClutterActorMeta instance and it should not be modified
		 *   or freed
		 */
		get_name(): string;
		/**
		 * Sets whether #meta should be enabled or not
		 * @param is_enabled whether #meta is enabled
		 */
		set_enabled(is_enabled: boolean): void;
		/**
		 * Sets the name of #meta
		 * 
		 * The name can be used to identify the {@link ActorMeta} instance
		 * @param name the name of #meta
		 */
		set_name(name: string): void;
		connect(signal: "notify::actor", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::enabled", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::name", callback: (owner: this, ...args: any) => void): number;

	}

	type ActorMetaInitOptionsMixin = GObject.InitiallyUnownedInitOptions & 
	Pick<IActorMeta,
		"enabled" |
		"name">;

	export interface ActorMetaInitOptions extends ActorMetaInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ActorMeta} instead.
	 */
	type ActorMetaMixin = IActorMeta & GObject.InitiallyUnowned;

	/**
	 * The {@link ActorMeta} structure contains only
	 * private data and should be accessed using the provided API
	 */
	interface ActorMeta extends ActorMetaMixin {}

	class ActorMeta {
		public constructor(options?: Partial<ActorMetaInitOptions>);
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ActorNode} instead.
	 */
	interface IActorNode {

	}

	type ActorNodeInitOptionsMixin = PaintNodeInitOptions
	export interface ActorNodeInitOptions extends ActorNodeInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ActorNode} instead.
	 */
	type ActorNodeMixin = IActorNode & PaintNode;

	/**
	 * The {@link ActorNode} structure is an opaque
	 * type whose members cannot be directly accessed.
	 */
	interface ActorNode extends ActorNodeMixin {}

	class ActorNode {
		public constructor(options?: Partial<ActorNodeInitOptions>);
		public static new(actor: Actor): PaintNode;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link AlignConstraint} instead.
	 */
	interface IAlignConstraint {
		/**
		 * The axis to be used to compute the alignment
		 */
		align_axis: AlignAxis;
		/**
		 * The alignment factor, as a normalized value between 0.0 and 1.0
		 * 
		 * The factor depends on the {@link AlignConstraint.align_axis} property:
		 * with an align-axis value of %CLUTTER_ALIGN_X_AXIS, 0.0 means left and
		 * 1.0 means right; with a value of %CLUTTER_ALIGN_Y_AXIS, 0.0 means top
		 * and 1.0 means bottom.
		 */
		factor: number;
		/**
		 * The {@link Actor} used as the source for the alignment.
		 * 
		 * The #ClutterActor must not be a child or a grandchild of the actor
		 * using the constraint.
		 */
		source: Actor;
		/**
		 * Retrieves the value set using {@link Clutter.AlignConstraint.set_align_axis}
		 * @returns the alignment axis
		 */
		get_align_axis(): AlignAxis;
		/**
		 * Retrieves the factor set using {@link Clutter.AlignConstraint.set_factor}
		 * @returns the alignment factor
		 */
		get_factor(): number;
		/**
		 * Retrieves the source of the alignment
		 * @returns the {@link Actor} used as the source
		 *   of the alignment
		 */
		get_source(): Actor;
		/**
		 * Sets the axis to which the alignment refers to
		 * @param axis the axis to which the alignment refers to
		 */
		set_align_axis(axis: AlignAxis): void;
		/**
		 * Sets the alignment factor of the constraint
		 * 
		 * The factor depends on the {@link AlignConstraint.align_axis} property
		 * and it is a value between 0.0 (meaning left, when
		 * #ClutterAlignConstraint:align-axis is set to %CLUTTER_ALIGN_X_AXIS; or
		 * meaning top, when #ClutterAlignConstraint:align-axis is set to
		 * %CLUTTER_ALIGN_Y_AXIS) and 1.0 (meaning right, when
		 * #ClutterAlignConstraint:align-axis is set to %CLUTTER_ALIGN_X_AXIS; or
		 * meaning bottom, when #ClutterAlignConstraint:align-axis is set to
		 * %CLUTTER_ALIGN_Y_AXIS). A value of 0.5 aligns in the middle in either
		 * cases
		 * @param factor the alignment factor, between 0.0 and 1.0
		 */
		set_factor(factor: number): void;
		/**
		 * Sets the source of the alignment constraint
		 * @param source a {@link Actor}, or %NULL to unset the source
		 */
		set_source(source?: Actor | null): void;
		connect(signal: "notify::align-axis", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::factor", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::source", callback: (owner: this, ...args: any) => void): number;

	}

	type AlignConstraintInitOptionsMixin = ConstraintInitOptions & 
	Pick<IAlignConstraint,
		"align_axis" |
		"factor" |
		"source">;

	export interface AlignConstraintInitOptions extends AlignConstraintInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link AlignConstraint} instead.
	 */
	type AlignConstraintMixin = IAlignConstraint & Constraint;

	/**
	 * {@link AlignConstraint} is an opaque structure
	 * whose members cannot be directly accesses
	 */
	interface AlignConstraint extends AlignConstraintMixin {}

	class AlignConstraint {
		public constructor(options?: Partial<AlignConstraintInitOptions>);
		/**
		 * Creates a new constraint, aligning a {@link Actor}'s position with
		 * regards of the size of the actor to #source, with the given
		 * alignment #factor
		 * @param source the {@link Actor} to use as the source of the
		 *   alignment, or %NULL
		 * @param axis the axis to be used to compute the alignment
		 * @param factor the alignment factor, between 0.0 and 1.0
		 * @returns the newly created {@link AlignConstraint}
		 */
		public static new(source: Actor | null, axis: AlignAxis, factor: number): Constraint;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Alpha} instead.
	 */
	interface IAlpha {
		/**
		 * @deprecated
		 * Use {@link Timeline.new_frame} and
		 *   {@link Clutter.Timeline.get_progress} instead
		 * 
		 * The alpha value as computed by the alpha function. The linear
		 * interval is 0.0 to 1.0, but the Alpha allows overshooting by
		 * one unit in each direction, so the valid interval is -1.0 to 2.0.
		 */
		readonly alpha: number;
		/**
		 * @deprecated
		 * Use {@link Timeline.progress_mode}
		 * 
		 * The progress function logical id - a value from the
		 * {@link AnimationMode} enumeration.
		 * 
		 * If %CLUTTER_CUSTOM_MODE is used then the function set using
		 * {@link Clutter.Alpha.set_closure} or clutter_alpha_set_func()
		 * will be used.
		 */
		mode: number;
		/**
		 * A {@link Timeline} instance used to drive the alpha function.
		 */
		timeline: Timeline;
		/**
		 * @deprecated
		 * Use {@link Clutter.Timeline.get_progress}
		 * 
		 * Query the current alpha value.
		 * @returns The current alpha value for the alpha
		 */
		get_alpha(): number;
		/**
		 * @deprecated
		 * Use {@link Timeline} instead
		 * 
		 * Retrieves the {@link AnimationMode} used by #alpha.
		 * @returns the animation mode
		 */
		get_mode(): number;
		/**
		 * @deprecated
		 * Use {@link Timeline} directlry
		 * 
		 * Gets the {@link Timeline} bound to #alpha.
		 * @returns a {@link Timeline} instance
		 */
		get_timeline(): Timeline;
		/**
		 * @deprecated
		 * Use {@link Clutter.Timeline.set_progress_func}
		 * 
		 * Sets the #GClosure used to compute the alpha value at each
		 * frame of the {@link Timeline} bound to #alpha.
		 * @param closure A #GClosure
		 */
		set_closure(closure: GObject.Closure): void;
		/**
		 * @deprecated
		 * Use {@link Clutter.Timeline.set_progress_func}
		 * 
		 * Sets the {@link AlphaFunc} function used to compute
		 * the alpha value at each frame of the #ClutterTimeline
		 * bound to #alpha.
		 * 
		 * This function will not register #func as a global alpha function.
		 * @param func A {@link AlphaFunc}
		 */
		set_func(func: AlphaFunc): void;
		/**
		 * @deprecated
		 * Use {@link Timeline} and
		 *   {@link Clutter.Timeline.set_progress_mode} instead
		 * 
		 * Sets the progress function of #alpha using the symbolic value
		 * of #mode, as taken by the {@link AnimationMode} enumeration.
		 * @param mode a {@link AnimationMode}
		 */
		set_mode(mode: number): void;
		/**
		 * @deprecated
		 * Use {@link Timeline} directly
		 * 
		 * Binds #alpha to #timeline.
		 * @param timeline A {@link Timeline}
		 */
		set_timeline(timeline: Timeline): void;
		connect(signal: "notify::alpha", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::mode", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::timeline", callback: (owner: this, ...args: any) => void): number;

	}

	type AlphaInitOptionsMixin = GObject.InitiallyUnownedInitOptions & ScriptableInitOptions & 
	Pick<IAlpha,
		"mode" |
		"timeline">;

	export interface AlphaInitOptions extends AlphaInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Alpha} instead.
	 */
	type AlphaMixin = IAlpha & GObject.InitiallyUnowned & Scriptable;

	/**
	 * {@link Alpha} combines a #ClutterTimeline and a function.
	 * The contents of the #ClutterAlpha structure are private and should
	 * only be accessed using the provided API.
	 */
	interface Alpha extends AlphaMixin {}

	class Alpha {
		public constructor(options?: Partial<AlphaInitOptions>);
		/**
		 * @deprecated
		 * Use {@link Timeline} instead
		 * 
		 * Creates a new {@link Alpha} instance.  You must set a function
		 * to compute the alpha value using {@link Clutter.Alpha.set_func} and
		 * bind a #ClutterTimeline object to the #ClutterAlpha instance
		 * using clutter_alpha_set_timeline().
		 * @returns the newly created empty {@link Alpha} instance.
		 */
		public static new(): Alpha;
		/**
		 * @deprecated
		 * Use {@link Timeline} instead
		 * 
		 * Creates a new {@link Alpha} instance and sets the timeline
		 * and animation mode.
		 * 
		 * See also {@link Clutter.Alpha.set_timeline} and clutter_alpha_set_mode().
		 * @param timeline {@link Timeline} timeline
		 * @param mode animation mode
		 * @returns the newly created {@link Alpha}
		 */
		public static new_full(timeline: Timeline, mode: number): Alpha;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Animation} instead.
	 */
	interface IAnimation {
		/**
		 * @deprecated
		 * Use the {@link Animation.timeline} property and
		 *   the #ClutterTimeline:progress-mode property instead.
		 * 
		 * The {@link Alpha} used by the animation.
		 */
		alpha: Alpha;
		/**
		 * @deprecated
		 * Use {@link PropertyTransition} instead
		 * 
		 * The duration of the animation, expressed in milliseconds.
		 */
		duration: number;
		/**
		 * @deprecated
		 * Use {@link PropertyTransition} instead
		 * 
		 * Whether the animation should loop.
		 */
		loop: boolean;
		/**
		 * @deprecated
		 * Use {@link PropertyTransition} instead
		 * 
		 * The animation mode, either a value from {@link AnimationMode}
		 * or a value returned by {@link Clutter.Alpha.register_func}. The
		 * default value is %CLUTTER_LINEAR.
		 */
		mode: number;
		/**
		 * @deprecated
		 * Use {@link PropertyTransition} instead
		 * 
		 * The #GObject to which the animation applies.
		 */
		object: GObject.Object;
		/**
		 * @deprecated
		 * Use {@link PropertyTransition} instead
		 * 
		 * The {@link Timeline} used by the animation.
		 */
		timeline: Timeline;
		/**
		 * @deprecated
		 * Use {@link PropertyTransition} instead
		 * 
		 * Retrieves the duration of #animation, in milliseconds.
		 * @returns the duration of the animation
		 */
		get_duration(): number;
		/**
		 * @deprecated
		 * Use {@link PropertyTransition} instead
		 * 
		 * Retrieves the {@link Interval} associated to #property_name
		 * inside #animation.
		 * @param property_name name of the property
		 * @returns a {@link Interval} or %NULL if no
		 *   property with the same name was found. The returned interval is
		 *   owned by the #ClutterAnimation and should not be unreferenced
		 */
		get_interval(property_name: string): Interval;
		/**
		 * @deprecated
		 * Use {@link PropertyTransition} instead
		 * 
		 * Retrieves whether #animation is looping.
		 * @returns %TRUE if the animation is looping
		 */
		get_loop(): boolean;
		/**
		 * @deprecated
		 * Use {@link PropertyTransition} instead
		 * 
		 * Retrieves the animation mode of #animation, as set by
		 * {@link Clutter.Animation.set_mode}.
		 * @returns the mode for the animation
		 */
		get_mode(): number;
		/**
		 * @deprecated
		 * Use {@link PropertyTransition} instead
		 * 
		 * Retrieves the {@link Timeline} used by #animation
		 * @returns the timeline used by the animation
		 */
		get_timeline(): Timeline;
		/**
		 * @deprecated
		 * Use {@link PropertyTransition} instead
		 * 
		 * Checks whether #animation is controlling #property_name.
		 * @param property_name name of the property
		 * @returns %TRUE if the property is animated by the
		 *   {@link Animation}, %FALSE otherwise
		 */
		has_property(property_name: string): boolean;
		/**
		 * @deprecated
		 * Use {@link PropertyTransition} instead
		 * 
		 * Sets the duration of #animation in milliseconds.
		 * 
		 * This function will set {@link Animation.alpha} and
		 * #ClutterAnimation:timeline if needed.
		 * @param msecs the duration in milliseconds
		 */
		set_duration(msecs: number): void;
		/**
		 * @deprecated
		 * Use {@link PropertyTransition} instead
		 * 
		 * Sets whether #animation should loop over itself once finished.
		 * 
		 * A looping {@link Animation} will not emit the #ClutterAnimation::completed
		 * signal when finished.
		 * 
		 * This function will set #ClutterAnimation:alpha and
		 * #ClutterAnimation:timeline if needed.
		 * @param loop %TRUE if the animation should loop
		 */
		set_loop(loop: boolean): void;
		/**
		 * @deprecated
		 * Use {@link PropertyTransition} instead
		 * 
		 * Sets the animation #mode of #animation. The animation #mode is
		 * a logical id, either coming from the {@link AnimationMode} enumeration
		 * or the return value of {@link Clutter.Alpha.register_func}.
		 * 
		 * This function will also set #ClutterAnimation:alpha if needed.
		 * @param mode an animation mode logical id
		 */
		set_mode(mode: number): void;
		/**
		 * @deprecated
		 * Use {@link PropertyTransition} instead
		 * 
		 * Attaches #animation to #object. The {@link Animation} will take a
		 * reference on #object.
		 * @param object a #GObject
		 */
		set_object(object: GObject.Object): void;
		/**
		 * @deprecated
		 * Use {@link PropertyTransition} instead
		 * 
		 * Sets the {@link Timeline} used by #animation.
		 * 
		 * This function will take a reference on the passed #timeline.
		 * @param timeline a {@link Timeline}, or %NULL to unset the
		 *   current #ClutterTimeline
		 */
		set_timeline(timeline?: Timeline | null): void;
		/**
		 * The ::completed signal is emitted once the animation has
		 * been completed.
		 * 
		 * The #animation instance is guaranteed to be valid for the entire
		 * duration of the signal emission chain.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "completed", callback: (owner: this) => void): number;
		/**
		 * The ::started signal is emitted once the animation has been
		 * started
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "started", callback: (owner: this) => void): number;

		connect(signal: "notify::alpha", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::duration", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::loop", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::mode", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::object", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::timeline", callback: (owner: this, ...args: any) => void): number;

	}

	type AnimationInitOptionsMixin = GObject.ObjectInitOptions & ScriptableInitOptions & 
	Pick<IAnimation,
		"alpha" |
		"duration" |
		"loop" |
		"mode" |
		"object" |
		"timeline">;

	export interface AnimationInitOptions extends AnimationInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Animation} instead.
	 */
	type AnimationMixin = IAnimation & GObject.Object & Scriptable;

	/**
	 * The {@link Animation} structure contains only private data and should
	 * be accessed using the provided functions.
	 */
	interface Animation extends AnimationMixin {}

	class Animation {
		public constructor(options?: Partial<AnimationInitOptions>);
		/**
		 * @deprecated
		 * Use {@link PropertyTransition} instead
		 * 
		 * Creates a new {@link Animation} instance. You should set the
		 * #GObject to be animated using {@link Clutter.Animation.set_object},
		 * set the duration with clutter_animation_set_duration() and the
		 * easing mode using clutter_animation_set_mode().
		 * 
		 * The clutter_actor_animate() and relative family of functions provide
		 * an easy way to animate a #ClutterActor and automatically manage the
		 * lifetime of a #ClutterAnimation instance, so you should consider using
		 * those functions instead of manually creating an animation.
		 * @returns the newly created {@link Animation}. Use {@link GObject.Object.unref}
		 *   to release the associated resources
		 */
		public static new(): Animation;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Backend} instead.
	 */
	interface IBackend {
		/**
		 * Retrieves the #CoglContext associated with the given clutter
		 * #backend. A #CoglContext is required when using some of the
		 * experimental 2.0 Cogl API.
		 * 
		 * Since CoglContext is itself experimental API this API should
		 * be considered experimental too.
		 * 
		 * This API is not yet supported on OSX because OSX still
		 * uses the stub Cogl winsys and the Clutter backend doesn't
		 * explicitly create a CoglContext.
		 * @returns The #CoglContext associated with #backend.
		 */
		get_cogl_context(): Cogl.Context;
		/**
		 * Returns the default seat
		 * @returns the default seat
		 */
		get_default_seat(): Seat;
		/**
		 * Retrieves the font options for #backend.
		 * @returns the font options of the {@link Backend}.
		 *   The returned #cairo_font_options_t is owned by the backend and should
		 *   not be modified or freed
		 */
		get_font_options(): cairo.FontOptions;
		/**
		 * Returns the input method used by Clutter
		 * @returns the input method
		 */
		get_input_method(): InputMethod;
		/**
		 * Gets the resolution for font handling on the screen.
		 * 
		 * The resolution is a scale factor between points specified in a
		 * #PangoFontDescription and cairo units. The default value is 96.0,
		 * meaning that a 10 point font will be 13 units
		 * high (10 * 96. / 72. = 13.3).
		 * 
		 * Clutter will set the resolution using the current backend when
		 * initializing; the resolution is also stored in the
		 * {@link Settings.font_dpi} property.
		 * @returns the current resolution, or -1 if no resolution
		 *   has been set.
		 */
		get_resolution(): number;
		/**
		 * Sets the new font options for #backend. The {@link Backend} will
		 * copy the #cairo_font_options_t.
		 * 
		 * If #options is %NULL, the first following call to
		 * {@link Clutter.Backend.get_font_options} will return the default font
		 * options for #backend.
		 * 
		 * This function is intended for actors creating a Pango layout
		 * using the PangoCairo API.
		 * @param options Cairo font options for the backend, or %NULL
		 */
		set_font_options(options: cairo.FontOptions): void;
		/**
		 * Sets the input method to be used by Clutter
		 * @param method the input method
		 */
		set_input_method(method: InputMethod): void;
		/**
		 * The ::font-changed signal is emitted each time the font options
		 * have been changed through {@link Settings}.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "font-changed", callback: (owner: this) => void): number;
		/**
		 * The ::resolution-changed signal is emitted each time the font
		 * resolutions has been changed through {@link Settings}.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "resolution-changed", callback: (owner: this) => void): number;
		/**
		 * The ::settings-changed signal is emitted each time the {@link Settings}
		 * properties have been changed.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "settings-changed", callback: (owner: this) => void): number;

	}

	type BackendInitOptionsMixin = GObject.ObjectInitOptions
	export interface BackendInitOptions extends BackendInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Backend} instead.
	 */
	type BackendMixin = IBackend & GObject.Object;

	/**
	 * {@link Backend} is an opaque structure whose
	 * members cannot be directly accessed.
	 */
	interface Backend extends BackendMixin {}

	class Backend {
		public constructor(options?: Partial<BackendInitOptions>);
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link BinLayout} instead.
	 */
	interface IBinLayout {
		/**
		 * @deprecated
		 * Use the {@link Actor.x_expand} and the
		 *   #ClutterActor:x-align properties on #ClutterActor instead.
		 * 
		 * The default horizontal alignment policy for actors managed
		 * by the {@link BinLayout}
		 */
		x_align: BinAlignment;
		/**
		 * @deprecated
		 * Use the {@link Actor.y_expand} and the
		 *   #ClutterActor:y-align properties on #ClutterActor instead.
		 * 
		 * The default vertical alignment policy for actors managed
		 * by the {@link BinLayout}
		 */
		y_align: BinAlignment;

		connect(signal: "notify::x-align", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::y-align", callback: (owner: this, ...args: any) => void): number;

	}

	type BinLayoutInitOptionsMixin = LayoutManagerInitOptions & 
	Pick<IBinLayout,
		"x_align" |
		"y_align">;

	export interface BinLayoutInitOptions extends BinLayoutInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link BinLayout} instead.
	 */
	type BinLayoutMixin = IBinLayout & LayoutManager;

	/**
	 * The {@link BinLayout} structure contains only private data
	 * and should be accessed using the provided API
	 */
	interface BinLayout extends BinLayoutMixin {}

	class BinLayout {
		public constructor(options?: Partial<BinLayoutInitOptions>);
		/**
		 * Creates a new {@link BinLayout} layout manager
		 * @param x_align the default alignment policy to be used on the
		 *   horizontal axis
		 * @param y_align the default alignment policy to be used on the
		 *   vertical axis
		 * @returns the newly created layout manager
		 */
		public static new(x_align: BinAlignment, y_align: BinAlignment): LayoutManager;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link BindConstraint} instead.
	 */
	interface IBindConstraint {
		/**
		 * The coordinate to be bound
		 */
		coordinate: BindCoordinate;
		/**
		 * The offset, in pixels, to be applied to the binding
		 */
		offset: number;
		/**
		 * The {@link Actor} used as the source for the binding.
		 * 
		 * The #ClutterActor must not be contained inside the actor associated
		 * to the constraint.
		 */
		source: Actor;
		/**
		 * Retrieves the bound coordinate of the constraint
		 * @returns the bound coordinate
		 */
		get_coordinate(): BindCoordinate;
		/**
		 * Retrieves the offset set using {@link Clutter.BindConstraint.set_offset}
		 * @returns the offset, in pixels
		 */
		get_offset(): number;
		/**
		 * Retrieves the {@link Actor} set using {@link Clutter.BindConstraint.set_source}
		 * @returns a pointer to the source actor
		 */
		get_source(): Actor;
		/**
		 * Sets the coordinate to bind in the constraint
		 * @param coordinate the coordinate to bind
		 */
		set_coordinate(coordinate: BindCoordinate): void;
		/**
		 * Sets the offset to be applied to the constraint
		 * @param offset the offset to apply, in pixels
		 */
		set_offset(offset: number): void;
		/**
		 * Sets the source {@link Actor} for the constraint
		 * @param source a {@link Actor}, or %NULL to unset the source
		 */
		set_source(source?: Actor | null): void;
		connect(signal: "notify::coordinate", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::offset", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::source", callback: (owner: this, ...args: any) => void): number;

	}

	type BindConstraintInitOptionsMixin = ConstraintInitOptions & 
	Pick<IBindConstraint,
		"coordinate" |
		"offset" |
		"source">;

	export interface BindConstraintInitOptions extends BindConstraintInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link BindConstraint} instead.
	 */
	type BindConstraintMixin = IBindConstraint & Constraint;

	/**
	 * {@link BindConstraint} is an opaque structure
	 * whose members cannot be directly accessed
	 */
	interface BindConstraint extends BindConstraintMixin {}

	class BindConstraint {
		public constructor(options?: Partial<BindConstraintInitOptions>);
		/**
		 * Creates a new constraint, binding a {@link Actor}'s position to
		 * the given #coordinate of the position of #source
		 * @param source the {@link Actor} to use as the source of
		 *   the binding, or %NULL
		 * @param coordinate the coordinate to bind
		 * @param offset the offset to apply to the binding, in pixels
		 * @returns the newly created {@link BindConstraint}
		 */
		public static new(source: Actor | null, coordinate: BindCoordinate, offset: number): Constraint;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link BindingPool} instead.
	 */
	interface IBindingPool {
		/**
		 * The unique name of the {@link BindingPool}.
		 */
		name: string;
		/**
		 * Activates the callback associated to the action that is
		 * bound to the #key_val and #modifiers pair.
		 * 
		 * The callback has the following signature:
		 * 
		 * |[
		 *   void (* callback) (GObject             *gobject,
		 *                      const gchar         *action_name,
		 *                      guint                key_val,
		 *                      ClutterModifierType  modifiers,
		 *                      gpointer             user_data);
		 * ]|
		 * 
		 * Where the #GObject instance is #gobject and the user data
		 * is the one passed when installing the action with
		 * {@link Clutter.BindingPool.install_action}.
		 * 
		 * If the action bound to the #key_val, #modifiers pair has been
		 * blocked using clutter_binding_pool_block_action(), the callback
		 * will not be invoked, and this function will return %FALSE.
		 * @param key_val the key symbol
		 * @param modifiers bitmask for the modifiers
		 * @param gobject a #GObject
		 * @returns %TRUE if an action was found and was activated
		 */
		activate(key_val: number, modifiers: ModifierType, gobject: GObject.Object): boolean;
		/**
		 * Blocks all the actions with name #action_name inside #pool.
		 * @param action_name an action name
		 */
		block_action(action_name: string): void;
		/**
		 * Retrieves the name of the action matching the given key symbol
		 * and modifiers bitmask.
		 * @param key_val a key symbol
		 * @param modifiers a bitmask for the modifiers
		 * @returns the name of the action, if found, or %NULL. The
		 *   returned string is owned by the binding pool and should never
		 *   be modified or freed
		 */
		find_action(key_val: number, modifiers: ModifierType): string;
		/**
		 * Installs a new action inside a {@link BindingPool}. The action
		 * is bound to #key_val and #modifiers.
		 * 
		 * The same action name can be used for multiple #key_val, #modifiers
		 * pairs.
		 * 
		 * When an action has been activated using {@link Clutter.BindingPool.activate}
		 * the passed #callback will be invoked (with #data).
		 * 
		 * Actions can be blocked with clutter_binding_pool_block_action()
		 * and then unblocked using clutter_binding_pool_unblock_action().
		 * @param action_name the name of the action
		 * @param key_val key symbol
		 * @param modifiers bitmask of modifiers
		 * @param callback function to be called
		 *   when the action is activated
		 */
		install_action(action_name: string, key_val: number, modifiers: ModifierType, callback: BindingActionFunc): void;
		/**
		 * A #GClosure variant of {@link Clutter.BindingPool.install_action}.
		 * 
		 * Installs a new action inside a {@link BindingPool}. The action
		 * is bound to #key_val and #modifiers.
		 * 
		 * The same action name can be used for multiple #key_val, #modifiers
		 * pairs.
		 * 
		 * When an action has been activated using clutter_binding_pool_activate()
		 * the passed #closure will be invoked.
		 * 
		 * Actions can be blocked with clutter_binding_pool_block_action()
		 * and then unblocked using clutter_binding_pool_unblock_action().
		 * @param action_name the name of the action
		 * @param key_val key symbol
		 * @param modifiers bitmask of modifiers
		 * @param closure a #GClosure
		 */
		install_closure(action_name: string, key_val: number, modifiers: ModifierType, closure: GObject.Closure): void;
		/**
		 * Allows overriding the action for #key_val and #modifiers inside a
		 * {@link BindingPool}. See {@link Clutter.BindingPool.install_action}.
		 * 
		 * When an action has been activated using clutter_binding_pool_activate()
		 * the passed #callback will be invoked (with #data).
		 * 
		 * Actions can be blocked with clutter_binding_pool_block_action()
		 * and then unblocked using clutter_binding_pool_unblock_action().
		 * @param key_val key symbol
		 * @param modifiers bitmask of modifiers
		 * @param callback function to be called when the action is activated
		 */
		override_action(key_val: number, modifiers: ModifierType, callback: GObject.Callback): void;
		/**
		 * A #GClosure variant of {@link Clutter.BindingPool.override_action}.
		 * 
		 * Allows overriding the action for #key_val and #modifiers inside a
		 * {@link BindingPool}. See clutter_binding_pool_install_closure().
		 * 
		 * When an action has been activated using clutter_binding_pool_activate()
		 * the passed #callback will be invoked (with #data).
		 * 
		 * Actions can be blocked with clutter_binding_pool_block_action()
		 * and then unblocked using clutter_binding_pool_unblock_action().
		 * @param key_val key symbol
		 * @param modifiers bitmask of modifiers
		 * @param closure a #GClosure
		 */
		override_closure(key_val: number, modifiers: ModifierType, closure: GObject.Closure): void;
		/**
		 * Removes the action matching the given #key_val, #modifiers pair,
		 * if any exists.
		 * @param key_val a key symbol
		 * @param modifiers a bitmask for the modifiers
		 */
		remove_action(key_val: number, modifiers: ModifierType): void;
		/**
		 * Unblockes all the actions with name #action_name inside #pool.
		 * 
		 * Unblocking an action does not cause the callback bound to it to
		 * be invoked in case {@link Clutter.BindingPool.activate} was called on
		 * an action previously blocked with clutter_binding_pool_block_action().
		 * @param action_name an action name
		 */
		unblock_action(action_name: string): void;
		connect(signal: "notify::name", callback: (owner: this, ...args: any) => void): number;

	}

	type BindingPoolInitOptionsMixin = GObject.ObjectInitOptions & 
	Pick<IBindingPool,
		"name">;

	export interface BindingPoolInitOptions extends BindingPoolInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link BindingPool} instead.
	 */
	type BindingPoolMixin = IBindingPool & GObject.Object;

	/**
	 * Container of key bindings. The {@link BindingPool} struct is
	 * private.
	 */
	interface BindingPool extends BindingPoolMixin {}

	class BindingPool {
		public constructor(options?: Partial<BindingPoolInitOptions>);
		/**
		 * Creates a new {@link BindingPool} that can be used to store
		 * key bindings for an actor. The #name must be a unique identifier
		 * for the binding pool, so that {@link Clutter.BindingPool.find} will
		 * be able to return the correct binding pool.
		 * @param name the name of the binding pool
		 * @returns the newly created binding pool with the given
		 *   name. Use {@link GObject.Object.unref} when done.
		 */
		public static new(name: string): BindingPool;
		/**
		 * Finds the {@link BindingPool} with #name.
		 * @param name the name of the binding pool to find
		 * @returns a pointer to the {@link BindingPool}, or %NULL
		 */
		public static find(name: string): BindingPool;
		/**
		 * Retrieves the {@link BindingPool} for the given #GObject class
		 * and, eventually, creates it. This function is a wrapper around
		 * {@link Clutter.BindingPool.new} and uses the class type name as the
		 * unique name for the binding pool.
		 * 
		 * Calling this function multiple times will return the same
		 * #ClutterBindingPool.
		 * 
		 * A binding pool for a class can also be retrieved using
		 * clutter_binding_pool_find() with the class type name:
		 * 
		 * |[
		 *   pool = clutter_binding_pool_find (G_OBJECT_TYPE_NAME (instance));
		 * ]|
		 * @param klass a #GObjectClass pointer
		 * @returns the binding pool for the given class.
		 *   The returned {@link BindingPool} is owned by Clutter and should not
		 *   be freed directly
		 */
		public static get_for_class(klass?: any | null): BindingPool;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link BlurEffect} instead.
	 */
	interface IBlurEffect {

	}

	type BlurEffectInitOptionsMixin = OffscreenEffectInitOptions
	export interface BlurEffectInitOptions extends BlurEffectInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link BlurEffect} instead.
	 */
	type BlurEffectMixin = IBlurEffect & OffscreenEffect;

	/**
	 * {@link BlurEffect} is an opaque structure
	 * whose members cannot be accessed directly
	 */
	interface BlurEffect extends BlurEffectMixin {}

	class BlurEffect {
		public constructor(options?: Partial<BlurEffectInitOptions>);
		/**
		 * Creates a new {@link BlurEffect} to be used with
		 * {@link Clutter.Actor.add_effect}
		 * @returns the newly created {@link BlurEffect} or %NULL
		 */
		public static new(): Effect;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Box} instead.
	 */
	interface IBox {
		/**
		 * @deprecated
		 * Use the {@link Actor.background_color} property
		 * 
		 * The color to be used to paint the background of the
		 * {@link Box}. Setting this property will set the
		 * #ClutterBox:color-set property as a side effect
		 * 
		 * This property sets the #ClutterActor:background-color property
		 * internally.
		 */
		color: Color;
		/**
		 * @deprecated
		 * Use the {@link Actor.background_color_set} property
		 * 
		 * Whether the {@link Box.color} property has been set.
		 * 
		 * This property reads the #ClutterActor:background-color-set property
		 * internally.
		 */
		color_set: boolean;
		/**
		 * @deprecated
		 * Use {@link Clutter.Actor.get_background_color} instead.
		 * 
		 * Retrieves the background color of #box
		 * 
		 * If the {@link Box.color_set} property is set to %FALSE the
		 * returned #ClutterColor is undefined
		 * @returns return location for a {@link Color}
		 */
		get_color(): Color;
		/**
		 * @deprecated
		 * Use {@link Clutter.Actor.get_layout_manager} instead.
		 * 
		 * Retrieves the {@link LayoutManager} instance used by #box
		 * @returns a {@link LayoutManager}. The returned
		 *   #ClutterLayoutManager is owned by the #ClutterBox and it should not
		 *   be unreferenced
		 */
		get_layout_manager(): LayoutManager;
		/**
		 * @deprecated
		 * Use {@link Clutter.Actor.add_child} instead. To set
		 *   specific layout properties, use clutter_layout_manager_child_set()
		 * 
		 * Adds #actor to #box and sets layout properties at the same time,
		 * if the {@link LayoutManager} used by #box has them
		 * 
		 * This function is a wrapper around {@link Clutter.Container.add_actor}
		 * and clutter_layout_manager_child_set()
		 * 
		 * Language bindings should use the vector-based clutter_box_packv()
		 * variant instead
		 * @param actor a {@link Actor}
		 * @param first_property the name of the first property to set, or %NULL
		 */
		pack(actor: Actor, first_property: string): void;
		/**
		 * @deprecated
		 * Use {@link Clutter.Actor.insert_child_above} instead.
		 *   To set specific layout properties, use clutter_layout_manager_child_set()
		 * 
		 * Adds #actor to #box, placing it after #sibling, and sets layout
		 * properties at the same time, if the {@link LayoutManager} used by
		 * #box supports them
		 * 
		 * If #sibling is %NULL then #actor is placed at the end of the
		 * list of children, to be allocated and painted after every other child
		 * 
		 * This function is a wrapper around {@link Clutter.Container.add_actor},
		 * clutter_container_raise_child() and clutter_layout_manager_child_set()
		 * @param actor a {@link Actor}
		 * @param sibling a {@link Actor} or %NULL
		 * @param first_property the name of the first property to set, or %NULL
		 */
		pack_after(actor: Actor, sibling: Actor | null, first_property: string): void;
		/**
		 * @deprecated
		 * Use {@link Clutter.Actor.insert_child_at_index} instead.
		 *   To set specific layout properties, use clutter_layout_manager_child_set()
		 * 
		 * Adds #actor to #box, placing it at #position, and sets layout
		 * properties at the same time, if the {@link LayoutManager} used by
		 * #box supports them
		 * 
		 * If #position is a negative number, or is larger than the number of
		 * children of #box, the new child is added at the end of the list of
		 * children
		 * @param actor a {@link Actor}
		 * @param position the position to insert the #actor at
		 * @param first_property the name of the first property to set, or %NULL
		 */
		pack_at(actor: Actor, position: number, first_property: string): void;
		/**
		 * @deprecated
		 * Use {@link Clutter.Actor.insert_child_below} instead.
		 *   To set specific layout properties, use clutter_layout_manager_child_set()
		 * 
		 * Adds #actor to #box, placing it before #sibling, and sets layout
		 * properties at the same time, if the {@link LayoutManager} used by
		 * #box supports them
		 * 
		 * If #sibling is %NULL then #actor is placed at the beginning of the
		 * list of children, to be allocated and painted below every other child
		 * 
		 * This function is a wrapper around {@link Clutter.Container.add_actor},
		 * clutter_container_lower_child() and clutter_layout_manager_child_set()
		 * @param actor a {@link Actor}
		 * @param sibling a {@link Actor} or %NULL
		 * @param first_property the name of the first property to set, or %NULL
		 */
		pack_before(actor: Actor, sibling: Actor | null, first_property: string): void;
		/**
		 * @deprecated
		 * Use {@link Clutter.Actor.add_child} instead. To set
		 *   specific layout properties, use clutter_layout_manager_child_set()
		 * 
		 * Vector-based variant of {@link Clutter.Box.pack}, intended for language
		 * bindings to use
		 * @param actor a {@link Actor}
		 * @param properties a vector
		 *   containing the property names to set
		 * @param values a vector containing the property
		 *   values to set
		 */
		packv(actor: Actor, properties: string[], values: GObject.Value[]): void;
		/**
		 * @deprecated
		 * Use {@link Clutter.Actor.set_background_color} instead.
		 * 
		 * Sets (or unsets) the background color for #box
		 * @param color the background color, or %NULL to unset
		 */
		set_color(color?: Color | null): void;
		/**
		 * @deprecated
		 * Use {@link Clutter.Actor.set_layout_manager} instead.
		 * 
		 * Sets the {@link LayoutManager} for #box
		 * 
		 * A #ClutterLayoutManager is a delegate object that controls the
		 * layout of the children of #box
		 * @param manager a {@link LayoutManager}
		 */
		set_layout_manager(manager: LayoutManager): void;
		connect(signal: "notify::color", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::color-set", callback: (owner: this, ...args: any) => void): number;

	}

	type BoxInitOptionsMixin = ActorInitOptions & Atk.ImplementorIfaceInitOptions & AnimatableInitOptions & ContainerInitOptions & ScriptableInitOptions & 
	Pick<IBox,
		"color" |
		"color_set">;

	export interface BoxInitOptions extends BoxInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Box} instead.
	 */
	type BoxMixin = IBox & Actor & Atk.ImplementorIface & Animatable & Container & Scriptable;

	/**
	 * The {@link Box} structure contains only private data and should
	 * be accessed using the provided API
	 */
	interface Box extends BoxMixin {}

	class Box {
		public constructor(options?: Partial<BoxInitOptions>);
		/**
		 * @deprecated
		 * Use {@link Clutter.Actor.new} instead.
		 * 
		 * Creates a new {@link Box}. The children of the box will be layed
		 * out by the passed #manager
		 * @param manager a {@link LayoutManager}
		 * @returns the newly created {@link Box} actor
		 */
		public static new(manager: LayoutManager): Actor;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link BoxLayout} instead.
	 */
	interface IBoxLayout {
		/**
		 * @deprecated
		 * The {@link BoxLayout} will honour the easing state of
		 *   the children when allocating them.
		 * 
		 * The duration of the animations, in case {@link BoxLayout.use_animations}
		 * is set to %TRUE.
		 * 
		 * The duration is expressed in milliseconds.
		 */
		easing_duration: number;
		/**
		 * @deprecated
		 * The {@link BoxLayout} will honour the easing state of
		 *   the children when allocating them.
		 * 
		 * The easing mode for the animations, in case
		 * {@link BoxLayout.use_animations} is set to %TRUE.
		 * 
		 * The easing mode has the same semantics of #ClutterAnimation:mode: it can
		 * either be a value from the #ClutterAnimationMode enumeration, like
		 * %CLUTTER_EASE_OUT_CUBIC, or a logical id as returned by
		 * {@link Clutter.Alpha.register_func}.
		 * 
		 * The default value is %CLUTTER_EASE_OUT_CUBIC.
		 */
		easing_mode: number;
		/**
		 * Whether the {@link BoxLayout} should arrange its children
		 * homogeneously, i.e. all children get the same size
		 */
		homogeneous: boolean;
		/**
		 * The orientation of the {@link BoxLayout}, either horizontal
		 * or vertical
		 */
		orientation: Orientation;
		/**
		 * Whether the {@link BoxLayout} should pack items at the start
		 * or append them at the end
		 */
		pack_start: boolean;
		/**
		 * The spacing between children of the {@link BoxLayout}, in pixels
		 */
		spacing: number;
		/**
		 * @deprecated
		 * {@link BoxLayout} will honour the easing state
		 *   of the children when allocating them.
		 * 
		 * Whether the {@link BoxLayout} should animate changes in the
		 * layout, overriding the easing state of the children.
		 */
		use_animations: boolean;
		/**
		 * @deprecated
		 * Use {@link BoxLayout.orientation} instead.
		 * 
		 * Whether the {@link BoxLayout} should arrange its children
		 * alongside the Y axis, instead of alongside the X axis
		 */
		vertical: boolean;
		/**
		 * @deprecated
		 * {@link BoxLayout} will honour #ClutterActor's
		 *   #ClutterActor:x-align and #ClutterActor:y-align properies
		 * 
		 * Retrieves the horizontal and vertical alignment policies for #actor
		 * as set using {@link Clutter.BoxLayout.pack} or clutter_box_layout_set_alignment()
		 * @param actor a {@link Actor} child of #layout
		 * @returns return location for the horizontal alignment policy
		 * 
		 * return location for the vertical alignment policy
		 */
		get_alignment(actor: Actor): [ x_align: BoxAlignment, y_align: BoxAlignment ];
		/**
		 * Retrieves the duration set using {@link Clutter.BoxLayout.set_easing_duration}
		 * @returns the duration of the animations, in milliseconds
		 */
		get_easing_duration(): number;
		/**
		 * Retrieves the easing mode set using {@link Clutter.BoxLayout.set_easing_mode}
		 * @returns an easing mode
		 */
		get_easing_mode(): number;
		/**
		 * @deprecated
		 * {@link BoxLayout} will honour #ClutterActor's
		 *   #ClutterActor:x-expand and #ClutterActor:y-expand properies
		 * 
		 * Retrieves whether #actor should expand inside #layout
		 * @param actor a {@link Actor} child of #layout
		 * @returns %TRUE if the {@link Actor} should expand, %FALSE otherwise
		 */
		get_expand(actor: Actor): boolean;
		/**
		 * @deprecated
		 * {@link BoxLayout} will honour #ClutterActor's
		 *   #ClutterActor:x-align and #ClutterActor:y-align properies
		 * 
		 * Retrieves the horizontal and vertical fill policies for #actor
		 * as set using {@link Clutter.BoxLayout.pack} or clutter_box_layout_set_fill()
		 * @param actor a {@link Actor} child of #layout
		 * @returns return location for the horizontal fill policy
		 * 
		 * return location for the vertical fill policy
		 */
		get_fill(actor: Actor): [ x_fill: boolean, y_fill: boolean ];
		/**
		 * Retrieves if the children sizes are allocated homogeneously.
		 * @returns %TRUE if the {@link BoxLayout} is arranging its children
		 *   homogeneously, and %FALSE otherwise
		 */
		get_homogeneous(): boolean;
		/**
		 * Retrieves the orientation of the #layout.
		 * @returns the orientation of the layout
		 */
		get_orientation(): Orientation;
		/**
		 * Retrieves the value set using {@link Clutter.BoxLayout.set_pack_start}
		 * @returns %TRUE if the {@link BoxLayout} should pack children
		 *  at the beginning of the layout, and %FALSE otherwise
		 */
		get_pack_start(): boolean;
		/**
		 * Retrieves the spacing set using {@link Clutter.BoxLayout.set_spacing}
		 * @returns the spacing between children of the {@link BoxLayout}
		 */
		get_spacing(): number;
		/**
		 * Retrieves whether #layout should animate changes in the layout properties.
		 * @returns %TRUE if the animations should be used, %FALSE otherwise
		 */
		get_use_animations(): boolean;
		/**
		 * @deprecated
		 * Use {@link Clutter.BoxLayout.get_orientation} instead
		 * 
		 * Retrieves the orientation of the #layout as set using the
		 * {@link Clutter.BoxLayout.set_vertical} function
		 * @returns %TRUE if the {@link BoxLayout} is arranging its children
		 *   vertically, and %FALSE otherwise
		 */
		get_vertical(): boolean;
		/**
		 * @deprecated
		 * {@link BoxLayout} honours #ClutterActor's
		 *   align and expand properties. The preferred way is adding
		 *   the #actor with {@link Clutter.Actor.add_child} and setting
		 *   #ClutterActor:x-align, #ClutterActor:y-align,
		 *   #ClutterActor:x-expand and #ClutterActor:y-expand
		 * 
		 * Packs #actor inside the {@link Container} associated to #layout
		 * and sets the layout properties
		 * @param actor a {@link Actor}
		 * @param expand whether the #actor should expand
		 * @param x_fill whether the #actor should fill horizontally
		 * @param y_fill whether the #actor should fill vertically
		 * @param x_align the horizontal alignment policy for #actor
		 * @param y_align the vertical alignment policy for #actor
		 */
		pack(actor: Actor, expand: boolean, x_fill: boolean, y_fill: boolean, x_align: BoxAlignment, y_align: BoxAlignment): void;
		/**
		 * @deprecated
		 * {@link BoxLayout} will honour #ClutterActor's
		 *   #ClutterActor:x-align and #ClutterActor:y-align properies
		 * 
		 * Sets the horizontal and vertical alignment policies for #actor
		 * inside #layout
		 * @param actor a {@link Actor} child of #layout
		 * @param x_align Horizontal alignment policy for #actor
		 * @param y_align Vertical alignment policy for #actor
		 */
		set_alignment(actor: Actor, x_align: BoxAlignment, y_align: BoxAlignment): void;
		/**
		 * @deprecated
		 * The layout manager will honour the easing state
		 *   of the children when allocating them.
		 * 
		 * Sets the duration of the animations used by #layout when animating changes
		 * in the layout properties.
		 * @param msecs the duration of the animations, in milliseconds
		 */
		set_easing_duration(msecs: number): void;
		/**
		 * @deprecated
		 * The layout manager will honour the easing state
		 *   of the children when allocating them.
		 * 
		 * Sets the easing mode to be used by #layout when animating changes in layout
		 * properties.
		 * @param mode an easing mode, either from {@link AnimationMode} or a logical id
		 *   from {@link Clutter.Alpha.register_func}
		 */
		set_easing_mode(mode: number): void;
		/**
		 * @deprecated
		 * {@link BoxLayout} will honour #ClutterActor's
		 *   #ClutterActor:x-expand and #ClutterActor:y-expand properies
		 * 
		 * Sets whether #actor should expand inside #layout
		 * @param actor a {@link Actor} child of #layout
		 * @param expand whether #actor should expand
		 */
		set_expand(actor: Actor, expand: boolean): void;
		/**
		 * @deprecated
		 * {@link BoxLayout} will honour #ClutterActor's
		 *   #ClutterActor:x-align and #ClutterActor:y-align properies
		 * 
		 * Sets the horizontal and vertical fill policies for #actor
		 * inside #layout
		 * @param actor a {@link Actor} child of #layout
		 * @param x_fill whether #actor should fill horizontally the allocated space
		 * @param y_fill whether #actor should fill vertically the allocated space
		 */
		set_fill(actor: Actor, x_fill: boolean, y_fill: boolean): void;
		/**
		 * Sets whether the size of #layout children should be
		 * homogeneous
		 * @param homogeneous %TRUE if the layout should be homogeneous
		 */
		set_homogeneous(homogeneous: boolean): void;
		/**
		 * Sets the orientation of the {@link BoxLayout} layout manager.
		 * @param orientation the orientation of the {@link BoxLayout}
		 */
		set_orientation(orientation: Orientation): void;
		/**
		 * Sets whether children of #layout should be layed out by appending
		 * them or by prepending them
		 * @param pack_start %TRUE if the #layout should pack children at the
		 *   beginning of the layout
		 */
		set_pack_start(pack_start: boolean): void;
		/**
		 * Sets the spacing between children of #layout
		 * @param spacing the spacing between children of the layout, in pixels
		 */
		set_spacing(spacing: number): void;
		/**
		 * @deprecated
		 * The layout manager will honour the easing state
		 *   of the children when allocating them.
		 * 
		 * Sets whether #layout should animate changes in the layout properties
		 * 
		 * The duration of the animations is controlled by
		 * {@link Clutter.BoxLayout.set_easing_duration}; the easing mode to be used
		 * by the animations is controlled by clutter_box_layout_set_easing_mode().
		 * 
		 * Enabling animations will override the easing state of each child
		 * of the actor using #layout, and will use the {@link BoxLayout.easing_mode}
		 * and #ClutterBoxLayout:easing-duration properties instead.
		 * @param animate %TRUE if the #layout should use animations
		 */
		set_use_animations(animate: boolean): void;
		/**
		 * @deprecated
		 * Use {@link Clutter.BoxLayout.set_orientation} instead.
		 * 
		 * Sets whether #layout should arrange its children vertically alongside
		 * the Y axis, instead of horizontally alongside the X axis
		 * @param vertical %TRUE if the layout should be vertical
		 */
		set_vertical(vertical: boolean): void;
		connect(signal: "notify::easing-duration", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::easing-mode", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::homogeneous", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::orientation", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::pack-start", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::spacing", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::use-animations", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::vertical", callback: (owner: this, ...args: any) => void): number;

	}

	type BoxLayoutInitOptionsMixin = LayoutManagerInitOptions & 
	Pick<IBoxLayout,
		"easing_duration" |
		"easing_mode" |
		"homogeneous" |
		"orientation" |
		"pack_start" |
		"spacing" |
		"use_animations" |
		"vertical">;

	export interface BoxLayoutInitOptions extends BoxLayoutInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link BoxLayout} instead.
	 */
	type BoxLayoutMixin = IBoxLayout & LayoutManager;

	/**
	 * The {@link BoxLayout} structure contains only private data
	 * and should be accessed using the provided API
	 */
	interface BoxLayout extends BoxLayoutMixin {}

	class BoxLayout {
		public constructor(options?: Partial<BoxLayoutInitOptions>);
		/**
		 * Creates a new {@link BoxLayout} layout manager
		 * @returns the newly created {@link BoxLayout}
		 */
		public static new(): LayoutManager;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link BrightnessContrastEffect} instead.
	 */
	interface IBrightnessContrastEffect {
		/**
		 * The brightness change to apply to the effect.
		 * 
		 * This property uses a {@link Color} to represent the changes to each
		 * color channel. The range is [ 0, 255 ], with 127 as the value used
		 * to indicate no change; values smaller than 127 indicate a decrease
		 * in brightness, and values larger than 127 indicate an increase in
		 * brightness.
		 */
		brightness: Color;
		/**
		 * The contrast change to apply to the effect.
		 * 
		 * This property uses a {@link Color} to represent the changes to each
		 * color channel. The range is [ 0, 255 ], with 127 as the value used
		 * to indicate no change; values smaller than 127 indicate a decrease
		 * in contrast, and values larger than 127 indicate an increase in
		 * contrast.
		 */
		contrast: Color;
		/**
		 * Retrieves the change in brightness used by #effect.
		 * @returns return location for red component of the
		 *    change in brightness
		 * 
		 * return location for green component of the
		 *    change in brightness
		 * 
		 * return location for blue component of the
		 *    change in brightness
		 */
		get_brightness(): [ red: number | null, green: number | null, blue: number | null ];
		/**
		 * Retrieves the contrast value used by #effect.
		 * @returns return location for red component of the
		 *    change in contrast
		 * 
		 * return location for green component of the
		 *    change in contrast
		 * 
		 * return location for blue component of the
		 *    change in contrast
		 */
		get_contrast(): [ red: number | null, green: number | null, blue: number | null ];
		/**
		 * The range of #brightness is [-1.0, 1.0], where 0.0 designates no change;
		 * a value below 0.0 indicates a decrease in brightness; and a value
		 * above 0.0 indicates an increase of brightness.
		 * @param brightness the brightness change for all three components (r, g, b)
		 */
		set_brightness(brightness: number): void;
		/**
		 * The range for each component is [-1.0, 1.0] where 0.0 designates no change,
		 * values below 0.0 mean a decrease in brightness, and values above indicate
		 * an increase.
		 * @param red red component of the change in brightness
		 * @param green green component of the change in brightness
		 * @param blue blue component of the change in brightness
		 */
		set_brightness_full(red: number, green: number, blue: number): void;
		/**
		 * The range for #contrast is [-1.0, 1.0], where 0.0 designates no change;
		 * a value below 0.0 indicates a decrease in contrast; and a value above
		 * 0.0 indicates an increase.
		 * @param contrast contrast change for all three channels
		 */
		set_contrast(contrast: number): void;
		/**
		 * The range for each component is [-1.0, 1.0] where 0.0 designates no change,
		 * values below 0.0 mean a decrease in contrast, and values above indicate
		 * an increase.
		 * @param red red component of the change in contrast
		 * @param green green component of the change in contrast
		 * @param blue blue component of the change in contrast
		 */
		set_contrast_full(red: number, green: number, blue: number): void;
		connect(signal: "notify::brightness", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::contrast", callback: (owner: this, ...args: any) => void): number;

	}

	type BrightnessContrastEffectInitOptionsMixin = OffscreenEffectInitOptions & 
	Pick<IBrightnessContrastEffect,
		"brightness" |
		"contrast">;

	export interface BrightnessContrastEffectInitOptions extends BrightnessContrastEffectInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link BrightnessContrastEffect} instead.
	 */
	type BrightnessContrastEffectMixin = IBrightnessContrastEffect & OffscreenEffect;

	/**
	 * {@link BrightnessContrastEffect} is an opaque structure
	 * whose members cannot be directly accessed
	 */
	interface BrightnessContrastEffect extends BrightnessContrastEffectMixin {}

	class BrightnessContrastEffect {
		public constructor(options?: Partial<BrightnessContrastEffectInitOptions>);
		/**
		 * Creates a new {@link BrightnessContrastEffect} to be used with
		 * {@link Clutter.Actor.add_effect}
		 * @returns the newly created
		 *   {@link BrightnessContrastEffect} or %NULL.  Use {@link GObject.Object.unref} when
		 *   done.
		 */
		public static new(): Effect;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Canvas} instead.
	 */
	interface ICanvas {
		/**
		 * The height of the canvas.
		 */
		height: number;
		/**
		 * The height of the canvas.
		 */
		scale_factor: number;
		/**
		 * The width of the canvas.
		 */
		width: number;
		/**
		 * Gets the scale factor of the #canvas.
		 * @returns the current #canvas scale factor or -1 if invalid
		 */
		get_scale_factor(): number;
		/**
		 * Sets the scaling factor of the #canvas, and invalidates the content.
		 * 
		 * This function will cause the #canvas to be invalidated only
		 * if the scale factor of the canvas surface has changed.
		 * @param scale the integer scaling factor of the canvas
		 */
		set_scale_factor(scale: number): void;
		/**
		 * Sets the size of the #canvas, and invalidates the content.
		 * 
		 * This function will cause the #canvas to be invalidated only
		 * if the size of the canvas surface has changed.
		 * 
		 * If you want to invalidate the contents of the #canvas when setting
		 * the size, you can use the return value of the function to conditionally
		 * call {@link Clutter.Content.invalidate}:
		 * 
		 * |[
		 *   if (!clutter_canvas_set_size (canvas, width, height))
		 *     clutter_content_invalidate (CLUTTER_CONTENT (canvas));
		 * ]|
		 * @param width the width of the canvas, in pixels
		 * @param height the height of the canvas, in pixels
		 * @returns this function returns %TRUE if the size change
		 *   caused a content invalidation, and %FALSE otherwise
		 */
		set_size(width: number, height: number): boolean;
		/**
		 * The {@link Canvas.draw} signal is emitted each time a canvas is
		 * invalidated.
		 * 
		 * It is safe to connect multiple handlers to this signal: each
		 * handler invocation will be automatically protected by {@link Cairo.save}
		 * and cairo_restore() pairs.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - cr: the Cairo context used to draw 
		 *  - width: the width of the #canvas 
		 *  - height: the height of the #canvas 
		 *  - returns %TRUE if the signal emission should stop, and
		 *   %FALSE otherwise 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "draw", callback: (owner: this, cr: cairo.Context, width: number, height: number) => boolean): number;

		connect(signal: "notify::height", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::scale-factor", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::width", callback: (owner: this, ...args: any) => void): number;

	}

	type CanvasInitOptionsMixin = GObject.ObjectInitOptions & ContentInitOptions & 
	Pick<ICanvas,
		"height" |
		"scale_factor" |
		"width">;

	export interface CanvasInitOptions extends CanvasInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Canvas} instead.
	 */
	type CanvasMixin = ICanvas & GObject.Object & Content;

	/**
	 * The {@link Canvas} structure contains
	 * private data and should only be accessed using the provided
	 * API.
	 */
	interface Canvas extends CanvasMixin {}

	class Canvas {
		public constructor(options?: Partial<CanvasInitOptions>);
		/**
		 * Creates a new instance of {@link Canvas}.
		 * 
		 * You should call {@link Clutter.Canvas.set_size} to set the size of the canvas.
		 * 
		 * You should call clutter_content_invalidate() every time you wish to
		 * draw the contents of the canvas.
		 * @returns The newly allocated instance of
		 *   {@link Canvas}. Use {@link GObject.Object.unref} when done.
		 */
		public static new(): Content;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ChildMeta} instead.
	 */
	interface IChildMeta {
		/**
		 * The {@link Actor} being wrapped by this #ClutterChildMeta
		 */
		actor: Actor;
		/**
		 * The {@link Container} that created this #ClutterChildMeta.
		 */
		container: Container;
		/**
		 * the container handling this data
		 */
		// readonly container: Container;
		/**
		 * the actor wrapped by this data
		 */
		// readonly actor: Actor;
		/**
		 * Retrieves the actor wrapped by #data
		 * @returns a {@link Actor}
		 */
		get_actor(): Actor;
		/**
		 * Retrieves the container using #data
		 * @returns a {@link Container}
		 */
		get_container(): Container;
		connect(signal: "notify::actor", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::container", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::container", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::actor", callback: (owner: this, ...args: any) => void): number;

	}

	type ChildMetaInitOptionsMixin = GObject.ObjectInitOptions & 
	Pick<IChildMeta,
		"actor" |
		"container">;

	export interface ChildMetaInitOptions extends ChildMetaInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ChildMeta} instead.
	 */
	type ChildMetaMixin = IChildMeta & GObject.Object;

	/**
	 * Base interface for container specific state for child actors. A child
	 * data is meant to be used when you need to keep track of information
	 * about each individual child added to a container.
	 * 
	 * In order to use it you should create your own subclass of
	 * {@link ChildMeta} and set the #ClutterContainerIface child_meta_type
	 * interface member to your subclass type, like:
	 * 
	 * |[
	 * static void
	 * my_container_iface_init (ClutterContainerIface *iface)
	 * {
	 *   // set the rest of the #ClutterContainer vtable
	 * 
	 *   container_iface->child_meta_type  = MY_TYPE_CHILD_META;
	 * }
	 * ]|
	 * 
	 * This will automatically create a #ClutterChildMeta of type
	 * `MY_TYPE_CHILD_META` for every actor that is added to the container.
	 * 
	 * The child data for an actor can be retrieved using the
	 * {@link Clutter.Container.get_child_meta} function.
	 * 
	 * The properties of the data and your subclass can be manipulated with
	 * clutter_container_child_set() and clutter_container_child_get() which
	 * act like g_object_set() and g_object_get().
	 * 
	 * You can provide hooks for your own storage as well as control the
	 * instantiation by overriding the #ClutterContainerIface virtual functions
	 * #ClutterContainerIface.create_child_meta(), #ClutterContainerIface.destroy_child_meta(),
	 * and #ClutterContainerIface.get_child_meta().
	 */
	interface ChildMeta extends ChildMetaMixin {}

	class ChildMeta {
		public constructor(options?: Partial<ChildMetaInitOptions>);
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ClickAction} instead.
	 */
	interface IClickAction {
		/**
		 * Whether the clickable actor has the pointer grabbed
		 */
		readonly held: boolean;
		/**
		 * The minimum duration of a press for it to be recognized as a long
		 * press gesture, in milliseconds.
		 * 
		 * A value of -1 will make the {@link ClickAction} use the value of
		 * the #ClutterSettings:long-press-duration property.
		 */
		long_press_duration: number;
		/**
		 * The maximum allowed distance that can be covered (on both axes) before
		 * a long press gesture is cancelled, in pixels.
		 * 
		 * A value of -1 will make the {@link ClickAction} use the value of
		 * the #ClutterSettings:dnd-drag-threshold property.
		 */
		long_press_threshold: number;
		/**
		 * Whether the clickable actor should be in "pressed" state
		 */
		readonly pressed: boolean;
		/**
		 * Retrieves the button that was pressed.
		 * @returns the button value
		 */
		get_button(): number;
		/**
		 * Retrieves the screen coordinates of the button press.
		 * @returns return location for the X coordinate, or %NULL
		 * 
		 * return location for the Y coordinate, or %NULL
		 */
		get_coords(): [ press_x: number, press_y: number ];
		/**
		 * Retrieves the modifier state of the click action.
		 * @returns the modifier state parameter, or 0
		 */
		get_state(): ModifierType;
		/**
		 * Emulates a release of the pointer button, which ungrabs the pointer
		 * and unsets the {@link ClickAction.pressed} state.
		 * 
		 * This function will also cancel the long press gesture if one was
		 * initiated.
		 * 
		 * This function is useful to break a grab, for instance after a certain
		 * amount of time has passed.
		 */
		release(): void;
		/**
		 * The ::clicked signal is emitted when the {@link Actor} to which
		 * a #ClutterClickAction has been applied should respond to a
		 * pointer button press and release events
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - actor: the {@link Actor} attached to the #action 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "clicked", callback: (owner: this, actor: Actor) => void): number;
		/**
		 * The ::long-press signal is emitted during the long press gesture
		 * handling.
		 * 
		 * This signal can be emitted multiple times with different states.
		 * 
		 * The %CLUTTER_LONG_PRESS_QUERY state will be emitted on button presses,
		 * and its return value will determine whether the long press handling
		 * should be initiated. If the signal handlers will return %TRUE, the
		 * %CLUTTER_LONG_PRESS_QUERY state will be followed either by a signal
		 * emission with the %CLUTTER_LONG_PRESS_ACTIVATE state if the long press
		 * constraints were respected, or by a signal emission with the
		 * %CLUTTER_LONG_PRESS_CANCEL state if the long press was cancelled.
		 * 
		 * It is possible to forcibly cancel a long press detection using
		 * {@link Clutter.ClickAction.release}.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - actor: the {@link Actor} attached to the #action 
		 *  - state: the long press state 
		 *  - returns Only the %CLUTTER_LONG_PRESS_QUERY state uses the
		 *   returned value of the handler; other states will ignore it 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "long-press", callback: (owner: this, actor: Actor, state: LongPressState) => boolean): number;

		connect(signal: "notify::held", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::long-press-duration", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::long-press-threshold", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::pressed", callback: (owner: this, ...args: any) => void): number;

	}

	type ClickActionInitOptionsMixin = ActionInitOptions & 
	Pick<IClickAction,
		"long_press_duration" |
		"long_press_threshold">;

	export interface ClickActionInitOptions extends ClickActionInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ClickAction} instead.
	 */
	type ClickActionMixin = IClickAction & Action;

	/**
	 * The {@link ClickAction} structure contains
	 * only private data and should be accessed using the provided API
	 */
	interface ClickAction extends ClickActionMixin {}

	class ClickAction {
		public constructor(options?: Partial<ClickActionInitOptions>);
		/**
		 * Creates a new {@link ClickAction} instance
		 * @returns the newly created {@link ClickAction}
		 */
		public static new(): Action;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ClipNode} instead.
	 */
	interface IClipNode {

	}

	type ClipNodeInitOptionsMixin = PaintNodeInitOptions
	export interface ClipNodeInitOptions extends ClipNodeInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ClipNode} instead.
	 */
	type ClipNodeMixin = IClipNode & PaintNode;

	/**
	 * The {@link TextNode} structure is an opaque
	 * type whose members cannot be directly accessed.
	 */
	interface ClipNode extends ClipNodeMixin {}

	class ClipNode {
		public constructor(options?: Partial<ClipNodeInitOptions>);
		/**
		 * Creates a new {@link PaintNode} that will clip its child
		 * nodes to the 2D regions added to it.
		 * @returns the newly created {@link PaintNode}.
		 *   Use {@link Clutter.PaintNode.unref} when done.
		 */
		public static new(): PaintNode;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Clone} instead.
	 */
	interface IClone {
		/**
		 * This property specifies the source actor being cloned.
		 */
		source: Actor;
		/**
		 * Retrieves the source {@link Actor} being cloned by #self.
		 * @returns the actor source for the clone
		 */
		get_source(): Actor;
		/**
		 * Sets #source as the source actor to be cloned by #self.
		 * @param source a {@link Actor}, or %NULL
		 */
		set_source(source?: Actor | null): void;
		connect(signal: "notify::source", callback: (owner: this, ...args: any) => void): number;

	}

	type CloneInitOptionsMixin = ActorInitOptions & Atk.ImplementorIfaceInitOptions & AnimatableInitOptions & ContainerInitOptions & ScriptableInitOptions & 
	Pick<IClone,
		"source">;

	export interface CloneInitOptions extends CloneInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Clone} instead.
	 */
	type CloneMixin = IClone & Actor & Atk.ImplementorIface & Animatable & Container & Scriptable;

	/**
	 * The {@link Clone} structure contains only private data
	 * and should be accessed using the provided API
	 */
	interface Clone extends CloneMixin {}

	class Clone {
		public constructor(options?: Partial<CloneInitOptions>);
		/**
		 * Creates a new {@link Actor} which clones #source/
		 * @param source a {@link Actor}, or %NULL
		 * @returns the newly created {@link Clone}
		 */
		public static new(source: Actor): Actor;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ColorNode} instead.
	 */
	interface IColorNode {

	}

	type ColorNodeInitOptionsMixin = PipelineNodeInitOptions
	export interface ColorNodeInitOptions extends ColorNodeInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ColorNode} instead.
	 */
	type ColorNodeMixin = IColorNode & PipelineNode;

	/**
	 * The {@link TextNode} structure is an opaque
	 * type whose members cannot be directly accessed.
	 */
	interface ColorNode extends ColorNodeMixin {}

	class ColorNode {
		public constructor(options?: Partial<ColorNodeInitOptions>);
		/**
		 * Creates a new {@link PaintNode} that will paint a solid color
		 * fill using #color.
		 * @param color the color to paint, or %NULL
		 * @returns the newly created {@link PaintNode}. Use
		 *   {@link Clutter.PaintNode.unref} when done
		 */
		public static new(color?: Color | null): PaintNode;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ColorizeEffect} instead.
	 */
	interface IColorizeEffect {
		/**
		 * The tint to apply to the actor
		 */
		tint: Color;
		/**
		 * Retrieves the tint used by #effect
		 * @returns return location for the color used
		 */
		get_tint(): Color;
		/**
		 * Sets the tint to be used when colorizing
		 * @param tint the color to be used
		 */
		set_tint(tint: Color): void;
		connect(signal: "notify::tint", callback: (owner: this, ...args: any) => void): number;

	}

	type ColorizeEffectInitOptionsMixin = OffscreenEffectInitOptions & 
	Pick<IColorizeEffect,
		"tint">;

	export interface ColorizeEffectInitOptions extends ColorizeEffectInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ColorizeEffect} instead.
	 */
	type ColorizeEffectMixin = IColorizeEffect & OffscreenEffect;

	/**
	 * {@link ColorizeEffect} is an opaque structure
	 * whose members cannot be directly accessed
	 */
	interface ColorizeEffect extends ColorizeEffectMixin {}

	class ColorizeEffect {
		public constructor(options?: Partial<ColorizeEffectInitOptions>);
		/**
		 * Creates a new {@link ColorizeEffect} to be used with
		 * {@link Clutter.Actor.add_effect}
		 * @param tint the color to be used
		 * @returns the newly created {@link ColorizeEffect} or %NULL
		 */
		public static new(tint: Color): Effect;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Constraint} instead.
	 */
	interface IConstraint {
		/**
		 * Asks the #constraint to update the size request of a {@link Actor}.
		 * @param actor a {@link Actor}
		 * @param direction a {@link Orientation}
		 * @param for_size the size in the opposite direction
		 */
		update_preferred_size(actor: Actor, direction: Orientation, for_size: number): void;
	}

	type ConstraintInitOptionsMixin = ActorMetaInitOptions
	export interface ConstraintInitOptions extends ConstraintInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Constraint} instead.
	 */
	type ConstraintMixin = IConstraint & ActorMeta;

	/**
	 * The {@link Constraint} structure contains only
	 * private data and should be accessed using the provided API
	 */
	interface Constraint extends ConstraintMixin {}

	class Constraint {
		public constructor(options?: Partial<ConstraintInitOptions>);
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link DeformEffect} instead.
	 */
	interface IDeformEffect {
		/**
		 * A material to be used when painting the back of the actor
		 * to which this effect has been applied
		 * 
		 * By default, no material will be used
		 */
		back_material: any;
		/**
		 * The number of horizontal tiles. The bigger the number, the
		 * smaller the tiles
		 */
		x_tiles: number;
		/**
		 * The number of vertical tiles. The bigger the number, the
		 * smaller the tiles
		 */
		y_tiles: number;
		/**
		 * Retrieves the handle to the back face material used by #effect
		 * @returns a handle for the material, or %NULL.
		 *   The returned material is owned by the {@link DeformEffect} and it
		 *   should not be freed directly
		 */
		get_back_material(): Cogl.Handle;
		/**
		 * Retrieves the number of horizontal and vertical tiles used to sub-divide
		 * the actor's geometry during the effect
		 * @returns return location for the number of horizontal tiles,
		 *   or %NULL
		 * 
		 * return location for the number of vertical tiles,
		 *   or %NULL
		 */
		get_n_tiles(): [ x_tiles: number, y_tiles: number ];
		/**
		 * Invalidates the #effect<!-- -->'s vertices and, if it is associated
		 * to an actor, it will queue a redraw
		 */
		invalidate(): void;
		/**
		 * Sets the material that should be used when drawing the back face
		 * of the actor during a deformation
		 * 
		 * The {@link DeformEffect} will take a reference on the material's
		 * handle
		 * @param material a handle to a Cogl material
		 */
		set_back_material(material?: Cogl.Handle | null): void;
		/**
		 * Sets the number of horizontal and vertical tiles to be used
		 * when applying the effect
		 * 
		 * More tiles allow a finer grained deformation at the expenses
		 * of computation
		 * @param x_tiles number of horizontal tiles
		 * @param y_tiles number of vertical tiles
		 */
		set_n_tiles(x_tiles: number, y_tiles: number): void;
		connect(signal: "notify::back-material", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::x-tiles", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::y-tiles", callback: (owner: this, ...args: any) => void): number;

	}

	type DeformEffectInitOptionsMixin = OffscreenEffectInitOptions & 
	Pick<IDeformEffect,
		"back_material" |
		"x_tiles" |
		"y_tiles">;

	export interface DeformEffectInitOptions extends DeformEffectInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link DeformEffect} instead.
	 */
	type DeformEffectMixin = IDeformEffect & OffscreenEffect;

	/**
	 * The {@link DeformEffect} structure contains
	 * only private data and should be accessed using the provided API
	 */
	interface DeformEffect extends DeformEffectMixin {}

	class DeformEffect {
		public constructor(options?: Partial<DeformEffectInitOptions>);
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link DesaturateEffect} instead.
	 */
	interface IDesaturateEffect {
		/**
		 * The desaturation factor, between 0.0 (no desaturation) and 1.0 (full
		 * desaturation).
		 */
		factor: number;
		/**
		 * Retrieves the desaturation factor of #effect
		 * @returns the desaturation factor
		 */
		get_factor(): number;
		/**
		 * Sets the desaturation factor for #effect, with 0.0 being "do not desaturate"
		 * and 1.0 being "fully desaturate"
		 * @param factor the desaturation factor, between 0.0 and 1.0
		 */
		set_factor(factor: number): void;
		connect(signal: "notify::factor", callback: (owner: this, ...args: any) => void): number;

	}

	type DesaturateEffectInitOptionsMixin = OffscreenEffectInitOptions & 
	Pick<IDesaturateEffect,
		"factor">;

	export interface DesaturateEffectInitOptions extends DesaturateEffectInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link DesaturateEffect} instead.
	 */
	type DesaturateEffectMixin = IDesaturateEffect & OffscreenEffect;

	/**
	 * {@link DesaturateEffect} is an opaque structure
	 * whose members cannot be directly accessed
	 */
	interface DesaturateEffect extends DesaturateEffectMixin {}

	class DesaturateEffect {
		public constructor(options?: Partial<DesaturateEffectInitOptions>);
		/**
		 * Creates a new {@link DesaturateEffect} to be used with
		 * {@link Clutter.Actor.add_effect}
		 * @param factor the desaturation factor, between 0.0 and 1.0
		 * @returns the newly created {@link DesaturateEffect} or %NULL
		 */
		public static new(factor: number): Effect;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link DragAction} instead.
	 */
	interface IDragAction {
		/**
		 * Constains the dragging action (or in particular, the resulting
		 * actor position) to the specified {@link Rect}, in parent's
		 * coordinates.
		 */
		drag_area: Graphene.Rect;
		/**
		 * Whether the {@link DragAction.drag_area} property has been set.
		 */
		readonly drag_area_set: boolean;
		/**
		 * Constraints the dragging action to the specified axis
		 */
		drag_axis: DragAxis;
		/**
		 * The {@link Actor} that is effectively being dragged
		 * 
		 * A #ClutterDragAction will, be default, use the #ClutterActor that
		 * has been attached to the action; it is possible to create a
		 * separate #ClutterActor and use it instead.
		 * 
		 * Setting this property has no effect on the #ClutterActor argument
		 * passed to the #ClutterDragAction signals
		 */
		drag_handle: Actor;
		/**
		 * The horizontal threshold, in pixels, that the cursor must travel
		 * in order to begin a drag action.
		 * 
		 * When set to a positive value, {@link DragAction} will only emit
		 * #ClutterDragAction::drag-begin if the pointer has moved
		 * horizontally at least of the given amount of pixels since
		 * the button press event.
		 * 
		 * When set to -1, #ClutterDragAction will use the default threshold
		 * stored in the #ClutterSettings:dnd-drag-threshold property of
		 * #ClutterSettings.
		 * 
		 * When read, this property will always return a valid drag
		 * threshold, either as set or the default one.
		 */
		x_drag_threshold: number;
		/**
		 * The vertical threshold, in pixels, that the cursor must travel
		 * in order to begin a drag action.
		 * 
		 * When set to a positive value, {@link DragAction} will only emit
		 * #ClutterDragAction::drag-begin if the pointer has moved
		 * vertically at least of the given amount of pixels since
		 * the button press event.
		 * 
		 * When set to -1, #ClutterDragAction will use the value stored
		 * in the #ClutterSettings:dnd-drag-threshold property of
		 * #ClutterSettings.
		 * 
		 * When read, this property will always return a valid drag
		 * threshold, either as set or the default one.
		 */
		y_drag_threshold: number;
		/**
		 * Retrieves the "drag area" associated with #action, that
		 * is a #graphene_rect_t that constrains the actor movements,
		 * in parents coordinates.
		 * @returns %TRUE if the actor is actually constrained (and thus
		 *          #drag_area is valid), %FALSE otherwise
		 * 
		 * a #graphene_rect_t to be filled
		 */
		get_drag_area(): [ boolean, Graphene.Rect ];
		/**
		 * Retrieves the axis constraint set by {@link Clutter.DragAction.set_drag_axis}
		 * @returns the axis constraint
		 */
		get_drag_axis(): DragAxis;
		/**
		 * Retrieves the drag handle set by {@link Clutter.DragAction.set_drag_handle}
		 * @returns a {@link Actor}, used as the drag
		 *   handle, or %NULL if none was set
		 */
		get_drag_handle(): Actor;
		/**
		 * Retrieves the values set by {@link Clutter.DragAction.set_drag_threshold}.
		 * 
		 * If the {@link DragAction.x_drag_threshold} property or the
		 * #ClutterDragAction:y-drag-threshold property have been set to -1 then
		 * this function will return the default drag threshold value as stored
		 * by the #ClutterSettings:dnd-drag-threshold property of #ClutterSettings.
		 * @returns return location for the horizontal drag
		 *   threshold value, in pixels
		 * 
		 * return location for the vertical drag
		 *   threshold value, in pixels
		 */
		get_drag_threshold(): [ x_threshold: number, y_threshold: number ];
		/**
		 * Retrieves the coordinates, in stage space, of the latest motion
		 * event during the dragging
		 * @returns return location for the latest motion
		 *   event's X coordinate
		 * 
		 * return location for the latest motion
		 *   event's Y coordinate
		 */
		get_motion_coords(): [ motion_x: number, motion_y: number ];
		/**
		 * Retrieves the coordinates, in stage space, of the press event
		 * that started the dragging
		 * @returns return location for the press event's X coordinate
		 * 
		 * return location for the press event's Y coordinate
		 */
		get_press_coords(): [ press_x: number, press_y: number ];
		/**
		 * Sets #drag_area to constrain the dragging of the actor associated
		 * with #action, so that it position is always within #drag_area, expressed
		 * in parent's coordinates.
		 * If #drag_area is %NULL, the actor is not constrained.
		 * @param drag_area a {@link Rect}
		 */
		set_drag_area(drag_area?: Graphene.Rect | null): void;
		/**
		 * Restricts the dragging action to a specific axis
		 * @param axis the axis to constraint the dragging to
		 */
		set_drag_axis(axis: DragAxis): void;
		/**
		 * Sets the actor to be used as the drag handle.
		 * @param handle a {@link Actor}, or %NULL to unset
		 */
		set_drag_handle(handle?: Actor | null): void;
		/**
		 * Sets the horizontal and vertical drag thresholds that must be
		 * cleared by the pointer before #action can begin the dragging.
		 * 
		 * If #x_threshold or #y_threshold are set to -1 then the default
		 * drag threshold stored in the {@link Settings.dnd_drag_threshold}
		 * property of #ClutterSettings will be used.
		 * @param x_threshold a distance on the horizontal axis, in pixels, or
		 *   -1 to use the default drag threshold from {@link Settings}
		 * @param y_threshold a distance on the vertical axis, in pixels, or
		 *   -1 to use the default drag threshold from {@link Settings}
		 */
		set_drag_threshold(x_threshold: number, y_threshold: number): void;
		/**
		 * The ::drag-begin signal is emitted when the {@link DragAction}
		 * starts the dragging
		 * 
		 * The emission of this signal can be delayed by using the
		 * #ClutterDragAction:x-drag-threshold and
		 * #ClutterDragAction:y-drag-threshold properties
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - actor: the {@link Actor} attached to the action 
		 *  - event_x: the X coordinate (in stage space) of the press event 
		 *  - event_y: the Y coordinate (in stage space) of the press event 
		 *  - modifiers: the modifiers of the press event 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "drag-begin", callback: (owner: this, actor: Actor, event_x: number, event_y: number, modifiers: ModifierType) => void): number;
		/**
		 * The ::drag-end signal is emitted at the end of the dragging,
		 * when the pointer button's is released
		 * 
		 * This signal is emitted if and only if the {@link DragAction.drag_begin}
		 * signal has been emitted first
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - actor: the {@link Actor} attached to the action 
		 *  - event_x: the X coordinate (in stage space) of the release event 
		 *  - event_y: the Y coordinate (in stage space) of the release event 
		 *  - modifiers: the modifiers of the release event 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "drag-end", callback: (owner: this, actor: Actor, event_x: number, event_y: number, modifiers: ModifierType) => void): number;
		/**
		 * The ::drag-motion signal is emitted for each motion event after
		 * the {@link DragAction.drag_begin} signal has been emitted.
		 * 
		 * The components of the distance between the press event and the
		 * latest motion event are computed in the actor's coordinate space,
		 * to take into account eventual transformations. If you want the
		 * stage coordinates of the latest motion event you can use
		 * {@link Clutter.DragAction.get_motion_coords}.
		 * 
		 * The default handler of the signal will call clutter_actor_move_by()
		 * either on #actor or, if set, of #ClutterDragAction:drag-handle using
		 * the #delta_x and #delta_y components of the dragging motion. If you
		 * want to override the default behaviour, you can connect to the
		 * #ClutterDragAction::drag-progress signal and return %FALSE from the
		 * handler.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - actor: the {@link Actor} attached to the action 
		 *  - delta_x: the X component of the distance between the press event
		 *   that began the dragging and the current position of the pointer,
		 *   as of the latest motion event 
		 *  - delta_y: the Y component of the distance between the press event
		 *   that began the dragging and the current position of the pointer,
		 *   as of the latest motion event 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "drag-motion", callback: (owner: this, actor: Actor, delta_x: number, delta_y: number) => void): number;
		/**
		 * The ::drag-progress signal is emitted for each motion event after
		 * the {@link DragAction.drag_begin} signal has been emitted.
		 * 
		 * The components of the distance between the press event and the
		 * latest motion event are computed in the actor's coordinate space,
		 * to take into account eventual transformations. If you want the
		 * stage coordinates of the latest motion event you can use
		 * {@link Clutter.DragAction.get_motion_coords}.
		 * 
		 * The default handler will emit #ClutterDragAction::drag-motion,
		 * if #ClutterDragAction::drag-progress emission returns %TRUE.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - actor: the {@link Actor} attached to the action 
		 *  - delta_x: the X component of the distance between the press event
		 *   that began the dragging and the current position of the pointer,
		 *   as of the latest motion event 
		 *  - delta_y: the Y component of the distance between the press event
		 *   that began the dragging and the current position of the pointer,
		 *   as of the latest motion event 
		 *  - returns %TRUE if the drag should continue, and %FALSE
		 *   if it should be stopped. 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "drag-progress", callback: (owner: this, actor: Actor, delta_x: number, delta_y: number) => boolean): number;

		connect(signal: "notify::drag-area", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::drag-area-set", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::drag-axis", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::drag-handle", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::x-drag-threshold", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::y-drag-threshold", callback: (owner: this, ...args: any) => void): number;

	}

	type DragActionInitOptionsMixin = ActionInitOptions & 
	Pick<IDragAction,
		"drag_area" |
		"drag_axis" |
		"drag_handle" |
		"x_drag_threshold" |
		"y_drag_threshold">;

	export interface DragActionInitOptions extends DragActionInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link DragAction} instead.
	 */
	type DragActionMixin = IDragAction & Action;

	/**
	 * The {@link DragAction} structure contains only
	 * private data and should be accessed using the provided API
	 */
	interface DragAction extends DragActionMixin {}

	class DragAction {
		public constructor(options?: Partial<DragActionInitOptions>);
		/**
		 * Creates a new {@link DragAction} instance
		 * @returns the newly created {@link DragAction}
		 */
		public static new(): Action;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link DropAction} instead.
	 */
	interface IDropAction {

		/**
		 * The ::can-drop signal is emitted when the dragged actor is dropped
		 * on #actor. The return value of the ::can-drop signal will determine
		 * whether or not the {@link DropAction.drop} signal is going to be
		 * emitted on #action.
		 * 
		 * The default implementation of #ClutterDropAction returns %TRUE for
		 * this signal.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - actor: the {@link Actor} attached to the #action 
		 *  - event_x: the X coordinate (in stage space) of the drop event 
		 *  - event_y: the Y coordinate (in stage space) of the drop event 
		 *  - returns %TRUE if the drop is accepted, and %FALSE otherwise 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "can-drop", callback: (owner: this, actor: Actor, event_x: number, event_y: number) => boolean): number;
		/**
		 * The ::drop signal is emitted when the dragged actor is dropped
		 * on #actor. This signal is only emitted if at least an handler of
		 * {@link DropAction.can_drop} returns %TRUE.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - actor: the {@link Actor} attached to the #action 
		 *  - event_x: the X coordinate (in stage space) of the drop event 
		 *  - event_y: the Y coordinate (in stage space) of the drop event 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "drop", callback: (owner: this, actor: Actor, event_x: number, event_y: number) => void): number;
		/**
		 * The ::drop-cancel signal is emitted when the drop is refused
		 * by an emission of the {@link DropAction.can_drop} signal.
		 * 
		 * After the ::drop-cancel signal is fired the active drag is
		 * terminated.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - actor: the {@link Actor} attached to the #action 
		 *  - event_x: the X coordinate (in stage space) of the drop event 
		 *  - event_y: the Y coordinate (in stage space) of the drop event 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "drop-cancel", callback: (owner: this, actor: Actor, event_x: number, event_y: number) => void): number;
		/**
		 * The ::over-in signal is emitted when the dragged actor crosses
		 * into #actor.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - actor: the {@link Actor} attached to the #action 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "over-in", callback: (owner: this, actor: Actor) => void): number;
		/**
		 * The ::over-out signal is emitted when the dragged actor crosses
		 * outside #actor.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - actor: the {@link Actor} attached to the #action 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "over-out", callback: (owner: this, actor: Actor) => void): number;

	}

	type DropActionInitOptionsMixin = ActionInitOptions
	export interface DropActionInitOptions extends DropActionInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link DropAction} instead.
	 */
	type DropActionMixin = IDropAction & Action;

	/**
	 * The {@link DropAction} structure contains only
	 * private data and should be accessed using the provided API.
	 */
	interface DropAction extends DropActionMixin {}

	class DropAction {
		public constructor(options?: Partial<DropActionInitOptions>);
		/**
		 * Creates a new {@link DropAction}.
		 * 
		 * Use {@link Clutter.Actor.add_action} to add the action to a #ClutterActor.
		 * @returns the newly created {@link DropAction}
		 */
		public static new(): Action;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Effect} instead.
	 */
	interface IEffect {
		/**
		 * Queues a repaint of the effect. The effect can detect when the ‘paint’
		 * method is called as a result of this function because it will not
		 * have the %CLUTTER_EFFECT_PAINT_ACTOR_DIRTY flag set. In that case the
		 * effect is free to assume that the actor has not changed its
		 * appearance since the last time it was painted so it doesn't need to
		 * call {@link Clutter.Actor.continue_paint} if it can draw a cached
		 * image. This is mostly intended for effects that are using a
		 * %CoglOffscreen to redirect the actor (such as
		 * %ClutterOffscreenEffect). In that case the effect can save a bit of
		 * rendering time by painting the cached texture without causing the
		 * entire actor to be painted.
		 * 
		 * This function can be used by effects that have their own animatable
		 * parameters. For example, an effect which adds a varying degree of a
		 * red tint to an actor by redirecting it through a CoglOffscreen
		 * might have a property to specify the level of tint. When this value
		 * changes, the underlying actor doesn't need to be redrawn so the
		 * effect can call clutter_effect_queue_repaint() to make sure the
		 * effect is repainted.
		 * 
		 * Note however that modifying the position of the parent of an actor
		 * may change the appearance of the actor because its transformation
		 * matrix would change. In this case a redraw wouldn't be queued on
		 * the actor itself so the %CLUTTER_EFFECT_PAINT_ACTOR_DIRTY would still
		 * not be set. The effect can detect this case by keeping track of the
		 * last modelview matrix that was used to render the actor and
		 * veryifying that it remains the same in the next paint.
		 * 
		 * Any other effects that are layered on top of the passed in effect
		 * will still be passed the %CLUTTER_EFFECT_PAINT_ACTOR_DIRTY flag. If
		 * anything queues a redraw on the actor without specifying an effect
		 * or with an effect that is lower in the chain of effects than this
		 * one then that will override this call. In that case this effect
		 * will instead be called with the %CLUTTER_EFFECT_PAINT_ACTOR_DIRTY
		 * flag set.
		 */
		queue_repaint(): void;
	}

	type EffectInitOptionsMixin = ActorMetaInitOptions
	export interface EffectInitOptions extends EffectInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Effect} instead.
	 */
	type EffectMixin = IEffect & ActorMeta;

	/**
	 * The {@link Effect} structure contains only private data and should
	 * be accessed using the provided API
	 */
	interface Effect extends EffectMixin {}

	class Effect {
		public constructor(options?: Partial<EffectInitOptions>);
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link FixedLayout} instead.
	 */
	interface IFixedLayout {

	}

	type FixedLayoutInitOptionsMixin = LayoutManagerInitOptions
	export interface FixedLayoutInitOptions extends FixedLayoutInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link FixedLayout} instead.
	 */
	type FixedLayoutMixin = IFixedLayout & LayoutManager;

	/**
	 * The {@link FixedLayout} structure contains only private data and
	 * it should be accessed using the provided API
	 */
	interface FixedLayout extends FixedLayoutMixin {}

	class FixedLayout {
		public constructor(options?: Partial<FixedLayoutInitOptions>);
		/**
		 * Creates a new {@link FixedLayout}
		 * @returns the newly created {@link FixedLayout}
		 */
		public static new(): LayoutManager;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link FlowLayout} instead.
	 */
	interface IFlowLayout {
		/**
		 * The spacing between columns, in pixels; the value of this
		 * property is honoured by horizontal non-overflowing layouts
		 * and by vertical overflowing layouts
		 */
		column_spacing: number;
		/**
		 * Whether each child inside the {@link FlowLayout} should receive
		 * the same allocation
		 */
		homogeneous: boolean;
		/**
		 * Maximum width for each column in the layout, in pixels. If
		 * set to -1 the width will be the maximum child width
		 */
		max_column_width: number;
		/**
		 * Maximum height for each row in the layout, in pixels. If
		 * set to -1 the width will be the maximum child height
		 */
		max_row_height: number;
		/**
		 * Minimum width for each column in the layout, in pixels
		 */
		min_column_width: number;
		/**
		 * Minimum height for each row in the layout, in pixels
		 */
		min_row_height: number;
		/**
		 * The orientation of the {@link FlowLayout}. The children
		 * of the layout will be layed out following the orientation.
		 * 
		 * This property also controls the overflowing directions
		 */
		orientation: FlowOrientation;
		/**
		 * The spacing between rows, in pixels; the value of this
		 * property is honoured by vertical non-overflowing layouts and
		 * by horizontal overflowing layouts
		 */
		row_spacing: number;
		/**
		 * Whether the {@link FlowLayout} should arrange its children
		 * on a grid
		 */
		snap_to_grid: boolean;
		/**
		 * Retrieves the spacing between columns
		 * @returns the spacing between columns of the {@link FlowLayout},
		 *   in pixels
		 */
		get_column_spacing(): number;
		/**
		 * Retrieves the minimum and maximum column widths
		 * @returns return location for the minimum column width, or %NULL
		 * 
		 * return location for the maximum column width, or %NULL
		 */
		get_column_width(): [ min_width: number, max_width: number ];
		/**
		 * Retrieves whether the #layout is homogeneous
		 * @returns %TRUE if the {@link FlowLayout} is homogeneous
		 */
		get_homogeneous(): boolean;
		/**
		 * Retrieves the orientation of the #layout
		 * @returns the orientation of the {@link FlowLayout}
		 */
		get_orientation(): FlowOrientation;
		/**
		 * Retrieves the minimum and maximum row heights
		 * @returns return location for the minimum row height, or %NULL
		 * 
		 * return location for the maximum row height, or %NULL
		 */
		get_row_height(): [ min_height: number, max_height: number ];
		/**
		 * Retrieves the spacing between rows
		 * @returns the spacing between rows of the {@link FlowLayout},
		 *   in pixels
		 */
		get_row_spacing(): number;
		/**
		 * Retrieves the value of {@link FlowLayout.snap_to_grid} property
		 * @returns %TRUE if the #layout is placing its children on a grid
		 */
		get_snap_to_grid(): boolean;
		/**
		 * Sets the space between columns, in pixels
		 * @param spacing the space between columns
		 */
		set_column_spacing(spacing: number): void;
		/**
		 * Sets the minimum and maximum widths that a column can have
		 * @param min_width minimum width of a column
		 * @param max_width maximum width of a column
		 */
		set_column_width(min_width: number, max_width: number): void;
		/**
		 * Sets whether the #layout should allocate the same space for
		 * each child
		 * @param homogeneous whether the layout should be homogeneous or not
		 */
		set_homogeneous(homogeneous: boolean): void;
		/**
		 * Sets the orientation of the flow layout
		 * 
		 * The orientation controls the direction used to allocate
		 * the children: either horizontally or vertically. The
		 * orientation also controls the direction of the overflowing
		 * @param orientation the orientation of the layout
		 */
		set_orientation(orientation: FlowOrientation): void;
		/**
		 * Sets the minimum and maximum heights that a row can have
		 * @param min_height the minimum height of a row
		 * @param max_height the maximum height of a row
		 */
		set_row_height(min_height: number, max_height: number): void;
		/**
		 * Sets the spacing between rows, in pixels
		 * @param spacing the space between rows
		 */
		set_row_spacing(spacing: number): void;
		/**
		 * Whether the #layout should place its children on a grid.
		 * @param snap_to_grid %TRUE if #layout should place its children on a grid
		 */
		set_snap_to_grid(snap_to_grid: boolean): void;
		connect(signal: "notify::column-spacing", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::homogeneous", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::max-column-width", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::max-row-height", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::min-column-width", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::min-row-height", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::orientation", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::row-spacing", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::snap-to-grid", callback: (owner: this, ...args: any) => void): number;

	}

	type FlowLayoutInitOptionsMixin = LayoutManagerInitOptions & 
	Pick<IFlowLayout,
		"column_spacing" |
		"homogeneous" |
		"max_column_width" |
		"max_row_height" |
		"min_column_width" |
		"min_row_height" |
		"orientation" |
		"row_spacing" |
		"snap_to_grid">;

	export interface FlowLayoutInitOptions extends FlowLayoutInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link FlowLayout} instead.
	 */
	type FlowLayoutMixin = IFlowLayout & LayoutManager;

	/**
	 * The {@link FlowLayout} structure contains only private data
	 * and should be accessed using the provided API
	 */
	interface FlowLayout extends FlowLayoutMixin {}

	class FlowLayout {
		public constructor(options?: Partial<FlowLayoutInitOptions>);
		/**
		 * Creates a new {@link FlowLayout} with the given #orientation
		 * @param orientation the orientation of the flow layout
		 * @returns the newly created {@link FlowLayout}
		 */
		public static new(orientation: FlowOrientation): LayoutManager;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link GestureAction} instead.
	 */
	interface IGestureAction {
		/**
		 * Number of touch points to trigger a gesture action.
		 */
		n_touch_points: number;
		/**
		 * The horizontal trigger distance to be used by the action to either
		 * emit the {@link GestureAction.gesture_begin} signal or to emit
		 * the #ClutterGestureAction::gesture-cancel signal.
		 * 
		 * A negative value will be interpreted as the default drag threshold.
		 */
		threshold_trigger_distance_x: number;
		/**
		 * The vertical trigger distance to be used by the action to either
		 * emit the {@link GestureAction.gesture_begin} signal or to emit
		 * the #ClutterGestureAction::gesture-cancel signal.
		 * 
		 * A negative value will be interpreted as the default drag threshold.
		 */
		threshold_trigger_distance_y: number;
		/**
		 * The trigger edge to be used by the action to either emit the
		 * {@link GestureAction.gesture_begin} signal or to emit the
		 * #ClutterGestureAction::gesture-cancel signal.
		 */
		threshold_trigger_edge: GestureTriggerEdge;
		/**
		 * Cancel a {@link GestureAction} before it begins
		 */
		cancel(): void;
		/**
		 * Retrieves the {@link InputDevice} of a touch point.
		 * @param point the touch point index, with 0 being the first touch
		 *   point received by the action
		 * @returns the {@link InputDevice} of a touch point.
		 */
		get_device(point: number): InputDevice;
		/**
		 * Retrieves a reference to the last {@link Event} for a touch point. Call
		 * {@link Clutter.Event.copy} if you need to store the reference somewhere.
		 * @param point index of a point currently active
		 * @returns the last {@link Event} for a touch point.
		 */
		get_last_event(point: number): Event;
		/**
		 * Retrieves the coordinates, in stage space, of the latest motion
		 * event during the dragging.
		 * @param point the touch point index, with 0 being the first touch
		 *   point received by the action
		 * @returns return location for the latest motion
		 *   event's X coordinate
		 * 
		 * return location for the latest motion
		 *   event's Y coordinate
		 */
		get_motion_coords(point: number): [ motion_x: number | null, motion_y: number | null ];
		/**
		 * Retrieves the incremental delta since the last motion event
		 * during the dragging.
		 * @param point the touch point index, with 0 being the first touch
		 *   point received by the action
		 * @returns the distance since last motion event
		 * 
		 * return location for the X axis
		 *   component of the incremental motion delta
		 * 
		 * return location for the Y axis
		 *   component of the incremental motion delta
		 */
		get_motion_delta(point: number): [ number, number | null, number | null ];
		/**
		 * Retrieves the number of points currently active.
		 * @returns the number of points currently active.
		 */
		get_n_current_points(): number;
		/**
		 * Retrieves the number of requested points to trigger the gesture.
		 * @returns the number of points to trigger the gesture.
		 */
		get_n_touch_points(): number;
		/**
		 * Retrieves the coordinates, in stage space, of the press event
		 * that started the dragging for a specific touch point.
		 * @param point the touch point index, with 0 being the first touch
		 *   point received by the action
		 * @returns return location for the press
		 *   event's X coordinate
		 * 
		 * return location for the press
		 *   event's Y coordinate
		 */
		get_press_coords(point: number): [ press_x: number | null, press_y: number | null ];
		/**
		 * Retrieves the coordinates, in stage space, where the touch point was
		 * last released.
		 * @param point the touch point index, with 0 being the first touch
		 *   point received by the action
		 * @returns return location for the X coordinate of
		 *   the last release
		 * 
		 * return location for the Y coordinate of
		 *   the last release
		 */
		get_release_coords(point: number): [ release_x: number | null, release_y: number | null ];
		/**
		 * Retrieves the {@link EventSequence} of a touch point.
		 * @param point index of a point currently active
		 * @returns the {@link EventSequence} of a touch point.
		 */
		get_sequence(point: number): EventSequence;
		/**
		 * Retrieves the threshold trigger distance of the gesture #action,
		 * as set using {@link Clutter.GestureAction.set_threshold_trigger_distance}.
		 * @returns The return location for the horizontal distance, or %NULL
		 * 
		 * The return location for the vertical distance, or %NULL
		 */
		get_threshold_trigger_distance(): [ x: number | null, y: number | null ];
		/**
		 * Retrieves the edge trigger of the gesture #action, as set using
		 * {@link Clutter.GestureAction.set_threshold_trigger_edge}.
		 * @returns the edge trigger
		 */
		get_threshold_trigger_edge(): GestureTriggerEdge;
		/**
		 * @deprecated
		 * Use {@link Clutter.GestureAction.get_threshold_trigger_edge} instead.
		 * 
		 * Retrieves the edge trigger of the gesture #action, as set using
		 * {@link Clutter.GestureAction.set_threshold_trigger_edge}.
		 * @returns the edge trigger
		 */
		get_threshold_trigger_egde(): GestureTriggerEdge;
		/**
		 * Retrieves the velocity, in stage pixels per millisecond, of the
		 * latest motion event during the dragging.
		 * @param point the touch point index, with 0 being the first touch
		 *   point received by the action
		 * @returns 
		 * 
		 * return location for the latest motion
		 *   event's X velocity
		 * 
		 * return location for the latest motion
		 *   event's Y velocity
		 */
		get_velocity(point: number): [ number, number | null, number | null ];
		/**
		 * Sets the number of points needed to trigger the gesture.
		 * @param nb_points a number of points
		 */
		set_n_touch_points(nb_points: number): void;
		/**
		 * Sets the threshold trigger distance for the gesture drag threshold, if any.
		 * 
		 * This function should only be called by sub-classes of
		 * {@link GestureAction} during their construction phase.
		 * @param x the distance on the horizontal axis
		 * @param y the distance on the vertical axis
		 */
		set_threshold_trigger_distance(x: number, y: number): void;
		/**
		 * Sets the edge trigger for the gesture drag threshold, if any.
		 * 
		 * This function should only be called by sub-classes of
		 * {@link GestureAction} during their construction phase.
		 * @param edge the %ClutterGestureTriggerEdge
		 */
		set_threshold_trigger_edge(edge: GestureTriggerEdge): void;
		/**
		 * The ::gesture_begin signal is emitted when the {@link Actor} to which
		 * a #ClutterGestureAction has been applied starts receiving a gesture.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - actor: the {@link Actor} attached to the #action 
		 *  - returns %TRUE if the gesture should start, and %FALSE if
		 *   the gesture should be ignored. 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "gesture-begin", callback: (owner: this, actor: Actor) => boolean): number;
		/**
		 * The ::gesture-cancel signal is emitted when the ongoing gesture gets
		 * cancelled from the {@link GestureAction.gesture_progress} signal handler.
		 * 
		 * This signal is emitted if and only if the #ClutterGestureAction::gesture-begin
		 * signal has been emitted first.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - actor: the {@link Actor} attached to the #action 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "gesture-cancel", callback: (owner: this, actor: Actor) => void): number;
		/**
		 * The ::gesture-end signal is emitted at the end of the gesture gesture,
		 * when the pointer's button is released
		 * 
		 * This signal is emitted if and only if the {@link GestureAction.gesture_begin}
		 * signal has been emitted first.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - actor: the {@link Actor} attached to the #action 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "gesture-end", callback: (owner: this, actor: Actor) => void): number;
		/**
		 * The ::gesture-progress signal is emitted for each motion event after
		 * the {@link GestureAction.gesture_begin} signal has been emitted.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - actor: the {@link Actor} attached to the #action 
		 *  - returns %TRUE if the gesture should continue, and %FALSE if
		 *   the gesture should be cancelled. 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "gesture-progress", callback: (owner: this, actor: Actor) => boolean): number;

		connect(signal: "notify::n-touch-points", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::threshold-trigger-distance-x", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::threshold-trigger-distance-y", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::threshold-trigger-edge", callback: (owner: this, ...args: any) => void): number;

	}

	type GestureActionInitOptionsMixin = ActionInitOptions & 
	Pick<IGestureAction,
		"n_touch_points" |
		"threshold_trigger_distance_x" |
		"threshold_trigger_distance_y" |
		"threshold_trigger_edge">;

	export interface GestureActionInitOptions extends GestureActionInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link GestureAction} instead.
	 */
	type GestureActionMixin = IGestureAction & Action;

	/**
	 * The {@link GestureAction} structure contains
	 * only private data and should be accessed using the provided API
	 */
	interface GestureAction extends GestureActionMixin {}

	class GestureAction {
		public constructor(options?: Partial<GestureActionInitOptions>);
		/**
		 * Creates a new {@link GestureAction} instance.
		 * @returns the newly created {@link GestureAction}
		 */
		public static new(): Action;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link GridLayout} instead.
	 */
	interface IGridLayout {
		/**
		 * Whether all columns of the layout should have the same width
		 */
		column_homogeneous: boolean;
		/**
		 * The amount of space in pixels between two consecutive columns
		 */
		column_spacing: number;
		/**
		 * The orientation of the layout, either horizontal or vertical
		 */
		orientation: Orientation;
		/**
		 * Whether all rows of the layout should have the same height
		 */
		row_homogeneous: boolean;
		/**
		 * The amount of space in pixels between two consecutive rows
		 */
		row_spacing: number;
		/**
		 * Adds a widget to the grid.
		 * 
		 * The position of #child is determined by #left and #top. The
		 * number of 'cells' that #child will occupy is determined by
		 * #width and #height.
		 * @param child the {@link Actor} to add
		 * @param left the column number to attach the left side of #child to
		 * @param top the row number to attach the top side of #child to
		 * @param width the number of columns that #child will span
		 * @param height the number of rows that #child will span
		 */
		attach(child: Actor, left: number, top: number, width: number, height: number): void;
		/**
		 * Adds a actor to the grid.
		 * 
		 * The actor is placed next to #sibling, on the side determined by
		 * #side. When #sibling is %NULL, the actor is placed in row (for
		 * left or right placement) or column 0 (for top or bottom placement),
		 * at the end indicated by #side.
		 * 
		 * Attaching widgets labeled [1], [2], [3] with #sibling == %NULL and
		 * #side == %CLUTTER_GRID_POSITION_LEFT yields a layout of [3][2][1].
		 * @param child the actor to add
		 * @param sibling the child of #layout that #child will be placed
		 *     next to, or %NULL to place #child at the beginning or end
		 * @param side the side of #sibling that #child is positioned next to
		 * @param width the number of columns that #child will span
		 * @param height the number of rows that #child will span
		 */
		attach_next_to(child: Actor, sibling: Actor | null, side: GridPosition, width: number, height: number): void;
		/**
		 * Gets the child of #layout whose area covers the grid
		 * cell whose upper left corner is at #left, #top.
		 * @param left the left edge of the cell
		 * @param top the top edge of the cell
		 * @returns the child at the given position, or %NULL
		 */
		get_child_at(left: number, top: number): Actor;
		/**
		 * Returns whether all columns of #layout have the same width.
		 * @returns whether all columns of #layout have the same width.
		 */
		get_column_homogeneous(): boolean;
		/**
		 * Retrieves the spacing set using {@link Clutter.GridLayout.set_column_spacing}
		 * @returns the spacing between coluns of #layout
		 */
		get_column_spacing(): number;
		/**
		 * Retrieves the orientation of the #layout.
		 * @returns the orientation of the layout
		 */
		get_orientation(): Orientation;
		/**
		 * Returns whether all rows of #layout have the same height.
		 * @returns whether all rows of #layout have the same height.
		 */
		get_row_homogeneous(): boolean;
		/**
		 * Retrieves the spacing set using {@link Clutter.GridLayout.set_row_spacing}
		 * @returns the spacing between rows of #layout
		 */
		get_row_spacing(): number;
		/**
		 * Inserts a column at the specified position.
		 * 
		 * Children which are attached at or to the right of this position
		 * are moved one column to the right. Children which span across this
		 * position are grown to span the new column.
		 * @param position the position to insert the column at
		 */
		insert_column(position: number): void;
		/**
		 * Inserts a row or column at the specified position.
		 * 
		 * The new row or column is placed next to #sibling, on the side
		 * determined by #side. If #side is %CLUTTER_GRID_POSITION_LEFT or
		 * %CLUTTER_GRID_POSITION_BOTTOM, a row is inserted. If #side is
		 * %CLUTTER_GRID_POSITION_LEFT of %CLUTTER_GRID_POSITION_RIGHT,
		 * a column is inserted.
		 * @param sibling the child of #layout that the new row or column will be
		 *     placed next to
		 * @param side the side of #sibling that #child is positioned next to
		 */
		insert_next_to(sibling: Actor, side: GridPosition): void;
		/**
		 * Inserts a row at the specified position.
		 * 
		 * Children which are attached at or below this position
		 * are moved one row down. Children which span across this
		 * position are grown to span the new row.
		 * @param position the position to insert the row at
		 */
		insert_row(position: number): void;
		/**
		 * Sets whether all columns of #layout will have the same width.
		 * @param homogeneous %TRUE to make columns homogeneous
		 */
		set_column_homogeneous(homogeneous: boolean): void;
		/**
		 * Sets the spacing between columns of #layout
		 * @param spacing the spacing between columns of the layout, in pixels
		 */
		set_column_spacing(spacing: number): void;
		/**
		 * Sets the orientation of the #layout.
		 * 
		 * {@link GridLayout} uses the orientation as a hint when adding
		 * children to the #ClutterActor using it as a layout manager via
		 * {@link Clutter.Actor.add_child}; changing this value will not have
		 * any effect on children that are already part of the layout.
		 * @param orientation the orientation of the {@link GridLayout}
		 */
		set_orientation(orientation: Orientation): void;
		/**
		 * Sets whether all rows of #layout will have the same height.
		 * @param homogeneous %TRUE to make rows homogeneous
		 */
		set_row_homogeneous(homogeneous: boolean): void;
		/**
		 * Sets the spacing between rows of #layout
		 * @param spacing the spacing between rows of the layout, in pixels
		 */
		set_row_spacing(spacing: number): void;
		connect(signal: "notify::column-homogeneous", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::column-spacing", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::orientation", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::row-homogeneous", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::row-spacing", callback: (owner: this, ...args: any) => void): number;

	}

	type GridLayoutInitOptionsMixin = LayoutManagerInitOptions & 
	Pick<IGridLayout,
		"column_homogeneous" |
		"column_spacing" |
		"orientation" |
		"row_homogeneous" |
		"row_spacing">;

	export interface GridLayoutInitOptions extends GridLayoutInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link GridLayout} instead.
	 */
	type GridLayoutMixin = IGridLayout & LayoutManager;

	/**
	 * The {@link GridLayout} structure contains only private data
	 * and should be accessed using the provided API
	 */
	interface GridLayout extends GridLayoutMixin {}

	class GridLayout {
		public constructor(options?: Partial<GridLayoutInitOptions>);
		/**
		 * Creates a new {@link GridLayout}
		 * @returns the new {@link GridLayout}
		 */
		public static new(): LayoutManager;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Group} instead.
	 */
	interface IGroup {
		/**
		 * @deprecated
		 * Use {@link Clutter.Actor.get_n_children} instead.
		 * 
		 * Gets the number of actors held in the group.
		 * @returns The number of child actors held in the group.
		 */
		get_n_children(): number;
		/**
		 * @deprecated
		 * Use {@link Clutter.Actor.get_child_at_index} instead.
		 * 
		 * Gets a groups child held at #index_ in stack.
		 * @param index_ the position of the requested actor.
		 * @returns A Clutter actor, or %NULL if
		 *   #index_ is invalid.
		 */
		get_nth_child(index_: number): Actor;
		/**
		 * @deprecated
		 * Use {@link Clutter.Actor.remove_all_children} instead.
		 * 
		 * Removes all children actors from the {@link Group}.
		 */
		remove_all(): void;
	}

	type GroupInitOptionsMixin = ActorInitOptions & Atk.ImplementorIfaceInitOptions & AnimatableInitOptions & ContainerInitOptions & ScriptableInitOptions
	export interface GroupInitOptions extends GroupInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Group} instead.
	 */
	type GroupMixin = IGroup & Actor & Atk.ImplementorIface & Animatable & Container & Scriptable;

	/**
	 * The {@link Group} structure contains only private data
	 * and should be accessed using the provided API
	 */
	interface Group extends GroupMixin {}

	class Group {
		public constructor(options?: Partial<GroupInitOptions>);
		/**
		 * @deprecated
		 * Use {@link Clutter.Actor.new} instead.
		 * 
		 * Create a new  {@link Group}.
		 * @returns the newly created {@link Group} actor
		 */
		public static new(): Actor;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Image} instead.
	 */
	interface IImage {
		/**
		 * Retrieves a pointer to the Cogl texture used by #image.
		 * 
		 * If you change the contents of the returned Cogl texture you will need
		 * to manually invalidate the #image with {@link Clutter.Content.invalidate}
		 * in order to update the actors using #image as their content.
		 * @returns a pointer to the Cogl texture, or %NULL
		 */
		get_texture(): Cogl.Texture;
		/**
		 * Sets the image data to be display by #image, using #rect to indicate
		 * the position and size of the image data to be set.
		 * 
		 * If the #image does not have any image data set when this function is
		 * called, a new texture will be created with the size of the width and
		 * height of the rectangle, i.e. calling this function on a newly created
		 * {@link Image} will be the equivalent of calling {@link Clutter.Image.set_data}.
		 * 
		 * If the image data was successfully loaded, the #image will be invalidated.
		 * 
		 * In case of error, the #error value will be set, and this function will
		 * return %FALSE.
		 * 
		 * The image data is copied in texture memory.
		 * @param data the image data, as an array of bytes
		 * @param pixel_format the Cogl pixel format of the image data
		 * @param rect a rectangle indicating the area that should be set
		 * @param row_stride the length of each row inside #data
		 * @returns %TRUE if the image data was successfully loaded,
		 *   and %FALSE otherwise.
		 */
		set_area(data: number[], pixel_format: Cogl.PixelFormat, rect: cairo.RectangleInt, row_stride: number): boolean;
		/**
		 * Sets the image data stored inside a #GBytes to be displayed by #image.
		 * 
		 * If the image data was successfully loaded, the #image will be invalidated.
		 * 
		 * In case of error, the #error value will be set, and this function will
		 * return %FALSE.
		 * 
		 * The image data contained inside the #GBytes is copied in texture memory,
		 * and no additional reference is acquired on the #data.
		 * @param data the image data, as a #GBytes
		 * @param pixel_format the Cogl pixel format of the image data
		 * @param width the width of the image data
		 * @param height the height of the image data
		 * @param row_stride the length of each row inside #data
		 * @returns %TRUE if the image data was successfully loaded,
		 *   and %FALSE otherwise.
		 */
		set_bytes(data: GLib.Bytes, pixel_format: Cogl.PixelFormat, width: number, height: number, row_stride: number): boolean;
		/**
		 * Sets the image data to be displayed by #image.
		 * 
		 * If the image data was successfully loaded, the #image will be invalidated.
		 * 
		 * In case of error, the #error value will be set, and this function will
		 * return %FALSE.
		 * 
		 * The image data is copied in texture memory.
		 * 
		 * The image data is expected to be a linear array of RGBA or RGB pixel data;
		 * how to retrieve that data is left to platform specific image loaders. For
		 * instance, if you use the GdkPixbuf library:
		 * 
		 * |[<!-- language="C" -->
		 *   ClutterContent *image = clutter_image_new ();
		 * 
		 *   GdkPixbuf *pixbuf = gdk_pixbuf_new_from_file (filename, NULL);
		 * 
		 *   clutter_image_set_data (CLUTTER_IMAGE (image),
		 *                           gdk_pixbuf_get_pixels (pixbuf),
		 *                           gdk_pixbuf_get_has_alpha (pixbuf)
		 *                             ? COGL_PIXEL_FORMAT_RGBA_8888
		 *                             : COGL_PIXEL_FORMAT_RGB_888,
		 *                           gdk_pixbuf_get_width (pixbuf),
		 *                           gdk_pixbuf_get_height (pixbuf),
		 *                           gdk_pixbuf_get_rowstride (pixbuf),
		 *                           &error);
		 * 
		 *   g_object_unref (pixbuf);
		 * ]|
		 * @param data the image data, as an array of bytes
		 * @param pixel_format the Cogl pixel format of the image data
		 * @param width the width of the image data
		 * @param height the height of the image data
		 * @param row_stride the length of each row inside #data
		 * @returns %TRUE if the image data was successfully loaded,
		 *   and %FALSE otherwise.
		 */
		set_data(data: number[], pixel_format: Cogl.PixelFormat, width: number, height: number, row_stride: number): boolean;
	}

	type ImageInitOptionsMixin = GObject.ObjectInitOptions & ContentInitOptions
	export interface ImageInitOptions extends ImageInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Image} instead.
	 */
	type ImageMixin = IImage & GObject.Object & Content;

	/**
	 * The {@link Image} structure contains
	 * private data and should only be accessed using the provided
	 * API.
	 */
	interface Image extends ImageMixin {}

	class Image {
		public constructor(options?: Partial<ImageInitOptions>);
		/**
		 * Creates a new {@link Image} instance.
		 * @returns the newly created {@link Image} instance.
		 *   Use {@link GObject.Object.unref} when done.
		 */
		public static new(): Content;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link InputDevice} instead.
	 */
	interface IInputDevice {
		/**
		 * The {@link Backend} that created the device.
		 */
		backend: Backend;
		device_mode: InputMode;
		device_node: string;
		/**
		 * The type of the device
		 */
		device_type: InputDeviceType;
		/**
		 * Whether the device is enabled.
		 * 
		 * A device with the {@link InputDevice.device_mode} property set
		 * to %CLUTTER_INPUT_MODE_MASTER cannot be disabled.
		 * 
		 * A device must be enabled in order to receive events from it.
		 */
		enabled: boolean;
		/**
		 * Whether the device has an on screen cursor following its movement.
		 */
		has_cursor: boolean;
		/**
		 * The unique identifier of the device
		 */
		id: number;
		mapping_mode: InputDeviceMapping;
		/**
		 * The number of axes of the device.
		 */
		readonly n_axes: number;
		n_mode_groups: number;
		n_rings: number;
		n_strips: number;
		/**
		 * The name of the device
		 */
		name: string;
		/**
		 * Product ID of this device.
		 */
		product_id: string;
		/**
		 * The {@link Seat} instance which owns the device
		 */
		seat: Seat;
		/**
		 * Vendor ID of this device.
		 */
		vendor_id: string;
		/**
		 * Retrieves a pointer to the {@link InputDevice} that has been
		 * associated to #device.
		 * 
		 * If the #ClutterInputDevice:device-mode property of #device is
		 * set to %CLUTTER_INPUT_MODE_MASTER, this function will return
		 * %NULL.
		 * @returns a {@link InputDevice}, or %NULL
		 */
		get_associated_device(): InputDevice;
		/**
		 * Retrieves the type of axis on #device at the given index.
		 * @param index_ the index of the axis
		 * @returns the axis type
		 */
		get_axis(index_: number): InputAxis;
		/**
		 * Extracts the value of the given #axis of a {@link InputDevice} from
		 * an array of axis values.
		 * 
		 * An example of typical usage for this function is:
		 * 
		 * |[
		 *   ClutterInputDevice *device = clutter_event_get_device (event);
		 *   gdouble *axes = clutter_event_get_axes (event, NULL);
		 *   gdouble pressure_value = 0;
		 * 
		 *   clutter_input_device_get_axis_value (device, axes,
		 *                                        CLUTTER_INPUT_AXIS_PRESSURE,
		 *                                        &pressure_value);
		 * ]|
		 * @param axes an array of axes values, typically
		 *   coming from {@link Clutter.event.get_axes}
		 * @param axis the axis to extract
		 * @returns %TRUE if the value was set, and %FALSE otherwise
		 * 
		 * return location for the axis value
		 */
		get_axis_value(axes: number[], axis: InputAxis): [ boolean, number ];
		/**
		 * Retrieves the latest coordinates of a pointer or touch point of
		 * #device.
		 * @param sequence a {@link EventSequence}, or %NULL if
		 *   the device is not touch-based
		 * @returns %FALSE if the device's sequence hasn't been found,
		 *   and %TRUE otherwise.
		 * 
		 * return location for the pointer
		 *   or touch point
		 */
		get_coords(sequence?: EventSequence | null): [ boolean, Graphene.Point ];
		/**
		 * Retrieves the unique identifier of #device
		 * @returns the identifier of the device
		 */
		get_device_id(): number;
		/**
		 * Retrieves the {@link InputMode} of #device.
		 * @returns the device mode
		 */
		get_device_mode(): InputMode;
		/**
		 * Retrieves the name of the #device
		 * @returns the name of the device, or %NULL. The returned string
		 *   is owned by the {@link InputDevice} and should never be modified
		 *   or freed
		 */
		get_device_name(): string;
		get_device_node(): string;
		/**
		 * Retrieves the type of #device
		 * @returns the type of the device
		 */
		get_device_type(): InputDeviceType;
		/**
		 * Retrieves whether #device is enabled.
		 * @returns %TRUE if the device is enabled
		 */
		get_enabled(): boolean;
		/**
		 * Retrieves a pointer to the {@link Actor} currently grabbing all
		 * the events coming from #device.
		 * @returns a {@link Actor}, or %NULL
		 */
		get_grabbed_actor(): Actor;
		get_group_n_modes(group: number): number;
		/**
		 * Retrieves whether #device has a pointer that follows the
		 * device motion.
		 * @returns %TRUE if the device has a cursor
		 */
		get_has_cursor(): boolean;
		/**
		 * Retrieves the key set using {@link Clutter.InputDevice.set_key}
		 * @param index_ the index of the key
		 * @returns %TRUE if a key was set at the given index
		 * 
		 * return location for the keyval at #index_
		 * 
		 * return location for the modifiers at #index_
		 */
		get_key(index_: number): [ boolean, number, ModifierType ];
		get_mapping_mode(): InputDeviceMapping;
		get_mode_switch_button_group(button: number): number;
		/**
		 * Retrieves the current modifiers state of the device, as seen
		 * by the last event Clutter processed.
		 * @returns the last known modifier state
		 */
		get_modifier_state(): ModifierType;
		/**
		 * Retrieves the number of axes available on #device.
		 * @returns the number of axes on the device
		 */
		get_n_axes(): number;
		/**
		 * Retrieves the number of keys registered for #device.
		 * @returns the number of registered keys
		 */
		get_n_keys(): number;
		get_n_mode_groups(): number;
		get_n_rings(): number;
		get_n_strips(): number;
		/**
		 * Retrieves the {@link Actor} underneath the pointer of #device
		 * @returns a pointer to the {@link Actor} or %NULL
		 */
		get_pointer_actor(): Actor;
		/**
		 * Retrieves the {@link Stage} underneath the pointer of #device
		 * @returns a pointer to the {@link Stage} or %NULL
		 */
		get_pointer_stage(): Stage;
		/**
		 * Gets the product ID of this device.
		 * @returns the product ID
		 */
		get_product_id(): string;
		/**
		 * Returns the seat the device belongs to
		 * @returns the device seat
		 */
		get_seat(): Seat;
		/**
		 * Retrieves the slave devices attached to #device.
		 * @returns a
		 *   list of {@link InputDevice}, or %NULL. The contents of the list are
		 *   owned by the device. Use {@link GObject.list_free} when done
		 */
		get_slave_devices(): InputDevice[];
		/**
		 * Gets the vendor ID of this device.
		 * @returns the vendor ID
		 */
		get_vendor_id(): string;
		/**
		 * Acquires a grab on #actor for the given #device.
		 * 
		 * Any event coming from #device will be delivered to #actor, bypassing
		 * the usual event delivery mechanism, until the grab is released by
		 * calling {@link Clutter.InputDevice.ungrab}.
		 * 
		 * The grab is client-side: even if the windowing system used by the Clutter
		 * backend has the concept of "device grabs", Clutter will not use them.
		 * 
		 * Only {@link InputDevice} of types %CLUTTER_POINTER_DEVICE,
		 * %CLUTTER_TABLET_DEVICE and %CLUTTER_KEYBOARD_DEVICE can hold a grab.
		 * @param actor a {@link Actor}
		 */
		grab(actor: Actor): void;
		is_grouped(other_device: InputDevice): boolean;
		is_mode_switch_button(group: number, button: number): boolean;
		/**
		 * Translates a hardware keycode from a {@link KeyEvent} to the
		 * equivalent evdev keycode. Note that depending on the input backend
		 * used by Clutter this function can fail if there is no obvious
		 * mapping between the key codes. The hardware keycode can be taken
		 * from the #ClutterKeyEvent.hardware_keycode member of #ClutterKeyEvent.
		 * @param hardware_keycode The hardware keycode from a {@link KeyEvent}
		 * @param evdev_keycode The return location for the evdev keycode
		 * @returns %TRUE if the conversion succeeded, %FALSE otherwise.
		 */
		keycode_to_evdev(hardware_keycode: number, evdev_keycode: number): boolean;
		/**
		 * Retrieves a pointer to the {@link Actor} currently grabbing the
		 * touch events coming from #device given the #sequence.
		 * @param sequence a {@link EventSequence}
		 * @returns a {@link Actor}, or %NULL
		 */
		sequence_get_grabbed_actor(sequence: EventSequence): Actor;
		/**
		 * Acquires a grab on #actor for the given #device and the given touch
		 * #sequence.
		 * 
		 * Any touch event coming from #device and from #sequence will be
		 * delivered to #actor, bypassing the usual event delivery mechanism,
		 * until the grab is released by calling
		 * {@link Clutter.InputDevice.sequence_ungrab}.
		 * 
		 * The grab is client-side: even if the windowing system used by the Clutter
		 * backend has the concept of "device grabs", Clutter will not use them.
		 * @param sequence a {@link EventSequence}
		 * @param actor a {@link Actor}
		 */
		sequence_grab(sequence: EventSequence, actor: Actor): void;
		/**
		 * Releases the grab on the #device for the given #sequence, if one is
		 * in place.
		 * @param sequence a {@link EventSequence}
		 */
		sequence_ungrab(sequence: EventSequence): void;
		/**
		 * Enables or disables a {@link InputDevice}.
		 * 
		 * Only devices with a #ClutterInputDevice:device-mode property set
		 * to %CLUTTER_INPUT_MODE_SLAVE or %CLUTTER_INPUT_MODE_FLOATING can
		 * be disabled.
		 * @param enabled %TRUE to enable the #device
		 */
		set_enabled(enabled: boolean): void;
		/**
		 * Sets the keyval and modifiers at the given #index_ for #device.
		 * 
		 * Clutter will use the keyval and modifiers set when filling out
		 * an event coming from the same input device.
		 * @param index_ the index of the key
		 * @param keyval the keyval
		 * @param modifiers a bitmask of modifiers
		 */
		set_key(index_: number, keyval: number, modifiers: ModifierType): void;
		set_mapping_mode(mapping: InputDeviceMapping): void;
		/**
		 * Releases the grab on the #device, if one is in place.
		 */
		ungrab(): void;
		/**
		 * Forcibly updates the state of the #device using a {@link Event}
		 * 
		 * This function should never be used by applications: it is meant
		 * for integration with embedding toolkits, like clutter-gtk
		 * 
		 * Embedding toolkits that disable the event collection inside Clutter
		 * need to use this function to update the state of input devices depending
		 * on a #ClutterEvent that they are going to submit to the event handling code
		 * in Clutter though {@link Clutter.do.event}. Since the input devices hold the state
		 * that is going to be used to fill in fields like the #ClutterButtonEvent
		 * click count, or to emit synthesized events like %CLUTTER_ENTER and
		 * %CLUTTER_LEAVE, it is necessary for embedding toolkits to also be
		 * responsible of updating the input device state.
		 * 
		 * For instance, this might be the code to translate an embedding toolkit
		 * native motion notification into a Clutter #ClutterMotionEvent and ask
		 * Clutter to process it:
		 * 
		 * |[
		 *   ClutterEvent c_event;
		 * 
		 *   translate_native_event_to_clutter (native_event, &c_event);
		 * 
		 *   clutter_do_event (&c_event);
		 * ]|
		 * 
		 * Before letting clutter_do_event() process the event, it is necessary to call
		 * clutter_input_device_update_from_event():
		 * 
		 * |[
		 *   ClutterEvent c_event;
		 *   ClutterDeviceManager *manager;
		 *   ClutterInputDevice *device;
		 * 
		 *   translate_native_event_to_clutter (native_event, &c_event);
		 * 
		 *   // get the seat
		 *   seat = clutter_backend_get_deafult_seat (clutter_get_default_backend ());
		 * 
		 *   // use the default Core Pointer that Clutter backends register by default
		 *   device = clutter_seat_get_pointer (seat);
		 * 
		 *   // update the state of the input device
		 *   clutter_input_device_update_from_event (device, &c_event, FALSE);
		 * 
		 *   clutter_do_event (&c_event);
		 * ]|
		 * 
		 * The #update_stage boolean argument should be used when the input device
		 * enters and leaves a #ClutterStage; it will use the #ClutterStage field
		 * of the passed #event to update the stage associated to the input device.
		 * @param event a {@link Event}
		 * @param update_stage whether to update the {@link Stage} of the #device
		 *   using the stage of the event
		 */
		update_from_event(event: Event, update_stage: boolean): void;
		connect(signal: "notify::backend", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::device-mode", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::device-node", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::device-type", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::enabled", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::has-cursor", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::id", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::mapping-mode", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::n-axes", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::n-mode-groups", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::n-rings", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::n-strips", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::name", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::product-id", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::seat", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::vendor-id", callback: (owner: this, ...args: any) => void): number;

	}

	type InputDeviceInitOptionsMixin = GObject.ObjectInitOptions & 
	Pick<IInputDevice,
		"backend" |
		"device_mode" |
		"device_node" |
		"device_type" |
		"enabled" |
		"has_cursor" |
		"id" |
		"mapping_mode" |
		"n_mode_groups" |
		"n_rings" |
		"n_strips" |
		"name" |
		"product_id" |
		"seat" |
		"vendor_id">;

	export interface InputDeviceInitOptions extends InputDeviceInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link InputDevice} instead.
	 */
	type InputDeviceMixin = IInputDevice & GObject.Object;

	/**
	 * Generic representation of an input device. The actual contents of this
	 * structure depend on the backend used.
	 */
	interface InputDevice extends InputDeviceMixin {}

	class InputDevice {
		public constructor(options?: Partial<InputDeviceInitOptions>);
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link InputDeviceTool} instead.
	 */
	interface IInputDeviceTool {
		id: number;
		serial: number;
		type: InputDeviceToolType;
		/**
		 * Gets the ID of this tool, this value can be used to identify a
		 * physical tool (eg. a tablet pen) across program executions.
		 * @returns The tool ID for this tool
		 */
		get_id(): number;
		/**
		 * Gets the serial of this tool, this value can be used to identify a
		 * physical tool (eg. a tablet pen) across program executions.
		 * @returns The serial ID for this tool
		 */
		get_serial(): number;
		/**
		 * Gets the tool type of this tool.
		 * @returns The tool type of this tool
		 */
		get_tool_type(): InputDeviceToolType;
		connect(signal: "notify::id", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::serial", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::type", callback: (owner: this, ...args: any) => void): number;

	}

	type InputDeviceToolInitOptionsMixin = GObject.ObjectInitOptions & 
	Pick<IInputDeviceTool,
		"id" |
		"serial" |
		"type">;

	export interface InputDeviceToolInitOptions extends InputDeviceToolInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link InputDeviceTool} instead.
	 */
	type InputDeviceToolMixin = IInputDeviceTool & GObject.Object;

	interface InputDeviceTool extends InputDeviceToolMixin {}

	class InputDeviceTool {
		public constructor(options?: Partial<InputDeviceToolInitOptions>);
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link InputFocus} instead.
	 */
	interface IInputFocus {
		filter_event(event: Event): boolean;
		is_focused(): boolean;
		reset(): void;
		set_can_show_preedit(can_show_preedit: boolean): void;
		set_content_hints(hint: InputContentHintFlags): void;
		set_content_purpose(purpose: InputContentPurpose): void;
		set_cursor_location(rect: Graphene.Rect): void;
		set_input_panel_state(state: InputPanelState): void;
		set_surrounding(text: string, cursor: number, anchor: number): void;
	}

	type InputFocusInitOptionsMixin = GObject.ObjectInitOptions
	export interface InputFocusInitOptions extends InputFocusInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link InputFocus} instead.
	 */
	type InputFocusMixin = IInputFocus & GObject.Object;

	interface InputFocus extends InputFocusMixin {}

	class InputFocus {
		public constructor(options?: Partial<InputFocusInitOptions>);
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link InputMethod} instead.
	 */
	interface IInputMethod {
		can_show_preedit: boolean;
		content_hints: InputContentHintFlags;
		content_purpose: InputContentPurpose;
		commit(text: string): void;
		delete_surrounding(offset: number, len: number): void;
		focus_in(focus: InputFocus): void;
		focus_out(): void;
		forward_key(keyval: number, keycode: number, state: number, time_: number, press: boolean): void;
		notify_key_event(event: Event, filtered: boolean): void;
		request_surrounding(): void;
		set_input_panel_state(state: InputPanelState): void;
		/**
		 * Sets the preedit text on the current input focus.
		 * @param preedit the preedit text, or %NULL
		 * @param cursor the cursor
		 */
		set_preedit_text(preedit: string | null, cursor: number): void;
		connect(signal: "commit", callback: (owner: this, object: string) => void): number;
		connect(signal: "cursor-location-changed", callback: (owner: this, object: Graphene.Rect) => void): number;
		connect(signal: "delete-surrounding", callback: (owner: this, object: number, p0: number) => void): number;
		connect(signal: "input-panel-state", callback: (owner: this, object: InputPanelState) => void): number;
		connect(signal: "request-surrounding", callback: (owner: this) => void): number;

		connect(signal: "notify::can-show-preedit", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::content-hints", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::content-purpose", callback: (owner: this, ...args: any) => void): number;

	}

	type InputMethodInitOptionsMixin = GObject.ObjectInitOptions & 
	Pick<IInputMethod,
		"can_show_preedit" |
		"content_hints" |
		"content_purpose">;

	export interface InputMethodInitOptions extends InputMethodInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link InputMethod} instead.
	 */
	type InputMethodMixin = IInputMethod & GObject.Object;

	interface InputMethod extends InputMethodMixin {}

	class InputMethod {
		public constructor(options?: Partial<InputMethodInitOptions>);
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Interval} instead.
	 */
	interface IInterval {
		/**
		 * The final value of the interval.
		 */
		final: GObject.Value;
		/**
		 * The initial value of the interval.
		 */
		initial: GObject.Value;
		/**
		 * The type of the values in the interval.
		 */
		value_type: GObject.Type;
		/**
		 * Creates a copy of #interval.
		 * @returns the newly created {@link Interval}
		 */
		clone(): Interval;
		/**
		 * Computes the value between the #interval boundaries given the
		 * progress #factor
		 * 
		 * Unlike {@link Clutter.Interval.compute_value}, this function will
		 * return a const pointer to the computed value
		 * 
		 * You should use this function if you immediately pass the computed
		 * value to another function that makes a copy of it, like
		 * g_object_set_property()
		 * @param factor the progress factor, between 0 and 1
		 * @returns a pointer to the computed value,
		 *   or %NULL if the computation was not successfull
		 */
		compute(factor: number): GObject.Value;
		/**
		 * Computes the value between the #interval boundaries given the
		 * progress #factor and copies it into #value.
		 * @param factor the progress factor, between 0 and 1
		 * @returns %TRUE if the operation was successful
		 * 
		 * return location for an initialized #GValue
		 */
		compute_value(factor: number): [ boolean, GObject.Value ];
		/**
		 * Retrieves the final value of #interval and copies
		 * it into #value.
		 * 
		 * The passed #GValue must be initialized to the value held by
		 * the {@link Interval}.
		 * @returns a #GValue
		 */
		get_final_value(): GObject.Value;
		/**
		 * Retrieves the initial value of #interval and copies
		 * it into #value.
		 * 
		 * The passed #GValue must be initialized to the value held by
		 * the {@link Interval}.
		 * @returns a #GValue
		 */
		get_initial_value(): GObject.Value;
		/**
		 * Variable arguments wrapper for {@link Clutter.Interval.get_initial_value}
		 * and clutter_interval_get_final_value() that avoids using the
		 * #GValue arguments:
		 * 
		 * |[
		 *   gint a = 0, b = 0;
		 *   clutter_interval_get_interval (interval, &a, &b);
		 * ]|
		 * 
		 * This function is meant for the convenience of the C API; bindings
		 * should reimplement this function using the #GValue-based API.
		 */
		get_interval(): void;
		/**
		 * Retrieves the #GType of the values inside #interval.
		 * @returns the type of the value, or G_TYPE_INVALID
		 */
		get_value_type(): GObject.Type;
		/**
		 * Checks if the #interval has a valid initial and final values.
		 * @returns %TRUE if the {@link Interval} has an initial and
		 *   final values, and %FALSE otherwise
		 */
		is_valid(): boolean;
		/**
		 * Gets the pointer to the final value of #interval
		 * @returns the final value of the interval.
		 *   The value is owned by the {@link Interval} and it should not be
		 *   modified or freed
		 */
		peek_final_value(): GObject.Value;
		/**
		 * Gets the pointer to the initial value of #interval
		 * @returns the initial value of the interval.
		 *   The value is owned by the {@link Interval} and it should not be
		 *   modified or freed
		 */
		peek_initial_value(): GObject.Value;
		/**
		 * Sets the final value of #interval to #value. The value is
		 * copied inside the {@link Interval}.
		 * @param value a #GValue
		 */
		set_final(value: GObject.Value): void;
		/**
		 * Sets the initial value of #interval to #value. The value is copied
		 * inside the {@link Interval}.
		 * @param value a #GValue
		 */
		set_initial(value: GObject.Value): void;
		/**
		 * Variable arguments wrapper for {@link Clutter.Interval.set_initial_value}
		 * and clutter_interval_set_final_value() that avoids using the
		 * #GValue arguments:
		 * 
		 * |[
		 *   clutter_interval_set_interval (interval, 0, 50);
		 *   clutter_interval_set_interval (interval, 1.0, 0.0);
		 *   clutter_interval_set_interval (interval, FALSE, TRUE);
		 * ]|
		 * 
		 * This function is meant for the convenience of the C API; bindings
		 * should reimplement this function using the #GValue-based API.
		 */
		set_interval(): void;
		/**
		 * Validates the initial and final values of #interval against
		 * a #GParamSpec.
		 * @param pspec a #GParamSpec
		 * @returns %TRUE if the {@link Interval} is valid, %FALSE otherwise
		 */
		validate(pspec: GObject.ParamSpec): boolean;
		connect(signal: "notify::final", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::initial", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::value-type", callback: (owner: this, ...args: any) => void): number;

	}

	type IntervalInitOptionsMixin = GObject.InitiallyUnownedInitOptions & ScriptableInitOptions & 
	Pick<IInterval,
		"final" |
		"initial" |
		"value_type">;

	export interface IntervalInitOptions extends IntervalInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Interval} instead.
	 */
	type IntervalMixin = IInterval & GObject.InitiallyUnowned & Scriptable;

	/**
	 * The {@link Interval} structure contains only private data and should
	 * be accessed using the provided functions.
	 */
	interface Interval extends IntervalMixin {}

	class Interval {
		public constructor(options?: Partial<IntervalInitOptions>);
		/**
		 * Creates a new {@link Interval} holding values of type #gtype.
		 * 
		 * This function avoids using a #GValue for the initial and final values
		 * of the interval:
		 * 
		 * |[
		 *   interval = clutter_interval_new (G_TYPE_FLOAT, 0.0, 1.0);
		 *   interval = clutter_interval_new (G_TYPE_BOOLEAN, FALSE, TRUE);
		 *   interval = clutter_interval_new (G_TYPE_INT, 0, 360);
		 * ]|
		 * @param gtype the type of the values in the interval
		 * @returns the newly created {@link Interval}
		 */
		public static new(gtype: GObject.Type): Interval;
		/**
		 * Creates a new {@link Interval} of type #gtype, between #initial
		 * and #final.
		 * 
		 * This function is useful for language bindings.
		 * @param gtype the type of the values in the interval
		 * @param initial a #GValue holding the initial value of the interval
		 * @param _final a #GValue holding the final value of the interval
		 * @returns the newly created {@link Interval}
		 */
		public static new_with_values(gtype: GObject.Type, initial?: GObject.Value | null, _final?: GObject.Value | null): Interval;
		/**
		 * Sets the progress function for a given #value_type, like:
		 * 
		 * |[
		 *   clutter_interval_register_progress_func (MY_TYPE_FOO,
		 *                                            my_foo_progress);
		 * ]|
		 * 
		 * Whenever a {@link Interval} instance using the default
		 * #ClutterInterval::compute_value implementation is set as an
		 * interval between two #GValue of type #value_type, it will call
		 * #func to establish the value depending on the given progress,
		 * for instance:
		 * 
		 * |[
		 *   static gboolean
		 *   my_int_progress (const GValue *a,
		 *                    const GValue *b,
		 *                    gdouble       progress,
		 *                    GValue       *retval)
		 *   {
		 *     gint ia = g_value_get_int (a);
		 *     gint ib = g_value_get_int (b);
		 *     gint res = factor * (ib - ia) + ia;
		 * 
		 *     g_value_set_int (retval, res);
		 * 
		 *     return TRUE;
		 *   }
		 * 
		 *   clutter_interval_register_progress_func (G_TYPE_INT, my_int_progress);
		 * ]|
		 * 
		 * To unset a previously set progress function of a #GType, pass %NULL
		 * for #func.
		 * @param value_type a #GType
		 * @param func a {@link ProgressFunc}, or %NULL to unset a previously
		 *   set progress function
		 */
		public static register_progress_func(value_type: GObject.Type, func: ProgressFunc): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link KeyframeTransition} instead.
	 */
	interface IKeyframeTransition {
		/**
		 * Removes all key frames from #transition.
		 */
		clear(): void;
		/**
		 * Retrieves the details of the key frame at #index_ inside #transition.
		 * 
		 * The #transition must already have key frames set, and #index_ must be
		 * smaller than the number of key frames.
		 * @param index_ the index of the key frame
		 * @returns return location for the key, or %NULL
		 * 
		 * return location for the easing mode, or %NULL
		 * 
		 * a #GValue initialized with the type of
		 *   the values
		 */
		get_key_frame(index_: number): [ key: number | null, mode: AnimationMode | null, value: GObject.Value ];
		/**
		 * Retrieves the number of key frames inside #transition.
		 * @returns the number of key frames
		 */
		get_n_key_frames(): number;
		/**
		 * Sets the key frames of the #transition.
		 * 
		 * This variadic arguments function is a convenience for C developers;
		 * language bindings should use {@link Clutter.KeyframeTransition.set_key_frames},
		 * clutter_keyframe_transition_set_modes(), and
		 * clutter_keyframe_transition_set_values() instead.
		 * @param gtype the type of the values to use for the key frames
		 * @param n_key_frames the number of key frames between the initial
		 *   and final values
		 */
		set(gtype: GObject.Type, n_key_frames: number): void;
		/**
		 * Sets the details of the key frame at #index_ inside #transition.
		 * 
		 * The #transition must already have a key frame at #index_, and #index_
		 * must be smaller than the number of key frames inside #transition.
		 * @param index_ the index of the key frame
		 * @param key the key of the key frame
		 * @param mode the easing mode of the key frame
		 * @param value a #GValue containing the value of the key frame
		 */
		set_key_frame(index_: number, key: number, mode: AnimationMode, value: GObject.Value): void;
		/**
		 * Sets the keys for each key frame inside #transition.
		 * 
		 * If #transition does not hold any key frame, #n_key_frames key frames
		 * will be created; if #transition already has key frames, #key_frames must
		 * have at least as many elements as the number of key frames.
		 * @param key_frames an array of keys between 0.0
		 *   and 1.0, one for each key frame
		 */
		set_key_frames(key_frames: number[]): void;
		/**
		 * Sets the easing modes for each key frame inside #transition.
		 * 
		 * If #transition does not hold any key frame, #n_modes key frames will
		 * be created; if #transition already has key frames, #modes must have
		 * at least as many elements as the number of key frames.
		 * @param modes an array of easing modes, one for
		 *   each key frame
		 */
		set_modes(modes: AnimationMode[]): void;
		/**
		 * Sets the values for each key frame inside #transition.
		 * 
		 * If #transition does not hold any key frame, #n_values key frames will
		 * be created; if #transition already has key frames, #values must have
		 * at least as many elements as the number of key frames.
		 * @param values an array of values, one for each
		 *   key frame
		 */
		set_values(values: GObject.Value[]): void;
	}

	type KeyframeTransitionInitOptionsMixin = PropertyTransitionInitOptions & ScriptableInitOptions
	export interface KeyframeTransitionInitOptions extends KeyframeTransitionInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link KeyframeTransition} instead.
	 */
	type KeyframeTransitionMixin = IKeyframeTransition & PropertyTransition & Scriptable;

	/**
	 * The `ClutterKeyframeTransition` structure contains only private
	 * data and should be accessed using the provided API.
	 */
	interface KeyframeTransition extends KeyframeTransitionMixin {}

	class KeyframeTransition {
		public constructor(options?: Partial<KeyframeTransitionInitOptions>);
		/**
		 * Creates a new {@link KeyframeTransition} for #property_name.
		 * @param property_name the property to animate
		 * @returns the newly allocated
		 *   {@link KeyframeTransition} instance. Use {@link GObject.Object.unref} when
		 *   done to free its resources.
		 */
		public static new(property_name: string): Transition;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Keymap} instead.
	 */
	interface IKeymap {
		get_caps_lock_state(): boolean;
		get_direction(): Pango.Direction;
		get_num_lock_state(): boolean;
		connect(signal: "state-changed", callback: (owner: this) => void): number;

	}

	type KeymapInitOptionsMixin = GObject.ObjectInitOptions
	export interface KeymapInitOptions extends KeymapInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Keymap} instead.
	 */
	type KeymapMixin = IKeymap & GObject.Object;

	interface Keymap extends KeymapMixin {}

	class Keymap {
		public constructor(options?: Partial<KeymapInitOptions>);
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link LayerNode} instead.
	 */
	interface ILayerNode {

	}

	type LayerNodeInitOptionsMixin = PaintNodeInitOptions
	export interface LayerNodeInitOptions extends LayerNodeInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link LayerNode} instead.
	 */
	type LayerNodeMixin = ILayerNode & PaintNode;

	interface LayerNode extends LayerNodeMixin {}

	class LayerNode {
		public constructor(options?: Partial<LayerNodeInitOptions>);
		public static new(projection: Cogl.Matrix, viewport: cairo.Rectangle, width: number, height: number, opacity: number): PaintNode;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link LayoutManager} instead.
	 */
	interface ILayoutManager {
		/**
		 * Allocates the children of #container given an area
		 * 
		 * See also {@link Clutter.Actor.allocate}
		 * @param container the {@link Container} using #manager
		 * @param allocation the {@link ActorBox} containing the allocated area
		 *   of #container
		 * @param flags the allocation flags
		 */
		allocate(container: Container, allocation: ActorBox, flags: AllocationFlags): void;
		/**
		 * Retrieves the values for a list of properties out of the
		 * {@link LayoutMeta} created by #manager and attached to the
		 * child of a #container
		 * @param container a {@link Container} using #manager
		 * @param actor a {@link Actor} child of #container
		 * @param first_property the name of the first property
		 */
		child_get(container: Container, actor: Actor, first_property: string): void;
		/**
		 * Gets a property on the {@link LayoutMeta} created by #manager and
		 * attached to a child of #container
		 * 
		 * The #GValue must already be initialized to the type of the property
		 * and has to be unset with {@link GObject.Value.unset} after extracting the real
		 * value out of it
		 * @param container a {@link Container} using #manager
		 * @param actor a {@link Actor} child of #container
		 * @param property_name the name of the property to get
		 * @param value a #GValue with the value of the property to get
		 */
		child_get_property(container: Container, actor: Actor, property_name: string, value: GObject.Value): void;
		/**
		 * Sets a list of properties and their values on the {@link LayoutMeta}
		 * associated by #manager to a child of #container
		 * 
		 * Languages bindings should use {@link Clutter.LayoutManager.child_set_property}
		 * instead
		 * @param container a {@link Container} using #manager
		 * @param actor a {@link Actor} child of #container
		 * @param first_property the first property name
		 */
		child_set(container: Container, actor: Actor, first_property: string): void;
		/**
		 * Sets a property on the {@link LayoutMeta} created by #manager and
		 * attached to a child of #container
		 * @param container a {@link Container} using #manager
		 * @param actor a {@link Actor} child of #container
		 * @param property_name the name of the property to set
		 * @param value a #GValue with the value of the property to set
		 */
		child_set_property(container: Container, actor: Actor, property_name: string, value: GObject.Value): void;
		/**
		 * Retrieves the #GParamSpec for the layout property #name inside
		 * the {@link LayoutMeta} sub-class used by #manager
		 * @param name the name of the property
		 * @returns a #GParamSpec describing the property,
		 *   or %NULL if no property with that name exists. The returned
		 *   #GParamSpec is owned by the layout manager and should not be
		 *   modified or freed
		 */
		find_child_property(name: string): GObject.ParamSpec;
		/**
		 * Retrieves the {@link LayoutMeta} that the layout #manager associated
		 * to the #actor child of #container, eventually by creating one if the
		 * #ClutterLayoutManager supports layout properties
		 * @param container a {@link Container} using #manager
		 * @param actor a {@link Actor} child of #container
		 * @returns a {@link LayoutMeta}, or %NULL if the
		 *   #ClutterLayoutManager does not have layout properties. The returned
		 *   layout meta instance is owned by the #ClutterLayoutManager and it
		 *   should not be unreferenced
		 */
		get_child_meta(container: Container, actor: Actor): LayoutMeta;
		/**
		 * Computes the minimum and natural heights of the #container according
		 * to #manager.
		 * 
		 * See also {@link Clutter.Actor.get_preferred_height}
		 * @param container the {@link Container} using #manager
		 * @param for_width the width for which the height should be computed, or -1
		 * @returns return location for the minimum height
		 *   of the layout, or %NULL
		 * 
		 * return location for the natural height
		 *   of the layout, or %NULL
		 */
		get_preferred_height(container: Container, for_width: number): [ min_height_p: number | null, nat_height_p: number | null ];
		/**
		 * Computes the minimum and natural widths of the #container according
		 * to #manager.
		 * 
		 * See also {@link Clutter.Actor.get_preferred_width}
		 * @param container the {@link Container} using #manager
		 * @param for_height the height for which the width should be computed, or -1
		 * @returns return location for the minimum width
		 *   of the layout, or %NULL
		 * 
		 * return location for the natural width
		 *   of the layout, or %NULL
		 */
		get_preferred_width(container: Container, for_height: number): [ min_width_p: number | null, nat_width_p: number | null ];
		/**
		 * Emits the {@link LayoutManager.layout_changed} signal on #manager
		 * 
		 * This function should only be called by implementations of the
		 * #ClutterLayoutManager class
		 */
		layout_changed(): void;
		/**
		 * Retrieves all the #GParamSpec<!-- -->s for the layout properties
		 * stored inside the {@link LayoutMeta} sub-class used by #manager
		 * @returns the newly-allocated,
		 *   %NULL-terminated array of #GParamSpec<!-- -->s. Use {@link GObject.free} to free the
		 *   resources allocated for the array
		 * 
		 * return location for the number of returned
		 *   #GParamSpec<!-- -->s
		 */
		list_child_properties(): [ GObject.ParamSpec[], number ];
		/**
		 * If the {@link LayoutManager} sub-class allows it, allow
		 * adding a weak reference of the #container using #manager
		 * from within the layout manager
		 * 
		 * The layout manager should not increase the reference
		 * count of the #container
		 * @param container a {@link Container} using #manager
		 */
		set_container(container?: Container | null): void;
		/**
		 * The ::layout-changed signal is emitted each time a layout manager
		 * has been changed. Every {@link Actor} using the #manager instance
		 * as a layout manager should connect a handler to the ::layout-changed
		 * signal and queue a relayout on themselves:
		 * 
		 * |[
		 *   static void layout_changed (ClutterLayoutManager *manager,
		 *                               ClutterActor         *self)
		 *   {
		 *     clutter_actor_queue_relayout (self);
		 *   }
		 *   ...
		 *     self->manager = g_object_ref_sink (manager);
		 *     g_signal_connect (self->manager, "layout-changed",
		 *                       G_CALLBACK (layout_changed),
		 *                       self);
		 * ]|
		 * 
		 * Sub-classes of #ClutterLayoutManager that implement a layout that
		 * can be controlled or changed using parameters should emit the
		 * ::layout-changed signal whenever one of the parameters changes,
		 * by using {@link Clutter.LayoutManager.layout_changed}.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "layout-changed", callback: (owner: this) => void): number;

	}

	type LayoutManagerInitOptionsMixin = GObject.InitiallyUnownedInitOptions
	export interface LayoutManagerInitOptions extends LayoutManagerInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link LayoutManager} instead.
	 */
	type LayoutManagerMixin = ILayoutManager & GObject.InitiallyUnowned;

	/**
	 * The {@link LayoutManager} structure contains only private data
	 * and should be accessed using the provided API
	 */
	interface LayoutManager extends LayoutManagerMixin {}

	class LayoutManager {
		public constructor(options?: Partial<LayoutManagerInitOptions>);
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link LayoutMeta} instead.
	 */
	interface ILayoutMeta {
		/**
		 * The {@link LayoutManager} that created this #ClutterLayoutMeta.
		 */
		manager: LayoutManager;
		/**
		 * the layout manager handling this data
		 */
		// readonly manager: LayoutManager;
		/**
		 * Retrieves the actor wrapped by #data
		 * @returns a {@link LayoutManager}
		 */
		get_manager(): LayoutManager;
		connect(signal: "notify::manager", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::manager", callback: (owner: this, ...args: any) => void): number;

	}

	type LayoutMetaInitOptionsMixin = ChildMetaInitOptions & 
	Pick<ILayoutMeta,
		"manager">;

	export interface LayoutMetaInitOptions extends LayoutMetaInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link LayoutMeta} instead.
	 */
	type LayoutMetaMixin = ILayoutMeta & ChildMeta;

	/**
	 * Sub-class of {@link ChildMeta} specific for layout managers
	 * 
	 * A #ClutterLayoutManager sub-class should create a #ClutterLayoutMeta
	 * instance by overriding the {@link #ClutterLayoutManager::create.child_meta}
	 * virtual function
	 */
	interface LayoutMeta extends LayoutMetaMixin {}

	class LayoutMeta {
		public constructor(options?: Partial<LayoutMetaInitOptions>);
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link OffscreenEffect} instead.
	 */
	interface IOffscreenEffect {
		/**
		 * Calls the {@link Create.texture} virtual function of the #effect
		 * @param width the minimum width of the target texture
		 * @param height the minimum height of the target texture
		 * @returns a handle to a Cogl texture, or
		 *   %NULL. The returned handle has its reference
		 *   count increased.
		 */
		create_texture(width: number, height: number): Cogl.Handle;
		/**
		 * Retrieves the material used as a render target for the offscreen
		 * buffer created by #effect
		 * 
		 * You should only use the returned #CoglMaterial when painting. The
		 * returned material might change between different frames.
		 * @returns a #CoglMaterial or %NULL. The
		 *   returned material is owned by Clutter and it should not be
		 *   modified or freed
		 */
		get_target(): Cogl.Material;
		/**
		 * Retrieves the origin and size of the offscreen buffer used by #effect to
		 * paint the actor to which it has been applied.
		 * 
		 * This function should only be called by {@link OffscreenEffect}
		 * implementations, from within the {@link #ClutterOffscreenEffectClass.paint.target}
		 * virtual function.
		 * @returns %TRUE if the offscreen buffer has a valid rectangle,
		 *   and %FALSE otherwise
		 * 
		 * return location for the target area
		 */
		get_target_rect(): [ boolean, Graphene.Rect ];
		/**
		 * @deprecated
		 * Use {@link Clutter.OffscreenEffect.get_target_rect} instead
		 * 
		 * Retrieves the size of the offscreen buffer used by #effect to
		 * paint the actor to which it has been applied.
		 * 
		 * This function should only be called by {@link OffscreenEffect}
		 * implementations, from within the {@link #ClutterOffscreenEffectClass.paint.target}
		 * virtual function.
		 * @returns %TRUE if the offscreen buffer has a valid size,
		 *   and %FALSE otherwise
		 * 
		 * return location for the target width, or %NULL
		 * 
		 * return location for the target height, or %NULL
		 */
		get_target_size(): [ boolean, number, number ];
		/**
		 * Retrieves the texture used as a render target for the offscreen
		 * buffer created by #effect
		 * 
		 * You should only use the returned texture when painting. The texture
		 * may change after ClutterEffect::pre_paint is called so the effect
		 * implementation should update any references to the texture after
		 * chaining-up to the parent's pre_paint implementation. This can be
		 * used instead of {@link Clutter.OffscreenEffect.get_target} when the
		 * effect subclass wants to paint using its own material.
		 * @returns a #CoglHandle or %NULL. The
		 *   returned texture is owned by Clutter and it should not be
		 *   modified or freed
		 */
		get_texture(): Cogl.Handle;
		/**
		 * Calls the {@link Paint.target} virtual function of the #effect
		 * @param paint_context a {@link PaintContext}
		 */
		paint_target(paint_context: PaintContext): void;
	}

	type OffscreenEffectInitOptionsMixin = EffectInitOptions
	export interface OffscreenEffectInitOptions extends OffscreenEffectInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link OffscreenEffect} instead.
	 */
	type OffscreenEffectMixin = IOffscreenEffect & Effect;

	/**
	 * The {@link OffscreenEffect} structure contains only private data
	 * and should be accessed using the provided API
	 */
	interface OffscreenEffect extends OffscreenEffectMixin {}

	class OffscreenEffect {
		public constructor(options?: Partial<OffscreenEffectInitOptions>);
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link PageTurnEffect} instead.
	 */
	interface IPageTurnEffect {
		/**
		 * The angle of the page rotation, in degrees, between 0.0 and 360.0
		 */
		angle: number;
		/**
		 * The period of the page turn, between 0.0 (no curling) and
		 * 1.0 (fully curled)
		 */
		period: number;
		/**
		 * The radius of the page curl, in pixels
		 */
		radius: number;
		/**
		 * Retrieves the value set using {@link Clutter.PageTurnEffect.get_angle}
		 * @returns the angle of the page curling
		 */
		get_angle(): number;
		/**
		 * Retrieves the value set using {@link Clutter.PageTurnEffect.get_period}
		 * @returns the period of the page curling
		 */
		get_period(): number;
		/**
		 * Retrieves the value set using {@link Clutter.PageTurnEffect.set_radius}
		 * @returns the radius of the page curling
		 */
		get_radius(): number;
		/**
		 * Sets the angle of the page curling, in degrees
		 * @param angle the angle of the page curl, in degrees
		 */
		set_angle(angle: number): void;
		/**
		 * Sets the period of the page curling, between 0.0 (no curling)
		 * and 1.0 (fully curled)
		 * @param period the period of the page curl, between 0.0 and 1.0
		 */
		set_period(period: number): void;
		/**
		 * Sets the radius of the page curling
		 * @param radius the radius of the page curling, in pixels
		 */
		set_radius(radius: number): void;
		connect(signal: "notify::angle", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::period", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::radius", callback: (owner: this, ...args: any) => void): number;

	}

	type PageTurnEffectInitOptionsMixin = DeformEffectInitOptions & 
	Pick<IPageTurnEffect,
		"angle" |
		"period" |
		"radius">;

	export interface PageTurnEffectInitOptions extends PageTurnEffectInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link PageTurnEffect} instead.
	 */
	type PageTurnEffectMixin = IPageTurnEffect & DeformEffect;

	/**
	 * {@link PageTurnEffect} is an opaque structure
	 * whose members can only be accessed using the provided API
	 */
	interface PageTurnEffect extends PageTurnEffectMixin {}

	class PageTurnEffect {
		public constructor(options?: Partial<PageTurnEffectInitOptions>);
		/**
		 * Creates a new {@link PageTurnEffect} instance with the given parameters
		 * @param period the period of the page curl, between 0.0 and 1.0
		 * @param angle the angle of the page curl, between 0.0 and 360.0
		 * @param radius the radius of the page curl, in pixels
		 * @returns the newly created {@link PageTurnEffect}
		 */
		public static new(period: number, angle: number, radius: number): Effect;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link PaintNode} instead.
	 */
	interface IPaintNode {
		/**
		 * Adds #child to the list of children of #node.
		 * 
		 * This function will acquire a reference on #child.
		 * @param child the child {@link PaintNode} to add
		 */
		add_child(child: PaintNode): void;
		/**
		 * Adds a rectangle region to the #node, with multitexture coordinates.
		 * @param rect a {@link ActorBox}
		 * @param text_coords array of multitexture values
		 * @param text_coords_len number of items of #text_coords
		 */
		add_multitexture_rectangle(rect: ActorBox, text_coords: number, text_coords_len: number): void;
		/**
		 * Adds a region described as a path to the #node.
		 * 
		 * This function acquires a reference on the passed #path, so it
		 * is safe to call {@link Cogl.Object.unref} when it returns.
		 * @param path a Cogl path
		 */
		add_path(path: any): void;
		/**
		 * Adds a region described by a Cogl primitive to the #node.
		 * 
		 * This function acquires a reference on #primitive, so it is safe
		 * to call {@link Cogl.Object.unref} when it returns.
		 * @param primitive a Cogl primitive
		 */
		add_primitive(primitive: any): void;
		/**
		 * Adds a rectangle region to the #node, as described by the
		 * passed #rect.
		 * @param rect a {@link ActorBox}
		 */
		add_rectangle(rect: ActorBox): void;
		/**
		 * Adds a rectangle region to the #node, with texture coordinates.
		 * @param rect a {@link ActorBox}
		 * @param x_1 the left X coordinate of the texture
		 * @param y_1 the top Y coordinate of the texture
		 * @param x_2 the right X coordinate of the texture
		 * @param y_2 the bottom Y coordinate of the texture
		 */
		add_texture_rectangle(rect: ActorBox, x_1: number, y_1: number, x_2: number, y_2: number): void;
		/**
		 * Retrieves the #CoglFramebuffer that #node will draw
		 * into, if it the root node has a custom framebuffer set.
		 * @returns a #CoglFramebuffer or %NULL if no custom one is
		 * set.
		 */
		get_framebuffer(): Cogl.Framebuffer;
		/**
		 * Paints the #node using the class implementation, traversing
		 * its children, if any.
		 * @param paint_context
		 */
		paint(paint_context: PaintContext): void;
		/**
		 * Acquires a reference on #node.
		 * @returns the {@link PaintNode}
		 */
		ref(): PaintNode;
		/**
		 * Sets a user-readable #name for #node.
		 * 
		 * The #name will be used for debugging purposes.
		 * 
		 * The #node will intern #name using {@link GObject.intern_string}. If you have access to a
		 * static string, use clutter_paint_node_set_static_name() instead.
		 * @param name a string annotating the #node
		 */
		set_name(name: string): void;
		/**
		 * Like {@link Clutter.PaintNode.set_name} but uses a static or interned string
		 * containing the name.
		 * @param name
		 */
		set_static_name(name: string): void;
		/**
		 * Releases a reference on #node.
		 */
		unref(): void;
	}

	type PaintNodeInitOptionsMixin  = {};
	export interface PaintNodeInitOptions extends PaintNodeInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link PaintNode} instead.
	 */
	type PaintNodeMixin = IPaintNode;

	/**
	 * The `ClutterPaintNode` structure contains only private data
	 * and it should be accessed using the provided API.
	 */
	interface PaintNode extends PaintNodeMixin {}

	class PaintNode {
		public constructor(options?: Partial<PaintNodeInitOptions>);
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link PanAction} instead.
	 */
	interface IPanAction {
		/**
		 * The initial acceleration factor
		 * 
		 * The kinetic momentum measured at the time of releasing the pointer will
		 * be multiplied by the factor specified by this property before being used
		 * to generate interpolated ::pan events.
		 */
		acceleration_factor: number;
		/**
		 * The rate at which the interpolated panning will decelerate in
		 * 
		 * {@link PanAction} will emit interpolated ::pan events with decreasing
		 * scroll deltas, using the rate specified by this property.
		 */
		deceleration: number;
		/**
		 * Whether interpolated events emission is enabled.
		 */
		interpolate: boolean;
		/**
		 * Constraints the panning action to the specified axis
		 */
		pan_axis: PanAxis;
		/**
		 * Retrieves the initial acceleration factor for interpolated ::pan events.
		 * @returns The initial acceleration factor for interpolated events.
		 */
		get_acceleration_factor(): number;
		/**
		 * Retrieves the delta, in stage space, dependent on the current state
		 * of the {@link PanAction}, and respecting the constraint specified by the
		 * #ClutterPanAction:pan-axis property.
		 * @param point the touch point index, with 0 being the first touch
		 *   point received by the action
		 * @returns the distance since last motion event
		 * 
		 * return location for the X delta
		 * 
		 * return location for the Y delta
		 */
		get_constrained_motion_delta(point: number): [ number, number | null, number | null ];
		/**
		 * Retrieves the deceleration rate of interpolated ::pan events.
		 * @returns The deceleration rate of the interpolated events.
		 */
		get_deceleration(): number;
		/**
		 * Checks if the action should emit ::pan events even after releasing
		 * the pointer during a panning gesture, to emulate some kind of
		 * kinetic inertia.
		 * @returns %TRUE if interpolated events emission is active.
		 */
		get_interpolate(): boolean;
		/**
		 * Retrieves the coordinates, in stage space, of the latest interpolated
		 * event, analogous to {@link Clutter.GestureAction.get_motion_coords}.
		 * @returns return location for the latest
		 *   interpolated event's X coordinate
		 * 
		 * return location for the latest
		 *   interpolated event's Y coordinate
		 */
		get_interpolated_coords(): [ interpolated_x: number | null, interpolated_y: number | null ];
		/**
		 * Retrieves the delta, in stage space, since the latest interpolated
		 * event, analogous to {@link Clutter.GestureAction.get_motion_delta}.
		 * @returns the distance since the latest interpolated event
		 * 
		 * return location for the X delta since
		 *   the latest interpolated event
		 * 
		 * return location for the Y delta since
		 *   the latest interpolated event
		 */
		get_interpolated_delta(): [ number, number | null, number | null ];
		/**
		 * Retrieves the coordinates, in stage space, dependent on the current state
		 * of the {@link PanAction}. If it is inactive, both fields will be
		 * set to 0. If it is panning by user action, the values will be equivalent
		 * to those returned by {@link Clutter.GestureAction.get_motion_coords}.
		 * If it is interpolating with some form of kinetic scrolling, the values
		 * will be equivalent to those returned by
		 * clutter_pan_action_get_interpolated_coords(). This is a convenience
		 * method designed to be used in replacement "pan" signal handlers.
		 * @param point the touch point index, with 0 being the first touch
		 *   point received by the action
		 * @returns return location for the X coordinate
		 * 
		 * return location for the Y coordinate
		 */
		get_motion_coords(point: number): [ motion_x: number | null, motion_y: number | null ];
		/**
		 * Retrieves the delta, in stage space, dependent on the current state
		 * of the {@link PanAction}. If it is inactive, both fields will be
		 * set to 0. If it is panning by user action, the values will be equivalent
		 * to those returned by {@link Clutter.GestureAction.get_motion_delta}.
		 * If it is interpolating with some form of kinetic scrolling, the values
		 * will be equivalent to those returned by
		 * clutter_pan_action_get_interpolated_delta(). This is a convenience
		 * method designed to be used in replacement "pan" signal handlers.
		 * @param point the touch point index, with 0 being the first touch
		 *   point received by the action
		 * @returns 
		 * 
		 * return location for the X delta
		 * 
		 * return location for the Y delta
		 */
		get_motion_delta(point: number): [ number, number | null, number | null ];
		/**
		 * Retrieves the axis constraint set by {@link Clutter.PanAction.set_pan_axis}
		 * @returns the axis constraint
		 */
		get_pan_axis(): PanAxis;
		/**
		 * Factor applied to the momentum velocity at the time of releasing the
		 * pointer when generating interpolated ::pan events.
		 * @param factor The acceleration factor
		 */
		set_acceleration_factor(factor: number): void;
		/**
		 * Sets the deceleration rate of the interpolated ::pan events generated
		 * after a pan gesture. This is approximately the value that the momentum
		 * at the time of releasing the pointer is divided by every 60th of a second.
		 * @param rate The deceleration rate
		 */
		set_deceleration(rate: number): void;
		/**
		 * Sets whether the action should emit interpolated ::pan events
		 * after the drag has ended, to emulate the gesture kinetic inertia.
		 * @param should_interpolate whether to enable interpolated pan events
		 */
		set_interpolate(should_interpolate: boolean): void;
		/**
		 * Restricts the panning action to a specific axis
		 * @param axis the axis to constraint the panning to
		 */
		set_pan_axis(axis: PanAxis): void;
		/**
		 * The ::pan signal is emitted to keep track of the motion during
		 * a pan gesture. #is_interpolated is set to %TRUE during the
		 * interpolation phase of the pan, after the drag has ended and
		 * the :interpolate property was set to %TRUE.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - actor: the {@link Actor} attached to the #action 
		 *  - is_interpolated: if the event is the result of interpolating
		 *                   the motion velocity at the end of the drag 
		 *  - returns %TRUE if the pan should continue, and %FALSE if
		 *   the pan should be cancelled. 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "pan", callback: (owner: this, actor: Actor, is_interpolated: boolean) => boolean): number;
		/**
		 * The ::pan-stopped signal is emitted at the end of the interpolation
		 * phase of the pan action, only when :interpolate is set to %TRUE.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - actor: the {@link Actor} attached to the #action 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "pan-stopped", callback: (owner: this, actor: Actor) => void): number;

		connect(signal: "notify::acceleration-factor", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::deceleration", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::interpolate", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::pan-axis", callback: (owner: this, ...args: any) => void): number;

	}

	type PanActionInitOptionsMixin = GestureActionInitOptions & 
	Pick<IPanAction,
		"acceleration_factor" |
		"deceleration" |
		"interpolate" |
		"pan_axis">;

	export interface PanActionInitOptions extends PanActionInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link PanAction} instead.
	 */
	type PanActionMixin = IPanAction & GestureAction;

	/**
	 * The {@link PanAction} structure contains
	 * only private data and should be accessed using the provided API
	 */
	interface PanAction extends PanActionMixin {}

	class PanAction {
		public constructor(options?: Partial<PanActionInitOptions>);
		/**
		 * Creates a new {@link PanAction} instance
		 * @returns the newly created {@link PanAction}
		 */
		public static new(): Action;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ParamSpecColor} instead.
	 */
	interface IParamSpecColor {
		/**
		 * default color value
		 */
		readonly default_value: Color;

		connect(signal: "notify::default_value", callback: (owner: this, ...args: any) => void): number;

	}

	type ParamSpecColorInitOptionsMixin = GObject.ParamSpecInitOptions
	export interface ParamSpecColorInitOptions extends ParamSpecColorInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ParamSpecColor} instead.
	 */
	type ParamSpecColorMixin = IParamSpecColor & GObject.ParamSpec;

	/**
	 * A #GParamSpec subclass for defining properties holding
	 * a {@link Color}.
	 */
	interface ParamSpecColor extends ParamSpecColorMixin {}

	class ParamSpecColor {
		public constructor(options?: Partial<ParamSpecColorInitOptions>);
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ParamSpecUnit} instead.
	 */
	interface IParamSpecUnit {

	}

	type ParamSpecUnitInitOptionsMixin = GObject.ParamSpecInitOptions
	export interface ParamSpecUnitInitOptions extends ParamSpecUnitInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ParamSpecUnit} instead.
	 */
	type ParamSpecUnitMixin = IParamSpecUnit & GObject.ParamSpec;

	interface ParamSpecUnit extends ParamSpecUnitMixin {}

	class ParamSpecUnit {
		public constructor(options?: Partial<ParamSpecUnitInitOptions>);
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Path} instead.
	 */
	interface IPath {
		description: string;
		readonly length: number;
		/**
		 * Add the nodes of the Cairo path to the end of #path.
		 * @param cpath a Cairo path
		 */
		add_cairo_path(cpath: cairo.Path): void;
		/**
		 * Adds a %CLUTTER_PATH_CLOSE type node to the path. This creates a
		 * straight line from the last node to the last %CLUTTER_PATH_MOVE_TO
		 * type node.
		 */
		add_close(): void;
		/**
		 * Adds a %CLUTTER_PATH_CURVE_TO type node to the path. This causes
		 * the actor to follow a bezier from the last node to (#x_3, #y_3) using
		 * (#x_1, #y_1) and (#x_2,#y_2) as control points.
		 * @param x_1 the x coordinate of the first control point
		 * @param y_1 the y coordinate of the first control point
		 * @param x_2 the x coordinate of the second control point
		 * @param y_2 the y coordinate of the second control point
		 * @param x_3 the x coordinate of the third control point
		 * @param y_3 the y coordinate of the third control point
		 */
		add_curve_to(x_1: number, y_1: number, x_2: number, y_2: number, x_3: number, y_3: number): void;
		/**
		 * Adds a %CLUTTER_PATH_LINE_TO type node to the path. This causes the
		 * actor to move to the new coordinates in a straight line.
		 * @param x the x coordinate
		 * @param y the y coordinate
		 */
		add_line_to(x: number, y: number): void;
		/**
		 * Adds a %CLUTTER_PATH_MOVE_TO type node to the path. This is usually
		 * used as the first node in a path. It can also be used in the middle
		 * of the path to cause the actor to jump to the new coordinate.
		 * @param x the x coordinate
		 * @param y the y coordinate
		 */
		add_move_to(x: number, y: number): void;
		/**
		 * Adds #node to the end of the path.
		 * @param node a {@link PathNode}
		 */
		add_node(node: PathNode): void;
		/**
		 * Same as {@link Clutter.Path.add_curve_to} except the coordinates are
		 * relative to the previous node.
		 * @param x_1 the x coordinate of the first control point
		 * @param y_1 the y coordinate of the first control point
		 * @param x_2 the x coordinate of the second control point
		 * @param y_2 the y coordinate of the second control point
		 * @param x_3 the x coordinate of the third control point
		 * @param y_3 the y coordinate of the third control point
		 */
		add_rel_curve_to(x_1: number, y_1: number, x_2: number, y_2: number, x_3: number, y_3: number): void;
		/**
		 * Same as {@link Clutter.Path.add_line_to} except the coordinates are
		 * relative to the previous node.
		 * @param x the x coordinate
		 * @param y the y coordinate
		 */
		add_rel_line_to(x: number, y: number): void;
		/**
		 * Same as {@link Clutter.Path.add_move_to} except the coordinates are
		 * relative to the previous node.
		 * @param x the x coordinate
		 * @param y the y coordinate
		 */
		add_rel_move_to(x: number, y: number): void;
		/**
		 * Adds new nodes to the end of the path as described in #str. The
		 * format is a subset of the SVG path format. Each node is represented
		 * by a letter and is followed by zero, one or three pairs of
		 * coordinates. The coordinates can be separated by spaces or a
		 * comma. The types are:
		 * 
		 *  - `M`: Adds a %CLUTTER_PATH_MOVE_TO node. Takes one pair of coordinates.
		 *  - `L`: Adds a %CLUTTER_PATH_LINE_TO node. Takes one pair of coordinates.
		 *  - `C`: Adds a %CLUTTER_PATH_CURVE_TO node. Takes three pairs of coordinates.
		 *  - `z`: Adds a %CLUTTER_PATH_CLOSE node. No coordinates are needed.
		 * 
		 * The M, L and C commands can also be specified in lower case which
		 * means the coordinates are relative to the previous node.
		 * 
		 * For example, to move an actor in a 100 by 100 pixel square centered
		 * on the point 300,300 you could use the following path:
		 * 
		 * |[
		 *   M 250,350 l 0 -100 L 350,250 l 0 100 z
		 * ]|
		 * 
		 * If the path description isn't valid %FALSE will be returned and no
		 * nodes will be added.
		 * @param str a string describing the new nodes
		 * @returns %TRUE is the path description was valid or %FALSE
		 * otherwise.
		 */
		add_string(str: string): boolean;
		/**
		 * Removes all nodes from the path.
		 */
		clear(): void;
		/**
		 * Calls a function for each node of the path.
		 * @param callback the function to call with each node
		 */
		foreach(callback: PathCallback): void;
		/**
		 * Returns a newly allocated string describing the path in the same
		 * format as used by {@link Clutter.Path.add_string}.
		 * @returns a string description of the path. Free with {@link GObject.free}.
		 */
		get_description(): string;
		/**
		 * Retrieves an approximation of the total length of the path.
		 * @returns the length of the path.
		 */
		get_length(): number;
		/**
		 * Retrieves the number of nodes in the path.
		 * @returns the number of nodes.
		 */
		get_n_nodes(): number;
		/**
		 * Retrieves the node of the path indexed by #index.
		 * @param index_ the node number to retrieve
		 * @returns a location to store a copy of the node
		 */
		get_node(index_: number): PathNode;
		/**
		 * Returns a #GSList of {@link PathNode}<!-- -->s. The list should be
		 * freed with {@link GObject.slist_free}. The nodes are owned by the path and
		 * should not be freed. Altering the path may cause the nodes in the
		 * list to become invalid so you should copy them if you want to keep
		 * the list.
		 * @returns a
		 *   list of nodes in the path.
		 */
		get_nodes(): PathNode[];
		/**
		 * The value in #progress represents a position along the path where
		 * 0.0 is the beginning and 1.0 is the end of the path. An
		 * interpolated position is then stored in #position.
		 * @param progress a position along the path as a fraction of its length
		 * @returns index of the node used to calculate the position.
		 * 
		 * location to store the position
		 */
		get_position(progress: number): [ number, Knot ];
		/**
		 * Inserts #node into the path before the node at the given offset. If
		 * #index_ is negative it will append the node to the end of the path.
		 * @param index_ offset of where to insert the node
		 * @param node the node to insert
		 */
		insert_node(index_: number, node: PathNode): void;
		/**
		 * Removes the node at the given offset from the path.
		 * @param index_ index of the node to remove
		 */
		remove_node(index_: number): void;
		/**
		 * Replaces the node at offset #index_ with #node.
		 * @param index_ index to the existing node
		 * @param node the replacement node
		 */
		replace_node(index_: number, node: PathNode): void;
		/**
		 * Replaces all of the nodes in the path with nodes described by
		 * #str. See {@link Clutter.Path.add_string} for details of the format.
		 * 
		 * If the string is invalid then %FALSE is returned and the path is
		 * unaltered.
		 * @param str a string describing the path
		 * @returns %TRUE is the path was valid, %FALSE otherwise.
		 */
		set_description(str: string): boolean;
		/**
		 * Add the nodes of the ClutterPath to the path in the Cairo context.
		 * @param cr a Cairo context
		 */
		to_cairo_path(cr: cairo.Context): void;
		connect(signal: "notify::description", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::length", callback: (owner: this, ...args: any) => void): number;

	}

	type PathInitOptionsMixin = GObject.InitiallyUnownedInitOptions & 
	Pick<IPath,
		"description">;

	export interface PathInitOptions extends PathInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Path} instead.
	 */
	type PathMixin = IPath & GObject.InitiallyUnowned;

	/**
	 * The {@link Path} struct contains only private data and should
	 * be accessed with the functions below.
	 */
	interface Path extends PathMixin {}

	class Path {
		public constructor(options?: Partial<PathInitOptions>);
		/**
		 * Creates a new {@link Path} instance with no nodes.
		 * @returns the newly created {@link Path}
		 */
		public static new(): Path;
		/**
		 * Creates a new {@link Path} instance with the nodes described in
		 * #desc. See {@link Clutter.Path.add_string} for details of the format of
		 * the string.
		 * @param desc a string describing the path
		 * @returns the newly created {@link Path}
		 */
		public static new_with_description(desc: string): Path;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link PathConstraint} instead.
	 */
	interface IPathConstraint {
		/**
		 * The offset along the {@link PathConstraint.path}, between -1.0 and 2.0.
		 */
		offset: number;
		/**
		 * The {@link Path} used to constrain the position of an actor.
		 */
		path: Path;
		/**
		 * Retrieves the offset along the {@link Path} used by #constraint.
		 * @returns the offset
		 */
		get_offset(): number;
		/**
		 * Retrieves a pointer to the {@link Path} used by #constraint.
		 * @returns the {@link Path} used by the
		 *   #ClutterPathConstraint, or %NULL. The returned #ClutterPath is owned
		 *   by the constraint and it should not be unreferenced
		 */
		get_path(): Path;
		/**
		 * Sets the offset along the {@link Path} used by #constraint.
		 * @param offset the offset along the path
		 */
		set_offset(offset: number): void;
		/**
		 * Sets the #path to be followed by the {@link PathConstraint}.
		 * 
		 * The #constraint will take ownership of the #ClutterPath passed to this
		 * function.
		 * @param path a {@link Path}
		 */
		set_path(path?: Path | null): void;
		/**
		 * The ::node-reached signal is emitted each time a
		 * {@link PathConstraint.offset} value results in the actor
		 * passing a #ClutterPathNode
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - actor: the {@link Actor} using the #constraint 
		 *  - index: the index of the node that has been reached 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "node-reached", callback: (owner: this, actor: Actor, index: number) => void): number;

		connect(signal: "notify::offset", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::path", callback: (owner: this, ...args: any) => void): number;

	}

	type PathConstraintInitOptionsMixin = ConstraintInitOptions & 
	Pick<IPathConstraint,
		"offset" |
		"path">;

	export interface PathConstraintInitOptions extends PathConstraintInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link PathConstraint} instead.
	 */
	type PathConstraintMixin = IPathConstraint & Constraint;

	/**
	 * {@link PathConstraint} is an opaque structure
	 * whose members cannot be directly accessed
	 */
	interface PathConstraint extends PathConstraintMixin {}

	class PathConstraint {
		public constructor(options?: Partial<PathConstraintInitOptions>);
		/**
		 * Creates a new {@link PathConstraint} with the given #path and #offset
		 * @param path a {@link Path}, or %NULL
		 * @param offset the offset along the {@link Path}
		 * @returns the newly created {@link PathConstraint}
		 */
		public static new(path: Path | null, offset: number): Constraint;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link PipelineNode} instead.
	 */
	interface IPipelineNode {

	}

	type PipelineNodeInitOptionsMixin = PaintNodeInitOptions
	export interface PipelineNodeInitOptions extends PipelineNodeInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link PipelineNode} instead.
	 */
	type PipelineNodeMixin = IPipelineNode & PaintNode;

	/**
	 * The {@link TextNode} structure is an opaque
	 * type whose members cannot be directly accessed.
	 */
	interface PipelineNode extends PipelineNodeMixin {}

	class PipelineNode {
		public constructor(options?: Partial<PipelineNodeInitOptions>);
		/**
		 * Creates a new {@link PaintNode} that will use the #pipeline to
		 * paint its contents.
		 * 
		 * This function will acquire a reference on the passed #pipeline,
		 * so it is safe to call {@link Cogl.Object.unref} when it returns.
		 * @param pipeline a Cogl pipeline state object, or %NULL
		 * @returns the newly created {@link PaintNode}.
		 *   Use {@link Clutter.PaintNode.unref} when done.
		 */
		public static new(pipeline?: Cogl.Pipeline | null): PaintNode;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link PropertyTransition} instead.
	 */
	interface IPropertyTransition {
		/**
		 * The name of the property of a {@link Animatable} to animate.
		 */
		property_name: string;
		/**
		 * Retrieves the value of the {@link PropertyTransition.property_name}
		 * property.
		 * @returns the name of the property being animated, or %NULL if
		 *   none is set. The returned string is owned by the #transition and
		 *   it should not be freed.
		 */
		get_property_name(): string;
		/**
		 * Sets the {@link PropertyTransition.property_name} property of #transition.
		 * @param property_name a property name
		 */
		set_property_name(property_name?: string | null): void;
		connect(signal: "notify::property-name", callback: (owner: this, ...args: any) => void): number;

	}

	type PropertyTransitionInitOptionsMixin = TransitionInitOptions & ScriptableInitOptions & 
	Pick<IPropertyTransition,
		"property_name">;

	export interface PropertyTransitionInitOptions extends PropertyTransitionInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link PropertyTransition} instead.
	 */
	type PropertyTransitionMixin = IPropertyTransition & Transition & Scriptable;

	/**
	 * The {@link PropertyTransition} structure contains
	 * private data and should only be accessed using the provided API.
	 */
	interface PropertyTransition extends PropertyTransitionMixin {}

	class PropertyTransition {
		public constructor(options?: Partial<PropertyTransitionInitOptions>);
		/**
		 * Creates a new {@link PropertyTransition}.
		 * @param property_name a property of #animatable, or %NULL
		 * @returns the newly created {@link PropertyTransition}.
		 *   Use {@link GObject.Object.unref} when done
		 */
		public static new(property_name?: string | null): Transition;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Rectangle} instead.
	 */
	interface IRectangle {
		/**
		 * The color of the border of the rectangle.
		 */
		border_color: Color;
		/**
		 * The width of the border of the rectangle, in pixels.
		 */
		border_width: number;
		/**
		 * The color of the rectangle.
		 */
		color: Color;
		/**
		 * Whether the {@link Rectangle} should be displayed with a border.
		 */
		has_border: boolean;
		/**
		 * @deprecated
		 * Use {@link Actor} and a #ClutterCanvas to draw
		 *   the border with Cairo
		 * 
		 * Gets the color of the border used by #rectangle and places
		 * it into #color.
		 * @returns return location for a {@link Color}
		 */
		get_border_color(): Color;
		/**
		 * @deprecated
		 * Use {@link Actor} and a #ClutterCanvas content
		 *   to draw the border using Cairo
		 * 
		 * Gets the width (in pixels) of the border used by #rectangle
		 * @returns the border's width
		 */
		get_border_width(): number;
		/**
		 * @deprecated
		 * Use {@link Actor} and {@link Clutter.Actor.get_background_color}
		 *   instead
		 * 
		 * Retrieves the color of #rectangle.
		 * @returns return location for a {@link Color}
		 */
		get_color(): Color;
		/**
		 * @deprecated
		 * Use {@link Actor} and a #ClutterCanvas to draw
		 *   the border with Cairo
		 * 
		 * Sets the color of the border used by #rectangle using #color
		 * @param color the color of the border
		 */
		set_border_color(color: Color): void;
		/**
		 * @deprecated
		 * Use {@link Actor} and a #ClutterCanvas content
		 *   to draw the border using Cairo
		 * 
		 * Sets the width (in pixel) of the border used by #rectangle.
		 * A #width of 0 will unset the border.
		 * @param width the width of the border
		 */
		set_border_width(width: number): void;
		/**
		 * @deprecated
		 * Use {@link Actor} and {@link Clutter.Actor.set_background_color}
		 *   instead
		 * 
		 * Sets the color of #rectangle.
		 * @param color a {@link Color}
		 */
		set_color(color: Color): void;
		connect(signal: "notify::border-color", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::border-width", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::color", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::has-border", callback: (owner: this, ...args: any) => void): number;

	}

	type RectangleInitOptionsMixin = ActorInitOptions & Atk.ImplementorIfaceInitOptions & AnimatableInitOptions & ContainerInitOptions & ScriptableInitOptions & 
	Pick<IRectangle,
		"border_color" |
		"border_width" |
		"color" |
		"has_border">;

	export interface RectangleInitOptions extends RectangleInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Rectangle} instead.
	 */
	type RectangleMixin = IRectangle & Actor & Atk.ImplementorIface & Animatable & Container & Scriptable;

	/**
	 * The {@link Rectangle} structure contains only private data
	 * and should be accessed using the provided API
	 */
	interface Rectangle extends RectangleMixin {}

	class Rectangle {
		public constructor(options?: Partial<RectangleInitOptions>);
		/**
		 * @deprecated
		 * Use {@link Clutter.Actor.new} instead
		 * 
		 * Creates a new {@link Actor} with a rectangular shape.
		 * @returns a new {@link Rectangle}
		 */
		public static new(): Actor;
		/**
		 * @deprecated
		 * Use {@link Clutter.Actor.new} and
		 *   clutter_actor_set_background_color() instead
		 * 
		 * Creates a new {@link Actor} with a rectangular shape
		 * and of the given #color.
		 * @param color a {@link Color}
		 * @returns a new {@link Rectangle}
		 */
		public static new_with_color(color: Color): Actor;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link RootNode} instead.
	 */
	interface IRootNode {

	}

	type RootNodeInitOptionsMixin = PaintNodeInitOptions
	export interface RootNodeInitOptions extends RootNodeInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link RootNode} instead.
	 */
	type RootNodeMixin = IRootNode & PaintNode;

	/**
	 * The {@link RootNode} structure is an opaque
	 * type whose members cannot be directly accessed.
	 */
	interface RootNode extends RootNodeMixin {}

	class RootNode {
		public constructor(options?: Partial<RootNodeInitOptions>);
		public static new(framebuffer: Cogl.Framebuffer, clear_color: Color, clear_flags: Cogl.BufferBit): PaintNode;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link RotateAction} instead.
	 */
	interface IRotateAction {

		/**
		 * The ::rotate signal is emitted when a rotate gesture is
		 * recognized on the attached actor and when the gesture is
		 * cancelled (in this case with an angle value of 0).
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - actor: the {@link Actor} attached to the #action 
		 *  - angle: the difference of angle of rotation between the initial
		 * rotation and the current rotation 
		 *  - returns %TRUE if the rotation should continue, and %FALSE if
		 *   the rotation should be cancelled. 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "rotate", callback: (owner: this, actor: Actor, angle: number) => boolean): number;

	}

	type RotateActionInitOptionsMixin = GestureActionInitOptions
	export interface RotateActionInitOptions extends RotateActionInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link RotateAction} instead.
	 */
	type RotateActionMixin = IRotateAction & GestureAction;

	/**
	 * The {@link RotateAction} structure contains
	 * only private data and should be accessed using the provided API
	 */
	interface RotateAction extends RotateActionMixin {}

	class RotateAction {
		public constructor(options?: Partial<RotateActionInitOptions>);
		/**
		 * Creates a new {@link RotateAction} instance
		 * @returns the newly created {@link RotateAction}
		 */
		public static new(): Action;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Script} instead.
	 */
	interface IScript {
		/**
		 * The path of the currently parsed file. If {@link Script.filename_set}
		 * is %FALSE then the value of this property is undefined.
		 */
		readonly filename: string;
		/**
		 * Whether the {@link Script.filename} property is set. If this property
		 * is %TRUE then the currently parsed data comes from a file, and the
		 * file name is stored inside the #ClutterScript:filename property.
		 */
		readonly filename_set: boolean;
		/**
		 * The translation domain, used to localize strings marked as translatable
		 * inside a UI definition.
		 * 
		 * If {@link Script.translation_domain} is set to %NULL, #ClutterScript
		 * will use gettext(), otherwise g_dgettext() will be used.
		 */
		translation_domain: string;
		/**
		 * Adds #paths to the list of search paths held by #script.
		 * 
		 * The search paths are used by {@link Clutter.Script.lookup_filename}, which
		 * can be used to define search paths for the textures source file name
		 * or other custom, file-based properties.
		 * @param paths an array of strings containing
		 *   different search paths
		 */
		add_search_paths(paths: string[]): void;
		/**
		 * Associates a {@link State} to the #ClutterScript instance using the given
		 * name.
		 * 
		 * The #ClutterScript instance will use #state to resolve target states when
		 * connecting signal handlers.
		 * 
		 * The #ClutterScript instance will take a reference on the #ClutterState
		 * passed to this function.
		 * @param name a name for the #state, or %NULL to
		 *   set the default {@link State}
		 * @param state a {@link State}
		 */
		add_states(name: string | null, state: State): void;
		/**
		 * Connects all the signals defined into a UI definition file to their
		 * handlers.
		 * 
		 * This method invokes {@link Clutter.Script.connect_signals_full} internally
		 * and uses  #GModule's introspective features (by opening the current
		 * module's scope) to look at the application's symbol table.
		 * 
		 * Note that this function will not work if #GModule is not supported by
		 * the platform Clutter is running on.
		 * @param user_data data to be passed to the signal handlers, or %NULL
		 */
		connect_signals(user_data?: any | null): void;
		/**
		 * Connects all the signals defined into a UI definition file to their
		 * handlers.
		 * 
		 * This function allows to control how the signal handlers are
		 * going to be connected to their respective signals. It is meant
		 * primarily for language bindings to allow resolving the function
		 * names using the native API, but it can also be used on platforms
		 * that do not support GModule.
		 * 
		 * Applications should use {@link Clutter.Script.connect_signals}.
		 * @param func signal connection function
		 */
		connect_signals_full(func: ScriptConnectFunc): void;
		/**
		 * Ensure that every object defined inside #script is correctly
		 * constructed. You should rarely need to use this function.
		 */
		ensure_objects(): void;
		/**
		 * Retrieves the object bound to #name. This function does not increment
		 * the reference count of the returned object.
		 * @param name the name of the object to retrieve
		 * @returns the named object, or %NULL if no object
		 *   with the given name was available
		 */
		get_object(name: string): GObject.Object;
		/**
		 * Retrieves a list of objects for the given names. After #script, object
		 * names/return location pairs should be listed, with a %NULL pointer
		 * ending the list, like:
		 * 
		 * |[
		 *   GObject *my_label, *a_button, *main_timeline;
		 * 
		 *   clutter_script_get_objects (script,
		 *                               "my-label", &my_label,
		 *                               "a-button", &a_button,
		 *                               "main-timeline", &main_timeline,
		 *                               NULL);
		 * ]|
		 * 
		 * Note: This function does not increment the reference count of the
		 * returned objects.
		 * @param first_name the name of the first object to retrieve
		 * @returns the number of objects returned.
		 */
		get_objects(first_name: string): number;
		/**
		 * Retrieves the {@link State} for the given #state_name.
		 * 
		 * If #name is %NULL, this function will return the default
		 * #ClutterState instance.
		 * @param name the name of the {@link State}, or %NULL
		 * @returns a pointer to the {@link State} for the
		 *   given name. The #ClutterState is owned by the #ClutterScript instance
		 *   and it should not be unreferenced
		 */
		get_states(name?: string | null): State;
		/**
		 * Retrieves the translation domain set using
		 * {@link Clutter.Script.set_translation_domain}.
		 * @returns the translation domain, if any is set,
		 *   or %NULL
		 */
		get_translation_domain(): string;
		/**
		 * Looks up a type by name, using the virtual function that
		 * {@link Script} has for that purpose. This function should
		 * rarely be used.
		 * @param type_name name of the type to look up
		 * @returns the type for the requested type name, or
		 *   %G_TYPE_INVALID if not corresponding type was found.
		 */
		get_type_from_name(type_name: string): GObject.Type;
		/**
		 * Retrieves all the objects created by #script.
		 * 
		 * Note: this function does not increment the reference count of the
		 * objects it returns.
		 * @returns a list
		 *   of #GObject<!-- -->s, or %NULL. The objects are owned by the
		 *   {@link Script} instance. Use {@link GObject.list_free} on the returned list when
		 *   done.
		 */
		list_objects(): GObject.Object[];
		/**
		 * Loads the definitions from #data into #script and merges with
		 * the currently loaded ones, if any.
		 * @param data a buffer containing the definitions
		 * @param length the length of the buffer, or -1 if #data is a NUL-terminated
		 *   buffer
		 * @returns on error, zero is returned and #error is set
		 *   accordingly. On success, the merge id for the UI definitions is
		 *   returned. You can use the merge id with {@link Clutter.Script.unmerge_objects}.
		 */
		load_from_data(data: string, length: number): number;
		/**
		 * Loads the definitions from #filename into #script and merges with
		 * the currently loaded ones, if any.
		 * @param filename the full path to the definition file
		 * @returns on error, zero is returned and #error is set
		 *   accordingly. On success, the merge id for the UI definitions is
		 *   returned. You can use the merge id with {@link Clutter.Script.unmerge_objects}.
		 */
		load_from_file(filename: string): number;
		/**
		 * Loads the definitions from a resource file into #script and merges with
		 * the currently loaded ones, if any.
		 * @param resource_path the resource path of the file to parse
		 * @returns on error, zero is returned and #error is set
		 *   accordingly. On success, the merge id for the UI definitions is
		 *   returned. You can use the merge id with {@link Clutter.Script.unmerge_objects}.
		 */
		load_from_resource(resource_path: string): number;
		/**
		 * Looks up #filename inside the search paths of #script. If #filename
		 * is found, its full path will be returned .
		 * @param filename the name of the file to lookup
		 * @returns the full path of #filename or %NULL if no path was
		 *   found.
		 */
		lookup_filename(filename: string): string;
		/**
		 * Sets the translation domain for #script.
		 * @param domain the translation domain, or %NULL
		 */
		set_translation_domain(domain?: string | null): void;
		/**
		 * Unmerges the objects identified by #merge_id.
		 * @param merge_id merge id returned when loading a UI definition
		 */
		unmerge_objects(merge_id: number): void;
		connect(signal: "notify::filename", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::filename-set", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::translation-domain", callback: (owner: this, ...args: any) => void): number;

	}

	type ScriptInitOptionsMixin = GObject.ObjectInitOptions & 
	Pick<IScript,
		"translation_domain">;

	export interface ScriptInitOptions extends ScriptInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Script} instead.
	 */
	type ScriptMixin = IScript & GObject.Object;

	/**
	 * The {@link Script} structure contains only private data
	 * and should be accessed using the provided API
	 */
	interface Script extends ScriptMixin {}

	class Script {
		public constructor(options?: Partial<ScriptInitOptions>);
		/**
		 * Creates a new {@link Script} instance. #ClutterScript can be used to load
		 * objects definitions for scenegraph elements, like actors, or behavioural
		 * elements, like timelines. The definitions must be encoded using the
		 * JavaScript Object Notation (JSON) language.
		 * @returns the newly created {@link Script} instance. Use
		 *   {@link GObject.Object.unref} when done.
		 */
		public static new(): Script;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ScrollActor} instead.
	 */
	interface IScrollActor {
		/**
		 * The scrollin direction.
		 */
		scroll_mode: ScrollMode;
		/**
		 * Retrieves the {@link ScrollActor.scroll_mode} property
		 * @returns the scrolling mode
		 */
		get_scroll_mode(): ScrollMode;
		/**
		 * Scrolls the contents of #actor so that #point is the new origin
		 * of the visible area.
		 * 
		 * The coordinates of #point must be relative to the #actor.
		 * 
		 * This function will use the currently set easing state of the #actor
		 * to transition from the current scroll origin to the new one.
		 * @param point a #graphene_point_t
		 */
		scroll_to_point(point: Graphene.Point): void;
		/**
		 * Scrolls #actor so that #rect is in the visible portion.
		 * @param rect a {@link Rect}
		 */
		scroll_to_rect(rect: Graphene.Rect): void;
		/**
		 * Sets the {@link ScrollActor.scroll_mode} property.
		 * @param mode a {@link ScrollMode}
		 */
		set_scroll_mode(mode: ScrollMode): void;
		connect(signal: "notify::scroll-mode", callback: (owner: this, ...args: any) => void): number;

	}

	type ScrollActorInitOptionsMixin = ActorInitOptions & Atk.ImplementorIfaceInitOptions & AnimatableInitOptions & ContainerInitOptions & ScriptableInitOptions & 
	Pick<IScrollActor,
		"scroll_mode">;

	export interface ScrollActorInitOptions extends ScrollActorInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ScrollActor} instead.
	 */
	type ScrollActorMixin = IScrollActor & Actor & Atk.ImplementorIface & Animatable & Container & Scriptable;

	/**
	 * The {@link ScrollActor} structure contains only
	 * private data, and should be accessed using the provided API.
	 */
	interface ScrollActor extends ScrollActorMixin {}

	class ScrollActor {
		public constructor(options?: Partial<ScrollActorInitOptions>);
		/**
		 * Creates a new {@link ScrollActor}.
		 * @returns The newly created {@link ScrollActor}
		 *   instance.
		 */
		public static new(): Actor;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Seat} instead.
	 */
	interface ISeat {
		backend: Backend;
		/**
		 * The current touch-mode of the {@link Seat}, it is set to %TRUE if the
		 * requirements documented in {@link Clutter.Seat.get_touch_mode} are fulfilled.
		 */
		readonly touch_mode: boolean;
		bell_notify(): void;
		compress_motion(event: Event, to_discard: Event): void;
		/**
		 * Creates a virtual input device.
		 * @param device_type the type of the virtual device
		 * @returns a newly created virtual device
		 */
		create_virtual_device(device_type: InputDeviceType): VirtualInputDevice;
		ensure_a11y_state(): void;
		get_kbd_a11y_settings(settings: KbdA11ySettings): void;
		/**
		 * Returns the master keyboard
		 * @returns the master keyboard
		 */
		get_keyboard(): InputDevice;
		/**
		 * Returns the seat keymap
		 * @returns the seat keymap
		 */
		get_keymap(): Keymap;
		/**
		 * Returns the master pointer
		 * @returns the master pointer
		 */
		get_pointer(): InputDevice;
		/**
		 * Gets the current pointer accessibility settings
		 * @param settings a pointer to a {@link PointerA11ySettings}
		 */
		get_pointer_a11y_settings(settings: PointerA11ySettings): void;
		get_supported_virtual_device_types(): VirtualDeviceType;
		/**
		 * Gets the current touch-mode state of the {@link Seat} #seat.
		 * The #ClutterSeat:touch-mode property is set to %TRUE if the following
		 * requirements are fulfilled:
		 * 
		 *  - A touchscreen is available
		 *  - A tablet mode switch, if present, is enabled
		 * @returns %TRUE if the device is a tablet that doesn't have an external
		 *   keyboard attached, %FALSE otherwise.
		 */
		get_touch_mode(): boolean;
		handle_device_event(event: Event): boolean;
		/**
		 * Inhibits unsetting of the pointer focus-surface for the {@link Seat} #seat,
		 * this allows to keep using the pointer even when it's hidden.
		 * 
		 * This property is refcounted, so {@link Clutter.Seat.uninhibit_unfocus} must be
		 * called the exact same number of times as clutter_seat_inhibit_unfocus()
		 * was called before.
		 */
		inhibit_unfocus(): void;
		/**
		 * Gets whether unsetting of the pointer focus-surface is inhibited
		 * for the {@link Seat} #seat.
		 * @returns %TRUE if unsetting is inhibited, %FALSE otherwise
		 */
		is_unfocus_inhibited(): boolean;
		/**
		 * Returns the list of HW devices
		 * @returns A list
		 *   of {@link InputDevice}. The elements of the returned list are owned by
		 *   Clutter and may not be freed, the returned list should be freed using
		 *   {@link GObject.list_free} when done.
		 */
		list_devices(): InputDevice[];
		set_kbd_a11y_settings(settings: KbdA11ySettings): void;
		/**
		 * Sets the dwell click type
		 * @param click_type type of click as {@link PointerA11yDwellClickType}
		 */
		set_pointer_a11y_dwell_click_type(click_type: PointerA11yDwellClickType): void;
		/**
		 * Sets the pointer accessibility settings
		 * @param settings a pointer to a {@link PointerA11ySettings}
		 */
		set_pointer_a11y_settings(settings: PointerA11ySettings): void;
		/**
		 * Disables the inhibiting of unsetting of the pointer focus-surface
		 * previously enabled by calling {@link Clutter.Seat.inhibit_unfocus}.
		 * 
		 * This property is refcounted, so clutter_seat_uninhibit_unfocus() must be
		 * called the exact same number of times as clutter_seat_inhibit_unfocus()
		 * was called before.
		 */
		uninhibit_unfocus(): void;
		warp_pointer(x: number, y: number): void;
		connect(signal: "device-added", callback: (owner: this, object: InputDevice) => void): number;
		connect(signal: "device-removed", callback: (owner: this, object: InputDevice) => void): number;
		/**
		 * The ::is-unfocus-inhibited-changed signal is emitted when the
		 * property to inhibit the unsetting of the focus-surface of the
		 * {@link Seat} changed. To get the current state of this property,
		 * use {@link Clutter.Seat.is_unfocus_inhibited}.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "is-unfocus-inhibited-changed", callback: (owner: this) => void): number;
		/**
		 * The ::kbd-a11y-flags-changed signal is emitted each time the
		 * ClutterKeyboardA11yFlags configuration is changed as the result of
		 * keyboard accessibility operations.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - settings_flags: the new ClutterKeyboardA11yFlags configuration 
		 *  - changed_mask: the ClutterKeyboardA11yFlags changed 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "kbd-a11y-flags-changed", callback: (owner: this, settings_flags: number, changed_mask: number) => void): number;
		/**
		 * The ::kbd-a11y-mods-state-changed signal is emitted each time either the
		 * latched modifiers mask or locked modifiers mask are changed as the
		 * result of keyboard accessibilty's sticky keys operations.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - latched_mask: the latched modifier mask from stickykeys 
		 *  - locked_mask: the locked modifier mask from stickykeys 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "kbd-a11y-mods-state-changed", callback: (owner: this, latched_mask: number, locked_mask: number) => void): number;
		/**
		 * The ::ptr-a11y-dwell-click-type-changed signal is emitted each time
		 * the ClutterPointerA11yDwellClickType mode is changed as the result
		 * of pointer accessibility operations.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - click_type: the new {@link PointerA11yDwellClickType} mode 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "ptr-a11y-dwell-click-type-changed", callback: (owner: this, click_type: PointerA11yDwellClickType) => void): number;
		/**
		 * The ::ptr-a11y-timeout-started signal is emitted when a
		 * pointer accessibility timeout delay is started, so that upper
		 * layers can notify the user with some visual feedback.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - device: the core pointer {@link InputDevice} 
		 *  - timeout_type: the type of timeout #ClutterPointerA11yTimeoutType 
		 *  - delay: the delay in ms before secondary-click is triggered. 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "ptr-a11y-timeout-started", callback: (owner: this, device: InputDevice, timeout_type: PointerA11yTimeoutType, delay: number) => void): number;
		/**
		 * The ::ptr-a11y-timeout-stopped signal is emitted when a running
		 * pointer accessibility timeout delay is stopped, either because
		 * it's triggered at the end of the delay or cancelled, so that
		 * upper layers can notify the user with some visual feedback.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - device: the core pointer {@link InputDevice} 
		 *  - timeout_type: the type of timeout #ClutterPointerA11yTimeoutType 
		 *  - clicked: %TRUE if the timeout finished and triggered a click 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "ptr-a11y-timeout-stopped", callback: (owner: this, device: InputDevice, timeout_type: PointerA11yTimeoutType, clicked: boolean) => void): number;
		connect(signal: "tool-changed", callback: (owner: this, object: InputDevice, p0: InputDeviceTool) => void): number;

		connect(signal: "notify::backend", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::touch-mode", callback: (owner: this, ...args: any) => void): number;

	}

	type SeatInitOptionsMixin = GObject.ObjectInitOptions & 
	Pick<ISeat,
		"backend">;

	export interface SeatInitOptions extends SeatInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Seat} instead.
	 */
	type SeatMixin = ISeat & GObject.Object;

	interface Seat extends SeatMixin {}

	class Seat {
		public constructor(options?: Partial<SeatInitOptions>);
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Settings} instead.
	 */
	interface ISettings {
		/**
		 * The default distance that the cursor of a pointer device
		 * should travel before a drag operation should start.
		 */
		dnd_drag_threshold: number;
		/**
		 * The maximum distance, in pixels, between button-press events that
		 * determines whether or not to increase the click count by 1.
		 */
		double_click_distance: number;
		/**
		 * The time, in milliseconds, that should elapse between button-press
		 * events in order to increase the click count by 1.
		 */
		double_click_time: number;
		/**
		 * Whether or not to use antialiasing when rendering text; a value
		 * of 1 enables it unconditionally; a value of 0 disables it
		 * unconditionally; and -1 will use the system's default.
		 */
		font_antialias: number;
		/**
		 * The DPI used when rendering text, as a value of 1024 * dots/inch.
		 * 
		 * If set to -1, the system's default will be used instead
		 */
		font_dpi: number;
		/**
		 * The style of the hinting used when rendering text. Valid values
		 * are:
		 * 
		 *   - hintnone
		 *   - hintslight
		 *   - hintmedium
		 *   - hintfull
		 */
		font_hint_style: string;
		/**
		 * Whether or not to use hinting when rendering text; a value of 1
		 * unconditionally enables it; a value of 0 unconditionally disables
		 * it; and a value of -1 will use the system's default.
		 */
		font_hinting: number;
		/**
		 * The default font name that should be used by text actors, as
		 * a string that can be passed to {@link Pango.font.description_from_string}.
		 */
		font_name: string;
		/**
		 * The type of sub-pixel antialiasing used when rendering text. Valid
		 * values are:
		 * 
		 *   - none
		 *   - rgb
		 *   - bgr
		 *   - vrgb
		 *   - vbgr
		 */
		font_subpixel_order: string;
		/**
		 * Sets the minimum duration for a press to be recognized as a long press
		 * gesture. The duration is expressed in milliseconds.
		 * 
		 * See also {@link ClickAction.long_press_duration}.
		 */
		long_press_duration: number;
		password_hint_time: number;

		connect(signal: "notify::dnd-drag-threshold", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::double-click-distance", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::double-click-time", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::font-antialias", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::font-dpi", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::font-hint-style", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::font-hinting", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::font-name", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::font-subpixel-order", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::long-press-duration", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::password-hint-time", callback: (owner: this, ...args: any) => void): number;

	}

	type SettingsInitOptionsMixin = GObject.ObjectInitOptions & 
	Pick<ISettings,
		"dnd_drag_threshold" |
		"double_click_distance" |
		"double_click_time" |
		"font_antialias" |
		"font_dpi" |
		"font_hint_style" |
		"font_hinting" |
		"font_name" |
		"font_subpixel_order" |
		"long_press_duration" |
		"password_hint_time">;

	export interface SettingsInitOptions extends SettingsInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Settings} instead.
	 */
	type SettingsMixin = ISettings & GObject.Object;

	/**
	 * `ClutterSettings` is an opaque structure whose
	 * members cannot be directly accessed.
	 */
	interface Settings extends SettingsMixin {}

	class Settings {
		public constructor(options?: Partial<SettingsInitOptions>);
		/**
		 * Retrieves the singleton instance of {@link Settings}
		 * @returns the instance of {@link Settings}. The
		 *   returned object is owned by Clutter and it should not be unreferenced
		 *   directly
		 */
		public static get_default(): Settings;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ShaderEffect} instead.
	 */
	interface IShaderEffect {
		/**
		 * Retrieves a pointer to the program's handle
		 * @returns a pointer to the program's handle,
		 *   or %NULL
		 */
		get_program(): Cogl.Handle;
		/**
		 * Retrieves a pointer to the shader's handle
		 * @returns a pointer to the shader's handle,
		 *   or %NULL
		 */
		get_shader(): Cogl.Handle;
		/**
		 * Sets the source of the GLSL shader used by #effect
		 * 
		 * This function should only be called by implementations of
		 * the {@link ShaderEffect} class, and not by application code.
		 * 
		 * This function can only be called once; subsequent calls will
		 * yield no result.
		 * @param source the source of a GLSL shader
		 * @returns %TRUE if the source was set
		 */
		set_shader_source(source: string): boolean;
		/**
		 * Sets a list of values as the payload for the uniform #name inside
		 * the shader effect
		 * 
		 * The #gtype must be one of: %G_TYPE_INT, for 1 or more integer values;
		 * %G_TYPE_FLOAT, for 1 or more floating point values;
		 * %CLUTTER_TYPE_SHADER_INT, for a pointer to an array of integer values;
		 * %CLUTTER_TYPE_SHADER_FLOAT, for a pointer to an array of floating point
		 * values; and %CLUTTER_TYPE_SHADER_MATRIX, for a pointer to an array of
		 * floating point values mapping a matrix
		 * 
		 * The number of values interepreted is defined by the #n_value
		 * argument, and by the #gtype argument. For instance, a uniform named
		 * "sampler0" and containing a single integer value is set using:
		 * 
		 * |[<!-- language="C" -->
		 *   clutter_shader_effect_set_uniform (effect, "sampler0",
		 *                                      G_TYPE_INT, 1,
		 *                                      0);
		 * ]|
		 * 
		 * While a uniform named "components" and containing a 3-elements vector
		 * of floating point values (a "vec3") can be set using:
		 * 
		 * |[<!-- language="C" -->
		 *   gfloat component_r, component_g, component_b;
		 * 
		 *   clutter_shader_effect_set_uniform (effect, "components",
		 *                                      G_TYPE_FLOAT, 3,
		 *                                      component_r,
		 *                                      component_g,
		 *                                      component_b);
		 * ]|
		 * 
		 * or can be set using:
		 * 
		 * |[<!-- language="C" -->
		 *   gfloat component_vec[3];
		 * 
		 *   clutter_shader_effect_set_uniform (effect, "components",
		 *                                      CLUTTER_TYPE_SHADER_FLOAT, 3,
		 *                                      component_vec);
		 * ]|
		 * 
		 * Finally, a uniform named "map" and containing a matrix can be set using:
		 * 
		 * |[<!-- language="C" -->
		 *   clutter_shader_effect_set_uniform (effect, "map",
		 *                                      CLUTTER_TYPE_SHADER_MATRIX, 1,
		 *                                      cogl_matrix_get_array (&matrix));
		 * ]|
		 * @param name the name of the uniform to set
		 * @param gtype the type of the uniform to set
		 * @param n_values the number of values
		 */
		set_uniform(name: string, gtype: GObject.Type, n_values: number): void;
		/**
		 * Sets #value as the payload for the uniform #name inside the shader
		 * effect
		 * 
		 * The #GType of the #value must be one of: %G_TYPE_INT, for a single
		 * integer value; %G_TYPE_FLOAT, for a single floating point value;
		 * %CLUTTER_TYPE_SHADER_INT, for an array of integer values;
		 * %CLUTTER_TYPE_SHADER_FLOAT, for an array of floating point values;
		 * and %CLUTTER_TYPE_SHADER_MATRIX, for a matrix of floating point
		 * values. It also accepts %G_TYPE_DOUBLE for compatibility with other
		 * languages than C.
		 * @param name the name of the uniform to set
		 * @param value a #GValue with the value of the uniform to set
		 */
		set_uniform_value(name: string, value: GObject.Value): void;
	}

	type ShaderEffectInitOptionsMixin = OffscreenEffectInitOptions
	export interface ShaderEffectInitOptions extends ShaderEffectInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ShaderEffect} instead.
	 */
	type ShaderEffectMixin = IShaderEffect & OffscreenEffect;

	/**
	 * The {@link ShaderEffect} structure contains
	 * only private data and should be accessed using the provided API
	 */
	interface ShaderEffect extends ShaderEffectMixin {}

	class ShaderEffect {
		public constructor(options?: Partial<ShaderEffectInitOptions>);
		/**
		 * Creates a new {@link ShaderEffect}, to be applied to an actor using
		 * {@link Clutter.Actor.add_effect}.
		 * 
		 * The effect will be empty until clutter_shader_effect_set_shader_source()
		 * is called.
		 * @param shader_type the type of the shader, either %CLUTTER_FRAGMENT_SHADER,
		 *   or %CLUTTER_VERTEX_SHADER
		 * @returns the newly created {@link ShaderEffect}.
		 *   Use {@link GObject.Object.unref} when done.
		 */
		public static new(shader_type: ShaderType): Effect;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ShaderFloat} instead.
	 */
	interface IShaderFloat {

	}

	type ShaderFloatInitOptionsMixin  = {};
	export interface ShaderFloatInitOptions extends ShaderFloatInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ShaderFloat} instead.
	 */
	type ShaderFloatMixin = IShaderFloat;

	interface ShaderFloat extends ShaderFloatMixin {}

	class ShaderFloat {
		public constructor(options?: Partial<ShaderFloatInitOptions>);
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ShaderInt} instead.
	 */
	interface IShaderInt {

	}

	type ShaderIntInitOptionsMixin  = {};
	export interface ShaderIntInitOptions extends ShaderIntInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ShaderInt} instead.
	 */
	type ShaderIntMixin = IShaderInt;

	interface ShaderInt extends ShaderIntMixin {}

	class ShaderInt {
		public constructor(options?: Partial<ShaderIntInitOptions>);
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ShaderMatrix} instead.
	 */
	interface IShaderMatrix {

	}

	type ShaderMatrixInitOptionsMixin  = {};
	export interface ShaderMatrixInitOptions extends ShaderMatrixInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ShaderMatrix} instead.
	 */
	type ShaderMatrixMixin = IShaderMatrix;

	interface ShaderMatrix extends ShaderMatrixMixin {}

	class ShaderMatrix {
		public constructor(options?: Partial<ShaderMatrixInitOptions>);
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link SnapConstraint} instead.
	 */
	interface ISnapConstraint {
		/**
		 * The edge of the {@link Actor} that should be snapped
		 */
		from_edge: SnapEdge;
		/**
		 * The offset, in pixels, between {@link SnapConstraint.from_edge}
		 * and #ClutterSnapConstraint:to-edge
		 */
		offset: number;
		/**
		 * The {@link Actor} used as the source for the constraint
		 */
		source: Actor;
		/**
		 * The edge of the {@link SnapConstraint.source} that should be snapped
		 */
		to_edge: SnapEdge;
		/**
		 * Retrieves the edges used by the #constraint
		 * @returns return location for the actor's edge, or %NULL
		 * 
		 * return location for the source's edge, or %NULL
		 */
		get_edges(): [ from_edge: SnapEdge, to_edge: SnapEdge ];
		/**
		 * Retrieves the offset set using {@link Clutter.SnapConstraint.set_offset}
		 * @returns the offset, in pixels
		 */
		get_offset(): number;
		/**
		 * Retrieves the {@link Actor} set using {@link Clutter.SnapConstraint.set_source}
		 * @returns a pointer to the source actor
		 */
		get_source(): Actor;
		/**
		 * Sets the edges to be used by the #constraint
		 * 
		 * The #from_edge is the edge on the {@link Actor} to which #constraint
		 * has been added. The #to_edge is the edge of the #ClutterActor inside
		 * the #ClutterSnapConstraint:source property.
		 * @param from_edge the edge on the actor
		 * @param to_edge the edge on the source
		 */
		set_edges(from_edge: SnapEdge, to_edge: SnapEdge): void;
		/**
		 * Sets the offset to be applied to the constraint
		 * @param offset the offset to apply, in pixels
		 */
		set_offset(offset: number): void;
		/**
		 * Sets the source {@link Actor} for the constraint
		 * @param source a {@link Actor}, or %NULL to unset the source
		 */
		set_source(source?: Actor | null): void;
		connect(signal: "notify::from-edge", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::offset", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::source", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::to-edge", callback: (owner: this, ...args: any) => void): number;

	}

	type SnapConstraintInitOptionsMixin = ConstraintInitOptions & 
	Pick<ISnapConstraint,
		"from_edge" |
		"offset" |
		"source" |
		"to_edge">;

	export interface SnapConstraintInitOptions extends SnapConstraintInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link SnapConstraint} instead.
	 */
	type SnapConstraintMixin = ISnapConstraint & Constraint;

	/**
	 * {@link SnapConstraint} is an opaque structure
	 * whose members cannot be directly accesses
	 */
	interface SnapConstraint extends SnapConstraintMixin {}

	class SnapConstraint {
		public constructor(options?: Partial<SnapConstraintInitOptions>);
		/**
		 * Creates a new {@link SnapConstraint} that will snap a #ClutterActor
		 * to the #edge of #source, with the given #offset.
		 * @param source the {@link Actor} to use as the source of
		 *   the constraint, or %NULL
		 * @param from_edge the edge of the actor to use in the constraint
		 * @param to_edge the edge of #source to use in the constraint
		 * @param offset the offset to apply to the constraint, in pixels
		 * @returns the newly created {@link SnapConstraint}
		 */
		public static new(source: Actor | null, from_edge: SnapEdge, to_edge: SnapEdge, offset: number): Constraint;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Stage} instead.
	 */
	interface IStage {
		/**
		 * Whether the {@link Stage} should accept key focus when shown.
		 */
		accept_focus: boolean;
		/**
		 * @deprecated
		 * Use the {@link Actor.background_color} property of
		 *   #ClutterActor instead.
		 * 
		 * The background color of the main stage.
		 */
		color: Color;
		/**
		 * Whether the mouse pointer should be visible
		 */
		cursor_visible: boolean;
		/**
		 * The {@link Actor} that will receive key events from the underlying
		 * windowing system.
		 * 
		 * If %NULL, the #ClutterStage will receive the events.
		 */
		key_focus: Actor;
		/**
		 * The parameters used for the perspective projection from 3D
		 * coordinates to 2D
		 */
		perspective: Perspective;
		/**
		 * The stage's title - usually displayed in stage windows title decorations.
		 */
		title: string;
		/**
		 * Whether the {@link Stage} should honour the alpha component of the
		 * #ClutterStage:color property when painting. If Clutter is run under
		 * a compositing manager this will result in the stage being blended
		 * with the underlying window(s)
		 */
		use_alpha: boolean;
		/**
		 * Captures the stage pixels of #rect into #captures. #rect is in stage
		 * coordinates.
		 * @param paint whether to pain the frame
		 * @param rect a #cairo_rectangle_int_t in stage coordinates
		 * @returns %TRUE if a {@link Capture} has been created, %FALSE otherwise
		 * 
		 * an array of
		 *   #ClutterCapture
		 */
		capture(paint: boolean, rect: cairo.RectangleInt): [ boolean, Capture[] ];
		capture_into(paint: boolean, rect: cairo.RectangleInt, data: number): void;
		/**
		 * @deprecated
		 * mutter: This function does not do anything.
		 * 
		 * This function essentially makes sure the right GL context is
		 * current for the passed stage. It is not intended to
		 * be used by applications.
		 */
		ensure_current(): void;
		/**
		 * Ensures that #stage is redrawn
		 * 
		 * This function should not be called by applications: it is
		 * used when embedding a {@link Stage} into a toolkit with
		 * another windowing system, like GTK+.
		 */
		ensure_redraw(): void;
		/**
		 * Ensures that the GL viewport is updated with the current
		 * stage window size.
		 * 
		 * This function will queue a redraw of #stage.
		 * 
		 * This function should not be called by applications; it is used
		 * when embedding a {@link Stage} into a toolkit with another
		 * windowing system, like GTK+.
		 */
		ensure_viewport(): void;
		/**
		 * This function is used to emit an event on the main stage.
		 * 
		 * You should rarely need to use this function, except for
		 * synthetised events.
		 * @param event a {@link Event}
		 * @returns the return value from the signal emission
		 */
		event(event: Event): boolean;
		/**
		 * Freezing updates makes Clutter stop processing events,
		 * redrawing, and advancing timelines, by pausing the master clock. This is
		 * necessary when implementing a display server, to ensure that Clutter doesn't
		 * keep trying to page flip when DRM master has been dropped, e.g. when VT
		 * switched away.
		 * 
		 * The master clock starts out running, so if you are VT switched away on
		 * startup, you need to call this immediately.
		 * 
		 * To thaw updates, use {@link Clutter.Stage.thaw_updates}.
		 */
		freeze_updates(): void;
		/**
		 * Retrieves the value set with {@link Clutter.Stage.set_accept_focus}.
		 * @returns %TRUE if the {@link Stage} should accept focus, and %FALSE
		 *   otherwise
		 */
		get_accept_focus(): boolean;
		/**
		 * Checks the scene at the coordinates #x and #y and returns a pointer
		 * to the {@link Actor} at those coordinates. The result is the actor which
		 * would be at the specified location on the next redraw, and is not
		 * necessarily that which was there on the previous redraw. This allows the
		 * function to perform chronologically correctly after any queued changes to
		 * the scene, and even if nothing has been drawn.
		 * 
		 * By using #pick_mode it is possible to control which actors will be
		 * painted and thus available.
		 * @param pick_mode how the scene graph should be painted
		 * @param x X coordinate to check
		 * @param y Y coordinate to check
		 * @returns the actor at the specified coordinates,
		 *   if any
		 */
		get_actor_at_pos(pick_mode: PickMode, x: number, y: number): Actor;
		get_capture_final_size(rect: cairo.RectangleInt, width: number, height: number, scale: number): boolean;
		/**
		 * @deprecated
		 * Use {@link Clutter.Actor.get_background_color} instead.
		 * 
		 * Retrieves the stage color.
		 * @returns return location for a {@link Color}
		 */
		get_color(): Color;
		get_frame_counter(): number;
		/**
		 * Retrieves the actor that is currently under key focus.
		 * @returns the actor with key focus, or the stage
		 */
		get_key_focus(): Actor;
		/**
		 * Retrieves the minimum size for a stage window as set using
		 * {@link Clutter.Stage.set_minimum_size}.
		 * 
		 * The returned size may not correspond to the actual minimum size and
		 * it is specific to the {@link Stage} implementation inside the
		 * Clutter backend
		 * @returns return location for the minimum width, in pixels,
		 *   or %NULL
		 * 
		 * return location for the minimum height, in pixels,
		 *   or %NULL
		 */
		get_minimum_size(): [ width: number, height: number ];
		/**
		 * Retrieves the value set using {@link Clutter.Stage.set_motion_events_enabled}.
		 * @returns %TRUE if the per-actor motion event delivery is enabled
		 *   and %FALSE otherwise
		 */
		get_motion_events_enabled(): boolean;
		/**
		 * Retrieves the stage perspective.
		 * @returns return location for a
		 *   {@link Perspective}
		 */
		get_perspective(): Perspective | null;
		/**
		 * Retrieves the value set with {@link Clutter.Stage.set_throttle_motion_events}
		 * @returns %TRUE if the motion events are being throttled,
		 *   and %FALSE otherwise
		 */
		get_throttle_motion_events(): boolean;
		/**
		 * Gets the stage title.
		 * @returns pointer to the title string for the stage. The
		 * returned string is owned by the actor and should not
		 * be modified or freed.
		 */
		get_title(): string;
		/**
		 * Retrieves the value set using {@link Clutter.Stage.set_use_alpha}
		 * @returns %TRUE if the stage should honour the opacity and the
		 *   alpha channel of the stage color
		 */
		get_use_alpha(): boolean;
		get_view_at(x: number, y: number): StageView;
		/**
		 * Makes the cursor invisible on the stage window
		 */
		hide_cursor(): void;
		/**
		 * @deprecated
		 * Track the stage pointer inside your application
		 *   code, or use {@link Clutter.Actor.get_stage} to retrieve the stage for
		 *   a given actor.
		 * 
		 * Checks if #stage is the default stage, or an instance created using
		 * {@link Clutter.Stage.new} but internally using the same implementation.
		 * @returns %TRUE if the passed stage is the default one
		 */
		is_default(): boolean;
		is_redraw_queued(): boolean;
		paint_to_buffer(rect: cairo.RectangleInt, scale: number, data: number, stride: number, format: Cogl.PixelFormat, paint_flags: any): boolean;
		paint_to_framebuffer(framebuffer: Cogl.Framebuffer, rect: cairo.RectangleInt, scale: number, paint_flags: any): void;
		/**
		 * @deprecated
		 * Use {@link Clutter.Actor.queue_redraw} instead.
		 * 
		 * Queues a redraw for the passed stage.
		 * 
		 * Applications should call {@link Clutter.Actor.queue_redraw} and not
		 * this function.
		 */
		queue_redraw(): void;
		/**
		 * Makes a screenshot of the stage in RGBA 8bit data, returns a
		 * linear buffer with #width * 4 as rowstride.
		 * 
		 * The alpha data contained in the returned buffer is driver-dependent,
		 * and not guaranteed to hold any sensible value.
		 * @param x x coordinate of the first pixel that is read from stage
		 * @param y y coordinate of the first pixel that is read from stage
		 * @param width Width dimention of pixels to be read, or -1 for the
		 *   entire stage width
		 * @param height Height dimention of pixels to be read, or -1 for the
		 *   entire stage height
		 * @returns a pointer to newly allocated memory with the buffer
		 *   or %NULL if the read failed. Use {@link GObject.free} on the returned data
		 *   to release the resources it has allocated.
		 */
		read_pixels(x: number, y: number, width: number, height: number): number[];
		/**
		 * Schedules a redraw of the {@link Stage} at the next optimal timestamp.
		 */
		schedule_update(): void;
		/**
		 * Sets whether the #stage should accept the key focus when shown.
		 * 
		 * This function should be called before showing #stage using
		 * {@link Clutter.Actor.show}.
		 * @param accept_focus %TRUE to accept focus on show
		 */
		set_accept_focus(accept_focus: boolean): void;
		/**
		 * @deprecated
		 * Use {@link Clutter.Actor.set_background_color} instead.
		 * 
		 * Sets the stage color.
		 * @param color A {@link Color}
		 */
		set_color(color: Color): void;
		/**
		 * Sets the key focus on #actor. An actor with key focus will receive
		 * all the key events. If #actor is %NULL, the stage will receive
		 * focus.
		 * @param actor the actor to set key focus to, or %NULL
		 */
		set_key_focus(actor?: Actor | null): void;
		/**
		 * Sets the minimum size for a stage window, if the default backend
		 * uses {@link Stage} inside a window
		 * 
		 * This is a convenience function, and it is equivalent to setting the
		 * #ClutterActor:min-width and #ClutterActor:min-height on #stage
		 * 
		 * If the current size of #stage is smaller than the minimum size, the
		 * #stage will be resized to the new #width and #height
		 * @param width width, in pixels
		 * @param height height, in pixels
		 */
		set_minimum_size(width: number, height: number): void;
		/**
		 * Sets whether per-actor motion events (and relative crossing
		 * events) should be disabled or not.
		 * 
		 * The default is %TRUE.
		 * 
		 * If #enable is %FALSE the following signals will not be emitted
		 * by the actors children of #stage:
		 * 
		 *  - {@link Actor.motion_event}
		 *  - #ClutterActor::enter-event
		 *  - #ClutterActor::leave-event
		 * 
		 * The events will still be delivered to the #ClutterStage.
		 * 
		 * The main side effect of this function is that disabling the motion
		 * events will disable picking to detect the #ClutterActor underneath
		 * the pointer for each motion event. This is useful, for instance,
		 * when dragging a #ClutterActor across the #stage: the actor underneath
		 * the pointer is not going to change, so it's meaningless to perform
		 * a pick.
		 * @param enabled %TRUE to enable the motion events delivery, and %FALSE
		 *   otherwise
		 */
		set_motion_events_enabled(enabled: boolean): void;
		/**
		 * Sets the stage perspective. Using this function is not recommended
		 * because it will disable Clutter's attempts to generate an
		 * appropriate perspective based on the size of the stage.
		 * @param perspective A {@link Perspective}
		 */
		set_perspective(perspective: Perspective): void;
		/**
		 * Sets whether motion events received between redraws should
		 * be throttled or not. If motion events are throttled, those
		 * events received by the windowing system between redraws will
		 * be compressed so that only the last event will be propagated
		 * to the #stage and its actors.
		 * 
		 * This function should only be used if you want to have all
		 * the motion events delivered to your application code.
		 * @param throttle %TRUE to throttle motion events
		 */
		set_throttle_motion_events(throttle: boolean): void;
		/**
		 * Sets the stage title.
		 * @param title A utf8 string for the stage windows title.
		 */
		set_title(title: string): void;
		/**
		 * Sets whether the #stage should honour the {@link Actor.opacity} and
		 * the alpha channel of the #ClutterStage:color
		 * @param use_alpha whether the stage should honour the opacity or the
		 *   alpha channel of the stage color
		 */
		set_use_alpha(use_alpha: boolean): void;
		/**
		 * Shows the cursor on the stage window
		 */
		show_cursor(): void;
		/**
		 * Resumes a master clock that has previously been frozen with
		 * {@link Clutter.Stage.freeze_updates}, and start pumping the master clock
		 * again at the next iteration. Note that if you're switching back to your
		 * own VT, you should probably also queue a stage redraw with
		 * clutter_stage_ensure_redraw().
		 */
		thaw_updates(): void;
		update_resource_scales(): void;
		/**
		 * The ::activate signal is emitted when the stage receives key focus
		 * from the underlying window system.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "activate", callback: (owner: this) => void): number;
		/**
		 * The ::after-paint signal is emitted after the stage is painted,
		 * but before the results are displayed on the screen.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "after-paint", callback: (owner: this) => void): number;
		connect(signal: "after-update", callback: (owner: this) => void): number;
		/**
		 * The ::before-paint signal is emitted before the stage is painted.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "before-paint", callback: (owner: this) => void): number;
		connect(signal: "before-update", callback: (owner: this) => void): number;
		/**
		 * The ::deactivate signal is emitted when the stage loses key focus
		 * from the underlying window system.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "deactivate", callback: (owner: this) => void): number;
		/**
		 * The ::delete-event signal is emitted when the user closes a
		 * {@link Stage} window using the window controls.
		 * 
		 * Clutter by default will call {@link Clutter.main.quit} if #stage is
		 * the default stage, and clutter_actor_destroy() for any other
		 * stage.
		 * 
		 * It is possible to override the default behaviour by connecting
		 * a new handler and returning %TRUE there.
		 * 
		 * This signal is emitted only on Clutter backends that
		 * embed #ClutterStage in native windows. It is not emitted for
		 * backends that use a static frame buffer.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - event: a {@link Event} of type %CLUTTER_DELETE 
		 *  - returns  
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "delete-event", callback: (owner: this, event: Event) => boolean): number;
		/**
		 * The ::paint-view signal is emitted before a {@link StageView} is being
		 * painted.
		 * 
		 * The view is painted in the default handler. Hence, if you want to perform
		 * some action after the view is painted, like reading the contents of the
		 * framebuffer, use {@link GObject.signal_connect_after} or pass %G_CONNECT_AFTER.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - view: a {@link StageView} 
		 *  - redraw_clip: a #cairo_region_t with the redraw clip 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "paint-view", callback: (owner: this, view: StageView, redraw_clip: any | null) => void): number;
		/**
		 * Signals that the {@link Stage} was presented on the screen to the user.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - frame_event: a #CoglFrameEvent 
		 *  - frame_info: a {@link FrameInfo} 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "presented", callback: (owner: this, frame_event: number, frame_info: any | null) => void): number;

		connect(signal: "notify::accept-focus", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::color", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::cursor-visible", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::key-focus", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::perspective", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::title", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::use-alpha", callback: (owner: this, ...args: any) => void): number;

	}

	type StageInitOptionsMixin = GroupInitOptions & Atk.ImplementorIfaceInitOptions & AnimatableInitOptions & ContainerInitOptions & ScriptableInitOptions & 
	Pick<IStage,
		"accept_focus" |
		"color" |
		"cursor_visible" |
		"key_focus" |
		"perspective" |
		"title" |
		"use_alpha">;

	export interface StageInitOptions extends StageInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Stage} instead.
	 */
	type StageMixin = IStage & Group & Atk.ImplementorIface & Animatable & Container & Scriptable;

	/**
	 * The {@link Stage} structure contains only private data
	 * and should be accessed using the provided API
	 */
	interface Stage extends StageMixin {}

	class Stage {
		public constructor(options?: Partial<StageInitOptions>);
		/**
		 * Creates a new, non-default stage. A non-default stage is a new
		 * top-level actor which can be used as another container. It works
		 * exactly like the default stage, but while {@link Clutter.Stage.get_default}
		 * will always return the same instance, you will have to keep a pointer
		 * to any {@link Stage} returned by clutter_stage_new().
		 * 
		 * The ability to support multiple stages depends on the current
		 * backend. Use clutter_feature_available() and
		 * %CLUTTER_FEATURE_STAGE_MULTIPLE to check at runtime whether a
		 * backend supports multiple stages.
		 * @returns a new stage, or %NULL if the default backend does
		 *   not support multiple stages. Use {@link Clutter.Actor.destroy} to
		 *   programmatically close the returned stage.
		 */
		public static new(): Actor;
		/**
		 * @deprecated
		 * Use {@link Clutter.Stage.new} instead.
		 * 
		 * Retrieves a {@link Stage} singleton.
		 * 
		 * This function is not as useful as it sounds, and will most likely
		 * by deprecated in the future. Application code should only create
		 * a #ClutterStage instance using {@link Clutter.Stage.new}, and manage the
		 * lifetime of the stage manually.
		 * 
		 * The default stage singleton has a platform-specific behaviour: on
		 * platforms without the %CLUTTER_FEATURE_STAGE_MULTIPLE feature flag
		 * set, the first #ClutterStage instance will also be set to be the
		 * default stage instance, and this function will always return a
		 * pointer to it.
		 * 
		 * On platforms with the %CLUTTER_FEATURE_STAGE_MULTIPLE feature flag
		 * set, the default stage will be created by the first call to this
		 * function, and every following call will return the same pointer to
		 * it.
		 * @returns the main
		 *   {@link Stage}. You should never destroy or unref the returned
		 *   actor.
		 */
		public static get_default(): Stage;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link StageManager} instead.
	 */
	interface IStageManager {
		/**
		 * The default stage used by Clutter.
		 */
		readonly default_stage: Stage;
		/**
		 * Returns the default {@link Stage}.
		 * @returns the default stage. The returned object
		 *   is owned by Clutter and you should never reference or unreference it
		 */
		get_default_stage(): Stage;
		/**
		 * Lists all currently used stages.
		 * @returns a newly
		 *   allocated list of {@link Stage} objects. Use {@link GObject.slist_free} to
		 *   deallocate it when done.
		 */
		list_stages(): Stage[];
		/**
		 * Lists all currently used stages.
		 * @returns a pointer
		 *   to the internal list of {@link Stage} objects. The returned list
		 *   is owned by the #ClutterStageManager and should never be modified
		 *   or freed
		 */
		peek_stages(): Stage[];
		/**
		 * The ::stage-added signal is emitted each time a new {@link Stage}
		 * has been added to the stage manager.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - stage: the added stage 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "stage-added", callback: (owner: this, stage: Stage) => void): number;
		/**
		 * The ::stage-removed signal is emitted each time a {@link Stage}
		 * has been removed from the stage manager.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - stage: the removed stage 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "stage-removed", callback: (owner: this, stage: Stage) => void): number;

		connect(signal: "notify::default-stage", callback: (owner: this, ...args: any) => void): number;

	}

	type StageManagerInitOptionsMixin = GObject.ObjectInitOptions
	export interface StageManagerInitOptions extends StageManagerInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link StageManager} instead.
	 */
	type StageManagerMixin = IStageManager & GObject.Object;

	/**
	 * The {@link StageManager} structure is private.
	 */
	interface StageManager extends StageManagerMixin {}

	class StageManager {
		public constructor(options?: Partial<StageManagerInitOptions>);
		/**
		 * Returns the default {@link StageManager}.
		 * @returns the default stage manager instance. The returned
		 *   object is owned by Clutter and you should not reference or unreference it.
		 */
		public static get_default(): StageManager;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link StageView} instead.
	 */
	interface IStageView {
		framebuffer: any;
		layout: cairo.RectangleInt;
		offscreen: any;
		scale: number;
		shadowfb: any;
		/**
		 * Retrieves the framebuffer of #view to draw to.
		 * @returns a #CoglFramebuffer
		 */
		get_framebuffer(): Cogl.Framebuffer;
		get_layout(rect: cairo.RectangleInt): void;
		get_offscreen_transformation_matrix(matrix: Cogl.Matrix): void;
		/**
		 * Retrieves the onscreen framebuffer of #view if available.
		 * @returns a #CoglFramebuffer
		 */
		get_onscreen(): Cogl.Framebuffer;
		get_scale(): number;
		invalidate_offscreen_blit_pipeline(): void;
		transform_to_onscreen(x: number, y: number): void;
		connect(signal: "notify::framebuffer", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::layout", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::offscreen", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::scale", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::shadowfb", callback: (owner: this, ...args: any) => void): number;

	}

	type StageViewInitOptionsMixin = GObject.ObjectInitOptions & 
	Pick<IStageView,
		"framebuffer" |
		"layout" |
		"offscreen" |
		"scale" |
		"shadowfb">;

	export interface StageViewInitOptions extends StageViewInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link StageView} instead.
	 */
	type StageViewMixin = IStageView & GObject.Object;

	interface StageView extends StageViewMixin {}

	class StageView {
		public constructor(options?: Partial<StageViewInitOptions>);
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link State} instead.
	 */
	interface IState {
		/**
		 * @deprecated
		 * Use {@link KeyframeTransition} and
		 *   #ClutterTransitionGroup instead
		 * 
		 * Default duration used if an duration has not been specified for a specific
		 * source/target state pair. The values is in milliseconds.
		 */
		duration: number;
		/**
		 * @deprecated
		 * Use {@link KeyframeTransition} and
		 *   #ClutterTransitionGroup instead
		 * 
		 * The currently set target state, setting it causes the
		 * state machine to transition to the new state, use
		 * {@link Clutter.State.warp_to_state} to change state without
		 * a transition.
		 */
		state: string;
		/**
		 * @deprecated
		 * Use {@link KeyframeTransition} and
		 *   #ClutterTransitionGroup instead
		 * 
		 * Queries the duration used for transitions between a source and
		 * target state pair
		 * 
		 * The semantics for the query are the same as the semantics used for
		 * setting the duration with {@link Clutter.State.set_duration}
		 * @param source_state_name the name of the source state to
		 *   get the duration of, or %NULL
		 * @param target_state_name the name of the source state to
		 *   get the duration of, or %NULL
		 * @returns the duration, in milliseconds
		 */
		get_duration(source_state_name?: string | null, target_state_name?: string | null): number;
		/**
		 * @deprecated
		 * Use {@link KeyframeTransition} and
		 *   #ClutterTransitionGroup instead
		 * 
		 * Queries the currently set target state.
		 * 
		 * During a transition this function will return the target of the transition.
		 * 
		 * This function is useful when called from handlers of the
		 * {@link State.completed} signal.
		 * @returns a string containing the target state. The returned string
		 *   is owned by the {@link State} and should not be modified or freed
		 */
		get_state(): string;
		/**
		 * @deprecated
		 * Use {@link KeyframeTransition} and
		 *   #ClutterTransitionGroup instead
		 * 
		 * Gets a list of all the state names managed by this {@link State}.
		 * @returns a newly allocated
		 *   #GList of state names. The contents of the returned #GList are owned
		 *   by the {@link State} and should not be modified or freed. Use
		 *   {@link GObject.list_free} to free the resources allocated by the returned list when
		 *   done using it
		 */
		get_states(): string[];
		/**
		 * @deprecated
		 * Use {@link KeyframeTransition} and
		 *   #ClutterTransitionGroup instead
		 * 
		 * Adds multiple keys to a named state of a {@link State} instance, specifying
		 * the easing mode and value a given property of an object should have at a
		 * given progress of the animation.
		 * 
		 * The mode specified is the easing mode used when going to from the previous
		 * key to the specified key.
		 * 
		 * For instance, the code below:
		 * 
		 * |[
		 *   clutter_state_set (state, NULL, "hover",
		 *                      button, "opacity", CLUTTER_LINEAR, 255,
		 *                      button, "scale-x", CLUTTER_EASE_OUT_CUBIC, 1.2,
		 *                      button, "scale-y", CLUTTER_EASE_OUT_CUBIC, 1.2,
		 *                      NULL);
		 * ]|
		 * 
		 * will create a transition from any state (a #source_state_name or NULL is
		 * treated as a wildcard) and a state named "hover"; the
		 * button object will have the #ClutterActor:opacity
		 * property animated to a value of 255 using %CLUTTER_LINEAR as the animation
		 * mode, and the #ClutterActor:scale-x and #ClutterActor:scale-y properties
		 * animated to a value of 1.2 using %CLUTTER_EASE_OUT_CUBIC as the animation
		 * mode. To change the state (and start the transition) you can use the
		 * {@link Clutter.State.set_state} function:
		 * 
		 * |[
		 *   clutter_state_set_state (state, "hover");
		 * ]|
		 * 
		 * If a given object, state_name, property tuple already exist in the
		 * #ClutterState instance, then the mode and value will be replaced with
		 * the new specified values.
		 * 
		 * If a property name is prefixed with "delayed::" two additional
		 * arguments per key are expected: a value relative to the full state time
		 * to pause before transitioning and a similar value to pause after
		 * transitioning, e.g.:
		 * 
		 * |[
		 *   clutter_state_set (state, "hover", "toggled",
		 *                      button, "delayed::scale-x", CLUTTER_LINEAR, 1.0, 0.2, 0.2,
		 *                      button, "delayed::scale-y", CLUTTER_LINEAR, 1.0, 0.2, 0.2,
		 *                      NULL);
		 * ]|
		 * 
		 * will pause for 20% of the duration of the transition before animating,
		 * and 20% of the duration after animating.
		 * @param source_state_name the name of the source state keys are being added for
		 * @param target_state_name the name of the target state keys are being added for
		 * @param first_object a #GObject
		 * @param first_property_name a property of #first_object to specify a key for
		 * @param first_mode the id of the alpha function to use
		 */
		set(source_state_name: string | null, target_state_name: string, first_object: any | null, first_property_name: string, first_mode: number): void;
		/**
		 * @deprecated
		 * Use {@link KeyframeTransition} and
		 *   #ClutterTransitionGroup instead
		 * 
		 * Sets the duration of a transition.
		 * 
		 * If both state names are %NULL the default duration for #state is set.
		 * 
		 * If only #target_state_name is specified, the passed #duration becomes
		 * the default duration for transitions to the target state.
		 * 
		 * If both states names are specified, the passed #duration only applies
		 * to the specified transition.
		 * @param source_state_name the name of the source state, or %NULL
		 * @param target_state_name the name of the target state, or %NULL
		 * @param duration the duration of the transition, in milliseconds
		 */
		set_duration(source_state_name: string | null, target_state_name: string | null, duration: number): void;
		/**
		 * @deprecated
		 * Use {@link KeyframeTransition} and
		 *   #ClutterTransitionGroup instead
		 * 
		 * Sets one specific end key for a state name, #object, #property_name
		 * combination.
		 * @param source_state_name the source transition to specify
		 *   transition for, or %NULL to specify the default fallback when a
		 *   more specific source state doesn't exist.
		 * @param target_state_name the name of the transition to set a key value for.
		 * @param object the #GObject to set a key for
		 * @param property_name the property to set a key for
		 * @param mode the id of the alpha function to use
		 * @param value the value for property_name of object in state_name
		 * @param pre_delay relative time of the transition to be idle in the beginning
		 *   of the transition
		 * @param post_delay relative time of the transition to be idle in the end of
		 *   the transition
		 * @returns the {@link State} instance, allowing
		 *   chaining of multiple calls
		 */
		set_key(source_state_name: string | null, target_state_name: string, object: GObject.Object, property_name: string, mode: number, value: GObject.Value, pre_delay: number, post_delay: number): State;
		/**
		 * @deprecated
		 * Use {@link KeyframeTransition} and
		 *   #ClutterTransitionGroup instead
		 * 
		 * Change the current state of {@link State} to #target_state_name.
		 * 
		 * The state will animate during its transition, see
		 * #clutter_state_warp_to_state for animation-free state switching.
		 * 
		 * Setting a %NULL state will stop the current animation and unset
		 * the current state, but keys will be left intact.
		 * @param target_state_name the state to transition to
		 * @returns the {@link Timeline} that drives the
		 *   state transition. The returned timeline is owned by the #ClutterState
		 *   and it should not be unreferenced
		 */
		set_state(target_state_name: string): Timeline;
		/**
		 * @deprecated
		 * Use {@link KeyframeTransition} and
		 *   #ClutterTransitionGroup instead
		 * 
		 * Change to the specified target state immediately with no animation.
		 * 
		 * See {@link Clutter.State.set_state}.
		 * @param target_state_name the state to transition to
		 * @returns the {@link Timeline} that drives the
		 *   state transition. The returned timeline is owned by the #ClutterState
		 *   and it should not be unreferenced
		 */
		warp_to_state(target_state_name: string): Timeline;
		/**
		 * The ::completed signal is emitted when a {@link State} reaches
		 * the target state specified by {@link Clutter.State.set_state} or
		 * clutter_state_warp_to_state().
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "completed", callback: (owner: this) => void): number;

		connect(signal: "notify::duration", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::state", callback: (owner: this, ...args: any) => void): number;

	}

	type StateInitOptionsMixin = GObject.ObjectInitOptions & ScriptableInitOptions & 
	Pick<IState,
		"duration" |
		"state">;

	export interface StateInitOptions extends StateInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link State} instead.
	 */
	type StateMixin = IState & GObject.Object & Scriptable;

	/**
	 * The {@link State} structure contains only
	 * private data and should be accessed using the provided API
	 */
	interface State extends StateMixin {}

	class State {
		public constructor(options?: Partial<StateInitOptions>);
		/**
		 * @deprecated
		 * Use {@link KeyframeTransition} and
		 *   #ClutterTransitionGroup instead
		 * 
		 * Creates a new {@link State}
		 * @returns the newly create {@link State} instance
		 */
		public static new(): State;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link SwipeAction} instead.
	 */
	interface ISwipeAction {

		/**
		 * The ::swept signal is emitted when a swipe gesture is recognized on the
		 * attached actor.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - actor: the {@link Actor} attached to the #action 
		 *  - direction: the main direction of the swipe gesture 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "swept", callback: (owner: this, actor: Actor, direction: SwipeDirection) => void): number;
		/**
		 * The ::swipe signal is emitted when a swipe gesture is recognized on the
		 * attached actor.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - actor: the {@link Actor} attached to the #action 
		 *  - direction: the main direction of the swipe gesture 
		 *  - returns %TRUE if the swipe should continue, and %FALSE if
		 *   the swipe should be cancelled. 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "swipe", callback: (owner: this, actor: Actor, direction: SwipeDirection) => boolean): number;

	}

	type SwipeActionInitOptionsMixin = GestureActionInitOptions
	export interface SwipeActionInitOptions extends SwipeActionInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link SwipeAction} instead.
	 */
	type SwipeActionMixin = ISwipeAction & GestureAction;

	/**
	 * The {@link SwipeAction} structure contains
	 * only private data and should be accessed using the provided API
	 */
	interface SwipeAction extends SwipeActionMixin {}

	class SwipeAction {
		public constructor(options?: Partial<SwipeActionInitOptions>);
		/**
		 * Creates a new {@link SwipeAction} instance
		 * @returns the newly created {@link SwipeAction}
		 */
		public static new(): Action;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link TapAction} instead.
	 */
	interface ITapAction {

		/**
		 * The ::tap signal is emitted when the tap gesture is complete.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - actor: the {@link Actor} attached to the #action 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "tap", callback: (owner: this, actor: Actor) => void): number;

	}

	type TapActionInitOptionsMixin = GestureActionInitOptions
	export interface TapActionInitOptions extends TapActionInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link TapAction} instead.
	 */
	type TapActionMixin = ITapAction & GestureAction;

	/**
	 * The {@link TapAction} structure contains
	 * only private data and should be accessed using the provided API
	 */
	interface TapAction extends TapActionMixin {}

	class TapAction {
		public constructor(options?: Partial<TapActionInitOptions>);
		/**
		 * Creates a new {@link TapAction} instance
		 * @returns the newly created {@link TapAction}
		 */
		public static new(): Action;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Text} instead.
	 */
	interface IText {
		/**
		 * Toggles whether return invokes the activate signal or not.
		 */
		activatable: boolean;
		/**
		 * A list of #PangoStyleAttribute<!-- -->s to be applied to the
		 * contents of the {@link Text} actor.
		 */
		attributes: Pango.AttrList;
		/**
		 * The buffer which stores the text for this {@link Text}.
		 * 
		 * If set to %NULL, a default buffer will be created.
		 */
		buffer: TextBuffer;
		/**
		 * The color used to render the text.
		 */
		color: Color;
		/**
		 * The color of the cursor.
		 */
		cursor_color: Color;
		/**
		 * Will be set to %TRUE if {@link Text.cursor_color} has been set.
		 */
		readonly cursor_color_set: boolean;
		/**
		 * The current input cursor position. -1 is taken to be the end of the text
		 */
		cursor_position: number;
		/**
		 * The size of the cursor, in pixels. If set to -1 the size used will
		 * be the default cursor size of 2 pixels.
		 */
		cursor_size: number;
		/**
		 * Whether the input cursor is visible or not.
		 * 
		 * The cursor will only be visible if this property and either
		 * the {@link Text.editable} or the #ClutterText:selectable properties
		 * are set to %TRUE.
		 */
		cursor_visible: boolean;
		/**
		 * Whether key events delivered to the actor causes editing.
		 */
		editable: boolean;
		/**
		 * The preferred place to ellipsize the contents of the {@link Text} actor
		 */
		ellipsize: Pango.EllipsizeMode;
		/**
		 * The #PangoFontDescription that should be used by the {@link Text}
		 * 
		 * If you have a string describing the font then you should look at
		 * #ClutterText:font-name instead
		 */
		font_description: Pango.FontDescription;
		/**
		 * The font to be used by the {@link Text}, as a string
		 * that can be parsed by {@link Pango.font.description_from_string}.
		 * 
		 * If set to %NULL, the default system font will be used instead.
		 */
		font_name: string;
		input_hints: InputContentHintFlags;
		input_purpose: InputContentPurpose;
		/**
		 * Whether the contents of the {@link Text} should be justified
		 * on both margins.
		 */
		justify: boolean;
		/**
		 * The preferred alignment for the text. This property controls
		 * the alignment of multi-line paragraphs.
		 */
		line_alignment: Pango.Alignment;
		/**
		 * Whether to wrap the lines of {@link Text.text} if the contents
		 * exceed the available allocation. The wrapping strategy is
		 * controlled by the #ClutterText:line-wrap-mode property.
		 */
		line_wrap: boolean;
		/**
		 * If {@link Text.line_wrap} is set to %TRUE, this property will
		 * control how the text is wrapped.
		 */
		line_wrap_mode: Pango.WrapMode;
		/**
		 * The maximum length of the contents of the {@link Text} actor.
		 */
		max_length: number;
		/**
		 * If non-zero, the character that should be used in place of
		 * the actual text in a password text actor.
		 */
		password_char: number;
		/**
		 * @deprecated
		 * Use ClutterText:cursor-position instead.
		 * 
		 * The current input cursor position. -1 is taken to be the end of the text
		 */
		position: number;
		/**
		 * Whether it is possible to select text, either using the pointer
		 * or the keyboard.
		 * 
		 * This property depends on the {@link Actor.reactive} property being
		 * set to %TRUE.
		 */
		selectable: boolean;
		/**
		 * The color of selected text.
		 */
		selected_text_color: Color;
		/**
		 * Will be set to %TRUE if {@link Text.selected_text_color} has been set.
		 */
		readonly selected_text_color_set: boolean;
		/**
		 * The current input cursor position. -1 is taken to be the end of the text
		 */
		selection_bound: number;
		/**
		 * The color of the selection.
		 */
		selection_color: Color;
		/**
		 * Will be set to %TRUE if {@link Text.selection_color} has been set.
		 */
		readonly selection_color_set: boolean;
		/**
		 * Whether the {@link Text} actor should be in single line mode
		 * or not. A single line #ClutterText actor will only contain a
		 * single line of text, scrolling it in case its length is bigger
		 * than the allocated size.
		 * 
		 * Setting this property will also set the #ClutterText:activatable
		 * property as a side-effect.
		 * 
		 * The #ClutterText:single-line-mode property is used only if the
		 * #ClutterText:editable property is set to %TRUE.
		 */
		single_line_mode: boolean;
		/**
		 * The text to render inside the actor.
		 */
		text: string;
		/**
		 * Whether the text includes Pango markup.
		 * 
		 * For more informations about the Pango markup format, see
		 * {@link Pango.Layout.set_markup} in the Pango documentation.
		 * 
		 * It is not possible to round-trip this property between
		 * %TRUE and %FALSE. Once a string with markup has been set on
		 * a {@link Text} actor with :use-markup set to %TRUE, the markup
		 * is stripped from the string.
		 */
		use_markup: boolean;
		/**
		 * Emits the {@link Text.activate} signal, if #self has been set
		 * as activatable using {@link Clutter.Text.set_activatable}.
		 * 
		 * This function can be used to emit the ::activate signal inside
		 * a #ClutterActor::captured-event or #ClutterActor::key-press-event
		 * signal handlers before the default signal handler for the
		 * #ClutterText is invoked.
		 * @returns %TRUE if the ::activate signal has been emitted,
		 *   and %FALSE otherwise
		 */
		activate(): boolean;
		/**
		 * Retrieves the position of the character at the given coordinates.
		 * @param x the X coordinate, relative to the actor
		 * @param y the Y coordinate, relative to the actor
		 * @returns the position of the character
		 */
		coords_to_position(x: number, y: number): number;
		/**
		 * Deletes #n_chars inside a {@link Text} actor, starting from the
		 * current cursor position.
		 * 
		 * Somewhat awkwardly, the cursor position is decremented by the same
		 * number of characters you've deleted.
		 * @param n_chars the number of characters to delete
		 */
		delete_chars(n_chars: number): void;
		/**
		 * Deletes the currently selected text
		 * 
		 * This function is only useful in subclasses of {@link Text}
		 * @returns %TRUE if text was deleted or if the text actor
		 *   is empty, and %FALSE otherwise
		 */
		delete_selection(): boolean;
		/**
		 * Deletes the text inside a {@link Text} actor between #start_pos
		 * and #end_pos.
		 * 
		 * The starting and ending positions are expressed in characters,
		 * not in bytes.
		 * @param start_pos starting position
		 * @param end_pos ending position
		 */
		delete_text(start_pos: number, end_pos: number): void;
		/**
		 * Retrieves whether a {@link Text} is activatable or not.
		 * @returns %TRUE if the actor is activatable
		 */
		get_activatable(): boolean;
		/**
		 * Gets the attribute list that was set on the {@link Text} actor
		 * {@link Clutter.Text.set_attributes}, if any.
		 * @returns the attribute list, or %NULL if none was set. The
		 *  returned value is owned by the {@link Text} and should not be unreferenced.
		 */
		get_attributes(): Pango.AttrList;
		/**
		 * Get the {@link TextBuffer} object which holds the text for
		 * this widget.
		 * @returns A #GtkEntryBuffer object.
		 */
		get_buffer(): TextBuffer;
		/**
		 * Retrieves the contents of the {@link Text} actor between
		 * #start_pos and #end_pos, but not including #end_pos.
		 * 
		 * The positions are specified in characters, not in bytes.
		 * @param start_pos start of text, in characters
		 * @param end_pos end of text, in characters
		 * @returns a newly allocated string with the contents of
		 *   the text actor between the specified positions. Use {@link GObject.free}
		 *   to free the resources when done
		 */
		get_chars(start_pos: number, end_pos: number): string;
		/**
		 * Retrieves the text color as set by {@link Clutter.Text.set_color}.
		 * @returns return location for a {@link Color}
		 */
		get_color(): Color;
		/**
		 * Retrieves the color of the cursor of a {@link Text} actor.
		 * @returns return location for a {@link Color}
		 */
		get_cursor_color(): Color;
		/**
		 * Retrieves the cursor position.
		 * @returns the cursor position, in characters
		 */
		get_cursor_position(): number;
		/**
		 * Retrieves the rectangle that contains the cursor.
		 * 
		 * The coordinates of the rectangle's origin are in actor-relative
		 * coordinates.
		 * @returns return location of a {@link Rect}
		 */
		get_cursor_rect(): Graphene.Rect;
		/**
		 * Retrieves the size of the cursor of a {@link Text} actor.
		 * @returns the size of the cursor, in pixels
		 */
		get_cursor_size(): number;
		/**
		 * Retrieves whether the cursor of a {@link Text} actor is visible.
		 * @returns %TRUE if the cursor is visible
		 */
		get_cursor_visible(): boolean;
		/**
		 * Retrieves whether a {@link Text} is editable or not.
		 * @returns %TRUE if the actor is editable
		 */
		get_editable(): boolean;
		/**
		 * Returns the ellipsizing position of a {@link Text} actor, as
		 * set by {@link Clutter.Text.set_ellipsize}.
		 * @returns #PangoEllipsizeMode
		 */
		get_ellipsize(): Pango.EllipsizeMode;
		/**
		 * Retrieves the #PangoFontDescription used by #self
		 * @returns a #PangoFontDescription. The returned value is owned
		 *   by the {@link Text} actor and it should not be modified or freed
		 */
		get_font_description(): Pango.FontDescription;
		/**
		 * Retrieves the font name as set by {@link Clutter.Text.set_font_name}.
		 * @returns a string containing the font name. The returned
		 *   string is owned by the {@link Text} actor and should not be
		 *   modified or freed
		 */
		get_font_name(): string;
		get_input_hints(): InputContentHintFlags;
		get_input_purpose(): InputContentPurpose;
		/**
		 * Retrieves whether the {@link Text} actor should justify its contents
		 * on both margins.
		 * @returns %TRUE if the text should be justified
		 */
		get_justify(): boolean;
		/**
		 * Retrieves the current #PangoLayout used by a {@link Text} actor.
		 * @returns a #PangoLayout. The returned object is owned by
		 *   the {@link Text} actor and should not be modified or freed
		 */
		get_layout(): Pango.Layout;
		/**
		 * Obtains the coordinates where the {@link Text} will draw the #PangoLayout
		 * representing the text.
		 * @returns location to store X offset of layout, or %NULL
		 * 
		 * location to store Y offset of layout, or %NULL
		 */
		get_layout_offsets(): [ x: number, y: number ];
		/**
		 * Retrieves the alignment of a {@link Text}, as set by
		 * {@link Clutter.Text.set_line_alignment}.
		 * @returns a #PangoAlignment
		 */
		get_line_alignment(): Pango.Alignment;
		/**
		 * Retrieves the value set using {@link Clutter.Text.set_line_wrap}.
		 * @returns %TRUE if the {@link Text} actor should wrap
		 *   its contents
		 */
		get_line_wrap(): boolean;
		/**
		 * Retrieves the line wrap mode used by the {@link Text} actor.
		 * 
		 * See clutter_text_set_line_wrap_mode ().
		 * @returns the wrap mode used by the {@link Text}
		 */
		get_line_wrap_mode(): Pango.WrapMode;
		/**
		 * Gets the maximum length of text that can be set into a text actor.
		 * 
		 * See {@link Clutter.Text.set_max_length}.
		 * @returns the maximum number of characters.
		 */
		get_max_length(): number;
		/**
		 * Retrieves the character to use in place of the actual text
		 * as set by {@link Clutter.Text.set_password_char}.
		 * @returns a Unicode character or 0 if the password
		 *   character is not set
		 */
		get_password_char(): string;
		/**
		 * Retrieves whether a {@link Text} is selectable or not.
		 * @returns %TRUE if the actor is selectable
		 */
		get_selectable(): boolean;
		/**
		 * Retrieves the color of selected text of a {@link Text} actor.
		 * @returns return location for a {@link Color}
		 */
		get_selected_text_color(): Color;
		/**
		 * Retrieves the currently selected text.
		 * @returns a newly allocated string containing the currently
		 *   selected text, or %NULL. Use {@link GObject.free} to free the returned
		 *   string.
		 */
		get_selection(): string;
		/**
		 * Retrieves the other end of the selection of a {@link Text} actor,
		 * in characters from the current cursor position.
		 * @returns the position of the other end of the selection
		 */
		get_selection_bound(): number;
		/**
		 * Retrieves the color of the selection of a {@link Text} actor.
		 * @returns return location for a {@link Color}
		 */
		get_selection_color(): Color;
		/**
		 * Retrieves whether the {@link Text} actor is in single line mode.
		 * @returns %TRUE if the {@link Text} actor is in single line mode
		 */
		get_single_line_mode(): boolean;
		/**
		 * Retrieves a pointer to the current contents of a {@link Text}
		 * actor.
		 * 
		 * If you need a copy of the contents for manipulating, either
		 * use {@link GObject.strdup} on the returned string, or use:
		 * 
		 * |[
		 *    copy = clutter_text_get_chars (text, 0, -1);
		 * ]|
		 * 
		 * Which will return a newly allocated string.
		 * 
		 * If the #ClutterText actor is empty, this function will return
		 * an empty string, and not %NULL.
		 * @returns the contents of the actor. The returned
		 *   string is owned by the {@link Text} actor and should never be modified
		 *   or freed
		 */
		get_text(): string;
		/**
		 * Retrieves whether the contents of the {@link Text} actor should be
		 * parsed for the Pango text markup.
		 * @returns %TRUE if the contents will be parsed for markup
		 */
		get_use_markup(): boolean;
		has_preedit(): boolean;
		/**
		 * Inserts #text into a {@link Actor} at the given position.
		 * 
		 * If #position is a negative number, the text will be appended
		 * at the end of the current contents of the #ClutterText.
		 * 
		 * The position is expressed in characters, not in bytes.
		 * @param text the text to be inserted
		 * @param position the position of the insertion, or -1
		 */
		insert_text(text: string, position: number): void;
		/**
		 * Inserts #wc at the current cursor position of a
		 * {@link Text} actor.
		 * @param wc a Unicode character
		 */
		insert_unichar(wc: string): void;
		/**
		 * Retrieves the coordinates of the given #position.
		 * @param position position in characters
		 * @returns %TRUE if the conversion was successful
		 * 
		 * return location for the X coordinate, or %NULL
		 * 
		 * return location for the Y coordinate, or %NULL
		 * 
		 * return location for the line height, or %NULL
		 */
		position_to_coords(position: number): [ boolean, number, number, number ];
		/**
		 * Sets whether a {@link Text} actor should be activatable.
		 * 
		 * An activatable #ClutterText actor will emit the #ClutterText::activate
		 * signal whenever the 'Enter' (or 'Return') key is pressed; if it is not
		 * activatable, a new line will be appended to the current content.
		 * 
		 * An activatable #ClutterText must also be set as editable using
		 * {@link Clutter.Text.set_editable}.
		 * @param activatable whether the {@link Text} actor should be activatable
		 */
		set_activatable(activatable: boolean): void;
		/**
		 * Sets the attributes list that are going to be applied to the
		 * {@link Text} contents.
		 * 
		 * The #ClutterText actor will take a reference on the #PangoAttrList
		 * passed to this function.
		 * @param attrs a #PangoAttrList or %NULL to unset the attributes
		 */
		set_attributes(attrs?: Pango.AttrList | null): void;
		/**
		 * Set the {@link TextBuffer} object which holds the text for
		 * this widget.
		 * @param buffer a {@link TextBuffer}
		 */
		set_buffer(buffer: TextBuffer): void;
		/**
		 * Sets the color of the contents of a {@link Text} actor.
		 * 
		 * The overall opacity of the #ClutterText actor will be the
		 * result of the alpha value of #color and the composited
		 * opacity of the actor itself on the scenegraph, as returned
		 * by {@link Clutter.Actor.get_paint_opacity}.
		 * @param color a {@link Color}
		 */
		set_color(color: Color): void;
		/**
		 * Sets the color of the cursor of a {@link Text} actor.
		 * 
		 * If #color is %NULL, the cursor color will be the same as the
		 * text color.
		 * @param color the color of the cursor, or %NULL to unset it
		 */
		set_cursor_color(color?: Color | null): void;
		/**
		 * Sets the cursor of a {@link Text} actor at #position.
		 * 
		 * The position is expressed in characters, not in bytes.
		 * @param position the new cursor position, in characters
		 */
		set_cursor_position(position: number): void;
		/**
		 * Sets the size of the cursor of a {@link Text}. The cursor
		 * will only be visible if the #ClutterText:cursor-visible property
		 * is set to %TRUE.
		 * @param size the size of the cursor, in pixels, or -1 to use the
		 *   default value
		 */
		set_cursor_size(size: number): void;
		/**
		 * Sets whether the cursor of a {@link Text} actor should be
		 * visible or not.
		 * 
		 * The color of the cursor will be the same as the text color
		 * unless {@link Clutter.Text.set_cursor_color} has been called.
		 * 
		 * The size of the cursor can be set using clutter_text_set_cursor_size().
		 * 
		 * The position of the cursor can be changed programmatically using
		 * clutter_text_set_cursor_position().
		 * @param cursor_visible whether the cursor should be visible
		 */
		set_cursor_visible(cursor_visible: boolean): void;
		/**
		 * Sets whether the {@link Text} actor should be editable.
		 * 
		 * An editable #ClutterText with key focus set using
		 * {@link Clutter.Actor.grab_key_focus} or clutter_stage_set_key_focus()
		 * will receive key events and will update its contents accordingly.
		 * @param editable whether the {@link Text} should be editable
		 */
		set_editable(editable: boolean): void;
		/**
		 * Sets the mode used to ellipsize (add an ellipsis: "...") to the
		 * text if there is not enough space to render the entire contents
		 * of a {@link Text} actor
		 * @param mode a #PangoEllipsizeMode
		 */
		set_ellipsize(mode: Pango.EllipsizeMode): void;
		/**
		 * Sets #font_desc as the font description for a {@link Text}
		 * 
		 * The #PangoFontDescription is copied by the #ClutterText actor
		 * so you can safely call {@link Pango.FontDescription.free} on it after
		 * calling this function.
		 * @param font_desc a #PangoFontDescription
		 */
		set_font_description(font_desc: Pango.FontDescription): void;
		/**
		 * Sets the font used by a {@link Text}. The #font_name string
		 * must either be %NULL, which means that the font name from the
		 * default #ClutterBackend will be used; or be something that can
		 * be parsed by the {@link Pango.font.description_from_string} function,
		 * like:
		 * 
		 * |[
		 *   // Set the font to the system's Sans, 10 points
		 *   clutter_text_set_font_name (text, "Sans 10");
		 * 
		 *   // Set the font to the system's Serif, 16 pixels
		 *   clutter_text_set_font_name (text, "Serif 16px");
		 * 
		 *   // Set the font to Helvetica, 10 points
		 *   clutter_text_set_font_name (text, "Helvetica 10");
		 * ]|
		 * @param font_name a font name, or %NULL to set the default font name
		 */
		set_font_name(font_name?: string | null): void;
		set_input_hints(hints: InputContentHintFlags): void;
		set_input_purpose(purpose: InputContentPurpose): void;
		/**
		 * Sets whether the text of the {@link Text} actor should be justified
		 * on both margins. This setting is ignored if Clutter is compiled
		 * against Pango &lt; 1.18.
		 * @param justify whether the text should be justified
		 */
		set_justify(justify: boolean): void;
		/**
		 * Sets the way that the lines of a wrapped label are aligned with
		 * respect to each other. This does not affect the overall alignment
		 * of the label within its allocated or specified width.
		 * 
		 * To align a {@link Text} actor you should add it to a container
		 * that supports alignment, or use the anchor point.
		 * @param alignment A #PangoAlignment
		 */
		set_line_alignment(alignment: Pango.Alignment): void;
		/**
		 * Sets whether the contents of a {@link Text} actor should wrap,
		 * if they don't fit the size assigned to the actor.
		 * @param line_wrap whether the contents should wrap
		 */
		set_line_wrap(line_wrap: boolean): void;
		/**
		 * If line wrapping is enabled (see {@link Clutter.Text.set_line_wrap}) this
		 * function controls how the line wrapping is performed. The default is
		 * %PANGO_WRAP_WORD which means wrap on word boundaries.
		 * @param wrap_mode the line wrapping mode
		 */
		set_line_wrap_mode(wrap_mode: Pango.WrapMode): void;
		/**
		 * Sets #markup as the contents of a {@link Text}.
		 * 
		 * This is a convenience function for setting a string containing
		 * Pango markup, and it is logically equivalent to:
		 * 
		 * |[
		 *   /&ast; the order is important &ast;/
		 *   clutter_text_set_text (CLUTTER_TEXT (actor), markup);
		 *   clutter_text_set_use_markup (CLUTTER_TEXT (actor), TRUE);
		 * ]|
		 * @param markup a string containing Pango markup.
		 *   Passing %NULL is the same as passing "" (the empty string)
		 */
		set_markup(markup?: string | null): void;
		/**
		 * Sets the maximum allowed length of the contents of the actor. If the
		 * current contents are longer than the given length, then they will be
		 * truncated to fit.
		 * @param max the maximum number of characters allowed in the text actor; 0
		 *   to disable or -1 to set the length of the current string
		 */
		set_max_length(max: number): void;
		/**
		 * Sets the character to use in place of the actual text in a
		 * password text actor.
		 * 
		 * If #wc is 0 the text will be displayed as it is entered in the
		 * {@link Text} actor.
		 * @param wc a Unicode character, or 0 to unset the password character
		 */
		set_password_char(wc: string): void;
		/**
		 * Sets, or unsets, the pre-edit string. This function is useful
		 * for input methods to display a string (with eventual specific
		 * Pango attributes) before it is entered inside the {@link Text}
		 * buffer.
		 * 
		 * The preedit string and attributes are ignored if the #ClutterText
		 * actor is not editable.
		 * 
		 * This function should not be used by applications
		 * @param preedit_str the pre-edit string, or %NULL to unset it
		 * @param preedit_attrs the pre-edit string attributes
		 * @param cursor_pos the cursor position for the pre-edit string
		 */
		set_preedit_string(preedit_str: string | null, preedit_attrs: Pango.AttrList | null, cursor_pos: number): void;
		/**
		 * Sets whether a {@link Text} actor should be selectable.
		 * 
		 * A selectable #ClutterText will allow selecting its contents using
		 * the pointer or the keyboard.
		 * @param selectable whether the {@link Text} actor should be selectable
		 */
		set_selectable(selectable: boolean): void;
		/**
		 * Sets the selected text color of a {@link Text} actor.
		 * 
		 * If #color is %NULL, the selected text color will be the same as the
		 * selection color, which then falls back to cursor, and then text color.
		 * @param color the selected text color, or %NULL to unset it
		 */
		set_selected_text_color(color?: Color | null): void;
		/**
		 * Selects the region of text between #start_pos and #end_pos.
		 * 
		 * This function changes the position of the cursor to match
		 * #start_pos and the selection bound to match #end_pos.
		 * @param start_pos start of the selection, in characters
		 * @param end_pos end of the selection, in characters
		 */
		set_selection(start_pos: number, end_pos: number): void;
		/**
		 * Sets the other end of the selection, starting from the current
		 * cursor position.
		 * 
		 * If #selection_bound is -1, the selection unset.
		 * @param selection_bound the position of the end of the selection, in characters
		 */
		set_selection_bound(selection_bound: number): void;
		/**
		 * Sets the color of the selection of a {@link Text} actor.
		 * 
		 * If #color is %NULL, the selection color will be the same as the
		 * cursor color, or if no cursor color is set either then it will be
		 * the same as the text color.
		 * @param color the color of the selection, or %NULL to unset it
		 */
		set_selection_color(color?: Color | null): void;
		/**
		 * Sets whether a {@link Text} actor should be in single line mode
		 * or not. Only editable #ClutterText<!-- -->s can be in single line
		 * mode.
		 * 
		 * A text actor in single line mode will not wrap text and will clip
		 * the visible area to the predefined size. The contents of the
		 * text actor will scroll to display the end of the text if its length
		 * is bigger than the allocated width.
		 * 
		 * When setting the single line mode the #ClutterText:activatable
		 * property is also set as a side effect. Instead of entering a new
		 * line character, the text actor will emit the #ClutterText::activate
		 * signal.
		 * @param single_line whether to enable single line mode
		 */
		set_single_line_mode(single_line: boolean): void;
		/**
		 * Sets the contents of a {@link Text} actor.
		 * 
		 * If the #ClutterText:use-markup property was set to %TRUE it
		 * will be reset to %FALSE as a side effect. If you want to
		 * maintain the #ClutterText:use-markup you should use the
		 * {@link Clutter.Text.set_markup} function instead
		 * @param text the text to set. Passing %NULL is the same
		 *   as passing "" (the empty string)
		 */
		set_text(text?: string | null): void;
		/**
		 * Sets whether the contents of the {@link Text} actor contains markup
		 * in <link linkend="PangoMarkupFormat">Pango's text markup language</link>.
		 * 
		 * Setting #ClutterText:use-markup on an editable #ClutterText will
		 * not have any effect except hiding the markup.
		 * 
		 * See also #ClutterText:use-markup.
		 * @param setting %TRUE if the text should be parsed for markup.
		 */
		set_use_markup(setting: boolean): void;
		/**
		 * The ::activate signal is emitted each time the actor is 'activated'
		 * by the user, normally by pressing the 'Enter' key. The signal is
		 * emitted only if {@link Text.activatable} is set to %TRUE.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "activate", callback: (owner: this) => void): number;
		/**
		 * The ::cursor-changed signal is emitted whenever the cursor
		 * position or size changes.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "cursor-changed", callback: (owner: this) => void): number;
		/**
		 * The ::cursor-event signal is emitted whenever the cursor position
		 * changes inside a {@link Text} actor. Inside #rect it is stored
		 * the current position and size of the cursor, relative to the actor
		 * itself.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - rect: the coordinates of the cursor 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "cursor-event", callback: (owner: this, rect: Graphene.Rect) => void): number;
		/**
		 * This signal is emitted when text is deleted from the actor by
		 * the user. It is emitted before #self text changes.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - start_pos: the starting position 
		 *  - end_pos: the end position 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "delete-text", callback: (owner: this, start_pos: number, end_pos: number) => void): number;
		/**
		 * This signal is emitted when text is inserted into the actor by
		 * the user. It is emitted before #self text changes.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - new_text: the new text to insert 
		 *  - new_text_length: the length of the new text, in bytes, or -1 if
		 *     new_text is nul-terminated 
		 *  - position: the position, in characters, at which to insert the
		 *     new text. this is an in-out parameter.  After the signal
		 *     emission is finished, it should point after the newly
		 *     inserted text. 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "insert-text", callback: (owner: this, new_text: string, new_text_length: number, position: any | null) => void): number;
		/**
		 * The ::text-changed signal is emitted after #actor's text changes
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "text-changed", callback: (owner: this) => void): number;

		connect(signal: "notify::activatable", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::attributes", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::buffer", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::color", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::cursor-color", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::cursor-color-set", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::cursor-position", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::cursor-size", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::cursor-visible", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::editable", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::ellipsize", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::font-description", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::font-name", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::input-hints", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::input-purpose", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::justify", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::line-alignment", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::line-wrap", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::line-wrap-mode", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::max-length", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::password-char", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::position", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::selectable", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::selected-text-color", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::selected-text-color-set", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::selection-bound", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::selection-color", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::selection-color-set", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::single-line-mode", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::text", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::use-markup", callback: (owner: this, ...args: any) => void): number;

	}

	type TextInitOptionsMixin = ActorInitOptions & Atk.ImplementorIfaceInitOptions & AnimatableInitOptions & ContainerInitOptions & ScriptableInitOptions & 
	Pick<IText,
		"activatable" |
		"attributes" |
		"buffer" |
		"color" |
		"cursor_color" |
		"cursor_position" |
		"cursor_size" |
		"cursor_visible" |
		"editable" |
		"ellipsize" |
		"font_description" |
		"font_name" |
		"input_hints" |
		"input_purpose" |
		"justify" |
		"line_alignment" |
		"line_wrap" |
		"line_wrap_mode" |
		"max_length" |
		"password_char" |
		"position" |
		"selectable" |
		"selected_text_color" |
		"selection_bound" |
		"selection_color" |
		"single_line_mode" |
		"text" |
		"use_markup">;

	export interface TextInitOptions extends TextInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Text} instead.
	 */
	type TextMixin = IText & Actor & Atk.ImplementorIface & Animatable & Container & Scriptable;

	/**
	 * The {@link Text} struct contains only private data.
	 */
	interface Text extends TextMixin {}

	class Text {
		public constructor(options?: Partial<TextInitOptions>);
		/**
		 * Creates a new {@link Text} actor. This actor can be used to
		 * display and edit text.
		 * @returns the newly created {@link Text} actor
		 */
		public static new(): Text;
		/**
		 * Creates a new {@link Text} actor, using #font_name as the font
		 * description; #text will be used to set the contents of the actor;
		 * and #color will be used as the color to render #text.
		 * 
		 * This function is equivalent to calling {@link Clutter.Text.new},
		 * clutter_text_set_font_name(), clutter_text_set_text() and
		 * clutter_text_set_color().
		 * @param font_name a string with a font description
		 * @param text the contents of the actor
		 * @param color the color to be used to render #text
		 * @returns the newly created {@link Text} actor
		 */
		public static new_full(font_name: string, text: string, color: Color): Text;
		/**
		 * Creates a new entry with the specified text buffer.
		 * @param buffer The buffer to use for the new {@link Text}.
		 * @returns a new {@link Text}
		 */
		public static new_with_buffer(buffer: TextBuffer): Text;
		/**
		 * Creates a new {@link Text} actor, using #font_name as the font
		 * description; #text will be used to set the contents of the actor.
		 * 
		 * This function is equivalent to calling {@link Clutter.Text.new},
		 * clutter_text_set_font_name(), and clutter_text_set_text().
		 * @param font_name a string with a font description
		 * @param text the contents of the actor
		 * @returns the newly created {@link Text} actor
		 */
		public static new_with_text(font_name: string | null, text: string): Text;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link TextBuffer} instead.
	 */
	interface ITextBuffer {
		/**
		 * The length (in characters) of the text in buffer.
		 */
		readonly length: number;
		/**
		 * The maximum length (in characters) of the text in the buffer.
		 */
		max_length: number;
		/**
		 * The contents of the buffer.
		 */
		readonly text: string;
		/**
		 * Deletes a sequence of characters from the buffer. #n_chars characters are
		 * deleted starting at #position. If #n_chars is negative, then all characters
		 * until the end of the text are deleted.
		 * 
		 * If #position or #n_chars are out of bounds, then they are coerced to sane
		 * values.
		 * 
		 * Note that the positions are specified in characters, not bytes.
		 * @param position position at which to delete text
		 * @param n_chars number of characters to delete
		 * @returns The number of characters deleted.
		 */
		delete_text(position: number, n_chars: number): number;
		/**
		 * Emits the {@link TextBuffer.deleted_text} signal on #buffer.
		 * 
		 * Used when subclassing #ClutterTextBuffer
		 * @param position position at which text was deleted
		 * @param n_chars number of characters deleted
		 */
		emit_deleted_text(position: number, n_chars: number): void;
		/**
		 * Emits the {@link TextBuffer.inserted_text} signal on #buffer.
		 * 
		 * Used when subclassing #ClutterTextBuffer
		 * @param position position at which text was inserted
		 * @param chars text that was inserted
		 * @param n_chars number of characters inserted
		 */
		emit_inserted_text(position: number, chars: string, n_chars: number): void;
		/**
		 * Retrieves the length in bytes of the buffer.
		 * See {@link Clutter.TextBuffer.get_length}.
		 * @returns The byte length of the buffer.
		 */
		get_bytes(): number;
		/**
		 * Retrieves the length in characters of the buffer.
		 * @returns The number of characters in the buffer.
		 */
		get_length(): number;
		/**
		 * Retrieves the maximum allowed length of the text in
		 * #buffer. See {@link Clutter.TextBuffer.set_max_length}.
		 * @returns the maximum allowed number of characters
		 *               in {@link TextBuffer}, or 0 if there is no maximum.
		 */
		get_max_length(): number;
		/**
		 * Retrieves the contents of the buffer.
		 * 
		 * The memory pointer returned by this call will not change
		 * unless this object emits a signal, or is finalized.
		 * @returns a pointer to the contents of the widget as a
		 *      string. This string points to internally allocated
		 *      storage in the buffer and must not be freed, modified or
		 *      stored.
		 */
		get_text(): string;
		/**
		 * Inserts #n_chars characters of #chars into the contents of the
		 * buffer, at position #position.
		 * 
		 * If #n_chars is negative, then characters from chars will be inserted
		 * until a null-terminator is found. If #position or #n_chars are out of
		 * bounds, or the maximum buffer text length is exceeded, then they are
		 * coerced to sane values.
		 * 
		 * Note that the position and length are in characters, not in bytes.
		 * @param position the position at which to insert text.
		 * @param chars the text to insert into the buffer.
		 * @param n_chars the length of the text in characters, or -1
		 * @returns The number of characters actually inserted.
		 */
		insert_text(position: number, chars: string, n_chars: number): number;
		/**
		 * Sets the maximum allowed length of the contents of the buffer. If
		 * the current contents are longer than the given length, then they
		 * will be truncated to fit.
		 * @param max_length the maximum length of the entry buffer, or 0 for no maximum.
		 *   (other than the maximum length of entries.) The value passed in will
		 *   be clamped to the range [ 0, %CLUTTER_TEXT_BUFFER_MAX_SIZE ].
		 */
		set_max_length(max_length: number): void;
		/**
		 * Sets the text in the buffer.
		 * 
		 * This is roughly equivalent to calling {@link Clutter.TextBuffer.delete_text}
		 * and clutter_text_buffer_insert_text().
		 * 
		 * Note that #n_chars is in characters, not in bytes.
		 * @param chars the new text
		 * @param n_chars the number of characters in #text, or -1
		 */
		set_text(chars: string, n_chars: number): void;
		/**
		 * This signal is emitted after text is deleted from the buffer.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - position: the position the text was deleted at. 
		 *  - n_chars: The number of characters that were deleted. 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "deleted-text", callback: (owner: this, position: number, n_chars: number) => void): number;
		/**
		 * This signal is emitted after text is inserted into the buffer.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - position: the position the text was inserted at. 
		 *  - chars: The text that was inserted. 
		 *  - n_chars: The number of characters that were inserted. 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "inserted-text", callback: (owner: this, position: number, chars: string, n_chars: number) => void): number;

		connect(signal: "notify::length", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::max-length", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::text", callback: (owner: this, ...args: any) => void): number;

	}

	type TextBufferInitOptionsMixin = GObject.ObjectInitOptions & 
	Pick<ITextBuffer,
		"max_length">;

	export interface TextBufferInitOptions extends TextBufferInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link TextBuffer} instead.
	 */
	type TextBufferMixin = ITextBuffer & GObject.Object;

	/**
	 * The {@link TextBuffer} structure contains private
	 * data and it should only be accessed using the provided API.
	 */
	interface TextBuffer extends TextBufferMixin {}

	class TextBuffer {
		public constructor(options?: Partial<TextBufferInitOptions>);
		/**
		 * Create a new ClutterTextBuffer object.
		 * @returns A new ClutterTextBuffer object.
		 */
		public static new(): TextBuffer;
		/**
		 * Create a new ClutterTextBuffer object with some text.
		 * @param text initial buffer text
		 * @param text_len initial buffer text length, or -1 for null-terminated.
		 * @returns A new ClutterTextBuffer object.
		 */
		public static new_with_text(text: string | null, text_len: number): TextBuffer;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link TextNode} instead.
	 */
	interface ITextNode {

	}

	type TextNodeInitOptionsMixin = PaintNodeInitOptions
	export interface TextNodeInitOptions extends TextNodeInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link TextNode} instead.
	 */
	type TextNodeMixin = ITextNode & PaintNode;

	/**
	 * The {@link TextNode} structure is an opaque
	 * type whose members cannot be directly accessed.
	 */
	interface TextNode extends TextNodeMixin {}

	class TextNode {
		public constructor(options?: Partial<TextNodeInitOptions>);
		/**
		 * Creates a new {@link PaintNode} that will paint a #PangoLayout
		 * with the given color.
		 * 
		 * This function takes a reference on the passed #layout, so it
		 * is safe to call {@link GObject.Object.unref} after it returns.
		 * @param layout a #PangoLayout, or %NULL
		 * @param color the color used to paint the layout,
		 *   or %NULL
		 * @returns the newly created {@link PaintNode}.
		 *   Use {@link Clutter.PaintNode.unref} when done
		 */
		public static new(layout?: Pango.Layout | null, color?: Color | null): PaintNode;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link TextureContent} instead.
	 */
	interface ITextureContent {
		/**
		 * Retrieves a pointer to the #CoglTexture used by #texture_content.
		 * 
		 * If you change the contents of the returned #CoglTexture you will need
		 * to manually invalidate the #texture_content with {@link Clutter.Content.invalidate}
		 * in order to update the actors using #texture_content as their content.
		 * @returns a pointer to the #CoglTexture
		 */
		get_texture(): Cogl.Texture;
	}

	type TextureContentInitOptionsMixin = GObject.ObjectInitOptions & ContentInitOptions
	export interface TextureContentInitOptions extends TextureContentInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link TextureContent} instead.
	 */
	type TextureContentMixin = ITextureContent & GObject.Object & Content;

	interface TextureContent extends TextureContentMixin {}

	class TextureContent {
		public constructor(options?: Partial<TextureContentInitOptions>);
		/**
		 * Creates a new {@link TextureContent} instance for #texture, taking an
		 * internal reference to #texture.
		 * 
		 * If you change the contents of the #CoglTexture you will need
		 * to manually invalidate the #texture_content with {@link Clutter.Content.invalidate}
		 * in order to update the actors using #texture_content as their content.
		 * @param texture a #CoglTexture
		 * @param clip A clipping rectangle
		 * @returns the newly created {@link TextureContent} instance.
		 *   Use {@link GObject.Object.unref} when done.
		 */
		public static new_from_texture(texture: Cogl.Texture, clip?: cairo.RectangleInt | null): Content;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link TextureNode} instead.
	 */
	interface ITextureNode {

	}

	type TextureNodeInitOptionsMixin = PipelineNodeInitOptions
	export interface TextureNodeInitOptions extends TextureNodeInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link TextureNode} instead.
	 */
	type TextureNodeMixin = ITextureNode & PipelineNode;

	/**
	 * The {@link TextNode} structure is an opaque
	 * type whose members cannot be directly accessed.
	 */
	interface TextureNode extends TextureNodeMixin {}

	class TextureNode {
		public constructor(options?: Partial<TextureNodeInitOptions>);
		/**
		 * Creates a new {@link PaintNode} that will paint the passed #texture.
		 * 
		 * This function will take a reference on #texture, so it is safe to
		 * call {@link Cogl.Object.unref} on #texture when it returns.
		 * 
		 * The #color must not be pre-multiplied with its #ClutterColor.alpha
		 * channel value; if #color is %NULL, a fully opaque white color will
		 * be used for blending.
		 * @param texture a #CoglTexture
		 * @param color a {@link Color} used for blending, or %NULL
		 * @param min_filter the minification filter for the texture
		 * @param mag_filter the magnification filter for the texture
		 * @returns the newly created {@link PaintNode}.
		 *   Use {@link Clutter.PaintNode.unref} when done
		 */
		public static new(texture: Cogl.Texture, color: Color | null, min_filter: ScalingFilter, mag_filter: ScalingFilter): PaintNode;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Timeline} instead.
	 */
	interface ITimeline {
		/**
		 * If the direction of the timeline should be automatically reversed
		 * when reaching the end.
		 */
		auto_reverse: boolean;
		/**
		 * A delay, in milliseconds, that should be observed by the
		 * timeline before actually starting.
		 */
		delay: number;
		/**
		 * The direction of the timeline, either %CLUTTER_TIMELINE_FORWARD or
		 * %CLUTTER_TIMELINE_BACKWARD.
		 */
		direction: TimelineDirection;
		/**
		 * Duration of the timeline in milliseconds, depending on the
		 * ClutterTimeline:fps value.
		 */
		duration: number;
		/**
		 * @deprecated
		 * Use the {@link Timeline.repeat_count} property instead.
		 * 
		 * Whether the timeline should automatically rewind and restart.
		 * 
		 * As a side effect, setting this property to %TRUE will set the
		 * {@link Timeline.repeat_count} property to -1, while setting this
		 * property to %FALSE will set the #ClutterTimeline:repeat-count
		 * property to 0.
		 */
		loop: boolean;
		/**
		 * Controls the way a {@link Timeline} computes the normalized progress.
		 */
		progress_mode: AnimationMode;
		/**
		 * Defines how many times the timeline should repeat.
		 * 
		 * If the repeat count is 0, the timeline does not repeat.
		 * 
		 * If the repeat count is set to -1, the timeline will repeat until it is
		 * stopped.
		 */
		repeat_count: number;
		/**
		 * Adds a named marker that will be hit when the timeline has reached
		 * the specified #progress.
		 * 
		 * Markers are unique string identifiers for a given position on the
		 * timeline. Once #timeline reaches the given #progress of its duration,
		 * if will emit a ::marker-reached signal for each marker attached to
		 * that particular point.
		 * 
		 * A marker can be removed with {@link Clutter.Timeline.remove_marker}. The
		 * timeline can be advanced to a marker using
		 * clutter_timeline_advance_to_marker().
		 * 
		 * See also: clutter_timeline_add_marker_at_time()
		 * @param marker_name the unique name for this marker
		 * @param progress the normalized value of the position of the martke
		 */
		add_marker(marker_name: string, progress: number): void;
		/**
		 * Adds a named marker that will be hit when the timeline has been
		 * running for #msecs milliseconds.
		 * 
		 * Markers are unique string identifiers for a given position on the
		 * timeline. Once #timeline reaches the given #msecs, it will emit
		 * a ::marker-reached signal for each marker attached to that position.
		 * 
		 * A marker can be removed with {@link Clutter.Timeline.remove_marker}. The
		 * timeline can be advanced to a marker using
		 * clutter_timeline_advance_to_marker().
		 * 
		 * See also: clutter_timeline_add_marker()
		 * @param marker_name the unique name for this marker
		 * @param msecs position of the marker in milliseconds
		 */
		add_marker_at_time(marker_name: string, msecs: number): void;
		/**
		 * Advance timeline to the requested point. The point is given as a
		 * time in milliseconds since the timeline started.
		 * 
		 * The #timeline will not emit the {@link Timeline.new_frame}
		 * signal for the given time. The first ::new-frame signal after the call to
		 * {@link Clutter.Timeline.advance} will be emit the skipped markers.
		 * @param msecs Time to advance to
		 */
		advance(msecs: number): void;
		/**
		 * Advances #timeline to the time of the given #marker_name.
		 * 
		 * Like {@link Clutter.Timeline.advance}, this function will not
		 * emit the {@link Timeline.new_frame} for the time where #marker_name
		 * is set, nor it will emit #ClutterTimeline::marker-reached for
		 * #marker_name.
		 * @param marker_name the name of the marker
		 */
		advance_to_marker(marker_name: string): void;
		/**
		 * @deprecated
		 * Use {@link Clutter.Timeline.new} or g_object_new()
		 *   instead
		 * 
		 * Create a new {@link Timeline} instance which has property values
		 * matching that of supplied timeline. The cloned timeline will not
		 * be started and will not be positioned to the current position of
		 * the original #timeline: you will have to start it with
		 * {@link Clutter.Timeline.start}.
		 * 
		 * The only cloned properties are:
		 * 
		 *  - #ClutterTimeline:duration
		 *  - #ClutterTimeline:loop
		 *  - #ClutterTimeline:delay
		 *  - #ClutterTimeline:direction
		 * @returns a new {@link Timeline}, cloned
		 *   from #timeline
		 */
		clone(): Timeline;
		/**
		 * Retrieves the value set by {@link Clutter.Timeline.set_auto_reverse}.
		 * @returns %TRUE if the timeline should automatically reverse, and
		 *   %FALSE otherwise
		 */
		get_auto_reverse(): boolean;
		/**
		 * Retrieves the control points for the cubic bezier progress mode.
		 * @returns %TRUE if the #timeline is using a cubic bezier progress
		 *   more, and %FALSE otherwise
		 * 
		 * return location for the first control
		 *   point of the cubic bezier, or %NULL
		 * 
		 * return location for the second control
		 *   point of the cubic bezier, or %NULL
		 */
		get_cubic_bezier_progress(): [ boolean, Graphene.Point, Graphene.Point ];
		/**
		 * Retrieves the current repeat for a timeline.
		 * 
		 * Repeats start at 0.
		 * @returns the current repeat
		 */
		get_current_repeat(): number;
		/**
		 * Retrieves the delay set using {@link Clutter.Timeline.set_delay}.
		 * @returns the delay in milliseconds.
		 */
		get_delay(): number;
		/**
		 * Retrieves the amount of time elapsed since the last
		 * ClutterTimeline::new-frame signal.
		 * 
		 * This function is only useful inside handlers for the ::new-frame
		 * signal, and its behaviour is undefined if the timeline is not
		 * playing.
		 * @returns the amount of time in milliseconds elapsed since the
		 * last frame
		 */
		get_delta(): number;
		/**
		 * Retrieves the direction of the timeline set with
		 * {@link Clutter.Timeline.set_direction}.
		 * @returns the direction of the timeline
		 */
		get_direction(): TimelineDirection;
		/**
		 * Retrieves the duration of a {@link Timeline} in milliseconds.
		 * See {@link Clutter.Timeline.set_duration}.
		 * @returns the duration of the timeline, in milliseconds.
		 */
		get_duration(): number;
		/**
		 * Retrieves the full duration of the #timeline, taking into account the
		 * current value of the {@link Timeline.repeat_count} property.
		 * 
		 * If the #ClutterTimeline:repeat-count property is set to -1, this function
		 * will return %G_MAXINT64.
		 * 
		 * The returned value is to be considered a hint, and it's only valid
		 * as long as the #timeline hasn't been changed.
		 * @returns the full duration of the {@link Timeline}
		 */
		get_duration_hint(): number;
		/**
		 * Request the current time position of the timeline.
		 * @returns current elapsed time in milliseconds.
		 */
		get_elapsed_time(): number;
		/**
		 * @deprecated
		 * Use {@link Clutter.Timeline.get_repeat_count} instead.
		 * 
		 * Gets whether #timeline is looping
		 * @returns %TRUE if the timeline is looping
		 */
		get_loop(): boolean;
		/**
		 * The position of the timeline in a normalized [-1, 2] interval.
		 * 
		 * The return value of this function is determined by the progress
		 * mode set using {@link Clutter.Timeline.set_progress_mode}, or by the
		 * progress function set using clutter_timeline_set_progress_func().
		 * @returns the normalized current position in the timeline.
		 */
		get_progress(): number;
		/**
		 * Retrieves the progress mode set using {@link Clutter.Timeline.set_progress_mode}
		 * or clutter_timeline_set_progress_func().
		 * @returns a {@link AnimationMode}
		 */
		get_progress_mode(): AnimationMode;
		/**
		 * Retrieves the number set using {@link Clutter.Timeline.set_repeat_count}.
		 * @returns the number of repeats
		 */
		get_repeat_count(): number;
		/**
		 * Retrieves the parameters of the step progress mode used by #timeline.
		 * @returns %TRUE if the #timeline is using a step progress
		 *   mode, and %FALSE otherwise
		 * 
		 * return location for the number of steps, or %NULL
		 * 
		 * return location for the value change policy,
		 *   or %NULL
		 */
		get_step_progress(): [ boolean, number, StepMode ];
		/**
		 * Checks whether #timeline has a marker set with the given name.
		 * @param marker_name the name of the marker
		 * @returns %TRUE if the marker was found
		 */
		has_marker(marker_name: string): boolean;
		/**
		 * Queries state of a {@link Timeline}.
		 * @returns %TRUE if timeline is currently playing
		 */
		is_playing(): boolean;
		/**
		 * Retrieves the list of markers at time #msecs. If #msecs is a
		 * negative integer, all the markers attached to #timeline will be
		 * returned.
		 * @param msecs the time to check, or -1
		 * @returns 
		 *   a newly allocated, %NULL terminated string array containing the names
		 *   of the markers. Use {@link GObject.strfreev} when done.
		 * 
		 * the number of markers returned
		 */
		list_markers(msecs: number): [ string[], number ];
		/**
		 * Pauses the {@link Timeline} on current frame
		 */
		pause(): void;
		/**
		 * Removes #marker_name, if found, from #timeline.
		 * @param marker_name the name of the marker to remove
		 */
		remove_marker(marker_name: string): void;
		/**
		 * Rewinds {@link Timeline} to the first frame if its direction is
		 * %CLUTTER_TIMELINE_FORWARD and the last frame if it is
		 * %CLUTTER_TIMELINE_BACKWARD.
		 */
		rewind(): void;
		/**
		 * Sets whether #timeline should reverse the direction after the
		 * emission of the {@link Timeline.completed} signal.
		 * 
		 * Setting the #ClutterTimeline:auto-reverse property to %TRUE is the
		 * equivalent of connecting a callback to the #ClutterTimeline::completed
		 * signal and changing the direction of the timeline from that callback;
		 * for instance, this code:
		 * 
		 * |[
		 * static void
		 * reverse_timeline (ClutterTimeline *timeline)
		 * {
		 *   ClutterTimelineDirection dir = clutter_timeline_get_direction (timeline);
		 * 
		 *   if (dir == CLUTTER_TIMELINE_FORWARD)
		 *     dir = CLUTTER_TIMELINE_BACKWARD;
		 *   else
		 *     dir = CLUTTER_TIMELINE_FORWARD;
		 * 
		 *   clutter_timeline_set_direction (timeline, dir);
		 * }
		 * ...
		 *   timeline = clutter_timeline_new (1000);
		 *   clutter_timeline_set_repeat_count (timeline, -1);
		 *   g_signal_connect (timeline, "completed",
		 *                     G_CALLBACK (reverse_timeline),
		 *                     NULL);
		 * ]|
		 * 
		 * can be effectively replaced by:
		 * 
		 * |[
		 *   timeline = clutter_timeline_new (1000);
		 *   clutter_timeline_set_repeat_count (timeline, -1);
		 *   clutter_timeline_set_auto_reverse (timeline);
		 * ]|
		 * @param reverse %TRUE if the #timeline should reverse the direction
		 */
		set_auto_reverse(reverse: boolean): void;
		/**
		 * Sets the {@link Timeline.progress_mode} of #timeline
		 * to %CLUTTER_CUBIC_BEZIER, and sets the two control
		 * points for the cubic bezier.
		 * 
		 * The cubic bezier curve is between (0, 0) and (1, 1). The X coordinate
		 * of the two control points must be in the [ 0, 1 ] range, while the
		 * Y coordinate of the two control points can exceed this range.
		 * @param c_1 the first control point for the cubic bezier
		 * @param c_2 the second control point for the cubic bezier
		 */
		set_cubic_bezier_progress(c_1: Graphene.Point, c_2: Graphene.Point): void;
		/**
		 * Sets the delay, in milliseconds, before #timeline should start.
		 * @param msecs delay in milliseconds
		 */
		set_delay(msecs: number): void;
		/**
		 * Sets the direction of #timeline, either %CLUTTER_TIMELINE_FORWARD or
		 * %CLUTTER_TIMELINE_BACKWARD.
		 * @param direction the direction of the timeline
		 */
		set_direction(direction: TimelineDirection): void;
		/**
		 * Sets the duration of the timeline, in milliseconds. The speed
		 * of the timeline depends on the ClutterTimeline:fps setting.
		 * @param msecs duration of the timeline in milliseconds
		 */
		set_duration(msecs: number): void;
		/**
		 * @deprecated
		 * Use {@link Clutter.Timeline.set_repeat_count} instead.
		 * 
		 * Sets whether #timeline should loop.
		 * 
		 * This function is equivalent to calling {@link Clutter.Timeline.set_repeat_count}
		 * with -1 if #loop is %TRUE, and with 0 if #loop is %FALSE.
		 * @param loop %TRUE for enable looping
		 */
		set_loop(loop: boolean): void;
		/**
		 * Sets a custom progress function for #timeline. The progress function will
		 * be called by {@link Clutter.Timeline.get_progress} and will be used to compute
		 * the progress value based on the elapsed time and the total duration of the
		 * timeline.
		 * 
		 * If #func is not %NULL, the {@link Timeline.progress_mode} property will
		 * be set to %CLUTTER_CUSTOM_MODE.
		 * 
		 * If #func is %NULL, any previously set progress function will be unset, and
		 * the #ClutterTimeline:progress-mode property will be set to %CLUTTER_LINEAR.
		 * @param func a progress function, or %NULL
		 */
		set_progress_func(func?: TimelineProgressFunc | null): void;
		/**
		 * Sets the progress function using a value from the {@link AnimationMode}
		 * enumeration. The #mode cannot be %CLUTTER_CUSTOM_MODE or bigger than
		 * %CLUTTER_ANIMATION_LAST.
		 * @param mode the progress mode, as a {@link AnimationMode}
		 */
		set_progress_mode(mode: AnimationMode): void;
		/**
		 * Sets the number of times the #timeline should repeat.
		 * 
		 * If #count is 0, the timeline never repeats.
		 * 
		 * If #count is -1, the timeline will always repeat until
		 * it's stopped.
		 * @param count the number of times the timeline should repeat
		 */
		set_repeat_count(count: number): void;
		/**
		 * Sets the {@link Timeline.progress_mode} of the #timeline to %CLUTTER_STEPS
		 * and provides the parameters of the step function.
		 * @param n_steps the number of steps
		 * @param step_mode whether the change should happen at the start
		 *   or at the end of the step
		 */
		set_step_progress(n_steps: number, step_mode: StepMode): void;
		/**
		 * Advance timeline by the requested time in milliseconds
		 * @param msecs Amount of time to skip
		 */
		skip(msecs: number): void;
		/**
		 * Starts the {@link Timeline} playing.
		 */
		start(): void;
		/**
		 * Stops the {@link Timeline} and moves to frame 0
		 */
		stop(): void;
		/**
		 * The {@link Timeline.completed} signal is emitted when the timeline's
		 * elapsed time reaches the value of the #ClutterTimeline:duration
		 * property.
		 * 
		 * This signal will be emitted even if the #ClutterTimeline is set to be
		 * repeating.
		 * 
		 * If you want to get notification on whether the #ClutterTimeline has
		 * been stopped or has finished its run, including its eventual repeats,
		 * you should use the #ClutterTimeline::stopped signal instead.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "completed", callback: (owner: this) => void): number;
		/**
		 * The ::marker-reached signal is emitted each time a timeline
		 * reaches a marker set with
		 * {@link Clutter.Timeline.add_marker_at_time}. This signal is detailed
		 * with the name of the marker as well, so it is possible to connect
		 * a callback to the ::marker-reached signal for a specific marker
		 * with:
		 * 
		 * <informalexample><programlisting>
		 *   clutter_timeline_add_marker_at_time (timeline, "foo", 500);
		 *   clutter_timeline_add_marker_at_time (timeline, "bar", 750);
		 * 
		 *   g_signal_connect (timeline, "marker-reached",
		 *                     G_CALLBACK (each_marker_reached), NULL);
		 *   g_signal_connect (timeline, "marker-reached::foo",
		 *                     G_CALLBACK (foo_marker_reached), NULL);
		 *   g_signal_connect (timeline, "marker-reached::bar",
		 *                     G_CALLBACK (bar_marker_reached), NULL);
		 * </programlisting></informalexample>
		 * 
		 * In the example, the first callback will be invoked for both
		 * the "foo" and "bar" marker, while the second and third callbacks
		 * will be invoked for the "foo" or "bar" markers, respectively.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - marker_name: the name of the marker reached 
		 *  - msecs: the elapsed time 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "marker-reached", callback: (owner: this, marker_name: string, msecs: number) => void): number;
		/**
		 * The ::new-frame signal is emitted for each timeline running
		 * timeline before a new frame is drawn to give animations a chance
		 * to update the scene.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - msecs: the elapsed time between 0 and duration 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "new-frame", callback: (owner: this, msecs: number) => void): number;
		/**
		 * The ::paused signal is emitted when {@link Clutter.Timeline.pause} is invoked.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "paused", callback: (owner: this) => void): number;
		/**
		 * The ::started signal is emitted when the timeline starts its run.
		 * This might be as soon as {@link Clutter.Timeline.start} is invoked or
		 * after the delay set in the ClutterTimeline:delay property has
		 * expired.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "started", callback: (owner: this) => void): number;
		/**
		 * The {@link Timeline.stopped} signal is emitted when the timeline
		 * has been stopped, either because {@link Clutter.Timeline.stop} has been
		 * called, or because it has been exhausted.
		 * 
		 * This is different from the #ClutterTimeline::completed signal,
		 * which gets emitted after every repeat finishes.
		 * 
		 * If the #ClutterTimeline has is marked as infinitely repeating,
		 * this signal will never be emitted.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - is_finished: %TRUE if the signal was emitted at the end of the
		 *   timeline. 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "stopped", callback: (owner: this, is_finished: boolean) => void): number;

		connect(signal: "notify::auto-reverse", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::delay", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::direction", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::duration", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::loop", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::progress-mode", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::repeat-count", callback: (owner: this, ...args: any) => void): number;

	}

	type TimelineInitOptionsMixin = GObject.ObjectInitOptions & ScriptableInitOptions & 
	Pick<ITimeline,
		"auto_reverse" |
		"delay" |
		"direction" |
		"duration" |
		"loop" |
		"progress_mode" |
		"repeat_count">;

	export interface TimelineInitOptions extends TimelineInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Timeline} instead.
	 */
	type TimelineMixin = ITimeline & GObject.Object & Scriptable;

	/**
	 * The {@link Timeline} structure contains only private data
	 * and should be accessed using the provided API
	 */
	interface Timeline extends TimelineMixin {}

	class Timeline {
		public constructor(options?: Partial<TimelineInitOptions>);
		/**
		 * Creates a new {@link Timeline} with a duration of #msecs.
		 * @param msecs Duration of the timeline in milliseconds
		 * @returns the newly created {@link Timeline} instance. Use
		 *   {@link GObject.Object.unref} when done using it
		 */
		public static new(msecs: number): Timeline;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link TransformNode} instead.
	 */
	interface ITransformNode {

	}

	type TransformNodeInitOptionsMixin = PaintNodeInitOptions
	export interface TransformNodeInitOptions extends TransformNodeInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link TransformNode} instead.
	 */
	type TransformNodeMixin = ITransformNode & PaintNode;

	interface TransformNode extends TransformNodeMixin {}

	class TransformNode {
		public constructor(options?: Partial<TransformNodeInitOptions>);
		public static new(projection: Cogl.Matrix): PaintNode;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Transition} instead.
	 */
	interface ITransition {
		/**
		 * The {@link Animatable} instance currently being animated.
		 */
		animatable: Animatable;
		/**
		 * The {@link Interval} used to describe the initial and final states
		 * of the transition.
		 */
		interval: Interval;
		/**
		 * Whether the {@link Transition} should be automatically detached
		 * from the #ClutterTransition:animatable instance whenever the
		 * #ClutterTimeline::stopped signal is emitted.
		 * 
		 * The #ClutterTransition:remove-on-complete property takes into
		 * account the value of the #ClutterTimeline:repeat-count property,
		 * and it only detaches the transition if the transition is not
		 * repeating.
		 */
		remove_on_complete: boolean;
		/**
		 * Retrieves the {@link Animatable} set using {@link Clutter.Transition.set_animatable}.
		 * @returns a {@link Animatable}, or %NULL; the returned
		 *   animatable is owned by the #ClutterTransition, and it should not be freed
		 *   directly.
		 */
		get_animatable(): Animatable;
		/**
		 * Retrieves the interval set using {@link Clutter.Transition.set_interval}
		 * @returns a {@link Interval}, or %NULL; the returned
		 *   interval is owned by the #ClutterTransition and it should not be freed
		 *   directly
		 */
		get_interval(): Interval;
		/**
		 * Retrieves the value of the {@link Transition.remove_on_complete} property.
		 * @returns %TRUE if the #transition should be detached when complete,
		 *   and %FALSE otherwise
		 */
		get_remove_on_complete(): boolean;
		/**
		 * Sets the {@link Transition.animatable} property.
		 * 
		 * The #transition will acquire a reference to the #animatable instance,
		 * and will call the #ClutterTransitionClass.attached() virtual function.
		 * 
		 * If an existing #ClutterAnimatable is attached to #transition, the
		 * reference will be released, and the #ClutterTransitionClass.detached()
		 * virtual function will be called.
		 * @param animatable a {@link Animatable}, or %NULL
		 */
		set_animatable(animatable?: Animatable | null): void;
		/**
		 * Sets the initial value of the transition.
		 * 
		 * This is a convenience function that will either create the
		 * {@link Interval} used by #transition, or will update it if
		 * the #ClutterTransition:interval is already set.
		 * 
		 * This function will copy the contents of #value, so it is
		 * safe to call {@link GObject.Value.unset} after it returns.
		 * 
		 * If #transition already has a #ClutterTransition:interval set,
		 * then #value must hold the same type, or a transformable type,
		 * as the interval's #ClutterInterval:value-type property.
		 * 
		 * This function is meant to be used by language bindings.
		 * @param value a #GValue with the initial value of the transition
		 */
		set_from(value: GObject.Value): void;
		/**
		 * Sets the {@link Transition.interval} property using #interval.
		 * 
		 * The #transition will acquire a reference on the #interval, sinking
		 * the floating flag on it if necessary.
		 * @param interval a {@link Interval}, or %NULL
		 */
		set_interval(interval?: Interval | null): void;
		/**
		 * Sets whether #transition should be detached from the {@link Animatable}
		 * set using {@link Clutter.Transition.set_animatable} when the
		 * #ClutterTimeline::completed signal is emitted.
		 * @param remove_complete whether to detach #transition when complete
		 */
		set_remove_on_complete(remove_complete: boolean): void;
		/**
		 * Sets the final value of the transition.
		 * 
		 * This is a convenience function that will either create the
		 * {@link Interval} used by #transition, or will update it if
		 * the #ClutterTransition:interval is already set.
		 * 
		 * This function will copy the contents of #value, so it is
		 * safe to call {@link GObject.Value.unset} after it returns.
		 * 
		 * If #transition already has a #ClutterTransition:interval set,
		 * then #value must hold the same type, or a transformable type,
		 * as the interval's #ClutterInterval:value-type property.
		 * 
		 * This function is meant to be used by language bindings.
		 * @param value a #GValue with the final value of the transition
		 */
		set_to(value: GObject.Value): void;
		connect(signal: "notify::animatable", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::interval", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::remove-on-complete", callback: (owner: this, ...args: any) => void): number;

	}

	type TransitionInitOptionsMixin = TimelineInitOptions & ScriptableInitOptions & 
	Pick<ITransition,
		"animatable" |
		"interval" |
		"remove_on_complete">;

	export interface TransitionInitOptions extends TransitionInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Transition} instead.
	 */
	type TransitionMixin = ITransition & Timeline & Scriptable;

	/**
	 * The {@link Transition} structure contains private
	 * data and should only be accessed using the provided API.
	 */
	interface Transition extends TransitionMixin {}

	class Transition {
		public constructor(options?: Partial<TransitionInitOptions>);
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link TransitionGroup} instead.
	 */
	interface ITransitionGroup {
		/**
		 * Adds #transition to #group.
		 * 
		 * This function acquires a reference on #transition that will be released
		 * when calling {@link Clutter.TransitionGroup.remove_transition}.
		 * @param transition a {@link Transition}
		 */
		add_transition(transition: Transition): void;
		/**
		 * Removes all transitions from #group.
		 * 
		 * This function releases the reference acquired when calling
		 * {@link Clutter.TransitionGroup.add_transition}.
		 */
		remove_all(): void;
		/**
		 * Removes #transition from #group.
		 * 
		 * This function releases the reference acquired on #transition when
		 * calling {@link Clutter.TransitionGroup.add_transition}.
		 * @param transition a {@link Transition}
		 */
		remove_transition(transition: Transition): void;
	}

	type TransitionGroupInitOptionsMixin = TransitionInitOptions & ScriptableInitOptions
	export interface TransitionGroupInitOptions extends TransitionGroupInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link TransitionGroup} instead.
	 */
	type TransitionGroupMixin = ITransitionGroup & Transition & Scriptable;

	/**
	 * The {@link TransitionGroup} structure contains
	 * private data and should only be accessed using the provided API.
	 */
	interface TransitionGroup extends TransitionGroupMixin {}

	class TransitionGroup {
		public constructor(options?: Partial<TransitionGroupInitOptions>);
		/**
		 * Creates a new {@link TransitionGroup} instance.
		 * @returns the newly created {@link TransitionGroup}. Use
		 *   {@link GObject.Object.unref} when done to deallocate the resources it
		 *   uses
		 */
		public static new(): Transition;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link VirtualInputDevice} instead.
	 */
	interface IVirtualInputDevice {
		device_type: InputDeviceType;
		seat: Seat;
		get_device_type(): number;
		notify_absolute_motion(time_us: number, x: number, y: number): void;
		notify_button(time_us: number, button: number, button_state: ButtonState): void;
		notify_discrete_scroll(time_us: number, direction: ScrollDirection, scroll_source: ScrollSource): void;
		notify_key(time_us: number, key: number, key_state: KeyState): void;
		notify_keyval(time_us: number, keyval: number, key_state: KeyState): void;
		notify_relative_motion(time_us: number, dx: number, dy: number): void;
		notify_scroll_continuous(time_us: number, dx: number, dy: number, scroll_source: ScrollSource, finish_flags: ScrollFinishFlags): void;
		notify_touch_down(time_us: number, slot: number, x: number, y: number): void;
		notify_touch_motion(time_us: number, slot: number, x: number, y: number): void;
		notify_touch_up(time_us: number, slot: number): void;
		connect(signal: "notify::device-type", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::seat", callback: (owner: this, ...args: any) => void): number;

	}

	type VirtualInputDeviceInitOptionsMixin = GObject.ObjectInitOptions & 
	Pick<IVirtualInputDevice,
		"device_type" |
		"seat">;

	export interface VirtualInputDeviceInitOptions extends VirtualInputDeviceInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link VirtualInputDevice} instead.
	 */
	type VirtualInputDeviceMixin = IVirtualInputDevice & GObject.Object;

	interface VirtualInputDevice extends VirtualInputDeviceMixin {}

	class VirtualInputDevice {
		public constructor(options?: Partial<VirtualInputDeviceInitOptions>);
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ZoomAction} instead.
	 */
	interface IZoomAction {
		/**
		 * Constraints the zooming action to the specified axis
		 */
		zoom_axis: ZoomAxis;
		/**
		 * Retrieves the focal point of the current zoom
		 * @returns a #graphene_point_t
		 */
		get_focal_point(): Graphene.Point;
		/**
		 * Retrieves the focal point relative to the actor's coordinates of
		 * the current zoom
		 * @returns a #graphene_point_t
		 */
		get_transformed_focal_point(): Graphene.Point;
		/**
		 * Retrieves the axis constraint set by {@link Clutter.ZoomAction.set_zoom_axis}
		 * @returns the axis constraint
		 */
		get_zoom_axis(): ZoomAxis;
		/**
		 * Restricts the zooming action to a specific axis
		 * @param axis the axis to constraint the zooming to
		 */
		set_zoom_axis(axis: ZoomAxis): void;
		/**
		 * The ::zoom signal is emitted for each series of touch events that
		 * change the distance and focal point between the touch points.
		 * 
		 * The default handler of the signal will call
		 * {@link Clutter.Actor.set_scale} on #actor using the ratio of the first
		 * distance between the touch points and the current distance. To
		 * override the default behaviour, connect to this signal and return
		 * %FALSE.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - actor: the {@link Actor} attached to the action 
		 *  - focal_point: the focal point of the zoom 
		 *  - factor: the initial distance between the 2 touch points 
		 *  - returns %TRUE if the zoom should continue, and %FALSE if
		 *   the zoom should be cancelled. 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "zoom", callback: (owner: this, actor: Actor, focal_point: Graphene.Point, factor: number) => boolean): number;

		connect(signal: "notify::zoom-axis", callback: (owner: this, ...args: any) => void): number;

	}

	type ZoomActionInitOptionsMixin = GestureActionInitOptions & 
	Pick<IZoomAction,
		"zoom_axis">;

	export interface ZoomActionInitOptions extends ZoomActionInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ZoomAction} instead.
	 */
	type ZoomActionMixin = IZoomAction & GestureAction;

	/**
	 * The {@link ZoomAction} structure contains only
	 * private data and should be accessed using the provided API
	 */
	interface ZoomAction extends ZoomActionMixin {}

	class ZoomAction {
		public constructor(options?: Partial<ZoomActionInitOptions>);
		/**
		 * Creates a new {@link ZoomAction} instance
		 * @returns the newly created {@link ZoomAction}
		 */
		public static new(): Action;
	}

	export interface ActorBoxInitOptions {}
	/**
	 * Bounding box of an actor. The coordinates of the top left and right bottom
	 * corners of an actor. The coordinates of the two points are expressed in
	 * pixels with sub-pixel precision
	 */
	interface ActorBox {}
	class ActorBox {
		public constructor(options?: Partial<ActorBoxInitOptions>);
		/**
		 * Allocates a new {@link ActorBox} using the passed coordinates
		 * for the top left and bottom right points.
		 * 
		 * This function is the logical equivalent of:
		 * 
		 * |[
		 *   clutter_actor_box_init (clutter_actor_box_alloc (),
		 *                           x_1, y_1,
		 *                           x_2, y_2);
		 * ]|
		 * @param x_1 X coordinate of the top left point
		 * @param y_1 Y coordinate of the top left point
		 * @param x_2 X coordinate of the bottom right point
		 * @param y_2 Y coordinate of the bottom right point
		 * @returns the newly allocated {@link ActorBox}.
		 *   Use {@link Clutter.ActorBox.free} to free the resources
		 */
		public static new(x_1: number, y_1: number, x_2: number, y_2: number): ActorBox;
		/**
		 * Allocates a new {@link ActorBox}.
		 * @returns the newly allocated {@link ActorBox}.
		 *   Use {@link Clutter.ActorBox.free} to free its resources
		 */
		public static alloc(): ActorBox;
		/**
		 * X coordinate of the top left corner
		 */
		public x1: number;
		/**
		 * Y coordinate of the top left corner
		 */
		public y1: number;
		/**
		 * X coordinate of the bottom right corner
		 */
		public x2: number;
		/**
		 * Y coordinate of the bottom right corner
		 */
		public y2: number;
		/**
		 * Clamps the components of #box to the nearest integer
		 */
		public clamp_to_pixel(): void;
		/**
		 * Checks whether a point with #x, #y coordinates is contained
		 * withing #box
		 * @param x X coordinate of the point
		 * @param y Y coordinate of the point
		 * @returns %TRUE if the point is contained by the {@link ActorBox}
		 */
		public contains(x: number, y: number): boolean;
		/**
		 * Copies #box
		 * @returns a newly allocated copy of {@link ActorBox}. Use
		 *   {@link Clutter.ActorBox.free} to free the allocated resources
		 */
		public copy(): ActorBox;
		/**
		 * Checks #box_a and #box_b for equality
		 * @param box_b a {@link ActorBox}
		 * @returns %TRUE if the passed {@link ActorBox} are equal
		 */
		public equal(box_b: ActorBox): boolean;
		/**
		 * Frees a {@link ActorBox} allocated using {@link Clutter.ActorBox.new}
		 * or clutter_actor_box_copy()
		 */
		public free(): void;
		/**
		 * Calculates the bounding box represented by the four vertices; for details
		 * of the vertex array see {@link Clutter.Actor.get_abs_allocation_vertices}.
		 * @param verts array of four #graphene_point3d_t
		 */
		public from_vertices(verts: Graphene.Point3D[]): void;
		/**
		 * Retrieves the area of #box
		 * @returns the area of a {@link ActorBox}, in pixels
		 */
		public get_area(): number;
		/**
		 * Retrieves the height of the #box
		 * @returns the height of the box
		 */
		public get_height(): number;
		/**
		 * Retrieves the origin of #box
		 * @returns return location for the X coordinate, or %NULL
		 * 
		 * return location for the Y coordinate, or %NULL
		 */
		public get_origin(): [ x: number | null, y: number | null ];
		/**
		 * Retrieves the size of #box
		 * @returns return location for the width, or %NULL
		 * 
		 * return location for the height, or %NULL
		 */
		public get_size(): [ width: number | null, height: number | null ];
		/**
		 * Retrieves the width of the #box
		 * @returns the width of the box
		 */
		public get_width(): number;
		/**
		 * Retrieves the X coordinate of the origin of #box
		 * @returns the X coordinate of the origin
		 */
		public get_x(): number;
		/**
		 * Retrieves the Y coordinate of the origin of #box
		 * @returns the Y coordinate of the origin
		 */
		public get_y(): number;
		/**
		 * Initializes #box with the given coordinates.
		 * @param x_1 X coordinate of the top left point
		 * @param y_1 Y coordinate of the top left point
		 * @param x_2 X coordinate of the bottom right point
		 * @param y_2 Y coordinate of the bottom right point
		 * @returns the initialized {@link ActorBox}
		 */
		public init(x_1: number, y_1: number, x_2: number, y_2: number): ActorBox;
		/**
		 * Initializes #box with the given origin and size.
		 * @param x X coordinate of the origin
		 * @param y Y coordinate of the origin
		 * @param width width of the box
		 * @param height height of the box
		 */
		public init_rect(x: number, y: number, width: number, height: number): void;
		/**
		 * Interpolates between #initial and #final {@link ActorBox}<!-- -->es
		 * using #progress
		 * @param _final the final {@link ActorBox}
		 * @param progress the interpolation progress
		 * @returns return location for the interpolation
		 */
		public interpolate(_final: ActorBox, progress: number): ActorBox;
		/**
		 * Rescale the #box by provided #scale factor.
		 * @param scale scale factor for resizing this box
		 */
		public scale(scale: number): void;
		/**
		 * Changes the origin of #box, maintaining the size of the {@link ActorBox}.
		 * @param x the X coordinate of the new origin
		 * @param y the Y coordinate of the new origin
		 */
		public set_origin(x: number, y: number): void;
		/**
		 * Sets the size of #box, maintaining the origin of the {@link ActorBox}.
		 * @param width the new width
		 * @param height the new height
		 */
		public set_size(width: number, height: number): void;
		/**
		 * Unions the two boxes #a and #b and stores the result in #result.
		 * @param b the second {@link ActorBox}
		 * @returns the {@link ActorBox} representing a union
		 *   of #a and #b
		 */
		public union(b: ActorBox): ActorBox;
	}

	export interface ActorIterInitOptions {}
	/**
	 * An iterator structure that allows to efficiently iterate over a
	 * section of the scene graph.
	 * 
	 * The contents of the {@link ActorIter} structure
	 * are private and should only be accessed using the provided API.
	 */
	interface ActorIter {}
	class ActorIter {
		public constructor(options?: Partial<ActorIterInitOptions>);
		public readonly dummy1: any;
		public readonly dummy2: any;
		public readonly dummy3: any;
		public readonly dummy4: number;
		public readonly dummy5: any;
		/**
		 * Safely destroys the {@link Actor} currently pointer to by the iterator
		 * from its parent.
		 * 
		 * This function can only be called after {@link Clutter.ActorIter.next} or
		 * clutter_actor_iter_prev() returned %TRUE, and cannot be called more
		 * than once for the same actor.
		 * 
		 * This function will call clutter_actor_destroy() internally.
		 */
		public destroy(): void;
		/**
		 * Initializes a {@link ActorIter}, which can then be used to iterate
		 * efficiently over a section of the scene graph, and associates it
		 * with #root.
		 * 
		 * Modifying the scene graph section that contains #root will invalidate
		 * the iterator.
		 * 
		 * |[<!-- language="C" -->
		 *   ClutterActorIter iter;
		 *   ClutterActor *child;
		 * 
		 *   clutter_actor_iter_init (&iter, container);
		 *   while (clutter_actor_iter_next (&iter, &child))
		 *     {
		 *       // do something with child
		 *     }
		 * ]|
		 * @param root a {@link Actor}
		 */
		public init(root: Actor): void;
		/**
		 * Checks whether a {@link ActorIter} is still valid.
		 * 
		 * An iterator is considered valid if it has been initialized, and
		 * if the #ClutterActor that it refers to hasn't been modified after
		 * the initialization.
		 * @returns %TRUE if the iterator is valid, and %FALSE otherwise
		 */
		public is_valid(): boolean;
		/**
		 * Advances the #iter and retrieves the next child of the root {@link Actor}
		 * that was used to initialize the #ClutterActorIterator.
		 * 
		 * If the iterator can advance, this function returns %TRUE and sets the
		 * #child argument.
		 * 
		 * If the iterator cannot advance, this function returns %FALSE, and
		 * the contents of #child are undefined.
		 * @returns %TRUE if the iterator could advance, and %FALSE otherwise.
		 * 
		 * return location for a {@link Actor}
		 */
		public next(): [ boolean, Actor ];
		/**
		 * Advances the #iter and retrieves the previous child of the root
		 * {@link Actor} that was used to initialize the #ClutterActorIterator.
		 * 
		 * If the iterator can advance, this function returns %TRUE and sets the
		 * #child argument.
		 * 
		 * If the iterator cannot advance, this function returns %FALSE, and
		 * the contents of #child are undefined.
		 * @returns %TRUE if the iterator could advance, and %FALSE otherwise.
		 * 
		 * return location for a {@link Actor}
		 */
		public prev(): [ boolean, Actor ];
		/**
		 * Safely removes the {@link Actor} currently pointer to by the iterator
		 * from its parent.
		 * 
		 * This function can only be called after {@link Clutter.ActorIter.next} or
		 * clutter_actor_iter_prev() returned %TRUE, and cannot be called more
		 * than once for the same actor.
		 * 
		 * This function will call clutter_actor_remove_child() internally.
		 */
		public remove(): void;
	}

	export interface AnimatableInterfaceInitOptions {}
	/**
	 * Base interface for #GObject<!-- -->s that can be animated by a
	 * a {@link Animation}.
	 */
	interface AnimatableInterface {}
	class AnimatableInterface {
		public constructor(options?: Partial<AnimatableInterfaceInitOptions>);
		public readonly parent_iface: GObject.TypeInterface;
		public animate_property: {(animatable: Animatable, animation: Animation, property_name: string, initial_value: GObject.Value, final_value: GObject.Value, progress: number, value: GObject.Value): boolean;};
		public find_property: {(animatable: Animatable, property_name: string): GObject.ParamSpec;};
		public get_initial_state: {(animatable: Animatable, property_name: string, value: GObject.Value): void;};
		public set_final_state: {(animatable: Animatable, property_name: string, value: GObject.Value): void;};
		public interpolate_value: {(animatable: Animatable, property_name: string, interval: Interval, progress: number): [ boolean, GObject.Value ];};
	}

	export interface AnyEventInitOptions {}
	/**
	 * Common members for a {@link Event}
	 */
	interface AnyEvent {}
	class AnyEvent {
		public constructor(options?: Partial<AnyEventInitOptions>);
		/**
		 * event type
		 */
		// public type: EventType;
		/**
		 * event time
		 */
		public time: number;
		/**
		 * event flags
		 */
		public flags: EventFlags;
		public stage: Stage;
		/**
		 * event source actor
		 */
		public source: Actor;
	}

	export interface ButtonEventInitOptions {}
	/**
	 * Button event.
	 * 
	 * The event coordinates are relative to the stage that received the
	 * event, and can be transformed into actor-relative coordinates by
	 * using {@link Clutter.Actor.transform_stage_point}.
	 */
	interface ButtonEvent {}
	class ButtonEvent {
		public constructor(options?: Partial<ButtonEventInitOptions>);
		/**
		 * event type
		 */
		// public type: EventType;
		/**
		 * event time
		 */
		public time: number;
		/**
		 * event flags
		 */
		public flags: EventFlags;
		/**
		 * event source stage
		 */
		public stage: Stage;
		/**
		 * event source actor
		 */
		public source: Actor;
		/**
		 * event X coordinate, relative to the stage
		 */
		public x: number;
		/**
		 * event Y coordinate, relative to the stage
		 */
		public y: number;
		/**
		 * button modifiers
		 */
		public modifier_state: ModifierType;
		/**
		 * event button
		 */
		public button: number;
		/**
		 * number of button presses within the default time
		 *   and radius
		 */
		public click_count: number;
		/**
		 * reserved for future use
		 */
		public axes: number;
		/**
		 * the device that originated the event. If you want the physical
		 * device the event originated from, use {@link Clutter.event.get_source_device}
		 */
		public device: InputDevice;
	}

	export interface CaptureInitOptions {}
	interface Capture {}
	class Capture {
		public constructor(options?: Partial<CaptureInitOptions>);
		public image: cairo.Surface;
		public rect: cairo.RectangleInt;
	}

	export interface ColorInitOptions {}
	/**
	 * Color representation.
	 */
	interface Color {}
	class Color {
		public constructor(options?: Partial<ColorInitOptions>);
		/**
		 * Allocates a new, transparent black {@link Color}.
		 * @returns the newly allocated {@link Color}; use
		 *   {@link Clutter.Color.free} to free its resources
		 */
		public static alloc(): Color;
		/**
		 * Creates a new {@link Color} with the given values.
		 * 
		 * This function is the equivalent of:
		 * 
		 * |[
		 *   clutter_color_init (clutter_color_alloc (), red, green, blue, alpha);
		 * ]|
		 * @param red red component of the color, between 0 and 255
		 * @param green green component of the color, between 0 and 255
		 * @param blue blue component of the color, between 0 and 255
		 * @param alpha alpha component of the color, between 0 and 255
		 * @returns the newly allocated color.
		 *   Use {@link Clutter.Color.free} when done
		 */
		public static new(red: number, green: number, blue: number, alpha: number): Color;
		/**
		 * Converts a color expressed in HLS (hue, luminance and saturation)
		 * values into a {@link Color}.
		 * @param hue hue value, in the 0 .. 360 range
		 * @param luminance luminance value, in the 0 .. 1 range
		 * @param saturation saturation value, in the 0 .. 1 range
		 * @returns return location for a {@link Color}
		 */
		public static from_hls(hue: number, luminance: number, saturation: number): Color;
		/**
		 * Converts #pixel from the packed representation of a four 8 bit channel
		 * color to a {@link Color}.
		 * @param pixel a 32 bit packed integer containing a color
		 * @returns return location for a {@link Color}
		 */
		public static from_pixel(pixel: number): Color;
		/**
		 * Parses a string definition of a color, filling the {@link Color}.red,
		 * #ClutterColor.green, #ClutterColor.blue and #ClutterColor.alpha fields
		 * of #color.
		 * 
		 * The #color is not allocated.
		 * 
		 * The format of #str can be either one of:
		 * 
		 *   - a standard name (as taken from the X11 rgb.txt file)
		 *   - an hexadecimal value in the form: `#rgb`, `#rrggbb`, `#rgba`, or `#rrggbbaa`
		 *   - a RGB color in the form: `rgb(r, g, b)`
		 *   - a RGB color in the form: `rgba(r, g, b, a)`
		 *   - a HSL color in the form: `hsl(h, s, l)`
		 *    -a HSL color in the form: `hsla(h, s, l, a)`
		 * 
		 * where 'r', 'g', 'b' and 'a' are (respectively) the red, green, blue color
		 * intensities and the opacity. The 'h', 's' and 'l' are (respectively) the
		 * hue, saturation and luminance values.
		 * 
		 * In the rgb() and rgba() formats, the 'r', 'g', and 'b' values are either
		 * integers between 0 and 255, or percentage values in the range between 0%
		 * and 100%; the percentages require the '%' character. The 'a' value, if
		 * specified, can only be a floating point value between 0.0 and 1.0.
		 * 
		 * In the hls() and hlsa() formats, the 'h' value (hue) is an angle between
		 * 0 and 360.0 degrees; the 'l' and 's' values (luminance and saturation) are
		 * percentage values in the range between 0% and 100%. The 'a' value, if specified,
		 * can only be a floating point value between 0.0 and 1.0.
		 * 
		 * Whitespace inside the definitions is ignored; no leading whitespace
		 * is allowed.
		 * 
		 * If the alpha component is not specified then it is assumed to be set to
		 * be fully opaque.
		 * @param str a string specifiying a color
		 * @returns %TRUE if parsing succeeded, and %FALSE otherwise
		 * 
		 * return location for a {@link Color}
		 */
		public static from_string(str: string): [ boolean, Color ];
		/**
		 * Retrieves a static color for the given #color name
		 * 
		 * Static colors are created by Clutter and are guaranteed to always be
		 * available and valid
		 * @param color the named global color
		 * @returns a pointer to a static color; the returned pointer
		 *   is owned by Clutter and it should never be modified or freed
		 */
		public static get_static(color: StaticColor): Color;
		/**
		 * red component, between 0 and 255
		 */
		public red: number;
		/**
		 * green component, between 0 and 255
		 */
		public green: number;
		/**
		 * blue component, between 0 and 255
		 */
		public blue: number;
		/**
		 * alpha component, between 0 and 255
		 */
		public alpha: number;
		/**
		 * Adds #a to #b and saves the resulting color inside #result.
		 * 
		 * The alpha channel of #result is set as as the maximum value
		 * between the alpha channels of #a and #b.
		 * @param b a {@link Color}
		 * @returns return location for the result
		 */
		public add(b: Color): Color;
		/**
		 * Makes a copy of the color structure.  The result must be
		 * freed using {@link Clutter.Color.free}.
		 * @returns an allocated copy of #color.
		 */
		public copy(): Color;
		/**
		 * Darkens #color by a fixed amount, and saves the changed color
		 * in #result.
		 * @returns return location for the darker color
		 */
		public darken(): Color;
		/**
		 * Compares two {@link Color}<!-- -->s and checks if they are the same.
		 * 
		 * This function can be passed to {@link GObject.hash_table_new} as the #key_equal_func
		 * parameter, when using #ClutterColor<!-- -->s as keys in a #GHashTable.
		 * @param v2 a {@link Color}
		 * @returns %TRUE if the two colors are the same.
		 */
		public equal(v2: Color): boolean;
		/**
		 * Frees a color structure created with {@link Clutter.Color.copy}.
		 */
		public free(): void;
		/**
		 * Converts a {@link Color} to a hash value.
		 * 
		 * This function can be passed to {@link GObject.hash_table_new} as the #hash_func
		 * parameter, when using #ClutterColor<!-- -->s as keys in a #GHashTable.
		 * @returns a hash value corresponding to the color
		 */
		public hash(): number;
		/**
		 * Initializes #color with the given values.
		 * @param red red component of the color, between 0 and 255
		 * @param green green component of the color, between 0 and 255
		 * @param blue blue component of the color, between 0 and 255
		 * @param alpha alpha component of the color, between 0 and 255
		 * @returns the initialized {@link Color}
		 */
		public init(red: number, green: number, blue: number, alpha: number): Color;
		/**
		 * Interpolates between #initial and #final {@link Color}<!-- -->s
		 * using #progress
		 * @param _final the final {@link Color}
		 * @param progress the interpolation progress
		 * @returns return location for the interpolation
		 */
		public interpolate(_final: Color, progress: number): Color;
		/**
		 * Lightens #color by a fixed amount, and saves the changed color
		 * in #result.
		 * @returns return location for the lighter color
		 */
		public lighten(): Color;
		/**
		 * Shades #color by #factor and saves the modified color into #result.
		 * @param factor the shade factor to apply
		 * @returns return location for the shaded color
		 */
		public shade(factor: number): Color;
		/**
		 * Subtracts #b from #a and saves the resulting color inside #result.
		 * 
		 * This function assumes that the components of #a are greater than the
		 * components of #b; the result is, otherwise, undefined.
		 * 
		 * The alpha channel of #result is set as the minimum value
		 * between the alpha channels of #a and #b.
		 * @param b a {@link Color}
		 * @returns return location for the result
		 */
		public subtract(b: Color): Color;
		/**
		 * Converts #color to the HLS format.
		 * 
		 * The #hue value is in the 0 .. 360 range. The #luminance and
		 * #saturation values are in the 0 .. 1 range.
		 * @returns return location for the hue value or %NULL
		 * 
		 * return location for the luminance value or %NULL
		 * 
		 * return location for the saturation value or %NULL
		 */
		public to_hls(): [ hue: number, luminance: number, saturation: number ];
		/**
		 * Converts #color into a packed 32 bit integer, containing
		 * all the four 8 bit channels used by {@link Color}.
		 * @returns a packed color
		 */
		public to_pixel(): number;
		/**
		 * Returns a textual specification of #color in the hexadecimal form
		 * <literal>&num;rrggbbaa</literal>, where <literal>r</literal>,
		 * <literal>g</literal>, <literal>b</literal> and <literal>a</literal> are
		 * hexadecimal digits representing the red, green, blue and alpha components
		 * respectively.
		 * @returns a newly-allocated text string
		 */
		public to_string(): string;
	}

	export interface ContainerIfaceInitOptions {}
	/**
	 * Base interface for container actors. The #add and #remove
	 * virtual functions must be provided by any implementation; the other
	 * virtual functions are optional.
	 */
	interface ContainerIface {}
	class ContainerIface {
		public constructor(options?: Partial<ContainerIfaceInitOptions>);
		public readonly g_iface: GObject.TypeInterface;
		/**
		 * The GType used for storing auxiliary information about
		 *   each of the containers children.
		 */
		public readonly child_meta_type: GObject.Type;
		public add: {(container: Container, actor: Actor): void;};
		public remove: {(container: Container, actor: Actor): void;};
		public raise: {(container: Container, actor: Actor, sibling?: Actor | null): void;};
		public lower: {(container: Container, actor: Actor, sibling?: Actor | null): void;};
		public sort_depth_order: {(container: Container): void;};
		public create_child_meta: {(container: Container, actor: Actor): void;};
		public destroy_child_meta: {(container: Container, actor: Actor): void;};
		public get_child_meta: {(container: Container, actor: Actor): ChildMeta;};
		public actor_added: {(container: Container, actor: Actor): void;};
		public actor_removed: {(container: Container, actor: Actor): void;};
		public child_notify: {(container: Container, child: Actor, pspec: GObject.ParamSpec): void;};
	}

	export interface ContentInterfaceInitOptions {}
	/**
	 * The {@link ContentInterface} structure contains only
	 * private data.
	 */
	interface ContentInterface {}
	class ContentInterface {
		public constructor(options?: Partial<ContentInterfaceInitOptions>);
		public readonly g_iface: GObject.TypeInterface;
		public get_preferred_size: {(content: Content): [ boolean, number, number ];};
		public paint_content: {(content: Content, actor: Actor, node: PaintNode, paint_context: PaintContext): void;};
		public attached: {(content: Content, actor: Actor): void;};
		public detached: {(content: Content, actor: Actor): void;};
		public invalidate: {(content: Content): void;};
		public invalidate_size: {(content: Content): void;};
	}

	export interface CrossingEventInitOptions {}
	/**
	 * Event for the movement of the pointer across different actors
	 */
	interface CrossingEvent {}
	class CrossingEvent {
		public constructor(options?: Partial<CrossingEventInitOptions>);
		/**
		 * event type
		 */
		// public type: EventType;
		/**
		 * event time
		 */
		public time: number;
		/**
		 * event flags
		 */
		public flags: EventFlags;
		/**
		 * event source stage
		 */
		public stage: Stage;
		/**
		 * event source actor
		 */
		public source: Actor;
		/**
		 * event X coordinate
		 */
		public x: number;
		/**
		 * event Y coordinate
		 */
		public y: number;
		/**
		 * the device that originated the event. If you want the physical
		 * device the event originated from, use {@link Clutter.event.get_source_device}
		 */
		public device: InputDevice;
		public sequence: EventSequence;
		/**
		 * actor related to the crossing
		 */
		public related: Actor;
	}

	export interface DeviceEventInitOptions {}
	interface DeviceEvent {}
	class DeviceEvent {
		public constructor(options?: Partial<DeviceEventInitOptions>);
		public type: EventType;
		public time: number;
		public flags: EventFlags;
		public stage: Stage;
		public source: Actor;
		public device: InputDevice;
	}

	export interface EventSequenceInitOptions {}
	/**
	 * The {@link EventSequence} structure is an opaque
	 * type used to denote the event sequence of a touch event.
	 */
	interface EventSequence {}
	class EventSequence {
		public constructor(options?: Partial<EventSequenceInitOptions>);
	}

	export interface FrameInfoInitOptions {}
	interface FrameInfo {}
	class FrameInfo {
		public constructor(options?: Partial<FrameInfoInitOptions>);
		public frame_counter: number;
		public presentation_time: number;
		public refresh_rate: number;
	}

	export interface IMEventInitOptions {}
	interface IMEvent {}
	class IMEvent {
		public constructor(options?: Partial<IMEventInitOptions>);
		public type: EventType;
		public time: number;
		public flags: EventFlags;
		public stage: Stage;
		public source: Actor;
		public text: string;
		public offset: number;
		public len: number;
	}

	export interface KbdA11ySettingsInitOptions {}
	/**
	 * The {@link KbdA11ySettings} structure contains keyboard accessibility
	 * settings
	 */
	interface KbdA11ySettings {}
	class KbdA11ySettings {
		public constructor(options?: Partial<KbdA11ySettingsInitOptions>);
		public controls: KeyboardA11yFlags;
		public slowkeys_delay: number;
		public debounce_delay: number;
		public timeout_delay: number;
		public mousekeys_init_delay: number;
		public mousekeys_max_speed: number;
		public mousekeys_accel_time: number;
	}

	export interface KeyEventInitOptions {}
	/**
	 * Key event
	 */
	interface KeyEvent {}
	class KeyEvent {
		public constructor(options?: Partial<KeyEventInitOptions>);
		/**
		 * event type
		 */
		// public type: EventType;
		/**
		 * event time
		 */
		public time: number;
		/**
		 * event flags
		 */
		public flags: EventFlags;
		/**
		 * event source stage
		 */
		public stage: Stage;
		/**
		 * event source actor
		 */
		public source: Actor;
		/**
		 * key modifiers
		 */
		public modifier_state: ModifierType;
		/**
		 * raw key value
		 */
		public keyval: number;
		/**
		 * raw hardware key value
		 */
		public hardware_keycode: number;
		/**
		 * Unicode representation
		 */
		public unicode_value: string;
		/**
		 * the device that originated the event. If you want the physical
		 * device the event originated from, use {@link Clutter.event.get_source_device}
		 */
		public device: InputDevice;
	}

	export interface KnotInitOptions {}
	/**
	 * Point in a path behaviour.
	 */
	interface Knot {}
	class Knot {
		public constructor(options?: Partial<KnotInitOptions>);
		/**
		 * X coordinate of the knot
		 */
		public x: number;
		/**
		 * Y coordinate of the knot
		 */
		public y: number;
		/**
		 * Makes an allocated copy of a knot.
		 * @returns the copied knot.
		 */
		public copy(): Knot;
		/**
		 * Compares to knot and checks if the point to the same location.
		 * @param knot_b Second knot
		 * @returns %TRUE if the knots point to the same location.
		 */
		public equal(knot_b: Knot): boolean;
		/**
		 * Frees the memory of an allocated knot.
		 */
		public free(): void;
	}

	export interface MarginInitOptions {}
	/**
	 * A representation of the components of a margin.
	 */
	interface Margin {}
	class Margin {
		public constructor(options?: Partial<MarginInitOptions>);
		/**
		 * Creates a new {@link Margin}.
		 * @returns a newly allocated {@link Margin}. Use
		 *   {@link Clutter.Margin.free} to free the resources associated with it when
		 *   done.
		 */
		public static new(): Margin;
		/**
		 * the margin from the left
		 */
		public left: number;
		/**
		 * the margin from the right
		 */
		public right: number;
		/**
		 * the margin from the top
		 */
		public top: number;
		/**
		 * the margin from the bottom
		 */
		public bottom: number;
		/**
		 * Creates a new {@link Margin} and copies the contents of #margin_ into
		 * the newly created structure.
		 * @returns a copy of the {@link Margin}.
		 */
		public copy(): Margin;
		/**
		 * Frees the resources allocated by {@link Clutter.Margin.new} and
		 * clutter_margin_copy().
		 */
		public free(): void;
	}

	export interface MotionEventInitOptions {}
	/**
	 * Event for the pointer motion
	 */
	interface MotionEvent {}
	class MotionEvent {
		public constructor(options?: Partial<MotionEventInitOptions>);
		/**
		 * event type
		 */
		// public type: EventType;
		/**
		 * event time
		 */
		public time: number;
		/**
		 * event flags
		 */
		public flags: EventFlags;
		/**
		 * event source stage
		 */
		public stage: Stage;
		/**
		 * event source actor
		 */
		public source: Actor;
		/**
		 * event X coordinate
		 */
		public x: number;
		/**
		 * event Y coordinate
		 */
		public y: number;
		/**
		 * button modifiers
		 */
		public modifier_state: ModifierType;
		/**
		 * reserved for future use
		 */
		public axes: number;
		/**
		 * the device that originated the event. If you want the physical
		 * device the event originated from, use {@link Clutter.event.get_source_device}
		 */
		public device: InputDevice;
	}

	export interface PadButtonEventInitOptions {}
	interface PadButtonEvent {}
	class PadButtonEvent {
		public constructor(options?: Partial<PadButtonEventInitOptions>);
		public type: EventType;
		public time: number;
		public flags: EventFlags;
		public stage: Stage;
		public source: Actor;
		public button: number;
		public group: number;
		public device: InputDevice;
		public mode: number;
	}

	export interface PadRingEventInitOptions {}
	interface PadRingEvent {}
	class PadRingEvent {
		public constructor(options?: Partial<PadRingEventInitOptions>);
		public type: EventType;
		public time: number;
		public flags: EventFlags;
		public stage: Stage;
		public source: Actor;
		public device: InputDevice;
		public ring_source: InputDevicePadSource;
		public ring_number: number;
		public group: number;
		public angle: number;
		public mode: number;
	}

	export interface PadStripEventInitOptions {}
	interface PadStripEvent {}
	class PadStripEvent {
		public constructor(options?: Partial<PadStripEventInitOptions>);
		public type: EventType;
		public time: number;
		public flags: EventFlags;
		public stage: Stage;
		public source: Actor;
		public device: InputDevice;
		public strip_source: InputDevicePadSource;
		public strip_number: number;
		public group: number;
		public value: number;
		public mode: number;
	}

	export interface PaintContextInitOptions {}
	interface PaintContext {}
	class PaintContext {
		public constructor(options?: Partial<PaintContextInitOptions>);
		public static new_for_framebuffer(framebuffer: Cogl.Framebuffer): PaintContext;
		public destroy(): void;
		public get_framebuffer(): Cogl.Framebuffer;
		public get_redraw_clip(): cairo.Region;
		public get_stage_view(): StageView;
		public pop_framebuffer(): void;
		public push_framebuffer(framebuffer: Cogl.Framebuffer): void;
		public ref(): PaintContext;
		public unref(): void;
	}

	export interface PaintVolumeInitOptions {}
	/**
	 * {@link PaintVolume} is an opaque structure
	 * whose members cannot be directly accessed.
	 * 
	 * A #ClutterPaintVolume represents an
	 * a bounding volume whose internal representation isn't defined but
	 * can be set and queried in terms of an axis aligned bounding box.
	 * 
	 * A #ClutterPaintVolume for a #ClutterActor
	 * is defined to be relative from the current actor modelview matrix.
	 * 
	 * Other internal representation and methods for describing the
	 * bounding volume may be added in the future.
	 */
	interface PaintVolume {}
	class PaintVolume {
		public constructor(options?: Partial<PaintVolumeInitOptions>);
		/**
		 * Copies #pv into a new {@link PaintVolume}
		 * @returns a newly allocated copy of a {@link PaintVolume}
		 */
		public copy(): PaintVolume;
		/**
		 * Frees the resources allocated by #pv
		 */
		public free(): void;
		/**
		 * Retrieves the depth of the volume's, axis aligned, bounding box.
		 * 
		 * In other words; this takes into account what actor's coordinate
		 * space #pv belongs too and conceptually fits an axis aligned box
		 * around the volume. It returns the size of that bounding box as
		 * measured along the z-axis.
		 * 
		 * If, for example, {@link Clutter.Actor.get_transformed_paint_volume}
		 * is used to transform a 2D child actor that is 100px wide, 100px
		 * high and 0px deep into container coordinates then the depth might
		 * not simply be 0px if the child actor has a 3D rotation applied to
		 * it.
		 * 
		 * Remember: if clutter_actor_get_transformed_paint_volume() is
		 * used then the transformed volume will be defined relative to the
		 * container actor and in container coordinates a 2D child actor
		 * can have a 3D bounding volume.
		 * 
		 * There are no accuracy guarantees for the reported depth,
		 * except that it must always be greater than, or equal to, the actor's
		 * depth. This is because actors may report simple, loose fitting paint
		 * volumes for efficiency.
		 * @returns the depth, in units of #pv's local coordinate system.
		 */
		public get_depth(): number;
		/**
		 * Retrieves the height of the volume's, axis aligned, bounding box.
		 * 
		 * In other words; this takes into account what actor's coordinate
		 * space #pv belongs too and conceptually fits an axis aligned box
		 * around the volume. It returns the size of that bounding box as
		 * measured along the y-axis.
		 * 
		 * If, for example, {@link Clutter.Actor.get_transformed_paint_volume}
		 * is used to transform a 2D child actor that is 100px wide, 100px
		 * high and 0px deep into container coordinates then the height might
		 * not simply be 100px if the child actor has a 3D rotation applied to
		 * it.
		 * 
		 * Remember: if clutter_actor_get_transformed_paint_volume() is
		 * used then a transformed child volume will be defined relative to the
		 * ancestor container actor and so a 2D child actor
		 * can have a 3D bounding volume.
		 * 
		 * There are no accuracy guarantees for the reported height,
		 * except that it must always be greater than, or equal to, the actor's
		 * height. This is because actors may report simple, loose fitting paint
		 * volumes for efficiency.
		 * @returns the height, in units of #pv's local coordinate system.
		 */
		public get_height(): number;
		/**
		 * Retrieves the origin of the {@link PaintVolume}.
		 * @returns the return location for a #graphene_point3d_t
		 */
		public get_origin(): Graphene.Point3D;
		/**
		 * Retrieves the width of the volume's, axis aligned, bounding box.
		 * 
		 * In other words; this takes into account what actor's coordinate
		 * space #pv belongs too and conceptually fits an axis aligned box
		 * around the volume. It returns the size of that bounding box as
		 * measured along the x-axis.
		 * 
		 * If, for example, {@link Clutter.Actor.get_transformed_paint_volume}
		 * is used to transform a 2D child actor that is 100px wide, 100px
		 * high and 0px deep into container coordinates then the width might
		 * not simply be 100px if the child actor has a 3D rotation applied to
		 * it.
		 * 
		 * Remember: if clutter_actor_get_transformed_paint_volume() is
		 * used then a transformed child volume will be defined relative to the
		 * ancestor container actor and so a 2D child actor can have a 3D
		 * bounding volume.
		 * 
		 * There are no accuracy guarantees for the reported width,
		 * except that it must always be greater than, or equal to, the
		 * actor's width. This is because actors may report simple, loose
		 * fitting paint volumes for efficiency.
		 * @returns the width, in units of #pv's local coordinate system.
		 */
		public get_width(): number;
		/**
		 * Sets the depth of the paint volume. The depth is measured along
		 * the z axis in the actor coordinates that #pv is associated with.
		 * @param depth the depth of the paint volume, in pixels
		 */
		public set_depth(depth: number): void;
		/**
		 * Sets the {@link PaintVolume} from the allocation of #actor.
		 * 
		 * This function should be used when overriding the
		 * {@link #ClutterActorClass.get.paint_volume} by #ClutterActor sub-classes
		 * that do not paint outside their allocation.
		 * 
		 * A typical example is:
		 * 
		 * |[
		 * static gboolean
		 * my_actor_get_paint_volume (ClutterActor       *self,
		 *                            ClutterPaintVolume *volume)
		 * {
		 *   return clutter_paint_volume_set_from_allocation (volume, self);
		 * }
		 * ]|
		 * @param actor a {@link Actor}
		 * @returns %TRUE if the paint volume was successfully set, and %FALSE
		 *   otherwise
		 */
		public set_from_allocation(actor: Actor): boolean;
		/**
		 * Sets the height of the paint volume. The height is measured along
		 * the y axis in the actor coordinates that #pv is associated with.
		 * @param height the height of the paint volume, in pixels
		 */
		public set_height(height: number): void;
		/**
		 * Sets the origin of the paint volume.
		 * 
		 * The origin is defined as the X, Y and Z coordinates of the top-left
		 * corner of an actor's paint volume, in actor coordinates.
		 * 
		 * The default is origin is assumed at: (0, 0, 0)
		 * @param origin a #graphene_point3d_t
		 */
		public set_origin(origin: Graphene.Point3D): void;
		/**
		 * Sets the width of the paint volume. The width is measured along
		 * the x axis in the actor coordinates that #pv is associated with.
		 * @param width the width of the paint volume, in pixels
		 */
		public set_width(width: number): void;
		/**
		 * Updates the geometry of #pv to encompass #pv and #another_pv.
		 * 
		 * There are no guarantees about how precisely the two volumes
		 * will be unioned.
		 * @param another_pv A second {@link PaintVolume} to union with #pv
		 */
		public union(another_pv: PaintVolume): void;
		/**
		 * Unions the 2D region represented by #box to a {@link PaintVolume}.
		 * 
		 * This function is similar to {@link Clutter.PaintVolume.union}, but it is
		 * specific for 2D regions.
		 * @param box a {@link ActorBox} to union to #pv
		 */
		public union_box(box: ActorBox): void;
	}

	export interface ParamSpecUnitsInitOptions {}
	/**
	 * #GParamSpec subclass for unit based properties.
	 */
	interface ParamSpecUnits {}
	class ParamSpecUnits {
		public constructor(options?: Partial<ParamSpecUnitsInitOptions>);
		/**
		 * default type
		 */
		public default_type: UnitType;
		/**
		 * default value
		 */
		public default_value: number;
		/**
		 * lower boundary
		 */
		public minimum: number;
		/**
		 * higher boundary
		 */
		public maximum: number;
	}

	export interface PathNodeInitOptions {}
	/**
	 * Represents a single node of a {@link Path}.
	 * 
	 * Some of the coordinates in #points may be unused for some node
	 * types. %CLUTTER_PATH_MOVE_TO and %CLUTTER_PATH_LINE_TO use only one
	 * pair of coordinates, %CLUTTER_PATH_CURVE_TO uses all three and
	 * %CLUTTER_PATH_CLOSE uses none.
	 */
	interface PathNode {}
	class PathNode {
		public constructor(options?: Partial<PathNodeInitOptions>);
		/**
		 * the node's type
		 */
		public type: PathNodeType;
		/**
		 * the coordinates of the node
		 */
		public points: Knot[];
		/**
		 * Makes an allocated copy of a node.
		 * @returns the copied node.
		 */
		public copy(): PathNode;
		/**
		 * Compares two nodes and checks if they are the same type with the
		 * same coordinates.
		 * @param node_b Second node
		 * @returns %TRUE if the nodes are the same.
		 */
		public equal(node_b: PathNode): boolean;
		/**
		 * Frees the memory of an allocated node.
		 */
		public free(): void;
	}

	export interface PerspectiveInitOptions {}
	/**
	 * Stage perspective definition. {@link Perspective} is only used by
	 * the fixed point version of {@link Clutter.Stage.set_perspective}.
	 */
	interface Perspective {}
	class Perspective {
		public constructor(options?: Partial<PerspectiveInitOptions>);
		/**
		 * the field of view angle, in degrees, in the y direction
		 */
		public fovy: number;
		/**
		 * the aspect ratio that determines the field of view in the x
		 *   direction. The aspect ratio is the ratio of x (width) to y (height)
		 */
		public aspect: number;
		/**
		 * the distance from the viewer to the near clipping
		 *   plane (always positive)
		 */
		public z_near: number;
		/**
		 * the distance from the viewer to the far clipping
		 *   plane (always positive)
		 */
		public z_far: number;
	}

	export interface PickContextInitOptions {}
	interface PickContext {}
	class PickContext {
		public constructor(options?: Partial<PickContextInitOptions>);
		public destroy(): void;
		public get_framebuffer(): Cogl.Framebuffer;
		public ref(): PickContext;
		public unref(): void;
	}

	export interface PointerA11ySettingsInitOptions {}
	/**
	 * The {@link PointerA11ySettings} structure contains pointer accessibility
	 * settings
	 */
	interface PointerA11ySettings {}
	class PointerA11ySettings {
		public constructor(options?: Partial<PointerA11ySettingsInitOptions>);
		public controls: PointerA11yFlags;
		public dwell_click_type: PointerA11yDwellClickType;
		public dwell_mode: PointerA11yDwellMode;
		public dwell_gesture_single: PointerA11yDwellDirection;
		public dwell_gesture_double: PointerA11yDwellDirection;
		public dwell_gesture_drag: PointerA11yDwellDirection;
		public dwell_gesture_secondary: PointerA11yDwellDirection;
		public secondary_click_delay: number;
		public dwell_delay: number;
		public dwell_threshold: number;
	}

	export interface ProximityEventInitOptions {}
	/**
	 * Event for tool proximity in tablet devices
	 */
	interface ProximityEvent {}
	class ProximityEvent {
		public constructor(options?: Partial<ProximityEventInitOptions>);
		/**
		 * event type
		 */
		public type: EventType;
		/**
		 * event time
		 */
		public time: number;
		/**
		 * event flags
		 */
		public flags: EventFlags;
		/**
		 * event source stage
		 */
		public stage: Stage;
		/**
		 * event source actor
		 */
		public source: Actor;
		/**
		 * the device that originated the event. If you want the physical
		 * device the event originated from, use {@link Clutter.event.get_source_device}
		 */
		public device: InputDevice;
	}

	export interface ScriptableIfaceInitOptions {}
	/**
	 * Interface for implementing "scriptable" objects. An object implementing
	 * this interface can override the parsing and properties setting sequence
	 * when loading a UI definition data with {@link Script}
	 */
	interface ScriptableIface {}
	class ScriptableIface {
		public constructor(options?: Partial<ScriptableIfaceInitOptions>);
		public readonly g_iface: GObject.TypeInterface;
		public set_id: {(scriptable: Scriptable, id_: string): void;};
		public get_id: {(scriptable: Scriptable): string;};
		// public parse_custom_node: {(scriptable: Scriptable, script: Script, value: GObject.Value, name: string, node: Json.Node): boolean;};
		public set_custom_property: {(scriptable: Scriptable, script: Script, name: string, value: GObject.Value): void;};
	}

	export interface ScrollEventInitOptions {}
	/**
	 * Scroll wheel (or similar device) event
	 */
	interface ScrollEvent {}
	class ScrollEvent {
		public constructor(options?: Partial<ScrollEventInitOptions>);
		/**
		 * event type
		 */
		// public type: EventType;
		/**
		 * event time
		 */
		public time: number;
		/**
		 * event flags
		 */
		public flags: EventFlags;
		/**
		 * event source stage
		 */
		public stage: Stage;
		/**
		 * event source actor
		 */
		public source: Actor;
		/**
		 * event X coordinate
		 */
		public x: number;
		/**
		 * event Y coordinate
		 */
		public y: number;
		/**
		 * direction of the scrolling
		 */
		public direction: ScrollDirection;
		/**
		 * button modifiers
		 */
		public modifier_state: ModifierType;
		/**
		 * reserved for future use
		 */
		public axes: number;
		/**
		 * the device that originated the event. If you want the physical
		 * device the event originated from, use {@link Clutter.event.get_source_device}
		 */
		public device: InputDevice;
		/**
		 * the source of scroll events. This field is available since 1.26
		 */
		public scroll_source: ScrollSource;
		/**
		 * the axes that were stopped in this event. This field is available since 1.26
		 */
		public finish_flags: ScrollFinishFlags;
	}

	export interface ShaderInitOptions {}
	interface Shader {}
	class Shader {
		public constructor(options?: Partial<ShaderInitOptions>);
	}

	export interface StageStateEventInitOptions {}
	/**
	 * Event signalling a change in the {@link Stage} state.
	 */
	interface StageStateEvent {}
	class StageStateEvent {
		public constructor(options?: Partial<StageStateEventInitOptions>);
		/**
		 * event type
		 */
		// public type: EventType;
		/**
		 * event time
		 */
		public time: number;
		/**
		 * event flags
		 */
		public flags: EventFlags;
		/**
		 * event source stage
		 */
		public stage: Stage;
		/**
		 * event source actor (unused)
		 */
		public source: Actor;
		/**
		 * bitwise OR of the changed flags
		 */
		public changed_mask: StageState;
		/**
		 * bitwise OR of the current state flags
		 */
		public new_state: StageState;
	}

	export interface StateKeyInitOptions {}
	/**
	 * {@link StateKey} is an opaque structure whose
	 * members cannot be accessed directly
	 */
	interface StateKey {}
	class StateKey {
		public constructor(options?: Partial<StateKeyInitOptions>);
		/**
		 * @deprecated
		 * Use {@link KeyframeTransition} and
		 *   #ClutterTransitionGroup instead
		 * 
		 * Retrieves the #GType of the property a key applies to
		 * @returns the #GType of the property
		 */
		public get_property_type(): GObject.Type;
	}

	export interface TouchEventInitOptions {}
	/**
	 * Used for touch events.
	 * 
	 * The #type field will be one of %CLUTTER_TOUCH_BEGIN, %CLUTTER_TOUCH_END,
	 * %CLUTTER_TOUCH_UPDATE, or %CLUTTER_TOUCH_CANCEL.
	 * 
	 * Touch events are grouped into sequences; each touch sequence will begin
	 * with a %CLUTTER_TOUCH_BEGIN event, progress with %CLUTTER_TOUCH_UPDATE
	 * events, and end either with a %CLUTTER_TOUCH_END event or with a
	 * %CLUTTER_TOUCH_CANCEL event.
	 * 
	 * With multi-touch capable devices there can be multiple event sequence
	 * running at the same time.
	 */
	interface TouchEvent {}
	class TouchEvent {
		public constructor(options?: Partial<TouchEventInitOptions>);
		/**
		 * event type
		 */
		// public type: EventType;
		/**
		 * event time
		 */
		public time: number;
		/**
		 * event flags
		 */
		public flags: EventFlags;
		/**
		 * event source stage
		 */
		public stage: Stage;
		/**
		 * event source actor (unused)
		 */
		public source: Actor;
		/**
		 * the X coordinate of the pointer, relative to the stage
		 */
		public x: number;
		/**
		 * the Y coordinate of the pointer, relative to the stage
		 */
		public y: number;
		/**
		 * the event sequence that this event belongs to
		 */
		public sequence: EventSequence;
		/**
		 * a bit-mask representing the state
		 *   of modifier keys (e.g. Control, Shift, and Alt) and the pointer
		 *   buttons. See {@link ModifierType}
		 */
		public modifier_state: ModifierType;
		/**
		 * reserved
		 */
		public axes: number;
		/**
		 * the device that originated the event. If you want the physical
		 * device the event originated from, use {@link Clutter.event.get_source_device}
		 */
		public device: InputDevice;
	}

	export interface TouchpadPinchEventInitOptions {}
	/**
	 * Used for touchpad pinch gesture events. The current state of the
	 * gesture will be determined by the #phase field.
	 * 
	 * Each event with phase %CLUTTER_TOUCHPAD_GESTURE_PHASE_BEGIN
	 * will report a #scale of 1.0, all later phases in the gesture
	 * report the current scale relative to the initial 1.0 value
	 * (eg. 0.5 being half the size, 2.0 twice as big).
	 */
	interface TouchpadPinchEvent {}
	class TouchpadPinchEvent {
		public constructor(options?: Partial<TouchpadPinchEventInitOptions>);
		/**
		 * event type
		 */
		// public type: EventType;
		/**
		 * event time
		 */
		public time: number;
		/**
		 * event flags
		 */
		public flags: EventFlags;
		/**
		 * event source stage
		 */
		public stage: Stage;
		/**
		 * event source actor (unused)
		 */
		public source: Actor;
		/**
		 * the current phase of the gesture
		 */
		public phase: TouchpadGesturePhase;
		/**
		 * the X coordinate of the pointer, relative to the stage
		 */
		public x: number;
		/**
		 * the Y coordinate of the pointer, relative to the stage
		 */
		public y: number;
		/**
		 * movement delta of the pinch focal point in the X axis
		 */
		public dx: number;
		/**
		 * movement delta of the pinch focal point in the Y axis
		 */
		public dy: number;
		/**
		 * angle delta in degrees, clockwise rotations are
		 *   represented by positive deltas
		 */
		public angle_delta: number;
		/**
		 * the current scale
		 */
		public scale: number;
		public n_fingers: number;
	}

	export interface TouchpadSwipeEventInitOptions {}
	/**
	 * Used for touchpad swipe gesture events. The current state of the
	 * gesture will be determined by the #phase field.
	 */
	interface TouchpadSwipeEvent {}
	class TouchpadSwipeEvent {
		public constructor(options?: Partial<TouchpadSwipeEventInitOptions>);
		/**
		 * event type
		 */
		// public type: EventType;
		/**
		 * event time
		 */
		public time: number;
		/**
		 * event flags
		 */
		public flags: EventFlags;
		/**
		 * event source stage
		 */
		public stage: Stage;
		/**
		 * event source actor (unused)
		 */
		public source: Actor;
		/**
		 * the current phase of the gesture
		 */
		public phase: TouchpadGesturePhase;
		/**
		 * the number of fingers triggering the swipe
		 */
		public n_fingers: number;
		/**
		 * the X coordinate of the pointer, relative to the stage
		 */
		public x: number;
		/**
		 * the Y coordinate of the pointer, relative to the stage
		 */
		public y: number;
		/**
		 * movement delta of the pinch focal point in the X axis
		 */
		public dx: number;
		/**
		 * movement delta of the pinch focal point in the Y axis
		 */
		public dy: number;
	}

	export interface UnitsInitOptions {}
	/**
	 * An opaque structure, to be used to store sizing and positioning
	 * values along with their unit.
	 */
	interface Units {}
	class Units {
		public constructor(options?: Partial<UnitsInitOptions>);
		/**
		 * Stores a value in centimeters inside #units
		 * @param cm centimeters
		 * @returns a {@link Units}
		 */
		public static from_cm(cm: number): Units;
		/**
		 * Stores a value in em inside #units, using the default font
		 * name as returned by {@link Clutter.Backend.get_font_name}
		 * @param em em
		 * @returns a {@link Units}
		 */
		public static from_em(em: number): Units;
		/**
		 * Stores a value in em inside #units using #font_name
		 * @param font_name the font name and size
		 * @param em em
		 * @returns a {@link Units}
		 */
		public static from_em_for_font(font_name: string | null, em: number): Units;
		/**
		 * Stores a value in millimiters inside #units
		 * @param mm millimeters
		 * @returns a {@link Units}
		 */
		public static from_mm(mm: number): Units;
		/**
		 * Stores a value in pixels inside #units
		 * @param px pixels
		 * @returns a {@link Units}
		 */
		public static from_pixels(px: number): Units;
		/**
		 * Stores a value in typographic points inside #units
		 * @param pt typographic points
		 * @returns a {@link Units}
		 */
		public static from_pt(pt: number): Units;
		/**
		 * Parses a value and updates #units with it
		 * 
		 * A {@link Units} expressed in string should match:
		 * 
		 * |[
		 *   units: wsp* unit-value wsp* unit-name? wsp*
		 *   unit-value: number
		 *   unit-name: 'px' | 'pt' | 'mm' | 'em' | 'cm'
		 *   number: digit+
		 *           | digit* sep digit+
		 *   sep: '.' | ','
		 *   digit: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
		 *   wsp: (#0x20 | #0x9 | #0xA | #0xB | #0xC | #0xD)+
		 * ]|
		 * 
		 * For instance, these are valid strings:
		 * 
		 * |[
		 *   10 px
		 *   5.1 em
		 *   24 pt
		 *   12.6 mm
		 *   .3 cm
		 * ]|
		 * 
		 * While these are not:
		 * 
		 * |[
		 *   42 cats
		 *   omg!1!ponies
		 * ]|
		 * 
		 * If no unit is specified, pixels are assumed.
		 * @param str the string to convert
		 * @returns %TRUE if the string was successfully parsed,
		 *   and %FALSE otherwise
		 * 
		 * a {@link Units}
		 */
		public static from_string(str: string): [ boolean, Units ];
		public readonly unit_type: UnitType;
		public readonly value: number;
		public readonly pixels: number;
		public readonly pixels_set: number;
		public readonly serial: number;
		public readonly __padding_1: number;
		public readonly __padding_2: number;
		/**
		 * Copies #units
		 * @returns the newly created copy of a
		 *   {@link Units} structure. Use {@link Clutter.Units.free} to free
		 *   the allocated resources
		 */
		public copy(): Units;
		/**
		 * Frees the resources allocated by #units
		 * 
		 * You should only call this function on a {@link Units}
		 * created using {@link Clutter.Units.copy}
		 */
		public free(): void;
		/**
		 * Retrieves the unit type of the value stored inside #units
		 * @returns a unit type
		 */
		public get_unit_type(): UnitType;
		/**
		 * Retrieves the value stored inside #units
		 * @returns the value stored inside a {@link Units}
		 */
		public get_unit_value(): number;
		/**
		 * Converts a value in {@link Units} to pixels
		 * @returns the value in pixels
		 */
		public to_pixels(): number;
		/**
		 * Converts #units into a string
		 * 
		 * See {@link Clutter.units.from_string} for the units syntax and for
		 * examples of output
		 * 
		 * Fractional values are truncated to the second decimal
		 * position for em, mm and cm, and to the first decimal position for
		 * typographic points. Pixels are integers.
		 * @returns a newly allocated string containing the encoded
		 *   {@link Units} value. Use {@link GObject.free} to free the string
		 */
		public to_string(): string;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Animatable} instead.
	 */
	interface IAnimatable {
		/**
		 * Finds the #GParamSpec for #property_name
		 * @param property_name the name of the animatable property to find
		 * @returns The #GParamSpec for the given property
		 *   or %NULL
		 */
		find_property(property_name: string): GObject.ParamSpec;
		/**
		 * Retrieves the current state of #property_name and sets #value with it
		 * @param property_name the name of the animatable property to retrieve
		 * @param value a #GValue initialized to the type of the property to retrieve
		 */
		get_initial_state(property_name: string, value: GObject.Value): void;
		/**
		 * Asks a {@link Animatable} implementation to interpolate a
		 * a named property between the initial and final values of
		 * a #ClutterInterval, using #progress as the interpolation
		 * value, and store the result inside #value.
		 * 
		 * This function should be used for every property animation
		 * involving #ClutterAnimatable<!-- -->s.
		 * 
		 * This function replaces {@link Clutter.Animatable.animate_property}.
		 * @param property_name the name of the property to interpolate
		 * @param interval a {@link Interval} with the animation range
		 * @param progress the progress to use to interpolate between the
		 *   initial and final values of the #interval
		 * @returns %TRUE if the interpolation was successful,
		 *   and %FALSE otherwise
		 * 
		 * return location for an initialized #GValue
		 *   using the same type of the #interval
		 */
		interpolate_value(property_name: string, interval: Interval, progress: number): [ boolean, GObject.Value ];
		/**
		 * Sets the current state of #property_name to #value
		 * @param property_name the name of the animatable property to set
		 * @param value the value of the animatable property to set
		 */
		set_final_state(property_name: string, value: GObject.Value): void;
	}

	type AnimatableInitOptionsMixin  = {};
	export interface AnimatableInitOptions extends AnimatableInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Animatable} instead.
	 */
	type AnimatableMixin = IAnimatable;

	interface Animatable extends AnimatableMixin {}

	class Animatable {
		public constructor(options?: Partial<AnimatableInitOptions>);
	}



	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Container} instead.
	 */
	interface IContainer {
		/**
		 * @deprecated
		 * Use {@link Clutter.Actor.add_child} instead.
		 * 
		 * Adds a list of {@link Actor}<!-- -->s to #container. Each time and
		 * actor is added, the "actor-added" signal is emitted. Each actor should
		 * be parented to #container, which takes a reference on the actor. You
		 * cannot add a #ClutterActor to more than one #ClutterContainer.
		 * 
		 * This function will call #ClutterContainerIface.add(), which is a
		 * deprecated virtual function. The default implementation will
		 * call clutter_actor_add_child().
		 * @param first_actor the first {@link Actor} to add
		 */
		add(first_actor: Actor): void;
		/**
		 * @deprecated
		 * Use {@link Clutter.Actor.add_child} instead.
		 * 
		 * Adds a {@link Actor} to #container. This function will emit the
		 * "actor-added" signal. The actor should be parented to
		 * #container. You cannot add a #ClutterActor to more than one
		 * #ClutterContainer.
		 * 
		 * This function will call #ClutterContainerIface.add(), which is a
		 * deprecated virtual function. The default implementation will
		 * call clutter_actor_add_child().
		 * @param actor the first {@link Actor} to add
		 */
		add_actor(actor: Actor): void;
		/**
		 * Gets #container specific properties of an actor.
		 * 
		 * In general, a copy is made of the property contents and the caller is
		 * responsible for freeing the memory in the appropriate manner for the type, for
		 * instance by calling {@link GObject.free} or g_object_unref().
		 * @param actor a {@link Actor} that is a child of #container.
		 * @param first_prop name of the first property to be set.
		 */
		child_get(actor: Actor, first_prop: string): void;
		/**
		 * Gets a container specific property of a child of #container, In general,
		 * a copy is made of the property contents and the caller is responsible for
		 * freeing the memory by calling {@link GObject.Value.unset}.
		 * 
		 * Note that clutter_container_child_set_property() is really intended for
		 * language bindings, clutter_container_child_set() is much more convenient
		 * for C programming.
		 * @param child a {@link Actor} that is a child of #container.
		 * @param property the name of the property to set.
		 * @param value the value.
		 */
		child_get_property(child: Actor, property: string, value: GObject.Value): void;
		/**
		 * Calls the {@link {@link ContainerIface}.child.notify} virtual function
		 * of #ClutterContainer. The default implementation will emit the
		 * #ClutterContainer::child-notify signal.
		 * @param child a {@link Actor}
		 * @param pspec a #GParamSpec
		 */
		child_notify(child: Actor, pspec: GObject.ParamSpec): void;
		/**
		 * Sets container specific properties on the child of a container.
		 * @param actor a {@link Actor} that is a child of #container.
		 * @param first_prop name of the first property to be set.
		 */
		child_set(actor: Actor, first_prop: string): void;
		/**
		 * Sets a container-specific property on a child of #container.
		 * @param child a {@link Actor} that is a child of #container.
		 * @param property the name of the property to set.
		 * @param value the value.
		 */
		child_set_property(child: Actor, property: string, value: GObject.Value): void;
		/**
		 * Creates the {@link ChildMeta} wrapping #actor inside the
		 * #container, if the #ClutterContainerIface::child_meta_type
		 * class member is not set to %G_TYPE_INVALID.
		 * 
		 * This function is only useful when adding a #ClutterActor to
		 * a #ClutterContainer implementation outside of the
		 * #ClutterContainer::add() virtual function implementation.
		 * 
		 * Applications should not call this function.
		 * @param actor a {@link Actor}
		 */
		create_child_meta(actor: Actor): void;
		/**
		 * Destroys the {@link ChildMeta} wrapping #actor inside the
		 * #container, if any.
		 * 
		 * This function is only useful when removing a #ClutterActor to
		 * a #ClutterContainer implementation outside of the
		 * #ClutterContainer::add() virtual function implementation.
		 * 
		 * Applications should not call this function.
		 * @param actor a {@link Actor}
		 */
		destroy_child_meta(actor: Actor): void;
		/**
		 * Finds a child actor of a container by its name. Search recurses
		 * into any child container.
		 * @param child_name the name of the requested child.
		 * @returns The child actor with the requested name,
		 *   or %NULL if no actor with that name was found.
		 */
		find_child_by_name(child_name: string): Actor;
		/**
		 * Retrieves the {@link ChildMeta} which contains the data about the
		 * #container specific state for #actor.
		 * @param actor a {@link Actor} that is a child of #container.
		 * @returns the {@link ChildMeta} for the #actor child
		 *   of #container or %NULL if the specifiec actor does not exist or the
		 *   container is not configured to provide #ClutterChildMeta<!-- -->s
		 */
		get_child_meta(actor: Actor): ChildMeta;
		/**
		 * @deprecated
		 * Use {@link Clutter.Actor.get_children} instead.
		 * 
		 * Retrieves all the children of #container.
		 * @returns a list
		 *   of {@link Actor}<!-- -->s. Use {@link GObject.list_free} on the returned
		 *   list when done.
		 */
		get_children(): Actor[];
		/**
		 * @deprecated
		 * Use {@link Clutter.Actor.set_child_below_sibling} instead.
		 * 
		 * Lowers #actor to #sibling level, in the depth ordering.
		 * 
		 * This function calls the {@link ContainerIface}.lower() virtual function,
		 * which has been deprecated. The default implementation will call
		 * clutter_actor_set_child_below_sibling().
		 * @param actor the actor to raise
		 * @param sibling the sibling to lower to, or %NULL to lower
		 *   to the bottom
		 */
		lower_child(actor: Actor, sibling?: Actor | null): void;
		/**
		 * @deprecated
		 * Use {@link Clutter.Actor.set_child_above_sibling} instead.
		 * 
		 * Raises #actor to #sibling level, in the depth ordering.
		 * 
		 * This function calls the {@link ContainerIface}.raise() virtual function,
		 * which has been deprecated. The default implementation will call
		 * clutter_actor_set_child_above_sibling().
		 * @param actor the actor to raise
		 * @param sibling the sibling to raise to, or %NULL to raise
		 *   to the top
		 */
		raise_child(actor: Actor, sibling?: Actor | null): void;
		/**
		 * @deprecated
		 * Use {@link Clutter.Actor.remove_child} instead.
		 * 
		 * Removes a %NULL terminated list of {@link Actor}<!-- -->s from
		 * #container. Each actor should be unparented, so if you want to keep it
		 * around you must hold a reference to it yourself, using {@link GObject.Object.ref}.
		 * Each time an actor is removed, the "actor-removed" signal is
		 * emitted by #container.
		 * 
		 * This function will call #ClutterContainerIface.remove(), which is a
		 * deprecated virtual function. The default implementation will call
		 * clutter_actor_remove_child().
		 * @param first_actor first {@link Actor} to remove
		 */
		remove(first_actor: Actor): void;
		/**
		 * @deprecated
		 * Use {@link Clutter.Actor.remove_child} instead.
		 * 
		 * Removes #actor from #container. The actor should be unparented, so
		 * if you want to keep it around you must hold a reference to it
		 * yourself, using {@link GObject.Object.ref}. When the actor has been removed,
		 * the "actor-removed" signal is emitted by #container.
		 * 
		 * This function will call {@link ContainerIface}.remove(), which is a
		 * deprecated virtual function. The default implementation will call
		 * clutter_actor_remove_child().
		 * @param actor a {@link Actor}
		 */
		remove_actor(actor: Actor): void;
		/**
		 * @deprecated
		 * The {@link {@link ContainerIface}.sort.depth_order} virtual
		 *   function should not be used any more; the default implementation in
		 *   #ClutterContainer does not do anything.
		 * 
		 * Sorts a container's children using their depth. This function should not
		 * be normally used by applications.
		 */
		sort_depth_order(): void;
		/**
		 * The ::actor-added signal is emitted each time an actor
		 * has been added to #container.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - actor: the new child that has been added to #container 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "actor-added", callback: (owner: this, actor: Actor) => void): number;
		/**
		 * The ::actor-removed signal is emitted each time an actor
		 * is removed from #container.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - actor: the child that has been removed from #container 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "actor-removed", callback: (owner: this, actor: Actor) => void): number;
		/**
		 * The ::child-notify signal is emitted each time a property is
		 * being set through the {@link Clutter.Container.child_set} and
		 * clutter_container_child_set_property() calls.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - actor: the child that has had a property set 
		 *  - pspec: the #GParamSpec of the property set 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "child-notify", callback: (owner: this, actor: Actor, pspec: GObject.ParamSpec) => void): number;

	}

	type ContainerInitOptionsMixin  = {};
	export interface ContainerInitOptions extends ContainerInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Container} instead.
	 */
	type ContainerMixin = IContainer;

	/**
	 * {@link Container} is an opaque structure whose members cannot be directly
	 * accessed
	 */
	interface Container extends ContainerMixin {}

	class Container {
		public constructor(options?: Partial<ContainerInitOptions>);
		/**
		 * Looks up the #GParamSpec for a child property of #klass.
		 * @param klass a #GObjectClass implementing the {@link Container} interface.
		 * @param property_name a property name.
		 * @returns The #GParamSpec for the property or %NULL
		 *   if no such property exist.
		 */
		public static class_find_child_property(klass: GObject.Object, property_name: string): GObject.ParamSpec;
		/**
		 * Returns an array of #GParamSpec for all child properties.
		 * @param klass a #GObjectClass implementing the {@link Container} interface.
		 * @returns an array
		 *   of #GParamSpec<!-- -->s which should be freed after use.
		 * 
		 * return location for length of returned array.
		 */
		public static class_list_child_properties(klass: GObject.Object): [ GObject.ParamSpec[], number ];
	}



	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Content} instead.
	 */
	interface IContent {
		/**
		 * Retrieves the natural size of the #content, if any.
		 * 
		 * The natural size of a {@link Content} is defined as the size the content
		 * would have regardless of the allocation of the actor that is painting it,
		 * for instance the size of an image data.
		 * @returns %TRUE if the content has a preferred size, and %FALSE
		 *   otherwise
		 * 
		 * return location for the natural width of the content
		 * 
		 * return location for the natural height of the content
		 */
		get_preferred_size(): [ boolean, number, number ];
		/**
		 * Invalidates a {@link Content}.
		 * 
		 * This function should be called by #ClutterContent implementations when
		 * they change the way a the content should be painted regardless of the
		 * actor state.
		 */
		invalidate(): void;
		/**
		 * Signals that #content's size changed. Attached actors with request mode
		 * set to %CLUTTER_REQUEST_CONTENT_SIZE will have a relayout queued.
		 * 
		 * Attached actors with other request modes are not redrawn. To redraw them
		 * too, use {@link Clutter.Content.invalidate}.
		 */
		invalidate_size(): void;
		/**
		 * This signal is emitted each time a {@link Content} implementation is
		 * assigned to a #ClutterActor.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - actor: a {@link Actor} 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "attached", callback: (owner: this, actor: Actor) => void): number;
		/**
		 * This signal is emitted each time a {@link Content} implementation is
		 * removed from a #ClutterActor.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - actor: a {@link Actor} 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "detached", callback: (owner: this, actor: Actor) => void): number;

	}

	type ContentInitOptionsMixin  = {};
	export interface ContentInitOptions extends ContentInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Content} instead.
	 */
	type ContentMixin = IContent;

	interface Content extends ContentMixin {}

	class Content {
		public constructor(options?: Partial<ContentInitOptions>);
	}



	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Scriptable} instead.
	 */
	interface IScriptable {
		/**
		 * Retrieves the id of #scriptable set using {@link Clutter.Scriptable.set_id}.
		 * @returns the id of the object. The returned string is owned by
		 *   the scriptable object and should never be modified of freed
		 */
		get_id(): string;
		/**
		 * Parses the passed JSON node. The implementation must set the type
		 * of the passed #GValue pointer using {@link GObject.Value.init}.
		 * @param script the {@link Script} creating the scriptable instance
		 * @param value the generic value to be set
		 * @param name the name of the node
		 * @param node the JSON node to be parsed
		 * @returns %TRUE if the node was successfully parsed, %FALSE otherwise.
		 */
		// parse_custom_node(script: Script, value: GObject.Value, name: string, node: Json.Node): boolean;
		/**
		 * Overrides the common properties setting. The underlying virtual
		 * function should be used when implementing custom properties.
		 * @param script the {@link Script} creating the scriptable instance
		 * @param name the name of the property
		 * @param value the value of the property
		 */
		set_custom_property(script: Script, name: string, value: GObject.Value): void;
		/**
		 * Sets #id_ as the unique Clutter script it for this instance of
		 * {@link ScriptableIface}.
		 * 
		 * This name can be used by user interface designer applications to
		 * define a unique name for an object constructable using the UI
		 * definition language parsed by #ClutterScript.
		 * @param id_ the {@link Script} id of the object
		 */
		set_id(id_: string): void;
	}

	type ScriptableInitOptionsMixin  = {};
	export interface ScriptableInitOptions extends ScriptableInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Scriptable} instead.
	 */
	type ScriptableMixin = IScriptable;

	/**
	 * {@link Scriptable} is an opaque structure whose members cannot be directly
	 * accessed
	 */
	interface Scriptable extends ScriptableMixin {}

	class Scriptable {
		public constructor(options?: Partial<ScriptableInitOptions>);
	}



	/**
	 * Controls how a {@link Actor} should align itself inside the extra space
	 * assigned to it during the allocation.
	 * 
	 * Alignment only matters if the allocated space given to an actor is
	 * bigger than its natural size; for example, when the #ClutterActor:x-expand
	 * or the #ClutterActor:y-expand properties of #ClutterActor are set to %TRUE.
	 */
	enum ActorAlign {
		/**
		 * Stretch to cover the whole allocated space
		 */
		FILL = 0,
		/**
		 * Snap to left or top side, leaving space
		 *   to the right or bottom. For horizontal layouts, in right-to-left
		 *   locales this should be reversed.
		 */
		START = 1,
		/**
		 * Center the actor inside the allocation
		 */
		CENTER = 2,
		/**
		 * Snap to right or bottom side, leaving space
		 *   to the left or top. For horizontal layouts, in right-to-left locales
		 *   this should be reversed.
		 */
		END = 3
	}

	/**
	 * Specifies the axis on which {@link AlignConstraint} should maintain
	 * the alignment.
	 */
	enum AlignAxis {
		/**
		 * Maintain the alignment on the X axis
		 */
		X_AXIS = 0,
		/**
		 * Maintain the alignment on the Y axis
		 */
		Y_AXIS = 1,
		/**
		 * Maintain the alignment on both the X and Y axis
		 */
		BOTH = 2
	}

	/**
	 * The animation modes used by {@link Alpha} and #ClutterAnimation. This
	 * enumeration can be expanded in later versions of Clutter.
	 * 
	 * <figure id="easing-modes">
	 *   <title>Easing modes provided by Clutter</title>
	 *   <graphic fileref="easing-modes.png" format="PNG"/>
	 * </figure>
	 * 
	 * Every global alpha function registered using {@link Clutter.Alpha.register_func}
	 * or clutter_alpha_register_closure() will have a logical id greater than
	 * %CLUTTER_ANIMATION_LAST.
	 */
	enum AnimationMode {
		/**
		 * custom progress function
		 */
		CUSTOM_MODE = 0,
		/**
		 * linear tweening
		 */
		LINEAR = 1,
		/**
		 * quadratic tweening
		 */
		EASE_IN_QUAD = 2,
		/**
		 * quadratic tweening, inverse of
		 *    %CLUTTER_EASE_IN_QUAD
		 */
		EASE_OUT_QUAD = 3,
		/**
		 * quadratic tweening, combininig
		 *    %CLUTTER_EASE_IN_QUAD and %CLUTTER_EASE_OUT_QUAD
		 */
		EASE_IN_OUT_QUAD = 4,
		/**
		 * cubic tweening
		 */
		EASE_IN_CUBIC = 5,
		/**
		 * cubic tweening, invers of
		 *    %CLUTTER_EASE_IN_CUBIC
		 */
		EASE_OUT_CUBIC = 6,
		/**
		 * cubic tweening, combining
		 *    %CLUTTER_EASE_IN_CUBIC and %CLUTTER_EASE_OUT_CUBIC
		 */
		EASE_IN_OUT_CUBIC = 7,
		/**
		 * quartic tweening
		 */
		EASE_IN_QUART = 8,
		/**
		 * quartic tweening, inverse of
		 *    %CLUTTER_EASE_IN_QUART
		 */
		EASE_OUT_QUART = 9,
		/**
		 * quartic tweening, combining
		 *    %CLUTTER_EASE_IN_QUART and %CLUTTER_EASE_OUT_QUART
		 */
		EASE_IN_OUT_QUART = 10,
		/**
		 * quintic tweening
		 */
		EASE_IN_QUINT = 11,
		/**
		 * quintic tweening, inverse of
		 *    %CLUTTER_EASE_IN_QUINT
		 */
		EASE_OUT_QUINT = 12,
		/**
		 * fifth power tweening, combining
		 *    %CLUTTER_EASE_IN_QUINT and %CLUTTER_EASE_OUT_QUINT
		 */
		EASE_IN_OUT_QUINT = 13,
		/**
		 * sinusoidal tweening
		 */
		EASE_IN_SINE = 14,
		/**
		 * sinusoidal tweening, inverse of
		 *    %CLUTTER_EASE_IN_SINE
		 */
		EASE_OUT_SINE = 15,
		/**
		 * sine wave tweening, combining
		 *    %CLUTTER_EASE_IN_SINE and %CLUTTER_EASE_OUT_SINE
		 */
		EASE_IN_OUT_SINE = 16,
		/**
		 * exponential tweening
		 */
		EASE_IN_EXPO = 17,
		/**
		 * exponential tweening, inverse of
		 *    %CLUTTER_EASE_IN_EXPO
		 */
		EASE_OUT_EXPO = 18,
		/**
		 * exponential tweening, combining
		 *    %CLUTTER_EASE_IN_EXPO and %CLUTTER_EASE_OUT_EXPO
		 */
		EASE_IN_OUT_EXPO = 19,
		/**
		 * circular tweening
		 */
		EASE_IN_CIRC = 20,
		/**
		 * circular tweening, inverse of
		 *    %CLUTTER_EASE_IN_CIRC
		 */
		EASE_OUT_CIRC = 21,
		/**
		 * circular tweening, combining
		 *    %CLUTTER_EASE_IN_CIRC and %CLUTTER_EASE_OUT_CIRC
		 */
		EASE_IN_OUT_CIRC = 22,
		/**
		 * elastic tweening, with offshoot on start
		 */
		EASE_IN_ELASTIC = 23,
		/**
		 * elastic tweening, with offshoot on end
		 */
		EASE_OUT_ELASTIC = 24,
		/**
		 * elastic tweening with offshoot on both ends
		 */
		EASE_IN_OUT_ELASTIC = 25,
		/**
		 * overshooting cubic tweening, with
		 *   backtracking on start
		 */
		EASE_IN_BACK = 26,
		/**
		 * overshooting cubic tweening, with
		 *   backtracking on end
		 */
		EASE_OUT_BACK = 27,
		/**
		 * overshooting cubic tweening, with
		 *   backtracking on both ends
		 */
		EASE_IN_OUT_BACK = 28,
		/**
		 * exponentially decaying parabolic (bounce)
		 *   tweening, with bounce on start
		 */
		EASE_IN_BOUNCE = 29,
		/**
		 * exponentially decaying parabolic (bounce)
		 *   tweening, with bounce on end
		 */
		EASE_OUT_BOUNCE = 30,
		/**
		 * exponentially decaying parabolic (bounce)
		 *   tweening, with bounce on both ends
		 */
		EASE_IN_OUT_BOUNCE = 31,
		/**
		 * parametrized step function; see {@link Clutter.Timeline.set_step_progress}
		 *   for further details. (Since 1.12)
		 */
		STEPS = 32,
		/**
		 * equivalent to %CLUTTER_STEPS with a number of steps
		 *   equal to 1, and a step mode of %CLUTTER_STEP_MODE_START. (Since 1.12)
		 */
		STEP_START = 33,
		/**
		 * equivalent to %CLUTTER_STEPS with a number of steps
		 *   equal to 1, and a step mode of %CLUTTER_STEP_MODE_END. (Since 1.12)
		 */
		STEP_END = 34,
		/**
		 * cubic bezier between (0, 0) and (1, 1) with two
		 *   control points; see {@link Clutter.Timeline.set_cubic_bezier_progress}. (Since 1.12)
		 */
		CUBIC_BEZIER = 35,
		/**
		 * equivalent to %CLUTTER_CUBIC_BEZIER with control points
		 *   in (0.25, 0.1) and (0.25, 1.0). (Since 1.12)
		 */
		EASE = 36,
		/**
		 * equivalent to %CLUTTER_CUBIC_BEZIER with control points
		 *   in (0.42, 0) and (1.0, 1.0). (Since 1.12)
		 */
		EASE_IN = 37,
		/**
		 * equivalent to %CLUTTER_CUBIC_BEZIER with control points
		 *   in (0, 0) and (0.58, 1.0). (Since 1.12)
		 */
		EASE_OUT = 38,
		/**
		 * equivalent to %CLUTTER_CUBIC_BEZIER with control points
		 *   in (0.42, 0) and (0.58, 1.0). (Since 1.12)
		 */
		EASE_IN_OUT = 39,
		/**
		 * last animation mode, used as a guard for
		 *   registered global alpha functions
		 */
		ANIMATION_LAST = 40
	}

	/**
	 * The alignment policies available on each axis for {@link BinLayout}
	 */
	enum BinAlignment {
		/**
		 * Fixed position alignment; the
		 *   {@link BinLayout} will honour the fixed position provided
		 *   by the actors themselves when allocating them
		 */
		FIXED = 0,
		/**
		 * Fill the allocation size
		 */
		FILL = 1,
		/**
		 * Position the actors at the top
		 *   or left side of the container, depending on the axis
		 */
		START = 2,
		/**
		 * Position the actors at the bottom
		 *   or right side of the container, depending on the axis
		 */
		END = 3,
		/**
		 * Position the actors at the
		 *   center of the container, depending on the axis
		 */
		CENTER = 4
	}

	/**
	 * Specifies which property should be used in a binding
	 */
	enum BindCoordinate {
		/**
		 * Bind the X coordinate
		 */
		X = 0,
		/**
		 * Bind the Y coordinate
		 */
		Y = 1,
		/**
		 * Bind the width
		 */
		WIDTH = 2,
		/**
		 * Bind the height
		 */
		HEIGHT = 3,
		/**
		 * Equivalent to to %CLUTTER_BIND_X and
		 *   %CLUTTER_BIND_Y (added in Clutter 1.6)
		 */
		POSITION = 4,
		/**
		 * Equivalent to %CLUTTER_BIND_WIDTH and
		 *   %CLUTTER_BIND_HEIGHT (added in Clutter 1.6)
		 */
		SIZE = 5,
		/**
		 * Equivalent to %CLUTTER_BIND_POSITION and
		 *   %CLUTTER_BIND_SIZE (added in Clutter 1.10)
		 */
		ALL = 6
	}

	/**
	 * The alignment policies available on each axis of the {@link BoxLayout}
	 */
	enum BoxAlignment {
		/**
		 * Align the child to the top or to
		 *   to the left, depending on the used axis
		 */
		START = 0,
		/**
		 * Align the child to the bottom or to
		 *   the right, depending on the used axis
		 */
		END = 1,
		/**
		 * Align the child to the center
		 */
		CENTER = 2
	}

	enum ButtonState {
		RELEASED = 0,
		PRESSED = 1
	}

	/**
	 * Controls the alignment of the {@link Content} inside a #ClutterActor.
	 */
	enum ContentGravity {
		/**
		 * Align the content to the top left corner
		 */
		TOP_LEFT = 0,
		/**
		 * Align the content to the top edge
		 */
		TOP = 1,
		/**
		 * Align the content to the top right corner
		 */
		TOP_RIGHT = 2,
		/**
		 * Align the content to the left edge
		 */
		LEFT = 3,
		/**
		 * Align the content to the center
		 */
		CENTER = 4,
		/**
		 * Align the content to the right edge
		 */
		RIGHT = 5,
		/**
		 * Align the content to the bottom left corner
		 */
		BOTTOM_LEFT = 6,
		/**
		 * Align the content to the bottom edge
		 */
		BOTTOM = 7,
		/**
		 * Align the content to the bottom right corner
		 */
		BOTTOM_RIGHT = 8,
		/**
		 * Resize the content to fill the allocation
		 */
		RESIZE_FILL = 9,
		/**
		 * Resize the content to remain within the
		 *   allocation, while maintaining the aspect ratio
		 */
		RESIZE_ASPECT = 10
	}

	/**
	 * The axis of the constraint that should be applied on the
	 * dragging action
	 */
	enum DragAxis {
		/**
		 * No constraint
		 */
		AXIS_NONE = 0,
		/**
		 * Set a constraint on the X axis
		 */
		X_AXIS = 1,
		/**
		 * Set a constraint on the Y axis
		 */
		Y_AXIS = 2
	}

	/**
	 * Types of events.
	 */
	enum EventType {
		/**
		 * Empty event
		 */
		NOTHING = 0,
		/**
		 * Key press event
		 */
		KEY_PRESS = 1,
		/**
		 * Key release event
		 */
		KEY_RELEASE = 2,
		/**
		 * Pointer motion event
		 */
		MOTION = 3,
		/**
		 * Actor enter event
		 */
		ENTER = 4,
		/**
		 * Actor leave event
		 */
		LEAVE = 5,
		/**
		 * Pointer button press event
		 */
		BUTTON_PRESS = 6,
		/**
		 * Pointer button release event
		 */
		BUTTON_RELEASE = 7,
		/**
		 * Pointer scroll event
		 */
		SCROLL = 8,
		/**
		 * Stage state change event
		 */
		STAGE_STATE = 9,
		/**
		 * Destroy notification event
		 */
		DESTROY_NOTIFY = 10,
		/**
		 * Client message event
		 */
		CLIENT_MESSAGE = 11,
		/**
		 * Stage delete event
		 */
		DELETE = 12,
		/**
		 * A new touch event sequence has started;
		 *   event added in 1.10
		 */
		TOUCH_BEGIN = 13,
		/**
		 * A touch event sequence has been updated;
		 *   event added in 1.10
		 */
		TOUCH_UPDATE = 14,
		/**
		 * A touch event sequence has finished;
		 *   event added in 1.10
		 */
		TOUCH_END = 15,
		/**
		 * A touch event sequence has been canceled;
		 *   event added in 1.10
		 */
		TOUCH_CANCEL = 16,
		/**
		 * A pinch gesture event, the current state is
		 *   determined by its phase field; event added in 1.24
		 */
		TOUCHPAD_PINCH = 17,
		/**
		 * A swipe gesture event, the current state is
		 *   determined by its phase field; event added in 1.24
		 */
		TOUCHPAD_SWIPE = 18,
		/**
		 * A tool entered in proximity to a tablet;
		 *   event added in 1.28
		 */
		PROXIMITY_IN = 19,
		/**
		 * A tool left from the proximity area of a tablet;
		 *   event added in 1.28
		 */
		PROXIMITY_OUT = 20,
		PAD_BUTTON_PRESS = 21,
		PAD_BUTTON_RELEASE = 22,
		PAD_STRIP = 23,
		PAD_RING = 24,
		IM_COMMIT = 25,
		IM_DELETE = 26,
		IM_PREEDIT = 27,
		DEVICE_ADDED = 28,
		DEVICE_REMOVED = 29,
		/**
		 * Marks the end of the {@link EventType} enumeration;
		 *   added in 1.10
		 */
		EVENT_LAST = 30
	}

	/**
	 * The direction of the arrangement of the children inside
	 * a {@link FlowLayout}
	 */
	enum FlowOrientation {
		/**
		 * Arrange the children of the flow layout
		 *   horizontally first
		 */
		HORIZONTAL = 0,
		/**
		 * Arrange the children of the flow layout
		 *   vertically first
		 */
		VERTICAL = 1
	}

	/**
	 * Enum passed to the {@link Clutter.GestureAction.set_threshold_trigger_edge}
	 * function.
	 */
	enum GestureTriggerEdge {
		/**
		 * Tell {@link GestureAction} that
		 * the gesture must begin immediately and there's no drag limit that
		 * will cause its cancellation;
		 */
		NONE = 0,
		/**
		 * Tell {@link GestureAction} that
		 * it needs to wait until the drag threshold has been exceeded before
		 * considering that the gesture has begun;
		 */
		AFTER = 1,
		/**
		 * Tell {@link GestureAction} that
		 * the gesture must begin immediately and that it must be cancelled
		 * once the drag exceed the configured threshold.
		 */
		BEFORE = 2
	}

	/**
	 * Gravity of the scaling operations. When a gravity different than
	 * %CLUTTER_GRAVITY_NONE is used, an actor is scaled keeping the position
	 * of the specified portion at the same coordinates.
	 */
	enum Gravity {
		/**
		 * Do not apply any gravity
		 */
		NONE = 0,
		/**
		 * Scale from topmost downwards
		 */
		NORTH = 1,
		/**
		 * Scale from the top right corner
		 */
		NORTH_EAST = 2,
		/**
		 * Scale from the right side
		 */
		EAST = 3,
		/**
		 * Scale from the bottom right corner
		 */
		SOUTH_EAST = 4,
		/**
		 * Scale from the bottom upwards
		 */
		SOUTH = 5,
		/**
		 * Scale from the bottom left corner
		 */
		SOUTH_WEST = 6,
		/**
		 * Scale from the left side
		 */
		WEST = 7,
		/**
		 * Scale from the top left corner
		 */
		NORTH_WEST = 8,
		/**
		 * Scale from the center.
		 */
		CENTER = 9
	}

	/**
	 * Grid position modes.
	 */
	enum GridPosition {
		/**
		 * left position
		 */
		LEFT = 0,
		/**
		 * right position
		 */
		RIGHT = 1,
		/**
		 * top position
		 */
		TOP = 2,
		/**
		 * bottom position
		 */
		BOTTOM = 3
	}

	/**
	 * Error enumeration for {@link Image}.
	 */
	enum ImageError {
		/**
		 * Invalid data passed to the
		 *   {@link Clutter.Image.set_data} function.
		 */
		DATA = 0
	}

	/**
	 * Error conditions returned by clutter_init() and clutter_init_with_args().
	 */
	enum InitError {
		/**
		 * Initialisation successful
		 */
		SUCCESS = 1,
		/**
		 * Unknown error
		 */
		ERROR_UNKNOWN = 0,
		/**
		 * Thread initialisation failed
		 */
		ERROR_THREADS = -1,
		/**
		 * Backend initialisation failed
		 */
		ERROR_BACKEND = -2,
		/**
		 * Internal error
		 */
		ERROR_INTERNAL = -3
	}

	/**
	 * The type of axes Clutter recognizes on a {@link InputDevice}
	 */
	enum InputAxis {
		/**
		 * Unused axis
		 */
		IGNORE = 0,
		/**
		 * The position on the X axis
		 */
		X = 1,
		/**
		 * The position of the Y axis
		 */
		Y = 2,
		/**
		 * The pressure information
		 */
		PRESSURE = 3,
		/**
		 * The tilt on the X axis
		 */
		XTILT = 4,
		/**
		 * The tile on the Y axis
		 */
		YTILT = 5,
		/**
		 * A wheel
		 */
		WHEEL = 6,
		/**
		 * Distance (Since 1.12)
		 */
		DISTANCE = 7,
		/**
		 * Rotation along the z-axis (Since 1.28)
		 */
		ROTATION = 8,
		/**
		 * A slider (Since 1.28)
		 */
		SLIDER = 9,
		/**
		 * Last value of the enumeration; this value is
		 *   useful when iterating over the enumeration values (Since 1.12)
		 */
		LAST = 10
	}

	enum InputContentPurpose {
		NORMAL = 0,
		ALPHA = 1,
		DIGITS = 2,
		NUMBER = 3,
		PHONE = 4,
		URL = 5,
		EMAIL = 6,
		NAME = 7,
		PASSWORD = 8,
		DATE = 9,
		TIME = 10,
		DATETIME = 11,
		TERMINAL = 12
	}

	enum InputDeviceMapping {
		ABSOLUTE = 0,
		RELATIVE = 1
	}

	enum InputDevicePadSource {
		UNKNOWN = 0,
		FINGER = 1
	}

	/**
	 * Defines the type of tool that a {@link InputDeviceTool} represents.
	 */
	enum InputDeviceToolType {
		/**
		 * No tool
		 */
		NONE = 0,
		/**
		 * The tool is a pen
		 */
		PEN = 1,
		/**
		 * The tool is an eraser
		 */
		ERASER = 2,
		/**
		 * The tool is a brush
		 */
		BRUSH = 3,
		/**
		 * The tool is a pencil
		 */
		PENCIL = 4,
		/**
		 * The tool is an airbrush
		 */
		AIRBRUSH = 5,
		/**
		 * The tool is a mouse
		 */
		MOUSE = 6,
		/**
		 * The tool is a lens
		 */
		LENS = 7
	}

	/**
	 * The types of input devices available.
	 * 
	 * The {@link InputDeviceType} enumeration can be extended at later
	 * date; not every platform supports every input device type.
	 */
	enum InputDeviceType {
		/**
		 * A pointer device
		 */
		POINTER_DEVICE = 0,
		/**
		 * A keyboard device
		 */
		KEYBOARD_DEVICE = 1,
		/**
		 * A generic extension device
		 */
		EXTENSION_DEVICE = 2,
		/**
		 * A joystick device
		 */
		JOYSTICK_DEVICE = 3,
		/**
		 * A tablet device
		 */
		TABLET_DEVICE = 4,
		/**
		 * A touchpad device
		 */
		TOUCHPAD_DEVICE = 5,
		/**
		 * A touch screen device
		 */
		TOUCHSCREEN_DEVICE = 6,
		/**
		 * A pen device
		 */
		PEN_DEVICE = 7,
		/**
		 * An eraser device
		 */
		ERASER_DEVICE = 8,
		/**
		 * A cursor device
		 */
		CURSOR_DEVICE = 9,
		/**
		 * A tablet pad
		 */
		PAD_DEVICE = 10,
		/**
		 * The number of device types
		 */
		N_DEVICE_TYPES = 11
	}

	/**
	 * The mode for input devices available.
	 */
	enum InputMode {
		/**
		 * A master, virtual device
		 */
		MASTER = 0,
		/**
		 * A slave, physical device, attached to
		 *   a master device
		 */
		SLAVE = 1,
		/**
		 * A slave, physical device, not attached
		 *   to a master device
		 */
		FLOATING = 2
	}

	enum InputPanelState {
		OFF = 0,
		ON = 1,
		TOGGLE = 2
	}

	/**
	 * The mode of interpolation between key frames
	 */
	enum Interpolation {
		/**
		 * linear interpolation
		 */
		LINEAR = 0,
		/**
		 * cubic interpolation
		 */
		CUBIC = 1
	}

	enum KeyState {
		RELEASED = 0,
		PRESSED = 1
	}

	/**
	 * The states for the {@link ClickAction.long_press} signal.
	 */
	enum LongPressState {
		/**
		 * Queries the action whether it supports
		 *   long presses
		 */
		QUERY = 0,
		/**
		 * Activates the action on a long press
		 */
		ACTIVATE = 1,
		/**
		 * The long press was cancelled
		 */
		CANCEL = 2
	}

	/**
	 * Represents the orientation of actors or layout managers.
	 */
	enum Orientation {
		/**
		 * An horizontal orientation
		 */
		HORIZONTAL = 0,
		/**
		 * A vertical orientation
		 */
		VERTICAL = 1
	}

	/**
	 * The axis of the constraint that should be applied on the
	 * panning action
	 */
	enum PanAxis {
		/**
		 * No constraint
		 */
		AXIS_NONE = 0,
		/**
		 * Set a constraint on the X axis
		 */
		X_AXIS = 1,
		/**
		 * Set a constraint on the Y axis
		 */
		Y_AXIS = 2,
		/**
		 * Constrain panning automatically based on initial
		 *   movement (available since 1.24)
		 */
		AXIS_AUTO = 3
	}

	/**
	 * Types of nodes in a {@link Path}.
	 */
	enum PathNodeType {
		/**
		 * jump to the given position
		 */
		MOVE_TO = 0,
		/**
		 * create a line from the last node to the
		 *   given position
		 */
		LINE_TO = 1,
		/**
		 * bezier curve using the last position and
		 *   three control points.
		 */
		CURVE_TO = 2,
		/**
		 * create a line from the last node to the last
		 *   %CLUTTER_PATH_MOVE_TO node.
		 */
		CLOSE = 3,
		/**
		 * same as %CLUTTER_PATH_MOVE_TO but with
		 *   coordinates relative to the last node.
		 */
		REL_MOVE_TO = 32,
		/**
		 * same as %CLUTTER_PATH_LINE_TO but with
		 *   coordinates relative to the last node.
		 */
		REL_LINE_TO = 33,
		/**
		 * same as %CLUTTER_PATH_CURVE_TO but with
		 *   coordinates relative to the last node.
		 */
		REL_CURVE_TO = 34
	}

	/**
	 * Controls the paint cycle of the scene graph when in pick mode
	 */
	enum PickMode {
		/**
		 * Do not paint any actor
		 */
		NONE = 0,
		/**
		 * Paint only the reactive actors
		 */
		REACTIVE = 1,
		/**
		 * Paint all actors
		 */
		ALL = 2
	}

	/**
	 * Dwell click types.
	 */
	enum PointerA11yDwellClickType {
		/**
		 * Internal use only
		 */
		NONE = 0,
		PRIMARY = 1,
		SECONDARY = 2,
		MIDDLE = 3,
		DOUBLE = 4,
		DRAG = 5
	}

	/**
	 * Dwell gesture directions.
	 */
	enum PointerA11yDwellDirection {
		NONE = 0,
		LEFT = 1,
		RIGHT = 2,
		UP = 3,
		DOWN = 4
	}

	/**
	 * Dwell mode.
	 */
	enum PointerA11yDwellMode {
		WINDOW = 0,
		GESTURE = 1
	}

	/**
	 * Pointer accessibility timeout type.
	 */
	enum PointerA11yTimeoutType {
		SECONDARY_CLICK = 0,
		DWELL = 1,
		GESTURE = 2
	}

	/**
	 * Specifies the type of requests for a {@link Actor}.
	 */
	enum RequestMode {
		/**
		 * Height for width requests
		 */
		HEIGHT_FOR_WIDTH = 0,
		/**
		 * Width for height requests
		 */
		WIDTH_FOR_HEIGHT = 1,
		/**
		 * Use the preferred size of the
		 *   {@link Content}, if it has any (available since 1.22)
		 */
		CONTENT_SIZE = 2
	}

	/**
	 * Axis of a rotation.
	 */
	enum RotateAxis {
		/**
		 * Rotate around the X axis
		 */
		X_AXIS = 0,
		/**
		 * Rotate around the Y axis
		 */
		Y_AXIS = 1,
		/**
		 * Rotate around the Z axis
		 */
		Z_AXIS = 2
	}

	/**
	 * Direction of a rotation.
	 */
	enum RotateDirection {
		/**
		 * Clockwise rotation
		 */
		CW = 0,
		/**
		 * Counter-clockwise rotation
		 */
		CCW = 1
	}

	/**
	 * The scaling filters to be used with the {@link Actor.minification_filter}
	 * and #ClutterActor:magnification-filter properties.
	 */
	enum ScalingFilter {
		/**
		 * Linear interpolation filter
		 */
		LINEAR = 0,
		/**
		 * Nearest neighbor interpolation filter
		 */
		NEAREST = 1,
		/**
		 * Trilinear minification filter, with
		 *   mipmap generation; this filter linearly interpolates on every axis,
		 *   as well as between mipmap levels.
		 */
		TRILINEAR = 2
	}

	/**
	 * {@link Script} error enumeration.
	 */
	enum ScriptError {
		/**
		 * Type function not found
		 *   or invalid
		 */
		TYPE_FUNCTION = 0,
		/**
		 * Property not found or invalid
		 */
		PROPERTY = 1,
		/**
		 * Invalid value
		 */
		VALUE = 2
	}

	/**
	 * Direction of a pointer scroll event.
	 * 
	 * The %CLUTTER_SCROLL_SMOOTH value implies that the {@link ScrollEvent}
	 * has precise scrolling delta information.
	 */
	enum ScrollDirection {
		/**
		 * Scroll up
		 */
		UP = 0,
		/**
		 * Scroll down
		 */
		DOWN = 1,
		/**
		 * Scroll left
		 */
		LEFT = 2,
		/**
		 * Scroll right
		 */
		RIGHT = 3,
		/**
		 * Precise scrolling delta (available in 1.10)
		 */
		SMOOTH = 4
	}

	/**
	 * The scroll source determines the source of the scroll event. Keep in mind
	 * that the source device {@link InputDeviceType} is not enough to infer
	 * the scroll source.
	 */
	enum ScrollSource {
		/**
		 * Source of scroll events is unknown.
		 */
		UNKNOWN = 0,
		/**
		 * The scroll event is originated by a mouse wheel.
		 */
		WHEEL = 1,
		/**
		 * The scroll event is originated by one or more
		 *   fingers on the device (eg. touchpads).
		 */
		FINGER = 2,
		/**
		 * The scroll event is originated by the
		 *   motion of some device (eg. a scroll button is set).
		 */
		CONTINUOUS = 3
	}

	/**
	 * The type of GLSL shader program
	 */
	enum ShaderType {
		/**
		 * a vertex shader
		 */
		VERTEX_SHADER = 0,
		/**
		 * a fragment shader
		 */
		FRAGMENT_SHADER = 1
	}

	/**
	 * The edge to snap
	 */
	enum SnapEdge {
		/**
		 * the top edge
		 */
		TOP = 0,
		/**
		 * the right edge
		 */
		RIGHT = 1,
		/**
		 * the bottom edge
		 */
		BOTTOM = 2,
		/**
		 * the left edge
		 */
		LEFT = 3
	}

	/**
	 * Named colors, for accessing global colors defined by Clutter
	 */
	enum StaticColor {
		/**
		 * White color (ffffffff)
		 */
		WHITE = 0,
		/**
		 * Black color (000000ff)
		 */
		BLACK = 1,
		/**
		 * Red color (ff0000ff)
		 */
		RED = 2,
		/**
		 * Dark red color (800000ff)
		 */
		DARK_RED = 3,
		/**
		 * Green color (00ff00ff)
		 */
		GREEN = 4,
		/**
		 * Dark green color (008000ff)
		 */
		DARK_GREEN = 5,
		/**
		 * Blue color (0000ffff)
		 */
		BLUE = 6,
		/**
		 * Dark blue color (000080ff)
		 */
		DARK_BLUE = 7,
		/**
		 * Cyan color (00ffffff)
		 */
		CYAN = 8,
		/**
		 * Dark cyan color (008080ff)
		 */
		DARK_CYAN = 9,
		/**
		 * Magenta color (ff00ffff)
		 */
		MAGENTA = 10,
		/**
		 * Dark magenta color (800080ff)
		 */
		DARK_MAGENTA = 11,
		/**
		 * Yellow color (ffff00ff)
		 */
		YELLOW = 12,
		/**
		 * Dark yellow color (808000ff)
		 */
		DARK_YELLOW = 13,
		/**
		 * Gray color (a0a0a4ff)
		 */
		GRAY = 14,
		/**
		 * Dark Gray color (808080ff)
		 */
		DARK_GRAY = 15,
		/**
		 * Light gray color (c0c0c0ff)
		 */
		LIGHT_GRAY = 16,
		/**
		 * Butter color (edd400ff)
		 */
		BUTTER = 17,
		/**
		 * Light butter color (fce94fff)
		 */
		BUTTER_LIGHT = 18,
		/**
		 * Dark butter color (c4a000ff)
		 */
		BUTTER_DARK = 19,
		/**
		 * Orange color (f57900ff)
		 */
		ORANGE = 20,
		/**
		 * Light orange color (fcaf3fff)
		 */
		ORANGE_LIGHT = 21,
		/**
		 * Dark orange color (ce5c00ff)
		 */
		ORANGE_DARK = 22,
		/**
		 * Chocolate color (c17d11ff)
		 */
		CHOCOLATE = 23,
		/**
		 * Light chocolate color (e9b96eff)
		 */
		CHOCOLATE_LIGHT = 24,
		/**
		 * Dark chocolate color (8f5902ff)
		 */
		CHOCOLATE_DARK = 25,
		/**
		 * Chameleon color (73d216ff)
		 */
		CHAMELEON = 26,
		/**
		 * Light chameleon color (8ae234ff)
		 */
		CHAMELEON_LIGHT = 27,
		/**
		 * Dark chameleon color (4e9a06ff)
		 */
		CHAMELEON_DARK = 28,
		/**
		 * Sky color (3465a4ff)
		 */
		SKY_BLUE = 29,
		/**
		 * Light sky color (729fcfff)
		 */
		SKY_BLUE_LIGHT = 30,
		/**
		 * Dark sky color (204a87ff)
		 */
		SKY_BLUE_DARK = 31,
		/**
		 * Plum color (75507bff)
		 */
		PLUM = 32,
		/**
		 * Light plum color (ad7fa8ff)
		 */
		PLUM_LIGHT = 33,
		/**
		 * Dark plum color (5c3566ff)
		 */
		PLUM_DARK = 34,
		/**
		 * Scarlet red color (cc0000ff)
		 */
		SCARLET_RED = 35,
		/**
		 * Light scarlet red color (ef2929ff)
		 */
		SCARLET_RED_LIGHT = 36,
		/**
		 * Dark scarlet red color (a40000ff)
		 */
		SCARLET_RED_DARK = 37,
		/**
		 * Aluminium, first variant (eeeeecff)
		 */
		ALUMINIUM_1 = 38,
		/**
		 * Aluminium, second variant (d3d7cfff)
		 */
		ALUMINIUM_2 = 39,
		/**
		 * Aluminium, third variant (babdb6ff)
		 */
		ALUMINIUM_3 = 40,
		/**
		 * Aluminium, fourth variant (888a85ff)
		 */
		ALUMINIUM_4 = 41,
		/**
		 * Aluminium, fifth variant (555753ff)
		 */
		ALUMINIUM_5 = 42,
		/**
		 * Aluminium, sixth variant (2e3436ff)
		 */
		ALUMINIUM_6 = 43,
		/**
		 * Transparent color (00000000)
		 */
		TRANSPARENT = 44
	}

	/**
	 * Change the value transition of a step function.
	 * 
	 * See {@link Clutter.Timeline.set_step_progress}.
	 */
	enum StepMode {
		/**
		 * The change in the value of a
		 *   %CLUTTER_STEP progress mode should occur at the start of
		 *   the transition
		 */
		START = 0,
		/**
		 * The change in the value of a
		 *   %CLUTTER_STEP progress mode should occur at the end of
		 *   the transition
		 */
		END = 1
	}

	/**
	 * The text direction to be used by {@link Actor}<!-- -->s
	 */
	enum TextDirection {
		/**
		 * Use the default setting, as returned
		 *   by {@link Clutter.get.default_text_direction}
		 */
		DEFAULT = 0,
		/**
		 * Use left-to-right text direction
		 */
		LTR = 1,
		/**
		 * Use right-to-left text direction
		 */
		RTL = 2
	}

	/**
	 * Enumaration controlling the texture quality.
	 */
	enum TextureQuality {
		/**
		 * fastest rendering will use nearest neighbour
		 *   interpolation when rendering. good setting.
		 */
		LOW = 0,
		/**
		 * higher quality rendering without using
		 *   extra resources.
		 */
		MEDIUM = 1,
		/**
		 * render the texture with the best quality
		 *   available using extra memory.
		 */
		HIGH = 2
	}

	/**
	 * The direction of a {@link Timeline}
	 */
	enum TimelineDirection {
		/**
		 * forward direction for a timeline
		 */
		FORWARD = 0,
		/**
		 * backward direction for a timeline
		 */
		BACKWARD = 1
	}

	/**
	 * The phase of a touchpad gesture event. All gestures are guaranteed to
	 * begin with an event of type %CLUTTER_TOUCHPAD_GESTURE_PHASE_BEGIN,
	 * followed by a number of %CLUTTER_TOUCHPAD_GESTURE_PHASE_UPDATE (possibly 0).
	 * 
	 * A finished gesture may have 2 possible outcomes, an event with phase
	 * %CLUTTER_TOUCHPAD_GESTURE_PHASE_END will be emitted when the gesture is
	 * considered successful, this should be used as the hint to perform any
	 * permanent changes.
	 * 
	 * Cancelled gestures may be so for a variety of reasons, due to hardware,
	 * or due to the gesture recognition layers hinting the gesture did not
	 * finish resolutely (eg. a 3rd finger being added during a pinch gesture).
	 * In these cases, the last event with report the phase
	 * %CLUTTER_TOUCHPAD_GESTURE_PHASE_CANCEL, this should be used as a hint
	 * to undo any visible/permanent changes that were done throughout the
	 * progress of the gesture.
	 * 
	 * See also {@link TouchpadPinchEvent} and #ClutterTouchpadPinchEvent.
	 */
	enum TouchpadGesturePhase {
		/**
		 * The gesture has begun.
		 */
		BEGIN = 0,
		/**
		 * The gesture has been updated.
		 */
		UPDATE = 1,
		/**
		 * The gesture was finished, changes
		 *   should be permanently applied.
		 */
		END = 2,
		/**
		 * The gesture was cancelled, all
		 *   changes should be undone.
		 */
		CANCEL = 3
	}

	/**
	 * The type of unit in which a value is expressed
	 * 
	 * This enumeration might be expanded at later date
	 */
	enum UnitType {
		/**
		 * Unit expressed in pixels (with subpixel precision)
		 */
		PIXEL = 0,
		/**
		 * Unit expressed in em
		 */
		EM = 1,
		/**
		 * Unit expressed in millimeters
		 */
		MM = 2,
		/**
		 * Unit expressed in points
		 */
		POINT = 3,
		/**
		 * Unit expressed in centimeters
		 */
		CM = 4
	}

	/**
	 * The axis of the constraint that should be applied by the
	 * zooming action.
	 */
	enum ZoomAxis {
		/**
		 * Scale only on the X axis
		 */
		X_AXIS = 0,
		/**
		 * Scale only on the Y axis
		 */
		Y_AXIS = 1,
		/**
		 * Scale on both axis
		 */
		BOTH = 2
	}

	/**
	 * Flags used to signal the state of an actor.
	 */
	enum ActorFlags {
		/**
		 * the actor will be painted (is visible, and inside
		 *   a toplevel, and all parents visible)
		 */
		MAPPED = 2,
		/**
		 * the resources associated to the actor have been
		 *   allocated
		 */
		REALIZED = 4,
		/**
		 * the actor 'reacts' to mouse events emmitting event
		 *   signals
		 */
		REACTIVE = 8,
		/**
		 * the actor has been shown by the application program
		 */
		VISIBLE = 16,
		/**
		 * the actor provides an explicit layout management
		 *   policy for its children; this flag will prevent Clutter from automatic
		 *   queueing of relayout and will defer all layouting to the actor itself
		 */
		NO_LAYOUT = 32
	}

	/**
	 * Flags passed to the {@link ActorClass}.allocate() virtual function
	 * and to the clutter_actor_allocate() function.
	 */
	enum AllocationFlags {
		/**
		 * No flag set
		 */
		ALLOCATION_NONE = 0,
		/**
		 * Whether the absolute origin of the
		 *   actor has changed; this implies that any ancestor of the actor has
		 *   been moved.
		 */
		ABSOLUTE_ORIGIN_CHANGED = 2,
		/**
		 * Whether the allocation should be delegated
		 *   to the {@link LayoutManager} instance stored inside the
		 *   #ClutterActor:layout-manager property of #ClutterActor. This flag
		 *   should only be used if you are subclassing #ClutterActor and
		 *   overriding the #ClutterActorClass.allocate() virtual function, but
		 *   you wish to use the default implementation of the virtual function
		 *   inside #ClutterActor. Added in Clutter 1.10.
		 */
		DELEGATE_LAYOUT = 4
	}

	/**
	 * Content repeat modes.
	 */
	enum ContentRepeat {
		/**
		 * No repeat
		 */
		NONE = 0,
		/**
		 * Repeat the content on the X axis
		 */
		X_AXIS = 1,
		/**
		 * Repeat the content on the Y axis
		 */
		Y_AXIS = 2,
		/**
		 * Repeat the content on both axis
		 */
		BOTH = 3
	}

	enum DebugFlag {
		MISC = 1,
		ACTOR = 2,
		TEXTURE = 4,
		EVENT = 8,
		PAINT = 16,
		PANGO = 32,
		BACKEND = 64,
		SCHEDULER = 128,
		SCRIPT = 256,
		SHADER = 512,
		MULTISTAGE = 1024,
		ANIMATION = 2048,
		LAYOUT = 4096,
		PICK = 8192,
		EVENTLOOP = 16384,
		CLIPPING = 32768,
		OOB_TRANSFORMS = 65536
	}

	enum DrawDebugFlag {
		DISABLE_SWAP_EVENTS = 1,
		DISABLE_CLIPPED_REDRAWS = 2,
		REDRAWS = 4,
		PAINT_VOLUMES = 8,
		DISABLE_CULLING = 16,
		DISABLE_OFFSCREEN_REDIRECT = 32,
		CONTINUOUS_REDRAW = 64,
		PAINT_DEFORM_TILES = 128,
		PAINT_DAMAGE_REGION = 256
	}

	/**
	 * Flags passed to the ‘paint’ or ‘pick’ method of {@link Effect}.
	 */
	enum EffectPaintFlags {
		/**
		 * The actor or one of its children
		 *   has queued a redraw before this paint. This implies that the effect
		 *   should call {@link Clutter.Actor.continue_paint} to chain to the next
		 *   effect and can not cache any results from a previous paint.
		 */
		ACTOR_DIRTY = 1,
		/**
		 * The effect should not be used
		 *   on this frame, but it will be asked to paint the actor still.
		 */
		BYPASS_EFFECT = 2
	}

	/**
	 * Flags for the {@link Event}
	 */
	enum EventFlags {
		/**
		 * No flag set
		 */
		NONE = 0,
		/**
		 * Synthetic event
		 */
		FLAG_SYNTHETIC = 1,
		FLAG_INPUT_METHOD = 2,
		/**
		 * Auto-repeated event
		 */
		FLAG_REPEATED = 4
	}

	/**
	 * Runtime flags indicating specific features available via Clutter window
	 * system and graphics backend.
	 */
	enum FeatureFlags {
		/**
		 * Set if backend throttles buffer swaps.
		 */
		SWAP_THROTTLE = 8,
		/**
		 * Set if stage size if fixed (i.e framebuffer)
		 */
		STAGE_STATIC = 64,
		/**
		 * Set if stage has a graphical cursor.
		 */
		STAGE_CURSOR = 256,
		/**
		 * Set if the backend supports GLSL shaders.
		 */
		SHADERS_GLSL = 512,
		/**
		 * Set if the backend supports offscreen rendering.
		 */
		OFFSCREEN = 1024,
		/**
		 * Set if multiple stages are supported.
		 */
		STAGE_MULTIPLE = 2048,
		/**
		 * Set if the GLX_INTEL_swap_event is supported.
		 */
		SWAP_EVENTS = 4096
	}

	enum InputContentHintFlags {
		COMPLETION = 1,
		SPELLCHECK = 2,
		AUTO_CAPITALIZATION = 4,
		LOWERCASE = 8,
		UPPERCASE = 16,
		TITLECASE = 32,
		HIDDEN_TEXT = 64,
		SENSITIVE_DATA = 128,
		LATIN = 256,
		MULTILINE = 512
	}

	/**
	 * Keyboard accessibility features applied to a ClutterInputDevice keyboard.
	 */
	enum KeyboardA11yFlags {
		KEYBOARD_ENABLED = 1,
		TIMEOUT_ENABLED = 2,
		MOUSE_KEYS_ENABLED = 4,
		SLOW_KEYS_ENABLED = 8,
		SLOW_KEYS_BEEP_PRESS = 16,
		SLOW_KEYS_BEEP_ACCEPT = 32,
		SLOW_KEYS_BEEP_REJECT = 64,
		BOUNCE_KEYS_ENABLED = 128,
		BOUNCE_KEYS_BEEP_REJECT = 256,
		TOGGLE_KEYS_ENABLED = 512,
		STICKY_KEYS_ENABLED = 1024,
		STICKY_KEYS_TWO_KEY_OFF = 2048,
		STICKY_KEYS_BEEP = 4096,
		FEATURE_STATE_CHANGE_BEEP = 8192
	}

	/**
	 * Masks applied to a {@link Event} by modifiers.
	 * 
	 * Note that Clutter may add internal values to events which include
	 * reserved values such as %CLUTTER_MODIFIER_RESERVED_13_MASK.  Your code
	 * should preserve and ignore them.  You can use %CLUTTER_MODIFIER_MASK to
	 * remove all reserved values.
	 */
	enum ModifierType {
		/**
		 * Mask applied by the Shift key
		 */
		SHIFT_MASK = 1,
		/**
		 * Mask applied by the Caps Lock key
		 */
		LOCK_MASK = 2,
		/**
		 * Mask applied by the Control key
		 */
		CONTROL_MASK = 4,
		/**
		 * Mask applied by the first Mod key
		 */
		MOD1_MASK = 8,
		/**
		 * Mask applied by the second Mod key
		 */
		MOD2_MASK = 16,
		/**
		 * Mask applied by the third Mod key
		 */
		MOD3_MASK = 32,
		/**
		 * Mask applied by the fourth Mod key
		 */
		MOD4_MASK = 64,
		/**
		 * Mask applied by the fifth Mod key
		 */
		MOD5_MASK = 128,
		/**
		 * Mask applied by the first pointer button
		 */
		BUTTON1_MASK = 256,
		/**
		 * Mask applied by the second pointer button
		 */
		BUTTON2_MASK = 512,
		/**
		 * Mask applied by the third pointer button
		 */
		BUTTON3_MASK = 1024,
		/**
		 * Mask applied by the fourth pointer button
		 */
		BUTTON4_MASK = 2048,
		/**
		 * Mask applied by the fifth pointer button
		 */
		BUTTON5_MASK = 4096,
		MODIFIER_RESERVED_13_MASK = 8192,
		MODIFIER_RESERVED_14_MASK = 16384,
		MODIFIER_RESERVED_15_MASK = 32768,
		MODIFIER_RESERVED_16_MASK = 65536,
		MODIFIER_RESERVED_17_MASK = 131072,
		MODIFIER_RESERVED_18_MASK = 262144,
		MODIFIER_RESERVED_19_MASK = 524288,
		MODIFIER_RESERVED_20_MASK = 1048576,
		MODIFIER_RESERVED_21_MASK = 2097152,
		MODIFIER_RESERVED_22_MASK = 4194304,
		MODIFIER_RESERVED_23_MASK = 8388608,
		MODIFIER_RESERVED_24_MASK = 16777216,
		MODIFIER_RESERVED_25_MASK = 33554432,
		/**
		 * Mask applied by the Super key
		 */
		SUPER_MASK = 67108864,
		/**
		 * Mask applied by the Hyper key
		 */
		HYPER_MASK = 134217728,
		/**
		 * Mask applied by the Meta key
		 */
		META_MASK = 268435456,
		MODIFIER_RESERVED_29_MASK = 536870912,
		/**
		 * Mask applied during release
		 */
		RELEASE_MASK = 1073741824,
		/**
		 * A mask covering all modifier types
		 */
		MODIFIER_MASK = 1543512063
	}

	/**
	 * Possible flags to pass to {@link Clutter.Actor.set_offscreen_redirect}.
	 */
	enum OffscreenRedirect {
		/**
		 * Only redirect
		 *   the actor if it is semi-transparent and its {@link Has.overlaps}
		 *   virtual returns %TRUE.
		 */
		AUTOMATIC_FOR_OPACITY = 1,
		/**
		 * Always redirect the actor to an
		 *   offscreen buffer even if it is fully opaque.
		 */
		ALWAYS = 2,
		/**
		 * Only redirect the actor if it is the
		 *   most efficient thing to do based on its recent repaint behaviour. That
		 *   means when its contents are changing less frequently than it's being used
		 *   on stage.
		 */
		ON_IDLE = 4
	}

	enum PickDebugFlag {
		PICKING = 1
	}

	/**
	 * Pointer accessibility features applied to a ClutterInputDevice pointer.
	 */
	enum PointerA11yFlags {
		SECONDARY_CLICK_ENABLED = 1,
		DWELL_ENABLED = 2
	}

	/**
	 * Flags to pass to {@link Clutter.threads.add_repaint_func_full}.
	 */
	enum RepaintFlags {
		/**
		 * Run the repaint function prior to
		 *   painting the stages
		 */
		PRE_PAINT = 1,
		/**
		 * Run the repaint function after
		 *   painting the stages
		 */
		POST_PAINT = 2,
		/**
		 * Ensure that a new frame
		 *   is queued after adding the repaint function
		 */
		QUEUE_REDRAW_ON_ADD = 4
	}

	/**
	 * Flags used to notify the axes that were stopped in a {@link ScrollEvent}.
	 * These can be used to trigger post-scroll effects like kinetic scrolling.
	 */
	enum ScrollFinishFlags {
		/**
		 * no axis was stopped.
		 */
		NONE = 0,
		/**
		 * The horizontal axis stopped.
		 */
		HORIZONTAL = 1,
		/**
		 * The vertical axis stopped.
		 */
		VERTICAL = 2
	}

	/**
	 * Scroll modes.
	 */
	enum ScrollMode {
		/**
		 * Ignore scrolling
		 */
		NONE = 0,
		/**
		 * Scroll only horizontally
		 */
		HORIZONTALLY = 1,
		/**
		 * Scroll only vertically
		 */
		VERTICALLY = 2,
		/**
		 * Scroll in both directions
		 */
		BOTH = 3
	}

	/**
	 * Stage state masks, used by the {@link Event} of type %CLUTTER_STAGE_STATE.
	 */
	enum StageState {
		/**
		 * Activated mask
		 */
		ACTIVATED = 8
	}

	/**
	 * The main direction of the swipe gesture
	 */
	enum SwipeDirection {
		/**
		 * Upwards swipe gesture
		 */
		UP = 1,
		/**
		 * Downwards swipe gesture
		 */
		DOWN = 2,
		/**
		 * Leftwards swipe gesture
		 */
		LEFT = 4,
		/**
		 * Rightwards swipe gesture
		 */
		RIGHT = 8
	}

	/**
	 * Flags for {@link Clutter.Texture.set_from_rgb_data}.
	 */
	enum TextureFlags {
		/**
		 * No flags
		 */
		NONE = 0,
		/**
		 * Unused flag
		 */
		RGB_FLAG_BGR = 2,
		/**
		 * Unused flag
		 */
		RGB_FLAG_PREMULT = 4,
		/**
		 * Unused flag
		 */
		YUV_FLAG_YUV2 = 8
	}

	enum VirtualDeviceType {
		NONE = 0,
		KEYBOARD = 1,
		POINTER = 2,
		TOUCHSCREEN = 4
	}

	/**
	 * Creates a {@link Actor} using the #item in the model.
	 * 
	 * The usual way to implement this function is to create a #ClutterActor
	 * instance and then bind the #GObject properties to the actor properties
	 * of interest, using {@link GObject.Object.bind_property}. This way, when the #item
	 * in the #GListModel changes, the #ClutterActor changes as well.
	 */
	interface ActorCreateChildFunc {
		/**
		 * Creates a {@link Actor} using the #item in the model.
		 * 
		 * The usual way to implement this function is to create a #ClutterActor
		 * instance and then bind the #GObject properties to the actor properties
		 * of interest, using {@link GObject.Object.bind_property}. This way, when the #item
		 * in the #GListModel changes, the #ClutterActor changes as well.
		 * @param item the item in the model
		 * @returns The newly created child {@link Actor}
		 */
		(item: GObject.Object): Actor;
	}

	/**
	 * A function returning a value depending on the position of
	 * the {@link Timeline} bound to #alpha.
	 */
	interface AlphaFunc {
		/**
		 * @deprecated
		 * Use {@link TimelineProgressFunc} instead.
		 * 
		 * A function returning a value depending on the position of
		 * the {@link Timeline} bound to #alpha.
		 * @param alpha a {@link Alpha}
		 * @returns a floating point value
		 */
		(alpha: Alpha): number;
	}

	/**
	 * The prototype for the callback function registered with
	 * {@link Clutter.BindingPool.install_action} and invoked by
	 * clutter_binding_pool_activate().
	 */
	interface BindingActionFunc {
		/**
		 * The prototype for the callback function registered with
		 * {@link Clutter.BindingPool.install_action} and invoked by
		 * clutter_binding_pool_activate().
		 * @param gobject a #GObject
		 * @param action_name the name of the action
		 * @param key_val the key symbol
		 * @param modifiers bitmask of the modifier flags
		 * @returns the function should return %TRUE if the key
		 *   binding has been handled, and return %FALSE otherwise
		 */
		(gobject: GObject.Object, action_name: string, key_val: number, modifiers: ModifierType): boolean;
	}

	/**
	 * Generic callback
	 */
	interface Callback {
		/**
		 * Generic callback
		 * @param actor a {@link Actor}
		 */
		(actor: Actor): void;
	}

	interface EmitInputDeviceEvent {
		(event: Event, device: InputDevice): void;
	}

	/**
	 * A function pointer type used by event filters that are added with
	 * {@link Clutter.event.add_filter}.
	 */
	interface EventFilterFunc {
		/**
		 * A function pointer type used by event filters that are added with
		 * {@link Clutter.event.add_filter}.
		 * @param event the event that is going to be emitted
		 * @returns %CLUTTER_EVENT_STOP to indicate that the event
		 *   has been handled or %CLUTTER_EVENT_PROPAGATE otherwise.
		 *   Returning %CLUTTER_EVENT_STOP skips any further filter
		 *   functions and prevents the signal emission for the event.
		 */
		(event: Event): boolean;
	}

	/**
	 * This function is passed to {@link Clutter.Path.foreach} and will be
	 * called for each node contained in the path.
	 */
	interface PathCallback {
		/**
		 * This function is passed to {@link Clutter.Path.foreach} and will be
		 * called for each node contained in the path.
		 * @param node the node
		 */
		(node: PathNode): void;
	}

	/**
	 * Prototype of the progress function used to compute the value
	 * between the two ends #a and #b of an interval depending on
	 * the value of #progress.
	 * 
	 * The #GValue in #retval is already initialized with the same
	 * type as #a and #b.
	 * 
	 * This function will be called by {@link Interval} if the
	 * type of the values of the interval was registered using
	 * {@link Clutter.Interval.register_progress_func}.
	 */
	interface ProgressFunc {
		/**
		 * Prototype of the progress function used to compute the value
		 * between the two ends #a and #b of an interval depending on
		 * the value of #progress.
		 * 
		 * The #GValue in #retval is already initialized with the same
		 * type as #a and #b.
		 * 
		 * This function will be called by {@link Interval} if the
		 * type of the values of the interval was registered using
		 * {@link Clutter.Interval.register_progress_func}.
		 * @param a the initial value of an interval
		 * @param b the final value of an interval
		 * @param progress the progress factor, between 0 and 1
		 * @param retval the value used to store the progress
		 * @returns %TRUE if the function successfully computed
		 *   the value and stored it inside #retval
		 */
		(a: GObject.Value, b: GObject.Value, progress: number, retval: GObject.Value): boolean;
	}

	/**
	 * This is the signature of a function used to connect signals.  It is used
	 * by the {@link Clutter.Script.connect_signals_full} function.  It is mainly
	 * intended for interpreted language bindings, but could be useful where the
	 * programmer wants more control over the signal connection process.
	 */
	interface ScriptConnectFunc {
		/**
		 * This is the signature of a function used to connect signals.  It is used
		 * by the {@link Clutter.Script.connect_signals_full} function.  It is mainly
		 * intended for interpreted language bindings, but could be useful where the
		 * programmer wants more control over the signal connection process.
		 * @param script a {@link Script}
		 * @param object the object to connect
		 * @param signal_name the name of the signal
		 * @param handler_name the name of the signal handler
		 * @param connect_object the object to connect the signal to, or %NULL
		 * @param flags signal connection flags
		 */
		(script: Script, object: GObject.Object, signal_name: string, handler_name: string, connect_object: GObject.Object, flags: GObject.ConnectFlags): void;
	}

	/**
	 * A function for defining a custom progress.
	 */
	interface TimelineProgressFunc {
		/**
		 * A function for defining a custom progress.
		 * @param timeline a {@link Timeline}
		 * @param elapsed the elapsed time, in milliseconds
		 * @param total the total duration of the timeline, in milliseconds,
		 * @returns the progress, as a floating point value between -1.0 and 2.0.
		 */
		(timeline: Timeline, elapsed: number, total: number): number;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Event} instead.
	 */
	interface IEvent {
		/**
		 * Copies #event.
		 * @returns A newly allocated {@link Event}
		 */
		copy(): Event;
		/**
		 * Frees all resources used by #event.
		 */
		free(): void;
		/**
		 * Retrieves the angle relative from #source to #target.
		 * 
		 * The direction of the angle is from the position X axis towards
		 * the positive Y axis.
		 * @param target a {@link Event}
		 * @returns the angle between two {@link Event}
		 */
		get_angle(target: Event): number;
		/**
		 * Retrieves the array of axes values attached to the event.
		 * @returns an array of axis values
		 * 
		 * return location for the number of axes returned
		 */
		get_axes(): [ number, number ];
		/**
		 * Retrieves the button number of #event
		 * @returns the button number
		 */
		get_button(): number;
		/**
		 * Retrieves the number of clicks of #event
		 * @returns the click count
		 */
		get_click_count(): number;
		/**
		 * Retrieves the coordinates of #event and puts them into #x and #y.
		 * @returns return location for the X coordinate, or %NULL
		 * 
		 * return location for the Y coordinate, or %NULL
		 */
		get_coords(): [ x: number, y: number ];
		/**
		 * Retrieves the {@link InputDevice} for the event.
		 * If you want the physical device the event originated from, use
		 * {@link Clutter.event.get_source_device}.
		 * 
		 * The #ClutterInputDevice structure is completely opaque and should
		 * be cast to the platform-specific implementation.
		 * @returns the {@link InputDevice} or %NULL. The
		 *   returned device is owned by the #ClutterEvent and it should not
		 *   be unreferenced
		 */
		get_device(): InputDevice;
		/**
		 * Retrieves the events device id if set.
		 * @returns A unique identifier for the device or -1 if the event has
		 *   no specific device set.
		 */
		get_device_id(): number;
		/**
		 * Returns the device tool that originated this event
		 * @returns The tool of this event
		 */
		get_device_tool(): InputDeviceTool;
		/**
		 * Retrieves the type of the device for #event
		 * @returns the {@link InputDeviceType} for the device, if
		 *   any is set
		 */
		get_device_type(): InputDeviceType;
		/**
		 * Retrieves the distance between two events, a #source and a #target.
		 * @param target a {@link Event}
		 * @returns the distance between two {@link Event}
		 */
		get_distance(target: Event): number;
		/**
		 * Retrieves the {@link EventSequence} of #event.
		 * @returns the event sequence, or %NULL
		 */
		get_event_sequence(): EventSequence;
		/**
		 * Retrieves the {@link EventFlags} of #event
		 * @returns the event flags
		 */
		get_flags(): EventFlags;
		/**
		 * Returns the gesture motion deltas relative to the current pointer
		 * position.
		 * @returns the displacement relative to the pointer
		 *      position in the X axis, or %NULL
		 * 
		 * the displacement relative to the pointer
		 *      position in the Y axis, or %NULL
		 */
		get_gesture_motion_delta(): [ dx: number | null, dy: number | null ];
		/**
		 * Returns the phase of the event, See {@link TouchpadGesturePhase}.
		 * @returns the phase of the gesture event.
		 */
		get_gesture_phase(): TouchpadGesturePhase;
		/**
		 * Returns the angle delta reported by this specific event.
		 * @returns The angle delta relative to the previous event.
		 */
		get_gesture_pinch_angle_delta(): number;
		/**
		 * Returns the current scale as reported by #event, 1.0 being the original
		 * distance at the time the corresponding event with phase
		 * %CLUTTER_TOUCHPAD_GESTURE_PHASE_BEGIN is received.
		 * is received.
		 * @returns the current pinch gesture scale
		 */
		get_gesture_pinch_scale(): number;
		/**
		 * Retrieves the keycode of the key that caused #event
		 * @returns The keycode representing the key
		 */
		get_key_code(): number;
		/**
		 * Retrieves the key symbol of #event
		 * @returns the key symbol representing the key
		 */
		get_key_symbol(): number;
		/**
		 * Retrieves the unicode value for the key that caused #keyev.
		 * @returns The unicode value representing the key
		 */
		get_key_unicode(): string;
		get_mode_group(): number;
		/**
		 * Returns the details of a pad event.
		 * @returns #TRUE if event details could be obtained
		 * 
		 * ring/strip/button number
		 * 
		 * pad mode as per the event
		 * 
		 * event axis value
		 */
		get_pad_event_details(): [ boolean, number | null, number | null, number | null ];
		/**
		 * Retrieves the event coordinates as a #graphene_point_t.
		 * @param position a #graphene_point_t
		 */
		get_position(position: Graphene.Point): void;
		/**
		 * Retrieves the related actor of a crossing event.
		 * @returns the related {@link Actor}, or %NULL
		 */
		get_related(): Actor;
		/**
		 * Retrieves the precise scrolling information of #event.
		 * 
		 * The #event has to have a {@link ScrollEvent}.direction value
		 * of %CLUTTER_SCROLL_SMOOTH.
		 * @returns return location for the delta on the horizontal axis
		 * 
		 * return location for the delta on the vertical axis
		 */
		get_scroll_delta(): [ dx: number, dy: number ];
		/**
		 * Retrieves the direction of the scrolling of #event
		 * @returns the scrolling direction
		 */
		get_scroll_direction(): ScrollDirection;
		/**
		 * Returns the {@link ScrollFinishFlags} of an scroll event. Those
		 * can be used to determine whether post-scroll effects like kinetic
		 * scrolling should be applied.
		 * @returns The scroll finish flags
		 */
		get_scroll_finish_flags(): ScrollFinishFlags;
		/**
		 * Returns the {@link ScrollSource} that applies to an scroll event.
		 * @returns The source of scroll events
		 */
		get_scroll_source(): ScrollSource;
		/**
		 * Retrieves the source {@link Actor} the event originated from, or
		 * NULL if the event has no source.
		 * @returns a {@link Actor}
		 */
		get_source(): Actor;
		/**
		 * Retrieves the hardware device that originated the event.
		 * 
		 * If you need the virtual device, use {@link Clutter.event.get_device}.
		 * 
		 * If no hardware device originated this event, this function will
		 * return the same device as clutter_event_get_device().
		 * @returns a pointer to a {@link InputDevice}
		 *   or %NULL
		 */
		get_source_device(): InputDevice;
		/**
		 * Retrieves the source {@link Stage} the event originated for, or
		 * %NULL if the event has no stage.
		 * @returns a {@link Stage}
		 */
		get_stage(): Stage;
		/**
		 * Retrieves the modifier state of the event. In case the window system
		 * supports reporting latched and locked modifiers, this function returns
		 * the effective state.
		 * @returns the modifier state parameter, or 0
		 */
		get_state(): ModifierType;
		/**
		 * Retrieves the decomposition of the keyboard state into button, base,
		 * latched, locked and effective. This can be used to transmit to other
		 * applications, for example when implementing a wayland compositor.
		 * @returns the pressed buttons as a mask
		 * 
		 * the regular pressed modifier keys
		 * 
		 * the latched modifier keys (currently released but still valid for one key press/release)
		 * 
		 * the locked modifier keys (valid until the lock key is pressed and released again)
		 * 
		 * the logical OR of all the state bits above
		 */
		get_state_full(): [ button_state: ModifierType | null, base_state: ModifierType | null, latched_state: ModifierType | null, locked_state: ModifierType | null, effective_state: ModifierType | null ];
		/**
		 * Retrieves the time of the event.
		 * @returns the time of the event, or %CLUTTER_CURRENT_TIME
		 */
		get_time(): number;
		/**
		 * Returns the number of fingers that is triggering the touchpad gesture.
		 * @returns the number of fingers in the gesture.
		 */
		get_touchpad_gesture_finger_count(): number;
		/**
		 * Checks whether #event has the Control modifier mask set.
		 * @returns %TRUE if the event has the Control modifier mask set
		 */
		has_control_modifier(): boolean;
		/**
		 * Checks whether #event has the Shift modifier mask set.
		 * @returns %TRUE if the event has the Shift modifier mask set
		 */
		has_shift_modifier(): boolean;
		/**
		 * Checks whether a pointer #event has been generated by the windowing
		 * system. The returned value can be used to distinguish between events
		 * synthesized by the windowing system itself (as opposed by Clutter).
		 * @returns %TRUE if the event is pointer emulated
		 */
		is_pointer_emulated(): boolean;
		/**
		 * Puts a copy of the event on the back of the event queue. The event will
		 * have the %CLUTTER_EVENT_FLAG_SYNTHETIC flag set. If the source is set
		 * event signals will be emitted for this source and capture/bubbling for
		 * its ancestors. If the source is not set it will be generated by picking
		 * or use the actor that currently has keyboard focus
		 */
		put(): void;
		/**
		 * Sets the button number of #event
		 * @param button the button number
		 */
		set_button(button: number): void;
		/**
		 * Sets the coordinates of the #event.
		 * @param x the X coordinate of the event
		 * @param y the Y coordinate of the event
		 */
		set_coords(x: number, y: number): void;
		/**
		 * Sets the device for #event.
		 * @param device a {@link InputDevice}, or %NULL
		 */
		set_device(device?: InputDevice | null): void;
		/**
		 * Sets the tool in use for this event
		 * @param tool a {@link InputDeviceTool}
		 */
		set_device_tool(tool?: InputDeviceTool | null): void;
		/**
		 * Sets the {@link EventFlags} of #event
		 * @param flags a binary OR of {@link EventFlags} values
		 */
		set_flags(flags: EventFlags): void;
		/**
		 * Sets the keycode of the #event.
		 * @param key_code the keycode representing the key
		 */
		set_key_code(key_code: number): void;
		/**
		 * Sets the key symbol of #event.
		 * @param key_sym the key symbol representing the key
		 */
		set_key_symbol(key_sym: number): void;
		/**
		 * Sets the Unicode value of #event.
		 * @param key_unicode the Unicode value representing the key
		 */
		set_key_unicode(key_unicode: string): void;
		/**
		 * Sets the related actor of a crossing event
		 * @param actor a {@link Actor} or %NULL
		 */
		set_related(actor?: Actor | null): void;
		/**
		 * Sets the precise scrolling information of #event.
		 * @param dx delta on the horizontal axis
		 * @param dy delta on the vertical axis
		 */
		set_scroll_delta(dx: number, dy: number): void;
		/**
		 * Sets the direction of the scrolling of #event
		 * @param direction the scrolling direction
		 */
		set_scroll_direction(direction: ScrollDirection): void;
		/**
		 * Sets the source {@link Actor} of #event.
		 * @param actor a {@link Actor}, or %NULL
		 */
		set_source(actor?: Actor | null): void;
		/**
		 * Sets the source {@link InputDevice} for #event.
		 * 
		 * The #ClutterEvent must have been created using {@link Clutter.Event.new}.
		 * @param device a {@link InputDevice}
		 */
		set_source_device(device?: InputDevice | null): void;
		/**
		 * Sets the source {@link Stage} of the event.
		 * @param stage a {@link Stage}, or %NULL
		 */
		set_stage(stage?: Stage | null): void;
		/**
		 * Sets the modifier state of the event.
		 * @param state the modifier state to set
		 */
		set_state(state: ModifierType): void;
		/**
		 * Sets the time of the event.
		 * @param time_ the time of the event
		 */
		set_time(time_: number): void;
		/**
		 * Retrieves the type of the event.
		 * @returns a {@link EventType}
		 */
		type(): EventType;
	}

	type EventInitOptionsMixin  = {};
	export interface EventInitOptions extends EventInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Event} instead.
	 */
	type EventMixin = IEvent;

	/**
	 * Generic event wrapper.
	 */
	interface Event extends EventMixin {}

	class Event {
		public constructor(options?: Partial<EventInitOptions>);
		/**
		 * Creates a new {@link Event} of the specified type.
		 * @param type The type of event.
		 * @returns A newly allocated {@link Event}.
		 */
		public static new(type: EventType): Event;
		/**
		 * Adds a function which will be called for all events that Clutter
		 * processes. The function will be called before any signals are
		 * emitted for the event and it will take precedence over any grabs.
		 * @param stage The {@link Stage} to capture events for
		 * @param func The callback function which will be passed all events.
		 * @returns an identifier for the event filter, to be used
		 *   with {@link Clutter.event.remove_filter}.
		 */
		public static add_filter(stage: Stage | null, func: EventFilterFunc): number;
		/**
		 * Pops an event off the event queue. Applications should not need to call
		 * this.
		 * @returns A {@link Event} or NULL if queue empty
		 */
		public static get(): Event;
		/**
		 * Returns a pointer to the first event from the event queue but
		 * does not remove it.
		 * @returns A {@link Event} or NULL if queue empty.
		 */
		public static peek(): Event;
		/**
		 * Removes an event filter that was previously added with
		 * {@link Clutter.event.add_filter}.
		 * @param id The ID of the event filter, as returned from {@link Clutter.event.add_filter}
		 */
		public static remove_filter(id: number): void;
	}


	/**
	 * A type representing a 4x4 matrix.
	 * 
	 * It is identicaly to #CoglMatrix.
	 */
	type Matrix = Cogl.Matrix;

	/**
	 * Allocates a new {@link ActorBox}.
	 * @returns the newly allocated {@link ActorBox}.
	 *   Use {@link Clutter.ActorBox.free} to free its resources
	 */
	function actor_box_alloc(): ActorBox;
	/**
	 * Adds the debug flags passed to the list of debug flags.
	 * @param debug_flags
	 * @param draw_flags
	 * @param pick_flags
	 */
	function add_debug_flags(debug_flags: DebugFlag, draw_flags: DrawDebugFlag, pick_flags: PickDebugFlag): void;
	function base_init(): void;
	/**
	 * Utility function to clear a Cairo context.
	 * @param cr a Cairo context
	 */
	function cairo_clear(cr: cairo.Context): void;
	/**
	 * Utility function for setting the source color of #cr using
	 * a {@link Color}. This function is the equivalent of:
	 * 
	 * |[
	 *   cairo_set_source_rgba (cr,
	 *                          color->red / 255.0,
	 *                          color->green / 255.0,
	 *                          color->blue / 255.0,
	 *                          color->alpha / 255.0);
	 * ]|
	 * @param cr a Cairo context
	 * @param color a {@link Color}
	 */
	function cairo_set_source_color(cr: cairo.Context, color: Color): void;
	/**
	 * Checks the run-time name of the Clutter windowing system backend, using
	 * the symbolic macros like %CLUTTER_WINDOWING_X11.
	 * 
	 * This function should be used in conjuction with the compile-time macros
	 * inside applications and libraries that are using the platform-specific
	 * windowing system API, to ensure that they are running on the correct
	 * windowing system; for instance:
	 * 
	 * |[
	 * #ifdef CLUTTER_WINDOWING_X11
	 *   if (clutter_check_windowing_backend (CLUTTER_WINDOWING_X11))
	 *     {
	 *       // it is safe to use the clutter_x11_* API
	 *     }
	 *   else
	 * #endif
	 *     g_error ("Unknown Clutter backend.");
	 * ]|
	 * @param backend_type the name of the backend to check
	 * @returns %TRUE if the current Clutter windowing system backend is
	 *   the one checked, and %FALSE otherwise
	 */
	function check_windowing_backend(backend_type: string): boolean;
	/**
	 * Converts a color expressed in HLS (hue, luminance and saturation)
	 * values into a {@link Color}.
	 * @param hue hue value, in the 0 .. 360 range
	 * @param luminance luminance value, in the 0 .. 1 range
	 * @param saturation saturation value, in the 0 .. 1 range
	 * @returns return location for a {@link Color}
	 */
	function color_from_hls(hue: number, luminance: number, saturation: number): Color;
	/**
	 * Converts #pixel from the packed representation of a four 8 bit channel
	 * color to a {@link Color}.
	 * @param pixel a 32 bit packed integer containing a color
	 * @returns return location for a {@link Color}
	 */
	function color_from_pixel(pixel: number): Color;
	/**
	 * Parses a string definition of a color, filling the {@link Color}.red,
	 * #ClutterColor.green, #ClutterColor.blue and #ClutterColor.alpha fields
	 * of #color.
	 * 
	 * The #color is not allocated.
	 * 
	 * The format of #str can be either one of:
	 * 
	 *   - a standard name (as taken from the X11 rgb.txt file)
	 *   - an hexadecimal value in the form: `#rgb`, `#rrggbb`, `#rgba`, or `#rrggbbaa`
	 *   - a RGB color in the form: `rgb(r, g, b)`
	 *   - a RGB color in the form: `rgba(r, g, b, a)`
	 *   - a HSL color in the form: `hsl(h, s, l)`
	 *    -a HSL color in the form: `hsla(h, s, l, a)`
	 * 
	 * where 'r', 'g', 'b' and 'a' are (respectively) the red, green, blue color
	 * intensities and the opacity. The 'h', 's' and 'l' are (respectively) the
	 * hue, saturation and luminance values.
	 * 
	 * In the rgb() and rgba() formats, the 'r', 'g', and 'b' values are either
	 * integers between 0 and 255, or percentage values in the range between 0%
	 * and 100%; the percentages require the '%' character. The 'a' value, if
	 * specified, can only be a floating point value between 0.0 and 1.0.
	 * 
	 * In the hls() and hlsa() formats, the 'h' value (hue) is an angle between
	 * 0 and 360.0 degrees; the 'l' and 's' values (luminance and saturation) are
	 * percentage values in the range between 0% and 100%. The 'a' value, if specified,
	 * can only be a floating point value between 0.0 and 1.0.
	 * 
	 * Whitespace inside the definitions is ignored; no leading whitespace
	 * is allowed.
	 * 
	 * If the alpha component is not specified then it is assumed to be set to
	 * be fully opaque.
	 * @param str a string specifiying a color
	 * @returns %TRUE if parsing succeeded, and %FALSE otherwise
	 * 
	 * return location for a {@link Color}
	 */
	function color_from_string(str: string): [ boolean, Color ];
	/**
	 * Retrieves a static color for the given #color name
	 * 
	 * Static colors are created by Clutter and are guaranteed to always be
	 * available and valid
	 * @param color the named global color
	 * @returns a pointer to a static color; the returned pointer
	 *   is owned by Clutter and it should never be modified or freed
	 */
	function color_get_static(color: StaticColor): Color;
	/**
	 * Looks up the #GParamSpec for a child property of #klass.
	 * @param klass a #GObjectClass implementing the {@link Container} interface.
	 * @param property_name a property name.
	 * @returns The #GParamSpec for the property or %NULL
	 *   if no such property exist.
	 */
	function container_class_find_child_property(klass: GObject.Object, property_name: string): GObject.ParamSpec;
	/**
	 * Returns an array of #GParamSpec for all child properties.
	 * @param klass a #GObjectClass implementing the {@link Container} interface.
	 * @returns an array
	 *   of #GParamSpec<!-- -->s which should be freed after use.
	 * 
	 * return location for length of returned array.
	 */
	function container_class_list_child_properties(klass: GObject.Object): [ GObject.ParamSpec[], number ];
	/**
	 * Disable loading the accessibility support. It has the same effect
	 * as setting the environment variable
	 * CLUTTER_DISABLE_ACCESSIBILITY. For the same reason, this method
	 * should be called before clutter_init().
	 */
	function disable_accessibility(): void;
	/**
	 * Processes an event.
	 * 
	 * The #event must be a valid {@link Event} and have a #ClutterStage
	 * associated to it.
	 * 
	 * This function is only useful when embedding Clutter inside another
	 * toolkit, and it should never be called by applications.
	 * @param event a {@link Event}.
	 */
	function do_event(event: Event): void;
	/**
	 * Adds a function which will be called for all events that Clutter
	 * processes. The function will be called before any signals are
	 * emitted for the event and it will take precedence over any grabs.
	 * @param stage The {@link Stage} to capture events for
	 * @param func The callback function which will be passed all events.
	 * @returns an identifier for the event filter, to be used
	 *   with {@link Clutter.event.remove_filter}.
	 */
	function event_add_filter(stage: Stage | null, func: EventFilterFunc): number;
	/**
	 * Pops an event off the event queue. Applications should not need to call
	 * this.
	 * @returns A {@link Event} or NULL if queue empty
	 */
	function event_get(): Event;
	/**
	 * Returns a pointer to the first event from the event queue but
	 * does not remove it.
	 * @returns A {@link Event} or NULL if queue empty.
	 */
	function event_peek(): Event;
	/**
	 * Removes an event filter that was previously added with
	 * {@link Clutter.event.add_filter}.
	 * @param id The ID of the event filter, as returned from {@link Clutter.event.add_filter}
	 */
	function event_remove_filter(id: number): void;
	/**
	 * Checks if events are pending in the event queue.
	 * @returns TRUE if there are pending events, FALSE otherwise.
	 */
	function events_pending(): boolean;
	/**
	 * Checks whether #feature is available.  #feature can be a logical
	 * OR of {@link FeatureFlags}.
	 * @param feature a {@link FeatureFlags}
	 * @returns %TRUE if a feature is available
	 */
	function feature_available(feature: FeatureFlags): boolean;
	/**
	 * Returns all the supported features.
	 * @returns a logical OR of all the supported features.
	 */
	function feature_get_all(): FeatureFlags;
	/**
	 * Returns whether Clutter has accessibility support enabled.  As
	 * least, a value of TRUE means that there are a proper AtkUtil
	 * implementation available
	 * @returns %TRUE if Clutter has accessibility support enabled
	 */
	function get_accessibility_enabled(): boolean;
	/**
	 * Retrieves the {@link Actor} with #id_.
	 * @param id_ a {@link Actor} unique id.
	 * @returns the actor with the passed id or %NULL.
	 *   The returned actor does not have its reference count increased.
	 */
	function get_actor_by_gid(id_: number): Actor;
	/**
	 * If an event is currently being processed, return that event.
	 * This function is intended to be used to access event state
	 * that might not be exposed by higher-level widgets.  For
	 * example, to get the key modifier state from a Button 'clicked'
	 * event.
	 * @returns The current ClutterEvent, or %NULL if none
	 */
	function get_current_event(): Event;
	/**
	 * Retrieves the timestamp of the last event, if there is an
	 * event or if the event has a timestamp.
	 * @returns the event timestamp, or %CLUTTER_CURRENT_TIME
	 */
	function get_current_event_time(): number;
	/**
	 * Retrieves the default {@link Backend} used by Clutter. The
	 * #ClutterBackend holds backend-specific configuration options.
	 * @returns the default backend. You should
	 *   not ref or unref the returned object. Applications should rarely
	 *   need to use this.
	 */
	function get_default_backend(): Backend;
	/**
	 * Retrieves the default frame rate. See {@link Clutter.set_default_frame_rate}.
	 * @returns the default frame rate
	 */
	function get_default_frame_rate(): number;
	/**
	 * Retrieves the default direction for the text. The text direction is
	 * determined by the locale and/or by the `CLUTTER_TEXT_DIRECTION`
	 * environment variable.
	 * 
	 * The default text direction can be overridden on a per-actor basis by using
	 * {@link Clutter.Actor.set_text_direction}.
	 * @returns the default text direction
	 */
	function get_default_text_direction(): TextDirection;
	/**
	 * Retrieves the #PangoFontMap instance used by Clutter.
	 * You can use the global font map object with the COGL
	 * Pango API.
	 * @returns the #PangoFontMap instance. The returned
	 *   value is owned by Clutter and it should never be unreferenced.
	 */
	function get_font_map(): Pango.FontMap;
	/**
	 * Returns a #GOptionGroup for the command line arguments recognized
	 * by Clutter. You should add this group to your #GOptionContext with
	 * {@link GObject.option_context_add_group}, if you are using g_option_context_parse()
	 * to parse your commandline arguments.
	 * 
	 * Calling g_option_context_parse() with Clutter's #GOptionGroup will result
	 * in Clutter's initialization. That is, the following code:
	 * 
	 * |[
	 *   g_option_context_set_main_group (context, clutter_get_option_group ());
	 *   res = g_option_context_parse (context, &argc, &argc, NULL);
	 * ]|
	 * 
	 * is functionally equivalent to:
	 * 
	 * |[
	 *   clutter_init (&argc, &argv);
	 * ]|
	 * 
	 * After g_option_context_parse() on a #GOptionContext containing the
	 * Clutter #GOptionGroup has returned %TRUE, Clutter is guaranteed to be
	 * initialized.
	 * @returns a #GOptionGroup for the commandline arguments
	 *   recognized by Clutter
	 */
	function get_option_group(): GLib.OptionGroup;
	/**
	 * Returns a #GOptionGroup for the command line arguments recognized
	 * by Clutter. You should add this group to your #GOptionContext with
	 * {@link GObject.option_context_add_group}, if you are using g_option_context_parse()
	 * to parse your commandline arguments.
	 * 
	 * Unlike clutter_get_option_group(), calling g_option_context_parse() with
	 * the #GOptionGroup returned by this function requires a subsequent explicit
	 * call to clutter_init(); use this function when needing to set foreign
	 * display connection with clutter_x11_set_display(), or with
	 * `gtk_clutter_init()`.
	 * @returns a #GOptionGroup for the commandline arguments
	 *   recognized by Clutter
	 */
	function get_option_group_without_init(): GLib.OptionGroup;
	/**
	 * Retrieves the Clutter script id, if any.
	 * @param gobject a #GObject
	 * @returns the script id, or %NULL if #object was not defined inside
	 *   a UI definition file. The returned string is owned by the object and
	 *   should never be modified or freed.
	 */
	function get_script_id(gobject: GObject.Object): string;
	function image_error_quark(): GLib.Quark;
	/**
	 * Initialises everything needed to operate with Clutter and parses some
	 * standard command line options; #argc and #argv are adjusted accordingly
	 * so your own code will never see those standard arguments.
	 * 
	 * It is safe to call this function multiple times.
	 * 
	 * This function will not abort in case of errors during
	 * initialization; clutter_init() will print out the error message on
	 * stderr, and will return an error code. It is up to the application
	 * code to handle this case. If you need to display the error message
	 * yourself, you can use clutter_init_with_args(), which takes a #GError
	 * pointer.
	 * 
	 * If this function fails, and returns an error code, any subsequent
	 * Clutter API will have undefined behaviour - including segmentation
	 * faults and assertion failures. Make sure to handle the returned
	 * {@link InitError} enumeration value.
	 * @returns a {@link InitError} value
	 */
	function init(): InitError;
	function init_error_quark(): GLib.Quark;
	/**
	 * This function does the same work as clutter_init(). Additionally,
	 * it allows you to add your own command line options, and it
	 * automatically generates nicely formatted <option>--help</option>
	 * output. Note that your program will be terminated after writing
	 * out the help output. Also note that, in case of error, the
	 * error message will be placed inside #error instead of being
	 * printed on the display.
	 * 
	 * Just like clutter_init(), if this function returns an error code then
	 * any subsequent call to any other Clutter API will result in undefined
	 * behaviour - including segmentation faults.
	 * @param parameter_string a string which is displayed in the
	 *   first line of <option>--help</option> output, after
	 *   <literal><replaceable>programname</replaceable> [OPTION...]</literal>
	 * @param entries a %NULL terminated array of
	 *   #GOptionEntry<!-- -->s describing the options of your program
	 * @param translation_domain a translation domain to use for
	 *   translating the <option>--help</option> output for the options in
	 *   #entries with gettext(), or %NULL
	 * @returns %CLUTTER_INIT_SUCCESS if Clutter has been successfully
	 *   initialised, or other values or {@link InitError} in case of
	 *   error.
	 */
	function init_with_args(parameter_string: string | null, entries: GLib.OptionEntry[] | null, translation_domain: string | null): InitError;
	/**
	 * Converts #keyval from a Clutter key symbol to the corresponding
	 * ISO10646 (Unicode) character.
	 * @param keyval a key symbol
	 * @returns a Unicode character, or 0 if there  is no corresponding
	 *   character.
	 */
	function keysym_to_unicode(keyval: number): number;
	/**
	 * Starts the Clutter mainloop.
	 */
	function main(): void;
	/**
	 * Retrieves the depth of the Clutter mainloop.
	 * @returns The level of the mainloop.
	 */
	function main_level(): number;
	/**
	 * Terminates the Clutter mainloop.
	 */
	function main_quit(): void;
	/**
	 * Allocates enough memory to hold a {@link Matrix}.
	 * @returns the newly allocated {@link Matrix}
	 */
	function matrix_alloc(): Matrix;
	/**
	 * Frees the memory allocated by {@link Clutter.matrix.alloc}.
	 * @param matrix a {@link Matrix}
	 */
	function matrix_free(matrix: Matrix | null): void;
	function matrix_get_type(): GObject.Type;
	/**
	 * Initializes #matrix with the contents of a C array of floating point
	 * values.
	 * @param matrix a {@link Matrix}
	 * @param values a C array of 16 floating point values,
	 *   representing a 4x4 matrix, with column-major order
	 * @returns the initialzed {@link Matrix}
	 */
	function matrix_init_from_array(matrix: Matrix, values: number[]): Matrix;
	/**
	 * Initializes the {@link Matrix} #a with the contents of the
	 * #ClutterMatrix #b.
	 * @param a the {@link Matrix} to initialize
	 * @param b the {@link Matrix} to copy
	 * @returns the initialized {@link Matrix}
	 */
	function matrix_init_from_matrix(a: Matrix, b: Matrix): Matrix;
	/**
	 * Initializes #matrix with the identity matrix, i.e.:
	 * 
	 * |[
	 *   .xx = 1.0, .xy = 0.0, .xz = 0.0, .xw = 0.0
	 *   .yx = 0.0, .yy = 1.0, .yz = 0.0, .yw = 0.0
	 *   .zx = 0.0, .zy = 0.0, .zz = 1.0, .zw = 0.0
	 *   .wx = 0.0, .wy = 0.0, .wz = 0.0, .ww = 1.0
	 * ]|
	 * @param matrix a {@link Matrix}
	 * @returns the initialized {@link Matrix}
	 */
	function matrix_init_identity(matrix: Matrix): Matrix;
	/**
	 * Creates a #GParamSpec for properties using {@link Color}.
	 * @param name name of the property
	 * @param nick short name
	 * @param blurb description (can be translatable)
	 * @param default_value default value
	 * @param flags flags for the param spec
	 * @returns the newly created #GParamSpec
	 */
	function param_spec_color(name: string, nick: string, blurb: string, default_value: Color, flags: GObject.ParamFlags): GObject.ParamSpec;
	/**
	 * Creates a #GParamSpec for properties using {@link Units}.
	 * @param name name of the property
	 * @param nick short name
	 * @param blurb description (can be translatable)
	 * @param default_type the default type for the {@link Units}
	 * @param minimum lower boundary
	 * @param maximum higher boundary
	 * @param default_value default value
	 * @param flags flags for the param spec
	 * @returns the newly created #GParamSpec
	 */
	function param_spec_units(name: string, nick: string, blurb: string, default_type: UnitType, minimum: number, maximum: number, default_value: number, flags: GObject.ParamFlags): GObject.ParamSpec;
	/**
	 * Removes the debug flags passed from the list of debug flags.
	 * @param debug_flags
	 * @param draw_flags
	 * @param pick_flags
	 */
	function remove_debug_flags(debug_flags: DebugFlag, draw_flags: DrawDebugFlag, pick_flags: PickDebugFlag): void;
	function script_error_quark(): GLib.Quark;
	function set_custom_backend_func(func: any | null): void;
	/**
	 * Adds a function to be called whenever there are no higher priority
	 * events pending. If the function returns %FALSE it is automatically
	 * removed from the list of event sources and will not be called again.
	 * 
	 * This function can be considered a thread-safe variant of {@link GObject.idle_add_full}:
	 * it will call #function while holding the Clutter lock. It is logically
	 * equivalent to the following implementation:
	 * 
	 * |[
	 * static gboolean
	 * idle_safe_callback (gpointer data)
	 * {
	 *    SafeClosure *closure = data;
	 *    gboolean res = FALSE;
	 * 
	 *    // the callback does not need to acquire the Clutter
	 *     / lock itself, as it is held by the this proxy handler
	 *     //
	 *    res = closure->callback (closure->data);
	 * 
	 *    return res;
	 * }
	 * static gulong
	 * add_safe_idle (GSourceFunc callback,
	 *                gpointer    data)
	 * {
	 *   SafeClosure *closure = g_new0 (SafeClosure, 1);
	 * 
	 *   closure->callback = callback;
	 *   closure->data = data;
	 * 
	 *   return g_idle_add_full (G_PRIORITY_DEFAULT_IDLE,
	 *                           idle_safe_callback,
	 *                           closure,
	 *                           g_free)
	 * }
	 * ]|
	 * 
	 * This function should be used by threaded applications to make sure
	 * that #func is emitted under the Clutter threads lock and invoked
	 * from the same thread that started the Clutter main loop. For instance,
	 * it can be used to update the UI using the results from a worker
	 * thread:
	 * 
	 * |[
	 * static gboolean
	 * update_ui (gpointer data)
	 * {
	 *   SomeClosure *closure = data;
	 * 
	 *   // it is safe to call Clutter API from this function because
	 *    / it is invoked from the same thread that started the main
	 *    / loop and under the Clutter thread lock
	 *    //
	 *   clutter_label_set_text (CLUTTER_LABEL (closure->label),
	 *                           closure->text);
	 * 
	 *   g_object_unref (closure->label);
	 *   g_free (closure);
	 * 
	 *   return FALSE;
	 * }
	 * 
	 *   // within another thread //
	 *   closure = g_new0 (SomeClosure, 1);
	 *   // always take a reference on GObject instances //
	 *   closure->label = g_object_ref (my_application->label);
	 *   closure->text = g_strdup (processed_text_to_update_the_label);
	 * 
	 *   clutter_threads_add_idle_full (G_PRIORITY_HIGH_IDLE,
	 *                                  update_ui,
	 *                                  closure,
	 *                                  NULL);
	 * ]|
	 * @param priority the priority of the timeout source. Typically this will be in the
	 *    range between #G_PRIORITY_DEFAULT_IDLE and #G_PRIORITY_HIGH_IDLE
	 * @param func function to call
	 * @returns the ID (greater than 0) of the event source.
	 */
	function threads_add_idle(priority: number, func: GLib.SourceFunc): number;
	/**
	 * Adds a function to be called whenever Clutter is processing a new
	 * frame.
	 * 
	 * If the function returns %FALSE it is automatically removed from the
	 * list of repaint functions and will not be called again.
	 * 
	 * This function is guaranteed to be called from within the same thread
	 * that called clutter_main(), and while the Clutter lock is being held;
	 * the function will be called within the main loop, so it is imperative
	 * that it does not block, otherwise the frame time budget may be lost.
	 * 
	 * A repaint function is useful to ensure that an update of the scenegraph
	 * is performed before the scenegraph is repainted. By default, a repaint
	 * function added using this function will be invoked prior to the frame
	 * being processed.
	 * 
	 * Adding a repaint function does not automatically ensure that a new
	 * frame will be queued.
	 * 
	 * When the repaint function is removed (either because it returned %FALSE
	 * or because clutter_threads_remove_repaint_func() has been called) the
	 * #notify function will be called, if any is set.
	 * 
	 * See also: clutter_threads_add_repaint_func_full()
	 * @param func the function to be called within the paint cycle
	 * @returns the ID (greater than 0) of the repaint function. You
	 *   can use the returned integer to remove the repaint function by
	 *   calling {@link Clutter.threads.remove_repaint_func}.
	 */
	function threads_add_repaint_func(func: GLib.SourceFunc): number;
	/**
	 * Adds a function to be called whenever Clutter is processing a new
	 * frame.
	 * 
	 * If the function returns %FALSE it is automatically removed from the
	 * list of repaint functions and will not be called again.
	 * 
	 * This function is guaranteed to be called from within the same thread
	 * that called clutter_main(), and while the Clutter lock is being held;
	 * the function will be called within the main loop, so it is imperative
	 * that it does not block, otherwise the frame time budget may be lost.
	 * 
	 * A repaint function is useful to ensure that an update of the scenegraph
	 * is performed before the scenegraph is repainted. The #flags passed to this
	 * function will determine the section of the frame processing that will
	 * result in #func being called.
	 * 
	 * Adding a repaint function does not automatically ensure that a new
	 * frame will be queued.
	 * 
	 * When the repaint function is removed (either because it returned %FALSE
	 * or because clutter_threads_remove_repaint_func() has been called) the
	 * #notify function will be called, if any is set.
	 * @param flags flags for the repaint function
	 * @param func the function to be called within the paint cycle
	 * @returns the ID (greater than 0) of the repaint function. You
	 *   can use the returned integer to remove the repaint function by
	 *   calling {@link Clutter.threads.remove_repaint_func}.
	 */
	function threads_add_repaint_func_full(flags: RepaintFlags, func: GLib.SourceFunc): number;
	/**
	 * Sets a function to be called at regular intervals holding the Clutter
	 * threads lock, with the given priority. The function is called repeatedly
	 * until it returns %FALSE, at which point the timeout is automatically
	 * removed and the function will not be called again. The #notify function
	 * is called when the timeout is removed.
	 * 
	 * The first call to the function will be at the end of the first #interval.
	 * 
	 * It is important to note that, due to how the Clutter main loop is
	 * implemented, the timing will not be accurate and it will not try to
	 * "keep up" with the interval.
	 * 
	 * See also {@link Clutter.threads.add_idle_full}.
	 * @param priority the priority of the timeout source. Typically this will be in the
	 *            range between #G_PRIORITY_DEFAULT and #G_PRIORITY_HIGH.
	 * @param interval the time between calls to the function, in milliseconds
	 * @param func function to call
	 * @returns the ID (greater than 0) of the event source.
	 */
	function threads_add_timeout(priority: number, interval: number, func: GLib.SourceFunc): number;
	/**
	 * Removes the repaint function with #handle_id as its id
	 * @param handle_id an unsigned integer greater than zero
	 */
	function threads_remove_repaint_func(handle_id: number): void;
	/**
	 * Convert from a ISO10646 character to a key symbol.
	 * @param wc a ISO10646 encoded character
	 * @returns the corresponding Clutter key symbol, if one exists.
	 *   or, if there is no corresponding symbol, wc | 0x01000000
	 */
	function unicode_to_keysym(wc: number): number;
	/**
	 * Stores a value in centimeters inside #units
	 * @param cm centimeters
	 * @returns a {@link Units}
	 */
	function units_from_cm(cm: number): Units;
	/**
	 * Stores a value in em inside #units, using the default font
	 * name as returned by {@link Clutter.Backend.get_font_name}
	 * @param em em
	 * @returns a {@link Units}
	 */
	function units_from_em(em: number): Units;
	/**
	 * Stores a value in em inside #units using #font_name
	 * @param font_name the font name and size
	 * @param em em
	 * @returns a {@link Units}
	 */
	function units_from_em_for_font(font_name: string | null, em: number): Units;
	/**
	 * Stores a value in millimiters inside #units
	 * @param mm millimeters
	 * @returns a {@link Units}
	 */
	function units_from_mm(mm: number): Units;
	/**
	 * Stores a value in pixels inside #units
	 * @param px pixels
	 * @returns a {@link Units}
	 */
	function units_from_pixels(px: number): Units;
	/**
	 * Stores a value in typographic points inside #units
	 * @param pt typographic points
	 * @returns a {@link Units}
	 */
	function units_from_pt(pt: number): Units;
	/**
	 * Parses a value and updates #units with it
	 * 
	 * A {@link Units} expressed in string should match:
	 * 
	 * |[
	 *   units: wsp* unit-value wsp* unit-name? wsp*
	 *   unit-value: number
	 *   unit-name: 'px' | 'pt' | 'mm' | 'em' | 'cm'
	 *   number: digit+
	 *           | digit* sep digit+
	 *   sep: '.' | ','
	 *   digit: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
	 *   wsp: (#0x20 | #0x9 | #0xA | #0xB | #0xC | #0xD)+
	 * ]|
	 * 
	 * For instance, these are valid strings:
	 * 
	 * |[
	 *   10 px
	 *   5.1 em
	 *   24 pt
	 *   12.6 mm
	 *   .3 cm
	 * ]|
	 * 
	 * While these are not:
	 * 
	 * |[
	 *   42 cats
	 *   omg!1!ponies
	 * ]|
	 * 
	 * If no unit is specified, pixels are assumed.
	 * @param str the string to convert
	 * @returns %TRUE if the string was successfully parsed,
	 *   and %FALSE otherwise
	 * 
	 * a {@link Units}
	 */
	function units_from_string(str: string): [ boolean, Units ];
	/**
	 * Retrieves a pointer to the {@link PaintNode} contained inside
	 * the passed #GValue, and if not %NULL it will increase the
	 * reference count.
	 * @param value a #GValue initialized with %CLUTTER_TYPE_PAINT_NODE
	 * @returns a pointer
	 *   to the {@link PaintNode}, with its reference count increased,
	 *   or %NULL
	 */
	function value_dup_paint_node(value: GObject.Value): PaintNode;
	/**
	 * Gets the {@link Color} contained in #value.
	 * @param value a #GValue initialized to #CLUTTER_TYPE_COLOR
	 * @returns the color inside the passed #GValue
	 */
	function value_get_color(value: GObject.Value): Color;
	/**
	 * Retrieves a pointer to the {@link PaintNode} contained inside
	 * the passed #GValue.
	 * @param value a #GValue initialized with %CLUTTER_TYPE_PAINT_NODE
	 * @returns a pointer to
	 *   a {@link PaintNode}, or %NULL
	 */
	function value_get_paint_node(value: GObject.Value): PaintNode;
	/**
	 * Retrieves the list of floating point values stored inside
	 * the passed #GValue. #value must have been initialized with
	 * %CLUTTER_TYPE_SHADER_FLOAT.
	 * @param value a #GValue
	 * @returns the pointer to a list of
	 *   floating point values.  The returned value is owned by the
	 *   #GValue and should never be modified or freed.
	 * 
	 * return location for the number of returned floating
	 *   point values, or %NULL
	 */
	function value_get_shader_float(value: GObject.Value): [ number[], number ];
	/**
	 * Retrieves the list of integer values stored inside the passed
	 * #GValue. #value must have been initialized with
	 * %CLUTTER_TYPE_SHADER_INT.
	 * @param value a #GValue
	 * @returns the pointer to a list of
	 *   integer values.  The returned value is owned by the #GValue and
	 *   should never be modified or freed.
	 * 
	 * return location for the number of returned integer
	 *   values, or %NULL
	 */
	function value_get_shader_int(value: GObject.Value): [ number[], number ];
	/**
	 * Retrieves a matrix of floating point values stored inside
	 * the passed #GValue. #value must have been initialized with
	 * %CLUTTER_TYPE_SHADER_MATRIX.
	 * @param value a #GValue
	 * @returns the pointer to a matrix
	 *   of floating point values. The returned value is owned by the #GValue and
	 *   should never be modified or freed.
	 * 
	 * return location for the number of returned floating
	 *   point values, or %NULL
	 */
	function value_get_shader_matrix(value: GObject.Value): [ number[], number ];
	/**
	 * Gets the {@link Units} contained in #value.
	 * @param value a #GValue initialized to %CLUTTER_TYPE_UNITS
	 * @returns the units inside the passed #GValue
	 */
	function value_get_units(value: GObject.Value): Units;
	/**
	 * Sets #value to #color.
	 * @param value a #GValue initialized to #CLUTTER_TYPE_COLOR
	 * @param color the color to set
	 */
	function value_set_color(value: GObject.Value, color: Color): void;
	/**
	 * Sets the contents of a #GValue initialized with %CLUTTER_TYPE_PAINT_NODE.
	 * 
	 * This function increased the reference count of #node; if you do not wish
	 * to increase the reference count, use {@link Clutter.value.take_paint_node}
	 * instead. The reference count will be released by g_value_unset().
	 * @param value a #GValue initialized with %CLUTTER_TYPE_PAINT_NODE
	 * @param node a {@link PaintNode}, or %NULL
	 */
	function value_set_paint_node(value: GObject.Value, node: PaintNode | null): void;
	/**
	 * Sets #floats as the contents of #value. The passed #GValue
	 * must have been initialized using %CLUTTER_TYPE_SHADER_FLOAT.
	 * @param value a #GValue
	 * @param floats an array of floating point values
	 */
	function value_set_shader_float(value: GObject.Value, floats: number[]): void;
	/**
	 * Sets #ints as the contents of #value. The passed #GValue
	 * must have been initialized using %CLUTTER_TYPE_SHADER_INT.
	 * @param value a #GValue
	 * @param ints an array of integer values
	 */
	function value_set_shader_int(value: GObject.Value, ints: number[]): void;
	/**
	 * Sets #matrix as the contents of #value. The passed #GValue
	 * must have been initialized using %CLUTTER_TYPE_SHADER_MATRIX.
	 * @param value a #GValue
	 * @param matrix a matrix of floating point values
	 */
	function value_set_shader_matrix(value: GObject.Value, matrix: number[]): void;
	/**
	 * Sets #value to #units
	 * @param value a #GValue initialized to %CLUTTER_TYPE_UNITS
	 * @param units the units to set
	 */
	function value_set_units(value: GObject.Value, units: Units): void;
	/**
	 * Sets the contents of a #GValue initialized with %CLUTTER_TYPE_PAINT_NODE.
	 * 
	 * Unlike {@link Clutter.value.set_paint_node}, this function will not take a
	 * reference on the passed #node: instead, it will take ownership of the
	 * current reference count.
	 * @param value a #GValue, initialized with %CLUTTER_TYPE_PAINT_NODE
	 * @param node a {@link PaintNode}, or %NULL
	 */
	function value_take_paint_node(value: GObject.Value, node: PaintNode | null): void;
	/**
	 * The middle button of a pointer device.
	 * @returns The middle button of a pointer device.
	 */
	const BUTTON_MIDDLE: number;

	/**
	 * The primary button of a pointer device.
	 * 
	 * This is typically the left mouse button in a right-handed
	 * mouse configuration.
	 * @returns The primary button of a pointer device.
	 * 
	 * This is typically the left mouse button in a right-handed
	 * mouse configuration.
	 */
	const BUTTON_PRIMARY: number;

	/**
	 * The secondary button of a pointer device.
	 * 
	 * This is typically the right mouse button in a right-handed
	 * mouse configuration.
	 * @returns The secondary button of a pointer device.
	 * 
	 * This is typically the right mouse button in a right-handed
	 * mouse configuration.
	 */
	const BUTTON_SECONDARY: number;

	/**
	 * Cogl (internal GL abstraction utility library) backend. Can be "gl" or
	 * "gles" currently
	 * @returns Cogl (internal GL abstraction utility library) backend. Can be "gl" or
	 * "gles" currently
	 */
	const COGL: string;

	/**
	 * Default value for "now".
	 * @returns Default value for "now".
	 */
	const CURRENT_TIME: number;

	/**
	 * Continues the propagation of an event; this macro should be
	 * used in event-related signals.
	 * @returns Continues the propagation of an event; this macro should be
	 * used in event-related signals.
	 */
	const EVENT_PROPAGATE: boolean;

	/**
	 * Stops the propagation of an event; this macro should be used
	 * in event-related signals.
	 * @returns Stops the propagation of an event; this macro should be used
	 * in event-related signals.
	 */
	const EVENT_STOP: boolean;

	/**
	 * GL Windowing system used
	 * @returns GL Windowing system used
	 */
	const FLAVOUR: string;

	const HAS_WAYLAND_COMPOSITOR_SUPPORT: number;

	const INPUT_EVDEV: string;

	const INPUT_NULL: string;

	const INPUT_X11: string;

	const KEY_0: number;

	const KEY_1: number;

	const KEY_2: number;

	const KEY_3: number;

	const KEY_3270_AltCursor: number;

	const KEY_3270_Attn: number;

	const KEY_3270_BackTab: number;

	const KEY_3270_ChangeScreen: number;

	const KEY_3270_Copy: number;

	const KEY_3270_CursorBlink: number;

	const KEY_3270_CursorSelect: number;

	const KEY_3270_DeleteWord: number;

	const KEY_3270_Duplicate: number;

	const KEY_3270_Enter: number;

	const KEY_3270_EraseEOF: number;

	const KEY_3270_EraseInput: number;

	const KEY_3270_ExSelect: number;

	const KEY_3270_FieldMark: number;

	const KEY_3270_Ident: number;

	const KEY_3270_Jump: number;

	const KEY_3270_KeyClick: number;

	const KEY_3270_Left2: number;

	const KEY_3270_PA1: number;

	const KEY_3270_PA2: number;

	const KEY_3270_PA3: number;

	const KEY_3270_Play: number;

	const KEY_3270_PrintScreen: number;

	const KEY_3270_Quit: number;

	const KEY_3270_Record: number;

	const KEY_3270_Reset: number;

	const KEY_3270_Right2: number;

	const KEY_3270_Rule: number;

	const KEY_3270_Setup: number;

	const KEY_3270_Test: number;

	const KEY_4: number;

	const KEY_5: number;

	const KEY_6: number;

	const KEY_7: number;

	const KEY_8: number;

	const KEY_9: number;

	const KEY_A: number;

	const KEY_AE: number;

	const KEY_Aacute: number;

	const KEY_Abelowdot: number;

	const KEY_Abreve: number;

	const KEY_Abreveacute: number;

	const KEY_Abrevebelowdot: number;

	const KEY_Abrevegrave: number;

	const KEY_Abrevehook: number;

	const KEY_Abrevetilde: number;

	const KEY_AccessX_Enable: number;

	const KEY_AccessX_Feedback_Enable: number;

	const KEY_Acircumflex: number;

	const KEY_Acircumflexacute: number;

	const KEY_Acircumflexbelowdot: number;

	const KEY_Acircumflexgrave: number;

	const KEY_Acircumflexhook: number;

	const KEY_Acircumflextilde: number;

	const KEY_AddFavorite: number;

	const KEY_Adiaeresis: number;

	const KEY_Agrave: number;

	const KEY_Ahook: number;

	const KEY_Alt_L: number;

	const KEY_Alt_R: number;

	const KEY_Amacron: number;

	const KEY_Aogonek: number;

	const KEY_ApplicationLeft: number;

	const KEY_ApplicationRight: number;

	const KEY_Arabic_0: number;

	const KEY_Arabic_1: number;

	const KEY_Arabic_2: number;

	const KEY_Arabic_3: number;

	const KEY_Arabic_4: number;

	const KEY_Arabic_5: number;

	const KEY_Arabic_6: number;

	const KEY_Arabic_7: number;

	const KEY_Arabic_8: number;

	const KEY_Arabic_9: number;

	const KEY_Arabic_ain: number;

	const KEY_Arabic_alef: number;

	const KEY_Arabic_alefmaksura: number;

	const KEY_Arabic_beh: number;

	const KEY_Arabic_comma: number;

	const KEY_Arabic_dad: number;

	const KEY_Arabic_dal: number;

	const KEY_Arabic_damma: number;

	const KEY_Arabic_dammatan: number;

	const KEY_Arabic_ddal: number;

	const KEY_Arabic_farsi_yeh: number;

	const KEY_Arabic_fatha: number;

	const KEY_Arabic_fathatan: number;

	const KEY_Arabic_feh: number;

	const KEY_Arabic_fullstop: number;

	const KEY_Arabic_gaf: number;

	const KEY_Arabic_ghain: number;

	const KEY_Arabic_ha: number;

	const KEY_Arabic_hah: number;

	const KEY_Arabic_hamza: number;

	const KEY_Arabic_hamza_above: number;

	const KEY_Arabic_hamza_below: number;

	const KEY_Arabic_hamzaonalef: number;

	const KEY_Arabic_hamzaonwaw: number;

	const KEY_Arabic_hamzaonyeh: number;

	const KEY_Arabic_hamzaunderalef: number;

	const KEY_Arabic_heh: number;

	const KEY_Arabic_heh_doachashmee: number;

	const KEY_Arabic_heh_goal: number;

	const KEY_Arabic_jeem: number;

	const KEY_Arabic_jeh: number;

	const KEY_Arabic_kaf: number;

	const KEY_Arabic_kasra: number;

	const KEY_Arabic_kasratan: number;

	const KEY_Arabic_keheh: number;

	const KEY_Arabic_khah: number;

	const KEY_Arabic_lam: number;

	const KEY_Arabic_madda_above: number;

	const KEY_Arabic_maddaonalef: number;

	const KEY_Arabic_meem: number;

	const KEY_Arabic_noon: number;

	const KEY_Arabic_noon_ghunna: number;

	const KEY_Arabic_peh: number;

	const KEY_Arabic_percent: number;

	const KEY_Arabic_qaf: number;

	const KEY_Arabic_question_mark: number;

	const KEY_Arabic_ra: number;

	const KEY_Arabic_rreh: number;

	const KEY_Arabic_sad: number;

	const KEY_Arabic_seen: number;

	const KEY_Arabic_semicolon: number;

	const KEY_Arabic_shadda: number;

	const KEY_Arabic_sheen: number;

	const KEY_Arabic_sukun: number;

	const KEY_Arabic_superscript_alef: number;

	const KEY_Arabic_switch: number;

	const KEY_Arabic_tah: number;

	const KEY_Arabic_tatweel: number;

	const KEY_Arabic_tcheh: number;

	const KEY_Arabic_teh: number;

	const KEY_Arabic_tehmarbuta: number;

	const KEY_Arabic_thal: number;

	const KEY_Arabic_theh: number;

	const KEY_Arabic_tteh: number;

	const KEY_Arabic_veh: number;

	const KEY_Arabic_waw: number;

	const KEY_Arabic_yeh: number;

	const KEY_Arabic_yeh_baree: number;

	const KEY_Arabic_zah: number;

	const KEY_Arabic_zain: number;

	const KEY_Aring: number;

	const KEY_Armenian_AT: number;

	const KEY_Armenian_AYB: number;

	const KEY_Armenian_BEN: number;

	const KEY_Armenian_CHA: number;

	const KEY_Armenian_DA: number;

	const KEY_Armenian_DZA: number;

	const KEY_Armenian_E: number;

	const KEY_Armenian_FE: number;

	const KEY_Armenian_GHAT: number;

	const KEY_Armenian_GIM: number;

	const KEY_Armenian_HI: number;

	const KEY_Armenian_HO: number;

	const KEY_Armenian_INI: number;

	const KEY_Armenian_JE: number;

	const KEY_Armenian_KE: number;

	const KEY_Armenian_KEN: number;

	const KEY_Armenian_KHE: number;

	const KEY_Armenian_LYUN: number;

	const KEY_Armenian_MEN: number;

	const KEY_Armenian_NU: number;

	const KEY_Armenian_O: number;

	const KEY_Armenian_PE: number;

	const KEY_Armenian_PYUR: number;

	const KEY_Armenian_RA: number;

	const KEY_Armenian_RE: number;

	const KEY_Armenian_SE: number;

	const KEY_Armenian_SHA: number;

	const KEY_Armenian_TCHE: number;

	const KEY_Armenian_TO: number;

	const KEY_Armenian_TSA: number;

	const KEY_Armenian_TSO: number;

	const KEY_Armenian_TYUN: number;

	const KEY_Armenian_VEV: number;

	const KEY_Armenian_VO: number;

	const KEY_Armenian_VYUN: number;

	const KEY_Armenian_YECH: number;

	const KEY_Armenian_ZA: number;

	const KEY_Armenian_ZHE: number;

	const KEY_Armenian_accent: number;

	const KEY_Armenian_amanak: number;

	const KEY_Armenian_apostrophe: number;

	const KEY_Armenian_at: number;

	const KEY_Armenian_ayb: number;

	const KEY_Armenian_ben: number;

	const KEY_Armenian_but: number;

	const KEY_Armenian_cha: number;

	const KEY_Armenian_da: number;

	const KEY_Armenian_dza: number;

	const KEY_Armenian_e: number;

	const KEY_Armenian_exclam: number;

	const KEY_Armenian_fe: number;

	const KEY_Armenian_full_stop: number;

	const KEY_Armenian_ghat: number;

	const KEY_Armenian_gim: number;

	const KEY_Armenian_hi: number;

	const KEY_Armenian_ho: number;

	const KEY_Armenian_hyphen: number;

	const KEY_Armenian_ini: number;

	const KEY_Armenian_je: number;

	const KEY_Armenian_ke: number;

	const KEY_Armenian_ken: number;

	const KEY_Armenian_khe: number;

	const KEY_Armenian_ligature_ew: number;

	const KEY_Armenian_lyun: number;

	const KEY_Armenian_men: number;

	const KEY_Armenian_nu: number;

	const KEY_Armenian_o: number;

	const KEY_Armenian_paruyk: number;

	const KEY_Armenian_pe: number;

	const KEY_Armenian_pyur: number;

	const KEY_Armenian_question: number;

	const KEY_Armenian_ra: number;

	const KEY_Armenian_re: number;

	const KEY_Armenian_se: number;

	const KEY_Armenian_separation_mark: number;

	const KEY_Armenian_sha: number;

	const KEY_Armenian_shesht: number;

	const KEY_Armenian_tche: number;

	const KEY_Armenian_to: number;

	const KEY_Armenian_tsa: number;

	const KEY_Armenian_tso: number;

	const KEY_Armenian_tyun: number;

	const KEY_Armenian_verjaket: number;

	const KEY_Armenian_vev: number;

	const KEY_Armenian_vo: number;

	const KEY_Armenian_vyun: number;

	const KEY_Armenian_yech: number;

	const KEY_Armenian_yentamna: number;

	const KEY_Armenian_za: number;

	const KEY_Armenian_zhe: number;

	const KEY_Atilde: number;

	const KEY_AudibleBell_Enable: number;

	const KEY_AudioCycleTrack: number;

	const KEY_AudioForward: number;

	const KEY_AudioLowerVolume: number;

	const KEY_AudioMedia: number;

	const KEY_AudioMicMute: number;

	const KEY_AudioMute: number;

	const KEY_AudioNext: number;

	const KEY_AudioPause: number;

	const KEY_AudioPlay: number;

	const KEY_AudioPrev: number;

	const KEY_AudioRaiseVolume: number;

	const KEY_AudioRandomPlay: number;

	const KEY_AudioRecord: number;

	const KEY_AudioRepeat: number;

	const KEY_AudioRewind: number;

	const KEY_AudioStop: number;

	const KEY_Away: number;

	const KEY_B: number;

	const KEY_Babovedot: number;

	const KEY_Back: number;

	const KEY_BackForward: number;

	const KEY_BackSpace: number;

	const KEY_Battery: number;

	const KEY_Begin: number;

	const KEY_Blue: number;

	const KEY_Bluetooth: number;

	const KEY_Book: number;

	const KEY_BounceKeys_Enable: number;

	const KEY_Break: number;

	const KEY_BrightnessAdjust: number;

	const KEY_Byelorussian_SHORTU: number;

	const KEY_Byelorussian_shortu: number;

	const KEY_C: number;

	const KEY_CD: number;

	const KEY_CH: number;

	const KEY_C_H: number;

	const KEY_C_h: number;

	const KEY_Cabovedot: number;

	const KEY_Cacute: number;

	const KEY_Calculator: number;

	const KEY_Calendar: number;

	const KEY_Cancel: number;

	const KEY_Caps_Lock: number;

	const KEY_Ccaron: number;

	const KEY_Ccedilla: number;

	const KEY_Ccircumflex: number;

	const KEY_Ch: number;

	const KEY_Clear: number;

	const KEY_ClearGrab: number;

	const KEY_Close: number;

	const KEY_Codeinput: number;

	const KEY_ColonSign: number;

	const KEY_Community: number;

	const KEY_ContrastAdjust: number;

	const KEY_Control_L: number;

	const KEY_Control_R: number;

	const KEY_Copy: number;

	const KEY_CruzeiroSign: number;

	const KEY_Cut: number;

	const KEY_CycleAngle: number;

	const KEY_Cyrillic_A: number;

	const KEY_Cyrillic_BE: number;

	const KEY_Cyrillic_CHE: number;

	const KEY_Cyrillic_CHE_descender: number;

	const KEY_Cyrillic_CHE_vertstroke: number;

	const KEY_Cyrillic_DE: number;

	const KEY_Cyrillic_DZHE: number;

	const KEY_Cyrillic_E: number;

	const KEY_Cyrillic_EF: number;

	const KEY_Cyrillic_EL: number;

	const KEY_Cyrillic_EM: number;

	const KEY_Cyrillic_EN: number;

	const KEY_Cyrillic_EN_descender: number;

	const KEY_Cyrillic_ER: number;

	const KEY_Cyrillic_ES: number;

	const KEY_Cyrillic_GHE: number;

	const KEY_Cyrillic_GHE_bar: number;

	const KEY_Cyrillic_HA: number;

	const KEY_Cyrillic_HARDSIGN: number;

	const KEY_Cyrillic_HA_descender: number;

	const KEY_Cyrillic_I: number;

	const KEY_Cyrillic_IE: number;

	const KEY_Cyrillic_IO: number;

	const KEY_Cyrillic_I_macron: number;

	const KEY_Cyrillic_JE: number;

	const KEY_Cyrillic_KA: number;

	const KEY_Cyrillic_KA_descender: number;

	const KEY_Cyrillic_KA_vertstroke: number;

	const KEY_Cyrillic_LJE: number;

	const KEY_Cyrillic_NJE: number;

	const KEY_Cyrillic_O: number;

	const KEY_Cyrillic_O_bar: number;

	const KEY_Cyrillic_PE: number;

	const KEY_Cyrillic_SCHWA: number;

	const KEY_Cyrillic_SHA: number;

	const KEY_Cyrillic_SHCHA: number;

	const KEY_Cyrillic_SHHA: number;

	const KEY_Cyrillic_SHORTI: number;

	const KEY_Cyrillic_SOFTSIGN: number;

	const KEY_Cyrillic_TE: number;

	const KEY_Cyrillic_TSE: number;

	const KEY_Cyrillic_U: number;

	const KEY_Cyrillic_U_macron: number;

	const KEY_Cyrillic_U_straight: number;

	const KEY_Cyrillic_U_straight_bar: number;

	const KEY_Cyrillic_VE: number;

	const KEY_Cyrillic_YA: number;

	const KEY_Cyrillic_YERU: number;

	const KEY_Cyrillic_YU: number;

	const KEY_Cyrillic_ZE: number;

	const KEY_Cyrillic_ZHE: number;

	const KEY_Cyrillic_ZHE_descender: number;

	const KEY_Cyrillic_a: number;

	const KEY_Cyrillic_be: number;

	const KEY_Cyrillic_che: number;

	const KEY_Cyrillic_che_descender: number;

	const KEY_Cyrillic_che_vertstroke: number;

	const KEY_Cyrillic_de: number;

	const KEY_Cyrillic_dzhe: number;

	const KEY_Cyrillic_e: number;

	const KEY_Cyrillic_ef: number;

	const KEY_Cyrillic_el: number;

	const KEY_Cyrillic_em: number;

	const KEY_Cyrillic_en: number;

	const KEY_Cyrillic_en_descender: number;

	const KEY_Cyrillic_er: number;

	const KEY_Cyrillic_es: number;

	const KEY_Cyrillic_ghe: number;

	const KEY_Cyrillic_ghe_bar: number;

	const KEY_Cyrillic_ha: number;

	const KEY_Cyrillic_ha_descender: number;

	const KEY_Cyrillic_hardsign: number;

	const KEY_Cyrillic_i: number;

	const KEY_Cyrillic_i_macron: number;

	const KEY_Cyrillic_ie: number;

	const KEY_Cyrillic_io: number;

	const KEY_Cyrillic_je: number;

	const KEY_Cyrillic_ka: number;

	const KEY_Cyrillic_ka_descender: number;

	const KEY_Cyrillic_ka_vertstroke: number;

	const KEY_Cyrillic_lje: number;

	const KEY_Cyrillic_nje: number;

	const KEY_Cyrillic_o: number;

	const KEY_Cyrillic_o_bar: number;

	const KEY_Cyrillic_pe: number;

	const KEY_Cyrillic_schwa: number;

	const KEY_Cyrillic_sha: number;

	const KEY_Cyrillic_shcha: number;

	const KEY_Cyrillic_shha: number;

	const KEY_Cyrillic_shorti: number;

	const KEY_Cyrillic_softsign: number;

	const KEY_Cyrillic_te: number;

	const KEY_Cyrillic_tse: number;

	const KEY_Cyrillic_u: number;

	const KEY_Cyrillic_u_macron: number;

	const KEY_Cyrillic_u_straight: number;

	const KEY_Cyrillic_u_straight_bar: number;

	const KEY_Cyrillic_ve: number;

	const KEY_Cyrillic_ya: number;

	const KEY_Cyrillic_yeru: number;

	const KEY_Cyrillic_yu: number;

	const KEY_Cyrillic_ze: number;

	const KEY_Cyrillic_zhe: number;

	const KEY_Cyrillic_zhe_descender: number;

	const KEY_D: number;

	const KEY_DOS: number;

	const KEY_Dabovedot: number;

	const KEY_Dcaron: number;

	const KEY_Delete: number;

	const KEY_Display: number;

	const KEY_Documents: number;

	const KEY_DongSign: number;

	const KEY_Down: number;

	const KEY_Dstroke: number;

	const KEY_E: number;

	const KEY_ENG: number;

	const KEY_ETH: number;

	const KEY_EZH: number;

	const KEY_Eabovedot: number;

	const KEY_Eacute: number;

	const KEY_Ebelowdot: number;

	const KEY_Ecaron: number;

	const KEY_Ecircumflex: number;

	const KEY_Ecircumflexacute: number;

	const KEY_Ecircumflexbelowdot: number;

	const KEY_Ecircumflexgrave: number;

	const KEY_Ecircumflexhook: number;

	const KEY_Ecircumflextilde: number;

	const KEY_EcuSign: number;

	const KEY_Ediaeresis: number;

	const KEY_Egrave: number;

	const KEY_Ehook: number;

	const KEY_Eisu_Shift: number;

	const KEY_Eisu_toggle: number;

	const KEY_Eject: number;

	const KEY_Emacron: number;

	const KEY_End: number;

	const KEY_Eogonek: number;

	const KEY_Escape: number;

	const KEY_Eth: number;

	const KEY_Etilde: number;

	const KEY_EuroSign: number;

	const KEY_Excel: number;

	const KEY_Execute: number;

	const KEY_Explorer: number;

	const KEY_F: number;

	const KEY_F1: number;

	const KEY_F10: number;

	const KEY_F11: number;

	const KEY_F12: number;

	const KEY_F13: number;

	const KEY_F14: number;

	const KEY_F15: number;

	const KEY_F16: number;

	const KEY_F17: number;

	const KEY_F18: number;

	const KEY_F19: number;

	const KEY_F2: number;

	const KEY_F20: number;

	const KEY_F21: number;

	const KEY_F22: number;

	const KEY_F23: number;

	const KEY_F24: number;

	const KEY_F25: number;

	const KEY_F26: number;

	const KEY_F27: number;

	const KEY_F28: number;

	const KEY_F29: number;

	const KEY_F3: number;

	const KEY_F30: number;

	const KEY_F31: number;

	const KEY_F32: number;

	const KEY_F33: number;

	const KEY_F34: number;

	const KEY_F35: number;

	const KEY_F4: number;

	const KEY_F5: number;

	const KEY_F6: number;

	const KEY_F7: number;

	const KEY_F8: number;

	const KEY_F9: number;

	const KEY_FFrancSign: number;

	const KEY_Fabovedot: number;

	const KEY_Farsi_0: number;

	const KEY_Farsi_1: number;

	const KEY_Farsi_2: number;

	const KEY_Farsi_3: number;

	const KEY_Farsi_4: number;

	const KEY_Farsi_5: number;

	const KEY_Farsi_6: number;

	const KEY_Farsi_7: number;

	const KEY_Farsi_8: number;

	const KEY_Farsi_9: number;

	const KEY_Farsi_yeh: number;

	const KEY_Favorites: number;

	const KEY_Finance: number;

	const KEY_Find: number;

	const KEY_First_Virtual_Screen: number;

	const KEY_Forward: number;

	const KEY_FrameBack: number;

	const KEY_FrameForward: number;

	const KEY_G: number;

	const KEY_Gabovedot: number;

	const KEY_Game: number;

	const KEY_Gbreve: number;

	const KEY_Gcaron: number;

	const KEY_Gcedilla: number;

	const KEY_Gcircumflex: number;

	const KEY_Georgian_an: number;

	const KEY_Georgian_ban: number;

	const KEY_Georgian_can: number;

	const KEY_Georgian_char: number;

	const KEY_Georgian_chin: number;

	const KEY_Georgian_cil: number;

	const KEY_Georgian_don: number;

	const KEY_Georgian_en: number;

	const KEY_Georgian_fi: number;

	const KEY_Georgian_gan: number;

	const KEY_Georgian_ghan: number;

	const KEY_Georgian_hae: number;

	const KEY_Georgian_har: number;

	const KEY_Georgian_he: number;

	const KEY_Georgian_hie: number;

	const KEY_Georgian_hoe: number;

	const KEY_Georgian_in: number;

	const KEY_Georgian_jhan: number;

	const KEY_Georgian_jil: number;

	const KEY_Georgian_kan: number;

	const KEY_Georgian_khar: number;

	const KEY_Georgian_las: number;

	const KEY_Georgian_man: number;

	const KEY_Georgian_nar: number;

	const KEY_Georgian_on: number;

	const KEY_Georgian_par: number;

	const KEY_Georgian_phar: number;

	const KEY_Georgian_qar: number;

	const KEY_Georgian_rae: number;

	const KEY_Georgian_san: number;

	const KEY_Georgian_shin: number;

	const KEY_Georgian_tan: number;

	const KEY_Georgian_tar: number;

	const KEY_Georgian_un: number;

	const KEY_Georgian_vin: number;

	const KEY_Georgian_we: number;

	const KEY_Georgian_xan: number;

	const KEY_Georgian_zen: number;

	const KEY_Georgian_zhar: number;

	const KEY_Go: number;

	const KEY_Greek_ALPHA: number;

	const KEY_Greek_ALPHAaccent: number;

	const KEY_Greek_BETA: number;

	const KEY_Greek_CHI: number;

	const KEY_Greek_DELTA: number;

	const KEY_Greek_EPSILON: number;

	const KEY_Greek_EPSILONaccent: number;

	const KEY_Greek_ETA: number;

	const KEY_Greek_ETAaccent: number;

	const KEY_Greek_GAMMA: number;

	const KEY_Greek_IOTA: number;

	const KEY_Greek_IOTAaccent: number;

	const KEY_Greek_IOTAdiaeresis: number;

	const KEY_Greek_IOTAdieresis: number;

	const KEY_Greek_KAPPA: number;

	const KEY_Greek_LAMBDA: number;

	const KEY_Greek_LAMDA: number;

	const KEY_Greek_MU: number;

	const KEY_Greek_NU: number;

	const KEY_Greek_OMEGA: number;

	const KEY_Greek_OMEGAaccent: number;

	const KEY_Greek_OMICRON: number;

	const KEY_Greek_OMICRONaccent: number;

	const KEY_Greek_PHI: number;

	const KEY_Greek_PI: number;

	const KEY_Greek_PSI: number;

	const KEY_Greek_RHO: number;

	const KEY_Greek_SIGMA: number;

	const KEY_Greek_TAU: number;

	const KEY_Greek_THETA: number;

	const KEY_Greek_UPSILON: number;

	const KEY_Greek_UPSILONaccent: number;

	const KEY_Greek_UPSILONdieresis: number;

	const KEY_Greek_XI: number;

	const KEY_Greek_ZETA: number;

	const KEY_Greek_accentdieresis: number;

	const KEY_Greek_alpha: number;

	const KEY_Greek_alphaaccent: number;

	const KEY_Greek_beta: number;

	const KEY_Greek_chi: number;

	const KEY_Greek_delta: number;

	const KEY_Greek_epsilon: number;

	const KEY_Greek_epsilonaccent: number;

	const KEY_Greek_eta: number;

	const KEY_Greek_etaaccent: number;

	const KEY_Greek_finalsmallsigma: number;

	const KEY_Greek_gamma: number;

	const KEY_Greek_horizbar: number;

	const KEY_Greek_iota: number;

	const KEY_Greek_iotaaccent: number;

	const KEY_Greek_iotaaccentdieresis: number;

	const KEY_Greek_iotadieresis: number;

	const KEY_Greek_kappa: number;

	const KEY_Greek_lambda: number;

	const KEY_Greek_lamda: number;

	const KEY_Greek_mu: number;

	const KEY_Greek_nu: number;

	const KEY_Greek_omega: number;

	const KEY_Greek_omegaaccent: number;

	const KEY_Greek_omicron: number;

	const KEY_Greek_omicronaccent: number;

	const KEY_Greek_phi: number;

	const KEY_Greek_pi: number;

	const KEY_Greek_psi: number;

	const KEY_Greek_rho: number;

	const KEY_Greek_sigma: number;

	const KEY_Greek_switch: number;

	const KEY_Greek_tau: number;

	const KEY_Greek_theta: number;

	const KEY_Greek_upsilon: number;

	const KEY_Greek_upsilonaccent: number;

	const KEY_Greek_upsilonaccentdieresis: number;

	const KEY_Greek_upsilondieresis: number;

	const KEY_Greek_xi: number;

	const KEY_Greek_zeta: number;

	const KEY_Green: number;

	const KEY_H: number;

	const KEY_Hangul: number;

	const KEY_Hangul_A: number;

	const KEY_Hangul_AE: number;

	const KEY_Hangul_AraeA: number;

	const KEY_Hangul_AraeAE: number;

	const KEY_Hangul_Banja: number;

	const KEY_Hangul_Cieuc: number;

	const KEY_Hangul_Codeinput: number;

	const KEY_Hangul_Dikeud: number;

	const KEY_Hangul_E: number;

	const KEY_Hangul_EO: number;

	const KEY_Hangul_EU: number;

	const KEY_Hangul_End: number;

	const KEY_Hangul_Hanja: number;

	const KEY_Hangul_Hieuh: number;

	const KEY_Hangul_I: number;

	const KEY_Hangul_Ieung: number;

	const KEY_Hangul_J_Cieuc: number;

	const KEY_Hangul_J_Dikeud: number;

	const KEY_Hangul_J_Hieuh: number;

	const KEY_Hangul_J_Ieung: number;

	const KEY_Hangul_J_Jieuj: number;

	const KEY_Hangul_J_Khieuq: number;

	const KEY_Hangul_J_Kiyeog: number;

	const KEY_Hangul_J_KiyeogSios: number;

	const KEY_Hangul_J_KkogjiDalrinIeung: number;

	const KEY_Hangul_J_Mieum: number;

	const KEY_Hangul_J_Nieun: number;

	const KEY_Hangul_J_NieunHieuh: number;

	const KEY_Hangul_J_NieunJieuj: number;

	const KEY_Hangul_J_PanSios: number;

	const KEY_Hangul_J_Phieuf: number;

	const KEY_Hangul_J_Pieub: number;

	const KEY_Hangul_J_PieubSios: number;

	const KEY_Hangul_J_Rieul: number;

	const KEY_Hangul_J_RieulHieuh: number;

	const KEY_Hangul_J_RieulKiyeog: number;

	const KEY_Hangul_J_RieulMieum: number;

	const KEY_Hangul_J_RieulPhieuf: number;

	const KEY_Hangul_J_RieulPieub: number;

	const KEY_Hangul_J_RieulSios: number;

	const KEY_Hangul_J_RieulTieut: number;

	const KEY_Hangul_J_Sios: number;

	const KEY_Hangul_J_SsangKiyeog: number;

	const KEY_Hangul_J_SsangSios: number;

	const KEY_Hangul_J_Tieut: number;

	const KEY_Hangul_J_YeorinHieuh: number;

	const KEY_Hangul_Jamo: number;

	const KEY_Hangul_Jeonja: number;

	const KEY_Hangul_Jieuj: number;

	const KEY_Hangul_Khieuq: number;

	const KEY_Hangul_Kiyeog: number;

	const KEY_Hangul_KiyeogSios: number;

	const KEY_Hangul_KkogjiDalrinIeung: number;

	const KEY_Hangul_Mieum: number;

	const KEY_Hangul_MultipleCandidate: number;

	const KEY_Hangul_Nieun: number;

	const KEY_Hangul_NieunHieuh: number;

	const KEY_Hangul_NieunJieuj: number;

	const KEY_Hangul_O: number;

	const KEY_Hangul_OE: number;

	const KEY_Hangul_PanSios: number;

	const KEY_Hangul_Phieuf: number;

	const KEY_Hangul_Pieub: number;

	const KEY_Hangul_PieubSios: number;

	const KEY_Hangul_PostHanja: number;

	const KEY_Hangul_PreHanja: number;

	const KEY_Hangul_PreviousCandidate: number;

	const KEY_Hangul_Rieul: number;

	const KEY_Hangul_RieulHieuh: number;

	const KEY_Hangul_RieulKiyeog: number;

	const KEY_Hangul_RieulMieum: number;

	const KEY_Hangul_RieulPhieuf: number;

	const KEY_Hangul_RieulPieub: number;

	const KEY_Hangul_RieulSios: number;

	const KEY_Hangul_RieulTieut: number;

	const KEY_Hangul_RieulYeorinHieuh: number;

	const KEY_Hangul_Romaja: number;

	const KEY_Hangul_SingleCandidate: number;

	const KEY_Hangul_Sios: number;

	const KEY_Hangul_Special: number;

	const KEY_Hangul_SsangDikeud: number;

	const KEY_Hangul_SsangJieuj: number;

	const KEY_Hangul_SsangKiyeog: number;

	const KEY_Hangul_SsangPieub: number;

	const KEY_Hangul_SsangSios: number;

	const KEY_Hangul_Start: number;

	const KEY_Hangul_SunkyeongeumMieum: number;

	const KEY_Hangul_SunkyeongeumPhieuf: number;

	const KEY_Hangul_SunkyeongeumPieub: number;

	const KEY_Hangul_Tieut: number;

	const KEY_Hangul_U: number;

	const KEY_Hangul_WA: number;

	const KEY_Hangul_WAE: number;

	const KEY_Hangul_WE: number;

	const KEY_Hangul_WEO: number;

	const KEY_Hangul_WI: number;

	const KEY_Hangul_YA: number;

	const KEY_Hangul_YAE: number;

	const KEY_Hangul_YE: number;

	const KEY_Hangul_YEO: number;

	const KEY_Hangul_YI: number;

	const KEY_Hangul_YO: number;

	const KEY_Hangul_YU: number;

	const KEY_Hangul_YeorinHieuh: number;

	const KEY_Hangul_switch: number;

	const KEY_Hankaku: number;

	const KEY_Hcircumflex: number;

	const KEY_Hebrew_switch: number;

	const KEY_Help: number;

	const KEY_Henkan: number;

	const KEY_Henkan_Mode: number;

	const KEY_Hibernate: number;

	const KEY_Hiragana: number;

	const KEY_Hiragana_Katakana: number;

	const KEY_History: number;

	const KEY_Home: number;

	const KEY_HomePage: number;

	const KEY_HotLinks: number;

	const KEY_Hstroke: number;

	const KEY_Hyper_L: number;

	const KEY_Hyper_R: number;

	const KEY_I: number;

	const KEY_ISO_Center_Object: number;

	const KEY_ISO_Continuous_Underline: number;

	const KEY_ISO_Discontinuous_Underline: number;

	const KEY_ISO_Emphasize: number;

	const KEY_ISO_Enter: number;

	const KEY_ISO_Fast_Cursor_Down: number;

	const KEY_ISO_Fast_Cursor_Left: number;

	const KEY_ISO_Fast_Cursor_Right: number;

	const KEY_ISO_Fast_Cursor_Up: number;

	const KEY_ISO_First_Group: number;

	const KEY_ISO_First_Group_Lock: number;

	const KEY_ISO_Group_Latch: number;

	const KEY_ISO_Group_Lock: number;

	const KEY_ISO_Group_Shift: number;

	const KEY_ISO_Last_Group: number;

	const KEY_ISO_Last_Group_Lock: number;

	const KEY_ISO_Left_Tab: number;

	const KEY_ISO_Level2_Latch: number;

	const KEY_ISO_Level3_Latch: number;

	const KEY_ISO_Level3_Lock: number;

	const KEY_ISO_Level3_Shift: number;

	const KEY_ISO_Level5_Latch: number;

	const KEY_ISO_Level5_Lock: number;

	const KEY_ISO_Level5_Shift: number;

	const KEY_ISO_Lock: number;

	const KEY_ISO_Move_Line_Down: number;

	const KEY_ISO_Move_Line_Up: number;

	const KEY_ISO_Next_Group: number;

	const KEY_ISO_Next_Group_Lock: number;

	const KEY_ISO_Partial_Line_Down: number;

	const KEY_ISO_Partial_Line_Up: number;

	const KEY_ISO_Partial_Space_Left: number;

	const KEY_ISO_Partial_Space_Right: number;

	const KEY_ISO_Prev_Group: number;

	const KEY_ISO_Prev_Group_Lock: number;

	const KEY_ISO_Release_Both_Margins: number;

	const KEY_ISO_Release_Margin_Left: number;

	const KEY_ISO_Release_Margin_Right: number;

	const KEY_ISO_Set_Margin_Left: number;

	const KEY_ISO_Set_Margin_Right: number;

	const KEY_Iabovedot: number;

	const KEY_Iacute: number;

	const KEY_Ibelowdot: number;

	const KEY_Ibreve: number;

	const KEY_Icircumflex: number;

	const KEY_Idiaeresis: number;

	const KEY_Igrave: number;

	const KEY_Ihook: number;

	const KEY_Imacron: number;

	const KEY_Insert: number;

	const KEY_Iogonek: number;

	const KEY_Itilde: number;

	const KEY_J: number;

	const KEY_Jcircumflex: number;

	const KEY_K: number;

	const KEY_KP_0: number;

	const KEY_KP_1: number;

	const KEY_KP_2: number;

	const KEY_KP_3: number;

	const KEY_KP_4: number;

	const KEY_KP_5: number;

	const KEY_KP_6: number;

	const KEY_KP_7: number;

	const KEY_KP_8: number;

	const KEY_KP_9: number;

	const KEY_KP_Add: number;

	const KEY_KP_Begin: number;

	const KEY_KP_Decimal: number;

	const KEY_KP_Delete: number;

	const KEY_KP_Divide: number;

	const KEY_KP_Down: number;

	const KEY_KP_End: number;

	const KEY_KP_Enter: number;

	const KEY_KP_Equal: number;

	const KEY_KP_F1: number;

	const KEY_KP_F2: number;

	const KEY_KP_F3: number;

	const KEY_KP_F4: number;

	const KEY_KP_Home: number;

	const KEY_KP_Insert: number;

	const KEY_KP_Left: number;

	const KEY_KP_Multiply: number;

	const KEY_KP_Next: number;

	const KEY_KP_Page_Down: number;

	const KEY_KP_Page_Up: number;

	const KEY_KP_Prior: number;

	const KEY_KP_Right: number;

	const KEY_KP_Separator: number;

	const KEY_KP_Space: number;

	const KEY_KP_Subtract: number;

	const KEY_KP_Tab: number;

	const KEY_KP_Up: number;

	const KEY_Kana_Lock: number;

	const KEY_Kana_Shift: number;

	const KEY_Kanji: number;

	const KEY_Kanji_Bangou: number;

	const KEY_Katakana: number;

	const KEY_KbdBrightnessDown: number;

	const KEY_KbdBrightnessUp: number;

	const KEY_KbdLightOnOff: number;

	const KEY_Kcedilla: number;

	const KEY_Korean_Won: number;

	const KEY_L: number;

	const KEY_L1: number;

	const KEY_L10: number;

	const KEY_L2: number;

	const KEY_L3: number;

	const KEY_L4: number;

	const KEY_L5: number;

	const KEY_L6: number;

	const KEY_L7: number;

	const KEY_L8: number;

	const KEY_L9: number;

	const KEY_Lacute: number;

	const KEY_Last_Virtual_Screen: number;

	const KEY_Launch0: number;

	const KEY_Launch1: number;

	const KEY_Launch2: number;

	const KEY_Launch3: number;

	const KEY_Launch4: number;

	const KEY_Launch5: number;

	const KEY_Launch6: number;

	const KEY_Launch7: number;

	const KEY_Launch8: number;

	const KEY_Launch9: number;

	const KEY_LaunchA: number;

	const KEY_LaunchB: number;

	const KEY_LaunchC: number;

	const KEY_LaunchD: number;

	const KEY_LaunchE: number;

	const KEY_LaunchF: number;

	const KEY_Lbelowdot: number;

	const KEY_Lcaron: number;

	const KEY_Lcedilla: number;

	const KEY_Left: number;

	const KEY_LightBulb: number;

	const KEY_Linefeed: number;

	const KEY_LiraSign: number;

	const KEY_LogGrabInfo: number;

	const KEY_LogOff: number;

	const KEY_LogWindowTree: number;

	const KEY_Lstroke: number;

	const KEY_M: number;

	const KEY_Mabovedot: number;

	const KEY_Macedonia_DSE: number;

	const KEY_Macedonia_GJE: number;

	const KEY_Macedonia_KJE: number;

	const KEY_Macedonia_dse: number;

	const KEY_Macedonia_gje: number;

	const KEY_Macedonia_kje: number;

	const KEY_Mae_Koho: number;

	const KEY_Mail: number;

	const KEY_MailForward: number;

	const KEY_Market: number;

	const KEY_Massyo: number;

	const KEY_Meeting: number;

	const KEY_Memo: number;

	const KEY_Menu: number;

	const KEY_MenuKB: number;

	const KEY_MenuPB: number;

	const KEY_Messenger: number;

	const KEY_Meta_L: number;

	const KEY_Meta_R: number;

	const KEY_MillSign: number;

	const KEY_ModeLock: number;

	const KEY_Mode_switch: number;

	const KEY_MonBrightnessDown: number;

	const KEY_MonBrightnessUp: number;

	const KEY_MouseKeys_Accel_Enable: number;

	const KEY_MouseKeys_Enable: number;

	const KEY_Muhenkan: number;

	const KEY_Multi_key: number;

	const KEY_MultipleCandidate: number;

	const KEY_Music: number;

	const KEY_MyComputer: number;

	const KEY_MySites: number;

	const KEY_N: number;

	const KEY_Nacute: number;

	const KEY_NairaSign: number;

	const KEY_Ncaron: number;

	const KEY_Ncedilla: number;

	const KEY_New: number;

	const KEY_NewSheqelSign: number;

	const KEY_News: number;

	const KEY_Next: number;

	const KEY_Next_VMode: number;

	const KEY_Next_Virtual_Screen: number;

	const KEY_Ntilde: number;

	const KEY_Num_Lock: number;

	const KEY_O: number;

	const KEY_OE: number;

	const KEY_Oacute: number;

	const KEY_Obarred: number;

	const KEY_Obelowdot: number;

	const KEY_Ocaron: number;

	const KEY_Ocircumflex: number;

	const KEY_Ocircumflexacute: number;

	const KEY_Ocircumflexbelowdot: number;

	const KEY_Ocircumflexgrave: number;

	const KEY_Ocircumflexhook: number;

	const KEY_Ocircumflextilde: number;

	const KEY_Odiaeresis: number;

	const KEY_Odoubleacute: number;

	const KEY_OfficeHome: number;

	const KEY_Ograve: number;

	const KEY_Ohook: number;

	const KEY_Ohorn: number;

	const KEY_Ohornacute: number;

	const KEY_Ohornbelowdot: number;

	const KEY_Ohorngrave: number;

	const KEY_Ohornhook: number;

	const KEY_Ohorntilde: number;

	const KEY_Omacron: number;

	const KEY_Ooblique: number;

	const KEY_Open: number;

	const KEY_OpenURL: number;

	const KEY_Option: number;

	const KEY_Oslash: number;

	const KEY_Otilde: number;

	const KEY_Overlay1_Enable: number;

	const KEY_Overlay2_Enable: number;

	const KEY_P: number;

	const KEY_Pabovedot: number;

	const KEY_Page_Down: number;

	const KEY_Page_Up: number;

	const KEY_Paste: number;

	const KEY_Pause: number;

	const KEY_PesetaSign: number;

	const KEY_Phone: number;

	const KEY_Pictures: number;

	const KEY_Pointer_Accelerate: number;

	const KEY_Pointer_Button1: number;

	const KEY_Pointer_Button2: number;

	const KEY_Pointer_Button3: number;

	const KEY_Pointer_Button4: number;

	const KEY_Pointer_Button5: number;

	const KEY_Pointer_Button_Dflt: number;

	const KEY_Pointer_DblClick1: number;

	const KEY_Pointer_DblClick2: number;

	const KEY_Pointer_DblClick3: number;

	const KEY_Pointer_DblClick4: number;

	const KEY_Pointer_DblClick5: number;

	const KEY_Pointer_DblClick_Dflt: number;

	const KEY_Pointer_DfltBtnNext: number;

	const KEY_Pointer_DfltBtnPrev: number;

	const KEY_Pointer_Down: number;

	const KEY_Pointer_DownLeft: number;

	const KEY_Pointer_DownRight: number;

	const KEY_Pointer_Drag1: number;

	const KEY_Pointer_Drag2: number;

	const KEY_Pointer_Drag3: number;

	const KEY_Pointer_Drag4: number;

	const KEY_Pointer_Drag5: number;

	const KEY_Pointer_Drag_Dflt: number;

	const KEY_Pointer_EnableKeys: number;

	const KEY_Pointer_Left: number;

	const KEY_Pointer_Right: number;

	const KEY_Pointer_Up: number;

	const KEY_Pointer_UpLeft: number;

	const KEY_Pointer_UpRight: number;

	const KEY_PowerDown: number;

	const KEY_PowerOff: number;

	const KEY_Prev_VMode: number;

	const KEY_Prev_Virtual_Screen: number;

	const KEY_PreviousCandidate: number;

	const KEY_Print: number;

	const KEY_Prior: number;

	const KEY_Q: number;

	const KEY_R: number;

	const KEY_R1: number;

	const KEY_R10: number;

	const KEY_R11: number;

	const KEY_R12: number;

	const KEY_R13: number;

	const KEY_R14: number;

	const KEY_R15: number;

	const KEY_R2: number;

	const KEY_R3: number;

	const KEY_R4: number;

	const KEY_R5: number;

	const KEY_R6: number;

	const KEY_R7: number;

	const KEY_R8: number;

	const KEY_R9: number;

	const KEY_Racute: number;

	const KEY_Rcaron: number;

	const KEY_Rcedilla: number;

	const KEY_Red: number;

	const KEY_Redo: number;

	const KEY_Refresh: number;

	const KEY_Reload: number;

	const KEY_RepeatKeys_Enable: number;

	const KEY_Reply: number;

	const KEY_Return: number;

	const KEY_Right: number;

	const KEY_RockerDown: number;

	const KEY_RockerEnter: number;

	const KEY_RockerUp: number;

	const KEY_Romaji: number;

	const KEY_RotateWindows: number;

	const KEY_RotationKB: number;

	const KEY_RotationPB: number;

	const KEY_RupeeSign: number;

	const KEY_S: number;

	const KEY_SCHWA: number;

	const KEY_Sabovedot: number;

	const KEY_Sacute: number;

	const KEY_Save: number;

	const KEY_Scaron: number;

	const KEY_Scedilla: number;

	const KEY_Scircumflex: number;

	const KEY_ScreenSaver: number;

	const KEY_ScrollClick: number;

	const KEY_ScrollDown: number;

	const KEY_ScrollUp: number;

	const KEY_Scroll_Lock: number;

	const KEY_Search: number;

	const KEY_Select: number;

	const KEY_SelectButton: number;

	const KEY_Send: number;

	const KEY_Serbian_DJE: number;

	const KEY_Serbian_DZE: number;

	const KEY_Serbian_JE: number;

	const KEY_Serbian_LJE: number;

	const KEY_Serbian_NJE: number;

	const KEY_Serbian_TSHE: number;

	const KEY_Serbian_dje: number;

	const KEY_Serbian_dze: number;

	const KEY_Serbian_je: number;

	const KEY_Serbian_lje: number;

	const KEY_Serbian_nje: number;

	const KEY_Serbian_tshe: number;

	const KEY_Shift_L: number;

	const KEY_Shift_Lock: number;

	const KEY_Shift_R: number;

	const KEY_Shop: number;

	const KEY_SingleCandidate: number;

	const KEY_Sinh_a: number;

	const KEY_Sinh_aa: number;

	const KEY_Sinh_aa2: number;

	const KEY_Sinh_ae: number;

	const KEY_Sinh_ae2: number;

	const KEY_Sinh_aee: number;

	const KEY_Sinh_aee2: number;

	const KEY_Sinh_ai: number;

	const KEY_Sinh_ai2: number;

	const KEY_Sinh_al: number;

	const KEY_Sinh_au: number;

	const KEY_Sinh_au2: number;

	const KEY_Sinh_ba: number;

	const KEY_Sinh_bha: number;

	const KEY_Sinh_ca: number;

	const KEY_Sinh_cha: number;

	const KEY_Sinh_dda: number;

	const KEY_Sinh_ddha: number;

	const KEY_Sinh_dha: number;

	const KEY_Sinh_dhha: number;

	const KEY_Sinh_e: number;

	const KEY_Sinh_e2: number;

	const KEY_Sinh_ee: number;

	const KEY_Sinh_ee2: number;

	const KEY_Sinh_fa: number;

	const KEY_Sinh_ga: number;

	const KEY_Sinh_gha: number;

	const KEY_Sinh_h2: number;

	const KEY_Sinh_ha: number;

	const KEY_Sinh_i: number;

	const KEY_Sinh_i2: number;

	const KEY_Sinh_ii: number;

	const KEY_Sinh_ii2: number;

	const KEY_Sinh_ja: number;

	const KEY_Sinh_jha: number;

	const KEY_Sinh_jnya: number;

	const KEY_Sinh_ka: number;

	const KEY_Sinh_kha: number;

	const KEY_Sinh_kunddaliya: number;

	const KEY_Sinh_la: number;

	const KEY_Sinh_lla: number;

	const KEY_Sinh_lu: number;

	const KEY_Sinh_lu2: number;

	const KEY_Sinh_luu: number;

	const KEY_Sinh_luu2: number;

	const KEY_Sinh_ma: number;

	const KEY_Sinh_mba: number;

	const KEY_Sinh_na: number;

	const KEY_Sinh_ndda: number;

	const KEY_Sinh_ndha: number;

	const KEY_Sinh_ng: number;

	const KEY_Sinh_ng2: number;

	const KEY_Sinh_nga: number;

	const KEY_Sinh_nja: number;

	const KEY_Sinh_nna: number;

	const KEY_Sinh_nya: number;

	const KEY_Sinh_o: number;

	const KEY_Sinh_o2: number;

	const KEY_Sinh_oo: number;

	const KEY_Sinh_oo2: number;

	const KEY_Sinh_pa: number;

	const KEY_Sinh_pha: number;

	const KEY_Sinh_ra: number;

	const KEY_Sinh_ri: number;

	const KEY_Sinh_rii: number;

	const KEY_Sinh_ru2: number;

	const KEY_Sinh_ruu2: number;

	const KEY_Sinh_sa: number;

	const KEY_Sinh_sha: number;

	const KEY_Sinh_ssha: number;

	const KEY_Sinh_tha: number;

	const KEY_Sinh_thha: number;

	const KEY_Sinh_tta: number;

	const KEY_Sinh_ttha: number;

	const KEY_Sinh_u: number;

	const KEY_Sinh_u2: number;

	const KEY_Sinh_uu: number;

	const KEY_Sinh_uu2: number;

	const KEY_Sinh_va: number;

	const KEY_Sinh_ya: number;

	const KEY_Sleep: number;

	const KEY_SlowKeys_Enable: number;

	const KEY_Spell: number;

	const KEY_SplitScreen: number;

	const KEY_Standby: number;

	const KEY_Start: number;

	const KEY_StickyKeys_Enable: number;

	const KEY_Stop: number;

	const KEY_Subtitle: number;

	const KEY_Super_L: number;

	const KEY_Super_R: number;

	const KEY_Support: number;

	const KEY_Suspend: number;

	const KEY_Switch_VT_1: number;

	const KEY_Switch_VT_10: number;

	const KEY_Switch_VT_11: number;

	const KEY_Switch_VT_12: number;

	const KEY_Switch_VT_2: number;

	const KEY_Switch_VT_3: number;

	const KEY_Switch_VT_4: number;

	const KEY_Switch_VT_5: number;

	const KEY_Switch_VT_6: number;

	const KEY_Switch_VT_7: number;

	const KEY_Switch_VT_8: number;

	const KEY_Switch_VT_9: number;

	const KEY_Sys_Req: number;

	const KEY_T: number;

	const KEY_THORN: number;

	const KEY_Tab: number;

	const KEY_Tabovedot: number;

	const KEY_TaskPane: number;

	const KEY_Tcaron: number;

	const KEY_Tcedilla: number;

	const KEY_Terminal: number;

	const KEY_Terminate_Server: number;

	const KEY_Thai_baht: number;

	const KEY_Thai_bobaimai: number;

	const KEY_Thai_chochan: number;

	const KEY_Thai_chochang: number;

	const KEY_Thai_choching: number;

	const KEY_Thai_chochoe: number;

	const KEY_Thai_dochada: number;

	const KEY_Thai_dodek: number;

	const KEY_Thai_fofa: number;

	const KEY_Thai_fofan: number;

	const KEY_Thai_hohip: number;

	const KEY_Thai_honokhuk: number;

	const KEY_Thai_khokhai: number;

	const KEY_Thai_khokhon: number;

	const KEY_Thai_khokhuat: number;

	const KEY_Thai_khokhwai: number;

	const KEY_Thai_khorakhang: number;

	const KEY_Thai_kokai: number;

	const KEY_Thai_lakkhangyao: number;

	const KEY_Thai_lekchet: number;

	const KEY_Thai_lekha: number;

	const KEY_Thai_lekhok: number;

	const KEY_Thai_lekkao: number;

	const KEY_Thai_leknung: number;

	const KEY_Thai_lekpaet: number;

	const KEY_Thai_leksam: number;

	const KEY_Thai_leksi: number;

	const KEY_Thai_leksong: number;

	const KEY_Thai_leksun: number;

	const KEY_Thai_lochula: number;

	const KEY_Thai_loling: number;

	const KEY_Thai_lu: number;

	const KEY_Thai_maichattawa: number;

	const KEY_Thai_maiek: number;

	const KEY_Thai_maihanakat: number;

	const KEY_Thai_maihanakat_maitho: number;

	const KEY_Thai_maitaikhu: number;

	const KEY_Thai_maitho: number;

	const KEY_Thai_maitri: number;

	const KEY_Thai_maiyamok: number;

	const KEY_Thai_moma: number;

	const KEY_Thai_ngongu: number;

	const KEY_Thai_nikhahit: number;

	const KEY_Thai_nonen: number;

	const KEY_Thai_nonu: number;

	const KEY_Thai_oang: number;

	const KEY_Thai_paiyannoi: number;

	const KEY_Thai_phinthu: number;

	const KEY_Thai_phophan: number;

	const KEY_Thai_phophung: number;

	const KEY_Thai_phosamphao: number;

	const KEY_Thai_popla: number;

	const KEY_Thai_rorua: number;

	const KEY_Thai_ru: number;

	const KEY_Thai_saraa: number;

	const KEY_Thai_saraaa: number;

	const KEY_Thai_saraae: number;

	const KEY_Thai_saraaimaimalai: number;

	const KEY_Thai_saraaimaimuan: number;

	const KEY_Thai_saraam: number;

	const KEY_Thai_sarae: number;

	const KEY_Thai_sarai: number;

	const KEY_Thai_saraii: number;

	const KEY_Thai_sarao: number;

	const KEY_Thai_sarau: number;

	const KEY_Thai_saraue: number;

	const KEY_Thai_sarauee: number;

	const KEY_Thai_sarauu: number;

	const KEY_Thai_sorusi: number;

	const KEY_Thai_sosala: number;

	const KEY_Thai_soso: number;

	const KEY_Thai_sosua: number;

	const KEY_Thai_thanthakhat: number;

	const KEY_Thai_thonangmontho: number;

	const KEY_Thai_thophuthao: number;

	const KEY_Thai_thothahan: number;

	const KEY_Thai_thothan: number;

	const KEY_Thai_thothong: number;

	const KEY_Thai_thothung: number;

	const KEY_Thai_topatak: number;

	const KEY_Thai_totao: number;

	const KEY_Thai_wowaen: number;

	const KEY_Thai_yoyak: number;

	const KEY_Thai_yoying: number;

	const KEY_Thorn: number;

	const KEY_Time: number;

	const KEY_ToDoList: number;

	const KEY_Tools: number;

	const KEY_TopMenu: number;

	const KEY_TouchpadOff: number;

	const KEY_TouchpadOn: number;

	const KEY_TouchpadToggle: number;

	const KEY_Touroku: number;

	const KEY_Travel: number;

	const KEY_Tslash: number;

	const KEY_U: number;

	const KEY_UWB: number;

	const KEY_Uacute: number;

	const KEY_Ubelowdot: number;

	const KEY_Ubreve: number;

	const KEY_Ucircumflex: number;

	const KEY_Udiaeresis: number;

	const KEY_Udoubleacute: number;

	const KEY_Ugrave: number;

	const KEY_Uhook: number;

	const KEY_Uhorn: number;

	const KEY_Uhornacute: number;

	const KEY_Uhornbelowdot: number;

	const KEY_Uhorngrave: number;

	const KEY_Uhornhook: number;

	const KEY_Uhorntilde: number;

	const KEY_Ukrainian_GHE_WITH_UPTURN: number;

	const KEY_Ukrainian_I: number;

	const KEY_Ukrainian_IE: number;

	const KEY_Ukrainian_YI: number;

	const KEY_Ukrainian_ghe_with_upturn: number;

	const KEY_Ukrainian_i: number;

	const KEY_Ukrainian_ie: number;

	const KEY_Ukrainian_yi: number;

	const KEY_Ukranian_I: number;

	const KEY_Ukranian_JE: number;

	const KEY_Ukranian_YI: number;

	const KEY_Ukranian_i: number;

	const KEY_Ukranian_je: number;

	const KEY_Ukranian_yi: number;

	const KEY_Umacron: number;

	const KEY_Undo: number;

	const KEY_Ungrab: number;

	const KEY_Uogonek: number;

	const KEY_Up: number;

	const KEY_Uring: number;

	const KEY_User1KB: number;

	const KEY_User2KB: number;

	const KEY_UserPB: number;

	const KEY_Utilde: number;

	const KEY_V: number;

	const KEY_VendorHome: number;

	const KEY_Video: number;

	const KEY_View: number;

	const KEY_VoidSymbol: number;

	const KEY_W: number;

	const KEY_WLAN: number;

	const KEY_WWW: number;

	const KEY_Wacute: number;

	const KEY_WakeUp: number;

	const KEY_Wcircumflex: number;

	const KEY_Wdiaeresis: number;

	const KEY_WebCam: number;

	const KEY_Wgrave: number;

	const KEY_WheelButton: number;

	const KEY_WindowClear: number;

	const KEY_WonSign: number;

	const KEY_Word: number;

	const KEY_X: number;

	const KEY_Xabovedot: number;

	const KEY_Xfer: number;

	const KEY_Y: number;

	const KEY_Yacute: number;

	const KEY_Ybelowdot: number;

	const KEY_Ycircumflex: number;

	const KEY_Ydiaeresis: number;

	const KEY_Yellow: number;

	const KEY_Ygrave: number;

	const KEY_Yhook: number;

	const KEY_Ytilde: number;

	const KEY_Z: number;

	const KEY_Zabovedot: number;

	const KEY_Zacute: number;

	const KEY_Zcaron: number;

	const KEY_Zen_Koho: number;

	const KEY_Zenkaku: number;

	const KEY_Zenkaku_Hankaku: number;

	const KEY_ZoomIn: number;

	const KEY_ZoomOut: number;

	const KEY_Zstroke: number;

	const KEY_a: number;

	const KEY_aacute: number;

	const KEY_abelowdot: number;

	const KEY_abovedot: number;

	const KEY_abreve: number;

	const KEY_abreveacute: number;

	const KEY_abrevebelowdot: number;

	const KEY_abrevegrave: number;

	const KEY_abrevehook: number;

	const KEY_abrevetilde: number;

	const KEY_acircumflex: number;

	const KEY_acircumflexacute: number;

	const KEY_acircumflexbelowdot: number;

	const KEY_acircumflexgrave: number;

	const KEY_acircumflexhook: number;

	const KEY_acircumflextilde: number;

	const KEY_acute: number;

	const KEY_adiaeresis: number;

	const KEY_ae: number;

	const KEY_agrave: number;

	const KEY_ahook: number;

	const KEY_amacron: number;

	const KEY_ampersand: number;

	const KEY_aogonek: number;

	const KEY_apostrophe: number;

	const KEY_approxeq: number;

	const KEY_approximate: number;

	const KEY_aring: number;

	const KEY_asciicircum: number;

	const KEY_asciitilde: number;

	const KEY_asterisk: number;

	const KEY_at: number;

	const KEY_atilde: number;

	const KEY_b: number;

	const KEY_babovedot: number;

	const KEY_backslash: number;

	const KEY_ballotcross: number;

	const KEY_bar: number;

	const KEY_because: number;

	const KEY_blank: number;

	const KEY_botintegral: number;

	const KEY_botleftparens: number;

	const KEY_botleftsqbracket: number;

	const KEY_botleftsummation: number;

	const KEY_botrightparens: number;

	const KEY_botrightsqbracket: number;

	const KEY_botrightsummation: number;

	const KEY_bott: number;

	const KEY_botvertsummationconnector: number;

	const KEY_braceleft: number;

	const KEY_braceright: number;

	const KEY_bracketleft: number;

	const KEY_bracketright: number;

	const KEY_braille_blank: number;

	const KEY_braille_dot_1: number;

	const KEY_braille_dot_10: number;

	const KEY_braille_dot_2: number;

	const KEY_braille_dot_3: number;

	const KEY_braille_dot_4: number;

	const KEY_braille_dot_5: number;

	const KEY_braille_dot_6: number;

	const KEY_braille_dot_7: number;

	const KEY_braille_dot_8: number;

	const KEY_braille_dot_9: number;

	const KEY_braille_dots_1: number;

	const KEY_braille_dots_12: number;

	const KEY_braille_dots_123: number;

	const KEY_braille_dots_1234: number;

	const KEY_braille_dots_12345: number;

	const KEY_braille_dots_123456: number;

	const KEY_braille_dots_1234567: number;

	const KEY_braille_dots_12345678: number;

	const KEY_braille_dots_1234568: number;

	const KEY_braille_dots_123457: number;

	const KEY_braille_dots_1234578: number;

	const KEY_braille_dots_123458: number;

	const KEY_braille_dots_12346: number;

	const KEY_braille_dots_123467: number;

	const KEY_braille_dots_1234678: number;

	const KEY_braille_dots_123468: number;

	const KEY_braille_dots_12347: number;

	const KEY_braille_dots_123478: number;

	const KEY_braille_dots_12348: number;

	const KEY_braille_dots_1235: number;

	const KEY_braille_dots_12356: number;

	const KEY_braille_dots_123567: number;

	const KEY_braille_dots_1235678: number;

	const KEY_braille_dots_123568: number;

	const KEY_braille_dots_12357: number;

	const KEY_braille_dots_123578: number;

	const KEY_braille_dots_12358: number;

	const KEY_braille_dots_1236: number;

	const KEY_braille_dots_12367: number;

	const KEY_braille_dots_123678: number;

	const KEY_braille_dots_12368: number;

	const KEY_braille_dots_1237: number;

	const KEY_braille_dots_12378: number;

	const KEY_braille_dots_1238: number;

	const KEY_braille_dots_124: number;

	const KEY_braille_dots_1245: number;

	const KEY_braille_dots_12456: number;

	const KEY_braille_dots_124567: number;

	const KEY_braille_dots_1245678: number;

	const KEY_braille_dots_124568: number;

	const KEY_braille_dots_12457: number;

	const KEY_braille_dots_124578: number;

	const KEY_braille_dots_12458: number;

	const KEY_braille_dots_1246: number;

	const KEY_braille_dots_12467: number;

	const KEY_braille_dots_124678: number;

	const KEY_braille_dots_12468: number;

	const KEY_braille_dots_1247: number;

	const KEY_braille_dots_12478: number;

	const KEY_braille_dots_1248: number;

	const KEY_braille_dots_125: number;

	const KEY_braille_dots_1256: number;

	const KEY_braille_dots_12567: number;

	const KEY_braille_dots_125678: number;

	const KEY_braille_dots_12568: number;

	const KEY_braille_dots_1257: number;

	const KEY_braille_dots_12578: number;

	const KEY_braille_dots_1258: number;

	const KEY_braille_dots_126: number;

	const KEY_braille_dots_1267: number;

	const KEY_braille_dots_12678: number;

	const KEY_braille_dots_1268: number;

	const KEY_braille_dots_127: number;

	const KEY_braille_dots_1278: number;

	const KEY_braille_dots_128: number;

	const KEY_braille_dots_13: number;

	const KEY_braille_dots_134: number;

	const KEY_braille_dots_1345: number;

	const KEY_braille_dots_13456: number;

	const KEY_braille_dots_134567: number;

	const KEY_braille_dots_1345678: number;

	const KEY_braille_dots_134568: number;

	const KEY_braille_dots_13457: number;

	const KEY_braille_dots_134578: number;

	const KEY_braille_dots_13458: number;

	const KEY_braille_dots_1346: number;

	const KEY_braille_dots_13467: number;

	const KEY_braille_dots_134678: number;

	const KEY_braille_dots_13468: number;

	const KEY_braille_dots_1347: number;

	const KEY_braille_dots_13478: number;

	const KEY_braille_dots_1348: number;

	const KEY_braille_dots_135: number;

	const KEY_braille_dots_1356: number;

	const KEY_braille_dots_13567: number;

	const KEY_braille_dots_135678: number;

	const KEY_braille_dots_13568: number;

	const KEY_braille_dots_1357: number;

	const KEY_braille_dots_13578: number;

	const KEY_braille_dots_1358: number;

	const KEY_braille_dots_136: number;

	const KEY_braille_dots_1367: number;

	const KEY_braille_dots_13678: number;

	const KEY_braille_dots_1368: number;

	const KEY_braille_dots_137: number;

	const KEY_braille_dots_1378: number;

	const KEY_braille_dots_138: number;

	const KEY_braille_dots_14: number;

	const KEY_braille_dots_145: number;

	const KEY_braille_dots_1456: number;

	const KEY_braille_dots_14567: number;

	const KEY_braille_dots_145678: number;

	const KEY_braille_dots_14568: number;

	const KEY_braille_dots_1457: number;

	const KEY_braille_dots_14578: number;

	const KEY_braille_dots_1458: number;

	const KEY_braille_dots_146: number;

	const KEY_braille_dots_1467: number;

	const KEY_braille_dots_14678: number;

	const KEY_braille_dots_1468: number;

	const KEY_braille_dots_147: number;

	const KEY_braille_dots_1478: number;

	const KEY_braille_dots_148: number;

	const KEY_braille_dots_15: number;

	const KEY_braille_dots_156: number;

	const KEY_braille_dots_1567: number;

	const KEY_braille_dots_15678: number;

	const KEY_braille_dots_1568: number;

	const KEY_braille_dots_157: number;

	const KEY_braille_dots_1578: number;

	const KEY_braille_dots_158: number;

	const KEY_braille_dots_16: number;

	const KEY_braille_dots_167: number;

	const KEY_braille_dots_1678: number;

	const KEY_braille_dots_168: number;

	const KEY_braille_dots_17: number;

	const KEY_braille_dots_178: number;

	const KEY_braille_dots_18: number;

	const KEY_braille_dots_2: number;

	const KEY_braille_dots_23: number;

	const KEY_braille_dots_234: number;

	const KEY_braille_dots_2345: number;

	const KEY_braille_dots_23456: number;

	const KEY_braille_dots_234567: number;

	const KEY_braille_dots_2345678: number;

	const KEY_braille_dots_234568: number;

	const KEY_braille_dots_23457: number;

	const KEY_braille_dots_234578: number;

	const KEY_braille_dots_23458: number;

	const KEY_braille_dots_2346: number;

	const KEY_braille_dots_23467: number;

	const KEY_braille_dots_234678: number;

	const KEY_braille_dots_23468: number;

	const KEY_braille_dots_2347: number;

	const KEY_braille_dots_23478: number;

	const KEY_braille_dots_2348: number;

	const KEY_braille_dots_235: number;

	const KEY_braille_dots_2356: number;

	const KEY_braille_dots_23567: number;

	const KEY_braille_dots_235678: number;

	const KEY_braille_dots_23568: number;

	const KEY_braille_dots_2357: number;

	const KEY_braille_dots_23578: number;

	const KEY_braille_dots_2358: number;

	const KEY_braille_dots_236: number;

	const KEY_braille_dots_2367: number;

	const KEY_braille_dots_23678: number;

	const KEY_braille_dots_2368: number;

	const KEY_braille_dots_237: number;

	const KEY_braille_dots_2378: number;

	const KEY_braille_dots_238: number;

	const KEY_braille_dots_24: number;

	const KEY_braille_dots_245: number;

	const KEY_braille_dots_2456: number;

	const KEY_braille_dots_24567: number;

	const KEY_braille_dots_245678: number;

	const KEY_braille_dots_24568: number;

	const KEY_braille_dots_2457: number;

	const KEY_braille_dots_24578: number;

	const KEY_braille_dots_2458: number;

	const KEY_braille_dots_246: number;

	const KEY_braille_dots_2467: number;

	const KEY_braille_dots_24678: number;

	const KEY_braille_dots_2468: number;

	const KEY_braille_dots_247: number;

	const KEY_braille_dots_2478: number;

	const KEY_braille_dots_248: number;

	const KEY_braille_dots_25: number;

	const KEY_braille_dots_256: number;

	const KEY_braille_dots_2567: number;

	const KEY_braille_dots_25678: number;

	const KEY_braille_dots_2568: number;

	const KEY_braille_dots_257: number;

	const KEY_braille_dots_2578: number;

	const KEY_braille_dots_258: number;

	const KEY_braille_dots_26: number;

	const KEY_braille_dots_267: number;

	const KEY_braille_dots_2678: number;

	const KEY_braille_dots_268: number;

	const KEY_braille_dots_27: number;

	const KEY_braille_dots_278: number;

	const KEY_braille_dots_28: number;

	const KEY_braille_dots_3: number;

	const KEY_braille_dots_34: number;

	const KEY_braille_dots_345: number;

	const KEY_braille_dots_3456: number;

	const KEY_braille_dots_34567: number;

	const KEY_braille_dots_345678: number;

	const KEY_braille_dots_34568: number;

	const KEY_braille_dots_3457: number;

	const KEY_braille_dots_34578: number;

	const KEY_braille_dots_3458: number;

	const KEY_braille_dots_346: number;

	const KEY_braille_dots_3467: number;

	const KEY_braille_dots_34678: number;

	const KEY_braille_dots_3468: number;

	const KEY_braille_dots_347: number;

	const KEY_braille_dots_3478: number;

	const KEY_braille_dots_348: number;

	const KEY_braille_dots_35: number;

	const KEY_braille_dots_356: number;

	const KEY_braille_dots_3567: number;

	const KEY_braille_dots_35678: number;

	const KEY_braille_dots_3568: number;

	const KEY_braille_dots_357: number;

	const KEY_braille_dots_3578: number;

	const KEY_braille_dots_358: number;

	const KEY_braille_dots_36: number;

	const KEY_braille_dots_367: number;

	const KEY_braille_dots_3678: number;

	const KEY_braille_dots_368: number;

	const KEY_braille_dots_37: number;

	const KEY_braille_dots_378: number;

	const KEY_braille_dots_38: number;

	const KEY_braille_dots_4: number;

	const KEY_braille_dots_45: number;

	const KEY_braille_dots_456: number;

	const KEY_braille_dots_4567: number;

	const KEY_braille_dots_45678: number;

	const KEY_braille_dots_4568: number;

	const KEY_braille_dots_457: number;

	const KEY_braille_dots_4578: number;

	const KEY_braille_dots_458: number;

	const KEY_braille_dots_46: number;

	const KEY_braille_dots_467: number;

	const KEY_braille_dots_4678: number;

	const KEY_braille_dots_468: number;

	const KEY_braille_dots_47: number;

	const KEY_braille_dots_478: number;

	const KEY_braille_dots_48: number;

	const KEY_braille_dots_5: number;

	const KEY_braille_dots_56: number;

	const KEY_braille_dots_567: number;

	const KEY_braille_dots_5678: number;

	const KEY_braille_dots_568: number;

	const KEY_braille_dots_57: number;

	const KEY_braille_dots_578: number;

	const KEY_braille_dots_58: number;

	const KEY_braille_dots_6: number;

	const KEY_braille_dots_67: number;

	const KEY_braille_dots_678: number;

	const KEY_braille_dots_68: number;

	const KEY_braille_dots_7: number;

	const KEY_braille_dots_78: number;

	const KEY_braille_dots_8: number;

	const KEY_breve: number;

	const KEY_brokenbar: number;

	const KEY_c: number;

	const KEY_c_h: number;

	const KEY_cabovedot: number;

	const KEY_cacute: number;

	const KEY_careof: number;

	const KEY_caret: number;

	const KEY_caron: number;

	const KEY_ccaron: number;

	const KEY_ccedilla: number;

	const KEY_ccircumflex: number;

	const KEY_cedilla: number;

	const KEY_cent: number;

	const KEY_ch: number;

	const KEY_checkerboard: number;

	const KEY_checkmark: number;

	const KEY_circle: number;

	const KEY_club: number;

	const KEY_colon: number;

	const KEY_comma: number;

	const KEY_containsas: number;

	const KEY_copyright: number;

	const KEY_cr: number;

	const KEY_crossinglines: number;

	const KEY_cuberoot: number;

	const KEY_currency: number;

	const KEY_cursor: number;

	const KEY_d: number;

	const KEY_dabovedot: number;

	const KEY_dagger: number;

	const KEY_dcaron: number;

	const KEY_dead_A: number;

	const KEY_dead_E: number;

	const KEY_dead_I: number;

	const KEY_dead_O: number;

	const KEY_dead_U: number;

	const KEY_dead_a: number;

	const KEY_dead_abovecomma: number;

	const KEY_dead_abovedot: number;

	const KEY_dead_abovereversedcomma: number;

	const KEY_dead_abovering: number;

	const KEY_dead_aboveverticalline: number;

	const KEY_dead_acute: number;

	const KEY_dead_belowbreve: number;

	const KEY_dead_belowcircumflex: number;

	const KEY_dead_belowcomma: number;

	const KEY_dead_belowdiaeresis: number;

	const KEY_dead_belowdot: number;

	const KEY_dead_belowmacron: number;

	const KEY_dead_belowring: number;

	const KEY_dead_belowtilde: number;

	const KEY_dead_belowverticalline: number;

	const KEY_dead_breve: number;

	const KEY_dead_capital_schwa: number;

	const KEY_dead_caron: number;

	const KEY_dead_cedilla: number;

	const KEY_dead_circumflex: number;

	const KEY_dead_currency: number;

	const KEY_dead_dasia: number;

	const KEY_dead_diaeresis: number;

	const KEY_dead_doubleacute: number;

	const KEY_dead_doublegrave: number;

	const KEY_dead_e: number;

	const KEY_dead_grave: number;

	const KEY_dead_greek: number;

	const KEY_dead_hook: number;

	const KEY_dead_horn: number;

	const KEY_dead_i: number;

	const KEY_dead_invertedbreve: number;

	const KEY_dead_iota: number;

	const KEY_dead_longsolidusoverlay: number;

	const KEY_dead_lowline: number;

	const KEY_dead_macron: number;

	const KEY_dead_o: number;

	const KEY_dead_ogonek: number;

	const KEY_dead_perispomeni: number;

	const KEY_dead_psili: number;

	const KEY_dead_semivoiced_sound: number;

	const KEY_dead_small_schwa: number;

	const KEY_dead_stroke: number;

	const KEY_dead_tilde: number;

	const KEY_dead_u: number;

	const KEY_dead_voiced_sound: number;

	const KEY_decimalpoint: number;

	const KEY_degree: number;

	const KEY_diaeresis: number;

	const KEY_diamond: number;

	const KEY_digitspace: number;

	const KEY_dintegral: number;

	const KEY_division: number;

	const KEY_dollar: number;

	const KEY_doubbaselinedot: number;

	const KEY_doubleacute: number;

	const KEY_doubledagger: number;

	const KEY_doublelowquotemark: number;

	const KEY_downarrow: number;

	const KEY_downcaret: number;

	const KEY_downshoe: number;

	const KEY_downstile: number;

	const KEY_downtack: number;

	const KEY_dstroke: number;

	const KEY_e: number;

	const KEY_eabovedot: number;

	const KEY_eacute: number;

	const KEY_ebelowdot: number;

	const KEY_ecaron: number;

	const KEY_ecircumflex: number;

	const KEY_ecircumflexacute: number;

	const KEY_ecircumflexbelowdot: number;

	const KEY_ecircumflexgrave: number;

	const KEY_ecircumflexhook: number;

	const KEY_ecircumflextilde: number;

	const KEY_ediaeresis: number;

	const KEY_egrave: number;

	const KEY_ehook: number;

	const KEY_eightsubscript: number;

	const KEY_eightsuperior: number;

	const KEY_elementof: number;

	const KEY_ellipsis: number;

	const KEY_em3space: number;

	const KEY_em4space: number;

	const KEY_emacron: number;

	const KEY_emdash: number;

	const KEY_emfilledcircle: number;

	const KEY_emfilledrect: number;

	const KEY_emopencircle: number;

	const KEY_emopenrectangle: number;

	const KEY_emptyset: number;

	const KEY_emspace: number;

	const KEY_endash: number;

	const KEY_enfilledcircbullet: number;

	const KEY_enfilledsqbullet: number;

	const KEY_eng: number;

	const KEY_enopencircbullet: number;

	const KEY_enopensquarebullet: number;

	const KEY_enspace: number;

	const KEY_eogonek: number;

	const KEY_equal: number;

	const KEY_eth: number;

	const KEY_etilde: number;

	const KEY_exclam: number;

	const KEY_exclamdown: number;

	const KEY_ezh: number;

	const KEY_f: number;

	const KEY_fabovedot: number;

	const KEY_femalesymbol: number;

	const KEY_ff: number;

	const KEY_figdash: number;

	const KEY_filledlefttribullet: number;

	const KEY_filledrectbullet: number;

	const KEY_filledrighttribullet: number;

	const KEY_filledtribulletdown: number;

	const KEY_filledtribulletup: number;

	const KEY_fiveeighths: number;

	const KEY_fivesixths: number;

	const KEY_fivesubscript: number;

	const KEY_fivesuperior: number;

	const KEY_fourfifths: number;

	const KEY_foursubscript: number;

	const KEY_foursuperior: number;

	const KEY_fourthroot: number;

	const KEY_function: number;

	const KEY_g: number;

	const KEY_gabovedot: number;

	const KEY_gbreve: number;

	const KEY_gcaron: number;

	const KEY_gcedilla: number;

	const KEY_gcircumflex: number;

	const KEY_grave: number;

	const KEY_greater: number;

	const KEY_greaterthanequal: number;

	const KEY_guillemotleft: number;

	const KEY_guillemotright: number;

	const KEY_h: number;

	const KEY_hairspace: number;

	const KEY_hcircumflex: number;

	const KEY_heart: number;

	const KEY_hebrew_aleph: number;

	const KEY_hebrew_ayin: number;

	const KEY_hebrew_bet: number;

	const KEY_hebrew_beth: number;

	const KEY_hebrew_chet: number;

	const KEY_hebrew_dalet: number;

	const KEY_hebrew_daleth: number;

	const KEY_hebrew_doublelowline: number;

	const KEY_hebrew_finalkaph: number;

	const KEY_hebrew_finalmem: number;

	const KEY_hebrew_finalnun: number;

	const KEY_hebrew_finalpe: number;

	const KEY_hebrew_finalzade: number;

	const KEY_hebrew_finalzadi: number;

	const KEY_hebrew_gimel: number;

	const KEY_hebrew_gimmel: number;

	const KEY_hebrew_he: number;

	const KEY_hebrew_het: number;

	const KEY_hebrew_kaph: number;

	const KEY_hebrew_kuf: number;

	const KEY_hebrew_lamed: number;

	const KEY_hebrew_mem: number;

	const KEY_hebrew_nun: number;

	const KEY_hebrew_pe: number;

	const KEY_hebrew_qoph: number;

	const KEY_hebrew_resh: number;

	const KEY_hebrew_samech: number;

	const KEY_hebrew_samekh: number;

	const KEY_hebrew_shin: number;

	const KEY_hebrew_taf: number;

	const KEY_hebrew_taw: number;

	const KEY_hebrew_tet: number;

	const KEY_hebrew_teth: number;

	const KEY_hebrew_waw: number;

	const KEY_hebrew_yod: number;

	const KEY_hebrew_zade: number;

	const KEY_hebrew_zadi: number;

	const KEY_hebrew_zain: number;

	const KEY_hebrew_zayin: number;

	const KEY_hexagram: number;

	const KEY_horizconnector: number;

	const KEY_horizlinescan1: number;

	const KEY_horizlinescan3: number;

	const KEY_horizlinescan5: number;

	const KEY_horizlinescan7: number;

	const KEY_horizlinescan9: number;

	const KEY_hstroke: number;

	const KEY_ht: number;

	const KEY_hyphen: number;

	const KEY_i: number;

	const KEY_iTouch: number;

	const KEY_iacute: number;

	const KEY_ibelowdot: number;

	const KEY_ibreve: number;

	const KEY_icircumflex: number;

	const KEY_identical: number;

	const KEY_idiaeresis: number;

	const KEY_idotless: number;

	const KEY_ifonlyif: number;

	const KEY_igrave: number;

	const KEY_ihook: number;

	const KEY_imacron: number;

	const KEY_implies: number;

	const KEY_includedin: number;

	const KEY_includes: number;

	const KEY_infinity: number;

	const KEY_integral: number;

	const KEY_intersection: number;

	const KEY_iogonek: number;

	const KEY_itilde: number;

	const KEY_j: number;

	const KEY_jcircumflex: number;

	const KEY_jot: number;

	const KEY_k: number;

	const KEY_kana_A: number;

	const KEY_kana_CHI: number;

	const KEY_kana_E: number;

	const KEY_kana_FU: number;

	const KEY_kana_HA: number;

	const KEY_kana_HE: number;

	const KEY_kana_HI: number;

	const KEY_kana_HO: number;

	const KEY_kana_HU: number;

	const KEY_kana_I: number;

	const KEY_kana_KA: number;

	const KEY_kana_KE: number;

	const KEY_kana_KI: number;

	const KEY_kana_KO: number;

	const KEY_kana_KU: number;

	const KEY_kana_MA: number;

	const KEY_kana_ME: number;

	const KEY_kana_MI: number;

	const KEY_kana_MO: number;

	const KEY_kana_MU: number;

	const KEY_kana_N: number;

	const KEY_kana_NA: number;

	const KEY_kana_NE: number;

	const KEY_kana_NI: number;

	const KEY_kana_NO: number;

	const KEY_kana_NU: number;

	const KEY_kana_O: number;

	const KEY_kana_RA: number;

	const KEY_kana_RE: number;

	const KEY_kana_RI: number;

	const KEY_kana_RO: number;

	const KEY_kana_RU: number;

	const KEY_kana_SA: number;

	const KEY_kana_SE: number;

	const KEY_kana_SHI: number;

	const KEY_kana_SO: number;

	const KEY_kana_SU: number;

	const KEY_kana_TA: number;

	const KEY_kana_TE: number;

	const KEY_kana_TI: number;

	const KEY_kana_TO: number;

	const KEY_kana_TSU: number;

	const KEY_kana_TU: number;

	const KEY_kana_U: number;

	const KEY_kana_WA: number;

	const KEY_kana_WO: number;

	const KEY_kana_YA: number;

	const KEY_kana_YO: number;

	const KEY_kana_YU: number;

	const KEY_kana_a: number;

	const KEY_kana_closingbracket: number;

	const KEY_kana_comma: number;

	const KEY_kana_conjunctive: number;

	const KEY_kana_e: number;

	const KEY_kana_fullstop: number;

	const KEY_kana_i: number;

	const KEY_kana_middledot: number;

	const KEY_kana_o: number;

	const KEY_kana_openingbracket: number;

	const KEY_kana_switch: number;

	const KEY_kana_tsu: number;

	const KEY_kana_tu: number;

	const KEY_kana_u: number;

	const KEY_kana_ya: number;

	const KEY_kana_yo: number;

	const KEY_kana_yu: number;

	const KEY_kappa: number;

	const KEY_kcedilla: number;

	const KEY_kra: number;

	const KEY_l: number;

	const KEY_lacute: number;

	const KEY_latincross: number;

	const KEY_lbelowdot: number;

	const KEY_lcaron: number;

	const KEY_lcedilla: number;

	const KEY_leftanglebracket: number;

	const KEY_leftarrow: number;

	const KEY_leftcaret: number;

	const KEY_leftdoublequotemark: number;

	const KEY_leftmiddlecurlybrace: number;

	const KEY_leftopentriangle: number;

	const KEY_leftpointer: number;

	const KEY_leftradical: number;

	const KEY_leftshoe: number;

	const KEY_leftsinglequotemark: number;

	const KEY_leftt: number;

	const KEY_lefttack: number;

	const KEY_less: number;

	const KEY_lessthanequal: number;

	const KEY_lf: number;

	const KEY_logicaland: number;

	const KEY_logicalor: number;

	const KEY_lowleftcorner: number;

	const KEY_lowrightcorner: number;

	const KEY_lstroke: number;

	const KEY_m: number;

	const KEY_mabovedot: number;

	const KEY_macron: number;

	const KEY_malesymbol: number;

	const KEY_maltesecross: number;

	const KEY_marker: number;

	const KEY_masculine: number;

	const KEY_minus: number;

	const KEY_minutes: number;

	const KEY_mu: number;

	const KEY_multiply: number;

	const KEY_musicalflat: number;

	const KEY_musicalsharp: number;

	const KEY_n: number;

	const KEY_nabla: number;

	const KEY_nacute: number;

	const KEY_ncaron: number;

	const KEY_ncedilla: number;

	const KEY_ninesubscript: number;

	const KEY_ninesuperior: number;

	const KEY_nl: number;

	const KEY_nobreakspace: number;

	const KEY_notapproxeq: number;

	const KEY_notelementof: number;

	const KEY_notequal: number;

	const KEY_notidentical: number;

	const KEY_notsign: number;

	const KEY_ntilde: number;

	const KEY_numbersign: number;

	const KEY_numerosign: number;

	const KEY_o: number;

	const KEY_oacute: number;

	const KEY_obarred: number;

	const KEY_obelowdot: number;

	const KEY_ocaron: number;

	const KEY_ocircumflex: number;

	const KEY_ocircumflexacute: number;

	const KEY_ocircumflexbelowdot: number;

	const KEY_ocircumflexgrave: number;

	const KEY_ocircumflexhook: number;

	const KEY_ocircumflextilde: number;

	const KEY_odiaeresis: number;

	const KEY_odoubleacute: number;

	const KEY_oe: number;

	const KEY_ogonek: number;

	const KEY_ograve: number;

	const KEY_ohook: number;

	const KEY_ohorn: number;

	const KEY_ohornacute: number;

	const KEY_ohornbelowdot: number;

	const KEY_ohorngrave: number;

	const KEY_ohornhook: number;

	const KEY_ohorntilde: number;

	const KEY_omacron: number;

	const KEY_oneeighth: number;

	const KEY_onefifth: number;

	const KEY_onehalf: number;

	const KEY_onequarter: number;

	const KEY_onesixth: number;

	const KEY_onesubscript: number;

	const KEY_onesuperior: number;

	const KEY_onethird: number;

	const KEY_ooblique: number;

	const KEY_openrectbullet: number;

	const KEY_openstar: number;

	const KEY_opentribulletdown: number;

	const KEY_opentribulletup: number;

	const KEY_ordfeminine: number;

	const KEY_oslash: number;

	const KEY_otilde: number;

	const KEY_overbar: number;

	const KEY_overline: number;

	const KEY_p: number;

	const KEY_pabovedot: number;

	const KEY_paragraph: number;

	const KEY_parenleft: number;

	const KEY_parenright: number;

	const KEY_partdifferential: number;

	const KEY_partialderivative: number;

	const KEY_percent: number;

	const KEY_period: number;

	const KEY_periodcentered: number;

	const KEY_permille: number;

	const KEY_phonographcopyright: number;

	const KEY_plus: number;

	const KEY_plusminus: number;

	const KEY_prescription: number;

	const KEY_prolongedsound: number;

	const KEY_punctspace: number;

	const KEY_q: number;

	const KEY_quad: number;

	const KEY_question: number;

	const KEY_questiondown: number;

	const KEY_quotedbl: number;

	const KEY_quoteleft: number;

	const KEY_quoteright: number;

	const KEY_r: number;

	const KEY_racute: number;

	const KEY_radical: number;

	const KEY_rcaron: number;

	const KEY_rcedilla: number;

	const KEY_registered: number;

	const KEY_rightanglebracket: number;

	const KEY_rightarrow: number;

	const KEY_rightcaret: number;

	const KEY_rightdoublequotemark: number;

	const KEY_rightmiddlecurlybrace: number;

	const KEY_rightmiddlesummation: number;

	const KEY_rightopentriangle: number;

	const KEY_rightpointer: number;

	const KEY_rightshoe: number;

	const KEY_rightsinglequotemark: number;

	const KEY_rightt: number;

	const KEY_righttack: number;

	const KEY_s: number;

	const KEY_sabovedot: number;

	const KEY_sacute: number;

	const KEY_scaron: number;

	const KEY_scedilla: number;

	const KEY_schwa: number;

	const KEY_scircumflex: number;

	const KEY_script_switch: number;

	const KEY_seconds: number;

	const KEY_section: number;

	const KEY_semicolon: number;

	const KEY_semivoicedsound: number;

	const KEY_seveneighths: number;

	const KEY_sevensubscript: number;

	const KEY_sevensuperior: number;

	const KEY_signaturemark: number;

	const KEY_signifblank: number;

	const KEY_similarequal: number;

	const KEY_singlelowquotemark: number;

	const KEY_sixsubscript: number;

	const KEY_sixsuperior: number;

	const KEY_slash: number;

	const KEY_soliddiamond: number;

	const KEY_space: number;

	const KEY_squareroot: number;

	const KEY_ssharp: number;

	const KEY_sterling: number;

	const KEY_stricteq: number;

	const KEY_t: number;

	const KEY_tabovedot: number;

	const KEY_tcaron: number;

	const KEY_tcedilla: number;

	const KEY_telephone: number;

	const KEY_telephonerecorder: number;

	const KEY_therefore: number;

	const KEY_thinspace: number;

	const KEY_thorn: number;

	const KEY_threeeighths: number;

	const KEY_threefifths: number;

	const KEY_threequarters: number;

	const KEY_threesubscript: number;

	const KEY_threesuperior: number;

	const KEY_tintegral: number;

	const KEY_topintegral: number;

	const KEY_topleftparens: number;

	const KEY_topleftradical: number;

	const KEY_topleftsqbracket: number;

	const KEY_topleftsummation: number;

	const KEY_toprightparens: number;

	const KEY_toprightsqbracket: number;

	const KEY_toprightsummation: number;

	const KEY_topt: number;

	const KEY_topvertsummationconnector: number;

	const KEY_trademark: number;

	const KEY_trademarkincircle: number;

	const KEY_tslash: number;

	const KEY_twofifths: number;

	const KEY_twosubscript: number;

	const KEY_twosuperior: number;

	const KEY_twothirds: number;

	const KEY_u: number;

	const KEY_uacute: number;

	const KEY_ubelowdot: number;

	const KEY_ubreve: number;

	const KEY_ucircumflex: number;

	const KEY_udiaeresis: number;

	const KEY_udoubleacute: number;

	const KEY_ugrave: number;

	const KEY_uhook: number;

	const KEY_uhorn: number;

	const KEY_uhornacute: number;

	const KEY_uhornbelowdot: number;

	const KEY_uhorngrave: number;

	const KEY_uhornhook: number;

	const KEY_uhorntilde: number;

	const KEY_umacron: number;

	const KEY_underbar: number;

	const KEY_underscore: number;

	const KEY_union: number;

	const KEY_uogonek: number;

	const KEY_uparrow: number;

	const KEY_upcaret: number;

	const KEY_upleftcorner: number;

	const KEY_uprightcorner: number;

	const KEY_upshoe: number;

	const KEY_upstile: number;

	const KEY_uptack: number;

	const KEY_uring: number;

	const KEY_utilde: number;

	const KEY_v: number;

	const KEY_variation: number;

	const KEY_vertbar: number;

	const KEY_vertconnector: number;

	const KEY_voicedsound: number;

	const KEY_vt: number;

	const KEY_w: number;

	const KEY_wacute: number;

	const KEY_wcircumflex: number;

	const KEY_wdiaeresis: number;

	const KEY_wgrave: number;

	const KEY_x: number;

	const KEY_xabovedot: number;

	const KEY_y: number;

	const KEY_yacute: number;

	const KEY_ybelowdot: number;

	const KEY_ycircumflex: number;

	const KEY_ydiaeresis: number;

	const KEY_yen: number;

	const KEY_ygrave: number;

	const KEY_yhook: number;

	const KEY_ytilde: number;

	const KEY_z: number;

	const KEY_zabovedot: number;

	const KEY_zacute: number;

	const KEY_zcaron: number;

	const KEY_zerosubscript: number;

	const KEY_zerosuperior: number;

	const KEY_zstroke: number;

	/**
	 * Set to 1 if Clutter was built without FPU (i.e fixed math), 0 otherwise
	 * @returns Set to 1 if Clutter was built without FPU (i.e fixed math), 0 otherwise
	 */
	const NO_FPU: number;

	const PATH_RELATIVE: number;

	/**
	 * Priority of the redraws. This is chosen to be lower than the GTK+
	 * redraw and resize priorities, because in application with both
	 * GTK+ and Clutter it's more likely that the Clutter part will be
	 * continually animating (and thus able to starve GTK+) than
	 * vice-versa.
	 * @returns Priority of the redraws. This is chosen to be lower than the GTK+
	 * redraw and resize priorities, because in application with both
	 * GTK+ and Clutter it's more likely that the Clutter part will be
	 * continually animating (and thus able to starve GTK+) than
	 * vice-versa.
	 */
	const PRIORITY_REDRAW: number;

	/**
	 * The default GObject type for the Clutter stage.
	 * @returns The default GObject type for the Clutter stage.
	 */
	const STAGE_TYPE: string;

	const WINDOWING_EGL: string;

	const WINDOWING_GLX: string;

	const WINDOWING_X11: string;

}