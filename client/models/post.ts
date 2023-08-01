import {Parsable} from '@microsoft/kiota-abstractions';

export interface Post extends Parsable {
    /**
     * The body property
     */
    body?: string | undefined;
    /**
     * The id property
     */
    id?: number | undefined;
    /**
     * The title property
     */
    title?: string | undefined;
    /**
     * The userId property
     */
    userId?: number | undefined;
}
