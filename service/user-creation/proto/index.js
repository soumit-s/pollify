/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import $protobuf from "protobufjs/minimal.js";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const pollify = $root.pollify = (() => {

    /**
     * Namespace pollify.
     * @exports pollify
     * @namespace
     */
    const pollify = {};

    pollify.proto = (function() {

        /**
         * Namespace proto.
         * @memberof pollify
         * @namespace
         */
        const proto = {};

        proto.service = (function() {

            /**
             * Namespace service.
             * @memberof pollify.proto
             * @namespace
             */
            const service = {};

            service.user_creation = (function() {

                /**
                 * Namespace user_creation.
                 * @memberof pollify.proto.service
                 * @namespace
                 */
                const user_creation = {};

                /**
                 * ErrorCode enum.
                 * @name pollify.proto.service.user_creation.ErrorCode
                 * @enum {number}
                 * @property {number} TXN_ALREADY_EXISTS=0 TXN_ALREADY_EXISTS value
                 * @property {number} UID_ALREADY_TAKEN=1 UID_ALREADY_TAKEN value
                 * @property {number} EMAIL_ALREADY_TAKEN=2 EMAIL_ALREADY_TAKEN value
                 */
                user_creation.ErrorCode = (function() {
                    const valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "TXN_ALREADY_EXISTS"] = 0;
                    values[valuesById[1] = "UID_ALREADY_TAKEN"] = 1;
                    values[valuesById[2] = "EMAIL_ALREADY_TAKEN"] = 2;
                    return values;
                })();

                user_creation.ActionOneResponse = (function() {

                    /**
                     * Properties of an ActionOneResponse.
                     * @memberof pollify.proto.service.user_creation
                     * @interface IActionOneResponse
                     * @property {boolean|null} [ok] ActionOneResponse ok
                     * @property {pollify.proto.StatusCode|null} [code] ActionOneResponse code
                     * @property {string|null} [txnId] ActionOneResponse txnId
                     * @property {Array.<pollify.proto.service.user_creation.ErrorCode>|null} [errors] ActionOneResponse errors
                     */

                    /**
                     * Constructs a new ActionOneResponse.
                     * @memberof pollify.proto.service.user_creation
                     * @classdesc Represents an ActionOneResponse.
                     * @implements IActionOneResponse
                     * @constructor
                     * @param {pollify.proto.service.user_creation.IActionOneResponse=} [properties] Properties to set
                     */
                    function ActionOneResponse(properties) {
                        this.errors = [];
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * ActionOneResponse ok.
                     * @member {boolean} ok
                     * @memberof pollify.proto.service.user_creation.ActionOneResponse
                     * @instance
                     */
                    ActionOneResponse.prototype.ok = false;

                    /**
                     * ActionOneResponse code.
                     * @member {pollify.proto.StatusCode} code
                     * @memberof pollify.proto.service.user_creation.ActionOneResponse
                     * @instance
                     */
                    ActionOneResponse.prototype.code = 0;

                    /**
                     * ActionOneResponse txnId.
                     * @member {string} txnId
                     * @memberof pollify.proto.service.user_creation.ActionOneResponse
                     * @instance
                     */
                    ActionOneResponse.prototype.txnId = "";

                    /**
                     * ActionOneResponse errors.
                     * @member {Array.<pollify.proto.service.user_creation.ErrorCode>} errors
                     * @memberof pollify.proto.service.user_creation.ActionOneResponse
                     * @instance
                     */
                    ActionOneResponse.prototype.errors = $util.emptyArray;

                    /**
                     * Creates a new ActionOneResponse instance using the specified properties.
                     * @function create
                     * @memberof pollify.proto.service.user_creation.ActionOneResponse
                     * @static
                     * @param {pollify.proto.service.user_creation.IActionOneResponse=} [properties] Properties to set
                     * @returns {pollify.proto.service.user_creation.ActionOneResponse} ActionOneResponse instance
                     */
                    ActionOneResponse.create = function create(properties) {
                        return new ActionOneResponse(properties);
                    };

                    /**
                     * Encodes the specified ActionOneResponse message. Does not implicitly {@link pollify.proto.service.user_creation.ActionOneResponse.verify|verify} messages.
                     * @function encode
                     * @memberof pollify.proto.service.user_creation.ActionOneResponse
                     * @static
                     * @param {pollify.proto.service.user_creation.IActionOneResponse} message ActionOneResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ActionOneResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.ok != null && Object.hasOwnProperty.call(message, "ok"))
                            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.ok);
                        if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.code);
                        if (message.txnId != null && Object.hasOwnProperty.call(message, "txnId"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.txnId);
                        if (message.errors != null && message.errors.length) {
                            writer.uint32(/* id 4, wireType 2 =*/34).fork();
                            for (let i = 0; i < message.errors.length; ++i)
                                writer.int32(message.errors[i]);
                            writer.ldelim();
                        }
                        return writer;
                    };

                    /**
                     * Encodes the specified ActionOneResponse message, length delimited. Does not implicitly {@link pollify.proto.service.user_creation.ActionOneResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof pollify.proto.service.user_creation.ActionOneResponse
                     * @static
                     * @param {pollify.proto.service.user_creation.IActionOneResponse} message ActionOneResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ActionOneResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an ActionOneResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof pollify.proto.service.user_creation.ActionOneResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {pollify.proto.service.user_creation.ActionOneResponse} ActionOneResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ActionOneResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pollify.proto.service.user_creation.ActionOneResponse();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.ok = reader.bool();
                                    break;
                                }
                            case 2: {
                                    message.code = reader.int32();
                                    break;
                                }
                            case 3: {
                                    message.txnId = reader.string();
                                    break;
                                }
                            case 4: {
                                    if (!(message.errors && message.errors.length))
                                        message.errors = [];
                                    if ((tag & 7) === 2) {
                                        let end2 = reader.uint32() + reader.pos;
                                        while (reader.pos < end2)
                                            message.errors.push(reader.int32());
                                    } else
                                        message.errors.push(reader.int32());
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an ActionOneResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof pollify.proto.service.user_creation.ActionOneResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {pollify.proto.service.user_creation.ActionOneResponse} ActionOneResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ActionOneResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an ActionOneResponse message.
                     * @function verify
                     * @memberof pollify.proto.service.user_creation.ActionOneResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ActionOneResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.ok != null && message.hasOwnProperty("ok"))
                            if (typeof message.ok !== "boolean")
                                return "ok: boolean expected";
                        if (message.code != null && message.hasOwnProperty("code"))
                            switch (message.code) {
                            default:
                                return "code: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                                break;
                            }
                        if (message.txnId != null && message.hasOwnProperty("txnId"))
                            if (!$util.isString(message.txnId))
                                return "txnId: string expected";
                        if (message.errors != null && message.hasOwnProperty("errors")) {
                            if (!Array.isArray(message.errors))
                                return "errors: array expected";
                            for (let i = 0; i < message.errors.length; ++i)
                                switch (message.errors[i]) {
                                default:
                                    return "errors: enum value[] expected";
                                case 0:
                                case 1:
                                case 2:
                                    break;
                                }
                        }
                        return null;
                    };

                    /**
                     * Creates an ActionOneResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof pollify.proto.service.user_creation.ActionOneResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {pollify.proto.service.user_creation.ActionOneResponse} ActionOneResponse
                     */
                    ActionOneResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.pollify.proto.service.user_creation.ActionOneResponse)
                            return object;
                        let message = new $root.pollify.proto.service.user_creation.ActionOneResponse();
                        if (object.ok != null)
                            message.ok = Boolean(object.ok);
                        switch (object.code) {
                        default:
                            if (typeof object.code === "number") {
                                message.code = object.code;
                                break;
                            }
                            break;
                        case "OK":
                        case 0:
                            message.code = 0;
                            break;
                        case "FAILED":
                        case 1:
                            message.code = 1;
                            break;
                        case "INTERNAL_ERROR":
                        case 2:
                            message.code = 2;
                            break;
                        case "INVALID_SCHEMA":
                        case 3:
                            message.code = 3;
                            break;
                        }
                        if (object.txnId != null)
                            message.txnId = String(object.txnId);
                        if (object.errors) {
                            if (!Array.isArray(object.errors))
                                throw TypeError(".pollify.proto.service.user_creation.ActionOneResponse.errors: array expected");
                            message.errors = [];
                            for (let i = 0; i < object.errors.length; ++i)
                                switch (object.errors[i]) {
                                default:
                                    if (typeof object.errors[i] === "number") {
                                        message.errors[i] = object.errors[i];
                                        break;
                                    }
                                case "TXN_ALREADY_EXISTS":
                                case 0:
                                    message.errors[i] = 0;
                                    break;
                                case "UID_ALREADY_TAKEN":
                                case 1:
                                    message.errors[i] = 1;
                                    break;
                                case "EMAIL_ALREADY_TAKEN":
                                case 2:
                                    message.errors[i] = 2;
                                    break;
                                }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from an ActionOneResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof pollify.proto.service.user_creation.ActionOneResponse
                     * @static
                     * @param {pollify.proto.service.user_creation.ActionOneResponse} message ActionOneResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ActionOneResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        let object = {};
                        if (options.arrays || options.defaults)
                            object.errors = [];
                        if (options.defaults) {
                            object.ok = false;
                            object.code = options.enums === String ? "OK" : 0;
                            object.txnId = "";
                        }
                        if (message.ok != null && message.hasOwnProperty("ok"))
                            object.ok = message.ok;
                        if (message.code != null && message.hasOwnProperty("code"))
                            object.code = options.enums === String ? $root.pollify.proto.StatusCode[message.code] === undefined ? message.code : $root.pollify.proto.StatusCode[message.code] : message.code;
                        if (message.txnId != null && message.hasOwnProperty("txnId"))
                            object.txnId = message.txnId;
                        if (message.errors && message.errors.length) {
                            object.errors = [];
                            for (let j = 0; j < message.errors.length; ++j)
                                object.errors[j] = options.enums === String ? $root.pollify.proto.service.user_creation.ErrorCode[message.errors[j]] === undefined ? message.errors[j] : $root.pollify.proto.service.user_creation.ErrorCode[message.errors[j]] : message.errors[j];
                        }
                        return object;
                    };

                    /**
                     * Converts this ActionOneResponse to JSON.
                     * @function toJSON
                     * @memberof pollify.proto.service.user_creation.ActionOneResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ActionOneResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for ActionOneResponse
                     * @function getTypeUrl
                     * @memberof pollify.proto.service.user_creation.ActionOneResponse
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    ActionOneResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/pollify.proto.service.user_creation.ActionOneResponse";
                    };

                    return ActionOneResponse;
                })();

                return user_creation;
            })();

            return service;
        })();

        /**
         * StatusCode enum.
         * @name pollify.proto.StatusCode
         * @enum {number}
         * @property {number} OK=0 OK value
         * @property {number} FAILED=1 FAILED value
         * @property {number} INTERNAL_ERROR=2 INTERNAL_ERROR value
         * @property {number} INVALID_SCHEMA=3 INVALID_SCHEMA value
         */
        proto.StatusCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "OK"] = 0;
            values[valuesById[1] = "FAILED"] = 1;
            values[valuesById[2] = "INTERNAL_ERROR"] = 2;
            values[valuesById[3] = "INVALID_SCHEMA"] = 3;
            return values;
        })();

        proto.FormFieldError = (function() {

            /**
             * Properties of a FormFieldError.
             * @memberof pollify.proto
             * @interface IFormFieldError
             * @property {string|null} [key] FormFieldError key
             * @property {number|null} [code] FormFieldError code
             * @property {string|null} [msg] FormFieldError msg
             */

            /**
             * Constructs a new FormFieldError.
             * @memberof pollify.proto
             * @classdesc Represents a FormFieldError.
             * @implements IFormFieldError
             * @constructor
             * @param {pollify.proto.IFormFieldError=} [properties] Properties to set
             */
            function FormFieldError(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FormFieldError key.
             * @member {string} key
             * @memberof pollify.proto.FormFieldError
             * @instance
             */
            FormFieldError.prototype.key = "";

            /**
             * FormFieldError code.
             * @member {number} code
             * @memberof pollify.proto.FormFieldError
             * @instance
             */
            FormFieldError.prototype.code = 0;

            /**
             * FormFieldError msg.
             * @member {string} msg
             * @memberof pollify.proto.FormFieldError
             * @instance
             */
            FormFieldError.prototype.msg = "";

            /**
             * Creates a new FormFieldError instance using the specified properties.
             * @function create
             * @memberof pollify.proto.FormFieldError
             * @static
             * @param {pollify.proto.IFormFieldError=} [properties] Properties to set
             * @returns {pollify.proto.FormFieldError} FormFieldError instance
             */
            FormFieldError.create = function create(properties) {
                return new FormFieldError(properties);
            };

            /**
             * Encodes the specified FormFieldError message. Does not implicitly {@link pollify.proto.FormFieldError.verify|verify} messages.
             * @function encode
             * @memberof pollify.proto.FormFieldError
             * @static
             * @param {pollify.proto.IFormFieldError} message FormFieldError message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FormFieldError.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.key);
                if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.code);
                if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.msg);
                return writer;
            };

            /**
             * Encodes the specified FormFieldError message, length delimited. Does not implicitly {@link pollify.proto.FormFieldError.verify|verify} messages.
             * @function encodeDelimited
             * @memberof pollify.proto.FormFieldError
             * @static
             * @param {pollify.proto.IFormFieldError} message FormFieldError message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FormFieldError.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FormFieldError message from the specified reader or buffer.
             * @function decode
             * @memberof pollify.proto.FormFieldError
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {pollify.proto.FormFieldError} FormFieldError
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FormFieldError.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pollify.proto.FormFieldError();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.key = reader.string();
                            break;
                        }
                    case 2: {
                            message.code = reader.int32();
                            break;
                        }
                    case 3: {
                            message.msg = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a FormFieldError message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof pollify.proto.FormFieldError
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {pollify.proto.FormFieldError} FormFieldError
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FormFieldError.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FormFieldError message.
             * @function verify
             * @memberof pollify.proto.FormFieldError
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FormFieldError.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.key != null && message.hasOwnProperty("key"))
                    if (!$util.isString(message.key))
                        return "key: string expected";
                if (message.code != null && message.hasOwnProperty("code"))
                    if (!$util.isInteger(message.code))
                        return "code: integer expected";
                if (message.msg != null && message.hasOwnProperty("msg"))
                    if (!$util.isString(message.msg))
                        return "msg: string expected";
                return null;
            };

            /**
             * Creates a FormFieldError message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof pollify.proto.FormFieldError
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {pollify.proto.FormFieldError} FormFieldError
             */
            FormFieldError.fromObject = function fromObject(object) {
                if (object instanceof $root.pollify.proto.FormFieldError)
                    return object;
                let message = new $root.pollify.proto.FormFieldError();
                if (object.key != null)
                    message.key = String(object.key);
                if (object.code != null)
                    message.code = object.code | 0;
                if (object.msg != null)
                    message.msg = String(object.msg);
                return message;
            };

            /**
             * Creates a plain object from a FormFieldError message. Also converts values to other types if specified.
             * @function toObject
             * @memberof pollify.proto.FormFieldError
             * @static
             * @param {pollify.proto.FormFieldError} message FormFieldError
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FormFieldError.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.key = "";
                    object.code = 0;
                    object.msg = "";
                }
                if (message.key != null && message.hasOwnProperty("key"))
                    object.key = message.key;
                if (message.code != null && message.hasOwnProperty("code"))
                    object.code = message.code;
                if (message.msg != null && message.hasOwnProperty("msg"))
                    object.msg = message.msg;
                return object;
            };

            /**
             * Converts this FormFieldError to JSON.
             * @function toJSON
             * @memberof pollify.proto.FormFieldError
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FormFieldError.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for FormFieldError
             * @function getTypeUrl
             * @memberof pollify.proto.FormFieldError
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            FormFieldError.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/pollify.proto.FormFieldError";
            };

            return FormFieldError;
        })();

        return proto;
    })();

    return pollify;
})();

export { $root as default };
