import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace pollify. */
export namespace pollify {

    /** Namespace proto. */
    namespace proto {

        /** Namespace service. */
        namespace service {

            /** Namespace user_creation. */
            namespace user_creation {

                /** ErrorCode enum. */
                enum ErrorCode {
                    TXN_ALREADY_EXISTS = 0,
                    UID_ALREADY_TAKEN = 1,
                    EMAIL_ALREADY_TAKEN = 2
                }

                /** Properties of an ActionOneResponse. */
                interface IActionOneResponse {

                    /** ActionOneResponse ok */
                    ok?: (boolean|null);

                    /** ActionOneResponse code */
                    code?: (pollify.proto.StatusCode|null);

                    /** ActionOneResponse txnId */
                    txnId?: (string|null);

                    /** ActionOneResponse errors */
                    errors?: (pollify.proto.service.user_creation.ErrorCode[]|null);
                }

                /** Represents an ActionOneResponse. */
                class ActionOneResponse implements IActionOneResponse {

                    /**
                     * Constructs a new ActionOneResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: pollify.proto.service.user_creation.IActionOneResponse);

                    /** ActionOneResponse ok. */
                    public ok: boolean;

                    /** ActionOneResponse code. */
                    public code: pollify.proto.StatusCode;

                    /** ActionOneResponse txnId. */
                    public txnId: string;

                    /** ActionOneResponse errors. */
                    public errors: pollify.proto.service.user_creation.ErrorCode[];

                    /**
                     * Creates a new ActionOneResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ActionOneResponse instance
                     */
                    public static create(properties?: pollify.proto.service.user_creation.IActionOneResponse): pollify.proto.service.user_creation.ActionOneResponse;

                    /**
                     * Encodes the specified ActionOneResponse message. Does not implicitly {@link pollify.proto.service.user_creation.ActionOneResponse.verify|verify} messages.
                     * @param message ActionOneResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: pollify.proto.service.user_creation.IActionOneResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ActionOneResponse message, length delimited. Does not implicitly {@link pollify.proto.service.user_creation.ActionOneResponse.verify|verify} messages.
                     * @param message ActionOneResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: pollify.proto.service.user_creation.IActionOneResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ActionOneResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ActionOneResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pollify.proto.service.user_creation.ActionOneResponse;

                    /**
                     * Decodes an ActionOneResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ActionOneResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pollify.proto.service.user_creation.ActionOneResponse;

                    /**
                     * Verifies an ActionOneResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ActionOneResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ActionOneResponse
                     */
                    public static fromObject(object: { [k: string]: any }): pollify.proto.service.user_creation.ActionOneResponse;

                    /**
                     * Creates a plain object from an ActionOneResponse message. Also converts values to other types if specified.
                     * @param message ActionOneResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: pollify.proto.service.user_creation.ActionOneResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ActionOneResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ActionOneResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }
        }

        /** StatusCode enum. */
        enum StatusCode {
            OK = 0,
            FAILED = 1,
            INTERNAL_ERROR = 2,
            INVALID_SCHEMA = 3
        }

        /** Properties of a FormFieldError. */
        interface IFormFieldError {

            /** FormFieldError key */
            key?: (string|null);

            /** FormFieldError code */
            code?: (number|null);

            /** FormFieldError msg */
            msg?: (string|null);
        }

        /** Represents a FormFieldError. */
        class FormFieldError implements IFormFieldError {

            /**
             * Constructs a new FormFieldError.
             * @param [properties] Properties to set
             */
            constructor(properties?: pollify.proto.IFormFieldError);

            /** FormFieldError key. */
            public key: string;

            /** FormFieldError code. */
            public code: number;

            /** FormFieldError msg. */
            public msg: string;

            /**
             * Creates a new FormFieldError instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FormFieldError instance
             */
            public static create(properties?: pollify.proto.IFormFieldError): pollify.proto.FormFieldError;

            /**
             * Encodes the specified FormFieldError message. Does not implicitly {@link pollify.proto.FormFieldError.verify|verify} messages.
             * @param message FormFieldError message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: pollify.proto.IFormFieldError, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FormFieldError message, length delimited. Does not implicitly {@link pollify.proto.FormFieldError.verify|verify} messages.
             * @param message FormFieldError message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: pollify.proto.IFormFieldError, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FormFieldError message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FormFieldError
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pollify.proto.FormFieldError;

            /**
             * Decodes a FormFieldError message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FormFieldError
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pollify.proto.FormFieldError;

            /**
             * Verifies a FormFieldError message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FormFieldError message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FormFieldError
             */
            public static fromObject(object: { [k: string]: any }): pollify.proto.FormFieldError;

            /**
             * Creates a plain object from a FormFieldError message. Also converts values to other types if specified.
             * @param message FormFieldError
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: pollify.proto.FormFieldError, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FormFieldError to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FormFieldError
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}
