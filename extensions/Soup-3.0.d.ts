declare namespace imports.gi.Soup {
    interface IMessage {
        connect(signal: 'request-finished' | 'request-aborted' | 'request-read' | 'request-started', callback: (server: this, message: Message, client: any) => void): number;
    }

    interface MessageBody {
        append(data: Uint8Array): void;
    }
}