/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("tslib");

/***/ }),
/* 2 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 3 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 4 */
/***/ ((module) => {

module.exports = require("cookie-parser");

/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(2);
const features_module_1 = __webpack_require__(6);
const config_1 = __webpack_require__(20);
let AppModule = exports.AppModule = class AppModule {
};
exports.AppModule = AppModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [features_module_1.FeaturesModule, config_1.ConfigModule.forRoot()],
    })
], AppModule);


/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FeaturesModule = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(2);
const player_state_module_1 = __webpack_require__(7);
const auth_module_1 = __webpack_require__(46);
const artists_module_1 = __webpack_require__(57);
const filestore_module_1 = __webpack_require__(40);
const tracks_module_1 = __webpack_require__(28);
let FeaturesModule = exports.FeaturesModule = class FeaturesModule {
};
exports.FeaturesModule = FeaturesModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            auth_module_1.AuthModule,
            player_state_module_1.PlayerStateModule,
            artists_module_1.ArtistsModule,
            filestore_module_1.FilestoreModule,
            tracks_module_1.TracksModule,
        ],
    })
], FeaturesModule);


/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PlayerStateModule = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(2);
const player_state_controller_1 = __webpack_require__(8);
const player_state_service_1 = __webpack_require__(10);
const tracks_module_1 = __webpack_require__(28);
let PlayerStateModule = exports.PlayerStateModule = class PlayerStateModule {
};
exports.PlayerStateModule = PlayerStateModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [tracks_module_1.TracksModule],
        controllers: [player_state_controller_1.PlayerStateController],
        providers: [player_state_service_1.PlayerStateService],
    })
], PlayerStateModule);


/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PlayerStateController = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(2);
const rxjs_1 = __webpack_require__(9);
const player_state_service_1 = __webpack_require__(10);
const swagger_1 = __webpack_require__(21);
const user_decorator_1 = __webpack_require__(22);
const user_dto_1 = __webpack_require__(23);
const player_state_action_dto_1 = __webpack_require__(25);
const player_state_dto_1 = __webpack_require__(26);
const express_1 = __webpack_require__(27);
let PlayerStateController = exports.PlayerStateController = class PlayerStateController {
    constructor(stateService) {
        this.stateService = stateService;
    }
    state(user, request) {
        return this.stateService
            .getPlayerState(user.id, request.header('user-agent'))
            .pipe((0, rxjs_1.map)((state) => ({ data: state })));
    }
    action(user, action) {
        return this.stateService.action(user.id, action);
    }
};
tslib_1.__decorate([
    (0, common_1.Sse)(''),
    (0, swagger_1.ApiOkResponse)({ type: player_state_dto_1.PlayerStateMessageDto }),
    tslib_1.__param(0, (0, user_decorator_1.User)()),
    tslib_1.__param(1, (0, common_1.Req)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof user_dto_1.UserDto !== "undefined" && user_dto_1.UserDto) === "function" ? _b : Object, typeof (_c = typeof express_1.Request !== "undefined" && express_1.Request) === "function" ? _c : Object]),
    tslib_1.__metadata("design:returntype", typeof (_d = typeof rxjs_1.Observable !== "undefined" && rxjs_1.Observable) === "function" ? _d : Object)
], PlayerStateController.prototype, "state", null);
tslib_1.__decorate([
    (0, common_1.Post)(),
    tslib_1.__param(0, (0, user_decorator_1.User)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_e = typeof user_dto_1.UserDto !== "undefined" && user_dto_1.UserDto) === "function" ? _e : Object, typeof (_f = typeof player_state_action_dto_1.PlayerStateActionDto !== "undefined" && player_state_action_dto_1.PlayerStateActionDto) === "function" ? _f : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], PlayerStateController.prototype, "action", null);
exports.PlayerStateController = PlayerStateController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)('Player state'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('player-state'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof player_state_service_1.PlayerStateService !== "undefined" && player_state_service_1.PlayerStateService) === "function" ? _a : Object])
], PlayerStateController);


/***/ }),
/* 9 */
/***/ ((module) => {

module.exports = require("rxjs");

/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PlayerStateService = exports.PlayerStateActionType = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(2);
const rxjs_1 = __webpack_require__(9);
const tracks_service_1 = __webpack_require__(11);
var PlayerStateActionType;
(function (PlayerStateActionType) {
    PlayerStateActionType["Resume"] = "Resume";
    PlayerStateActionType["Pause"] = "Pause";
    PlayerStateActionType["PlayTrack"] = "PlayTrack";
    PlayerStateActionType["RepeatTrack"] = "RepeatTrack";
    PlayerStateActionType["Volume"] = "Volume";
    PlayerStateActionType["Repeat"] = "Repeat";
    PlayerStateActionType["Time"] = "Time";
    PlayerStateActionType["AddDevice"] = "AddDevice";
    PlayerStateActionType["RemoveDevice"] = "RemoveDevice";
    PlayerStateActionType["SetActiveDevice"] = "SetActiveDevice";
})(PlayerStateActionType || (exports.PlayerStateActionType = PlayerStateActionType = {}));
let PlayerStateService = exports.PlayerStateService = class PlayerStateService {
    constructor(tracksService) {
        this.tracksService = tracksService;
        this.playerStates = new Map();
        this.reducers = {
            [PlayerStateActionType.Resume]: async (state) => ({
                ...state,
                isPlaying: true,
            }),
            [PlayerStateActionType.Pause]: async (state) => ({
                ...state,
                isPlaying: false,
            }),
            [PlayerStateActionType.PlayTrack]: async (state, payload) => {
                const track = await this.tracksService.getTrack(payload);
                return {
                    ...state,
                    isPlaying: true,
                    currentTime: 0,
                    track: track,
                };
            },
            [PlayerStateActionType.RepeatTrack]: async (state, payload) => ({
                ...state,
                isPlaying: true,
                currentTime: 0,
            }),
            [PlayerStateActionType.Volume]: async (state, payload) => ({
                ...state,
                volume: payload,
            }),
            [PlayerStateActionType.Repeat]: async (state, payload) => ({
                ...state,
                isRepeating: !state.isRepeating,
            }),
            [PlayerStateActionType.Time]: async (state, payload) => ({
                ...state,
                currentTime: payload,
            }),
            [PlayerStateActionType.AddDevice]: async (state, payload) => {
                const newState = {
                    ...state,
                    devices: [...state.devices, payload],
                };
                newState.activeDeviceId ??= payload.id;
                return newState;
            },
            [PlayerStateActionType.RemoveDevice]: async (state, payload) => {
                const newState = {
                    ...state,
                    devices: state.devices.filter(({ id }) => payload !== id),
                };
                if (payload === newState.activeDeviceId) {
                    newState.isPlaying = false;
                    newState.activeDeviceId = newState.devices[0]?.id || null;
                }
                return newState;
            },
            [PlayerStateActionType.SetActiveDevice]: async (state, payload) => ({
                ...state,
                activeDeviceId: payload,
            }),
        };
    }
    createPlayerState(userId, device) {
        this.playerStates.set(userId, new rxjs_1.BehaviorSubject({
            track: null,
            isPlaying: false,
            currentTime: 0,
            isRepeating: false,
            volume: 100,
            devices: [],
            activeDeviceId: null,
            currentDevice: device,
        }));
    }
    getPlayerState(userId, deviceName) {
        const device = { id: Date.now().toString(), name: deviceName };
        if (!this.playerStates.has(userId)) {
            this.createPlayerState(userId, device);
        }
        this.action(userId, {
            type: PlayerStateActionType.AddDevice,
            payload: device,
        });
        return this.playerStates
            .get(userId)
            .asObservable()
            .pipe((0, rxjs_1.map)((s) => {
            s.currentDevice = device;
            return s;
        }), (0, rxjs_1.finalize)(() => {
            this.action(userId, {
                type: PlayerStateActionType.RemoveDevice,
                payload: device.id,
            });
        }));
    }
    async action(userId, actionCreator) {
        const userState = this.playerStates.get(userId);
        userState.next(await this.reducers[actionCreator.type](userState.value, actionCreator.payload));
    }
};
exports.PlayerStateService = PlayerStateService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof tracks_service_1.TracksService !== "undefined" && tracks_service_1.TracksService) === "function" ? _a : Object])
], PlayerStateService);


/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TracksService = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(2);
const tracks_repository_1 = __webpack_require__(12);
const filestore_service_1 = __webpack_require__(15);
const images_service_1 = __webpack_require__(18);
let TracksService = exports.TracksService = class TracksService {
    constructor(tracksRepository, filestore, imagesService) {
        this.tracksRepository = tracksRepository;
        this.filestore = filestore;
        this.imagesService = imagesService;
    }
    async getTrack(id) {
        const track = await this.tracksRepository.getTrack(id);
        if (!track)
            throw new common_1.NotFoundException();
        return track;
    }
    async createTrack(data, files) {
        const [file, image, color] = await Promise.all([
            this.filestore.saveAudio(files.file[0]),
            files.image &&
                this.filestore.saveImage(files.image[0], {
                    width: 640,
                    height: 640,
                }),
            files.image &&
                this.imagesService.getColorFromImage(files.image[0].buffer),
        ]);
        return this.tracksRepository.createTrack({ ...data, file, image, color });
    }
};
exports.TracksService = TracksService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof tracks_repository_1.TracksRepository !== "undefined" && tracks_repository_1.TracksRepository) === "function" ? _a : Object, typeof (_b = typeof filestore_service_1.FilestoreService !== "undefined" && filestore_service_1.FilestoreService) === "function" ? _b : Object, typeof (_c = typeof images_service_1.ImagesService !== "undefined" && images_service_1.ImagesService) === "function" ? _c : Object])
], TracksService);


/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TracksRepository = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(2);
const database_service_1 = __webpack_require__(13);
let TracksRepository = exports.TracksRepository = class TracksRepository {
    constructor(db) {
        this.db = db;
    }
    getTrack(id) {
        return this.db.track.findUnique({
            where: { id },
            include: {
                artists: {
                    select: {
                        id: true,
                        name: true,
                        avatar: true,
                        banner: true,
                    },
                },
            },
        });
    }
    createTrack(data) {
        return this.db.track.create({
            data: {
                ...data,
                artists: { connect: data.artistIds.map((id) => ({ id })) },
            },
            //Todo
            include: {
                artists: {
                    select: {
                        id: true,
                        name: true,
                        avatar: true,
                        banner: true,
                    },
                },
            },
        });
    }
};
exports.TracksRepository = TracksRepository = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof database_service_1.DatabaseService !== "undefined" && database_service_1.DatabaseService) === "function" ? _a : Object])
], TracksRepository);


/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DatabaseService = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(2);
const client_1 = __webpack_require__(14);
let DatabaseService = exports.DatabaseService = class DatabaseService extends client_1.PrismaClient {
    async onModuleInit() {
        await this.$connect();
    }
    async onModuleDestroy() {
        await this.$disconnect();
    }
};
exports.DatabaseService = DatabaseService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], DatabaseService);


/***/ }),
/* 14 */
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FilestoreService = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(2);
const mongodb_1 = __webpack_require__(16);
const stream_1 = __webpack_require__(17);
const images_service_1 = __webpack_require__(18);
const config_1 = __webpack_require__(20);
let FilestoreService = exports.FilestoreService = class FilestoreService {
    constructor(imagesService, config) {
        this.imagesService = imagesService;
        this.config = config;
        this.client = new mongodb_1.MongoClient(this.config.get('FILESTORE_DATABASE_URL'));
        this.db = this.client.db();
        this.bucket = new mongodb_1.GridFSBucket(this.db, {
            bucketName: 'filestore',
        });
    }
    async onModuleInit() {
        await this.client.connect();
    }
    async onModuleDestroy() {
        await this.client.close();
    }
    async saveImage(file, params) {
        const processedFile = await this.imagesService.processImage(file.buffer, 'webp', params);
        return (this.config.get('FILESTORE_URL') +
            '/image/' +
            stream_1.Readable.from(processedFile)
                .pipe(this.bucket.openUploadStream('image'))
                .id.toString());
    }
    getImage(id) {
        return this.bucket.openDownloadStream(new mongodb_1.ObjectId(id));
    }
    async saveAudio(file) {
        const processedFile = file.buffer;
        return (this.config.get('FILESTORE_URL') +
            '/audio/' +
            stream_1.Readable.from(processedFile)
                .pipe(this.bucket.openUploadStream('audio'))
                .id.toString());
    }
    getAudio(id, params) {
        return this.bucket.openDownloadStream(new mongodb_1.ObjectId(id), params);
    }
    getFileInfo(id) {
        return this.bucket.find({ _id: new mongodb_1.ObjectId(id) }, { limit: 1 }).next();
    }
};
exports.FilestoreService = FilestoreService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof images_service_1.ImagesService !== "undefined" && images_service_1.ImagesService) === "function" ? _a : Object, typeof (_b = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _b : Object])
], FilestoreService);


/***/ }),
/* 16 */
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),
/* 17 */
/***/ ((module) => {

module.exports = require("stream");

/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ImagesService = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(2);
const sharp_1 = tslib_1.__importDefault(__webpack_require__(19));
let ImagesService = exports.ImagesService = class ImagesService {
    async getColorFromImage(image) {
        const meta = await (0, sharp_1.default)(image).metadata();
        const extractedImage = await (0, sharp_1.default)(image)
            .extract({ left: 0, top: 0, width: 1, height: meta.height })
            .toBuffer();
        return (0, sharp_1.default)(extractedImage)
            .stats()
            .then(({ dominant }) => `rgb(${dominant.r},${dominant.g},${dominant.b})`);
    }
    processImage(image, format = 'webp', params) {
        return (0, sharp_1.default)(image).toFormat(format).resize(params).toBuffer();
    }
};
exports.ImagesService = ImagesService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], ImagesService);


/***/ }),
/* 19 */
/***/ ((module) => {

module.exports = require("sharp");

/***/ }),
/* 20 */
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),
/* 21 */
/***/ ((module) => {

module.exports = require("@nestjs/swagger");

/***/ }),
/* 22 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.User = void 0;
const common_1 = __webpack_require__(2);
exports.User = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
});


/***/ }),
/* 23 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserDto = void 0;
const tslib_1 = __webpack_require__(1);
const swagger_1 = __webpack_require__(21);
const class_transformer_1 = __webpack_require__(24);
class UserDto {
    constructor(partial) {
        Object.assign(this, partial);
    }
}
exports.UserDto = UserDto;
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], UserDto.prototype, "id", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], UserDto.prototype, "email", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], UserDto.prototype, "name", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Exclude)(),
    tslib_1.__metadata("design:type", String)
], UserDto.prototype, "password", void 0);


/***/ }),
/* 24 */
/***/ ((module) => {

module.exports = require("class-transformer");

/***/ }),
/* 25 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PlayerStateActionDto = void 0;
const tslib_1 = __webpack_require__(1);
const player_state_service_1 = __webpack_require__(10);
const swagger_1 = __webpack_require__(21);
class PlayerStateActionDto {
}
exports.PlayerStateActionDto = PlayerStateActionDto;
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({
        enum: player_state_service_1.PlayerStateActionType,
        enumName: 'PlayerStateActionType',
    }),
    tslib_1.__metadata("design:type", typeof (_a = typeof player_state_service_1.PlayerStateActionType !== "undefined" && player_state_service_1.PlayerStateActionType) === "function" ? _a : Object)
], PlayerStateActionDto.prototype, "type", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
    }),
    tslib_1.__metadata("design:type", Object)
], PlayerStateActionDto.prototype, "payload", void 0);


/***/ }),
/* 26 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PlayerStateMessageDto = void 0;
class PlayerStateMessageDto {
}
exports.PlayerStateMessageDto = PlayerStateMessageDto;


/***/ }),
/* 27 */
/***/ ((module) => {

module.exports = require("express");

/***/ }),
/* 28 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TracksModule = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(2);
const tracks_service_1 = __webpack_require__(11);
const tracks_controller_1 = __webpack_require__(29);
const tracks_repository_1 = __webpack_require__(12);
const database_module_1 = __webpack_require__(39);
const filestore_module_1 = __webpack_require__(40);
const images_module_1 = __webpack_require__(45);
let TracksModule = exports.TracksModule = class TracksModule {
};
exports.TracksModule = TracksModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule, filestore_module_1.FilestoreModule, images_module_1.ImagesModule],
        providers: [tracks_service_1.TracksService, tracks_repository_1.TracksRepository],
        controllers: [tracks_controller_1.TracksController],
        exports: [tracks_service_1.TracksService],
    })
], TracksModule);


/***/ }),
/* 29 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TracksController = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(2);
const platform_express_1 = __webpack_require__(30);
const create_track_dto_1 = __webpack_require__(31);
const tracks_service_1 = __webpack_require__(11);
const swagger_1 = __webpack_require__(21);
const track_dto_1 = __webpack_require__(33);
const auth_guard_1 = __webpack_require__(35);
let TracksController = exports.TracksController = class TracksController {
    constructor(tracksService) {
        this.tracksService = tracksService;
    }
    getTrack(id) {
        return this.tracksService.getTrack(id);
    }
    createTrack(files, body) {
        return this.tracksService.createTrack(body, files);
    }
};
tslib_1.__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOkResponse)({ type: track_dto_1.TrackDto }),
    (0, auth_guard_1.Public)(),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], TracksController.prototype, "getTrack", null);
tslib_1.__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([
        { name: 'file', maxCount: 1 },
        { name: 'image', maxCount: 1 },
    ])),
    tslib_1.__param(0, (0, common_1.UploadedFiles)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_c = typeof create_track_dto_1.CreateTrackFilesDto !== "undefined" && create_track_dto_1.CreateTrackFilesDto) === "function" ? _c : Object, typeof (_d = typeof create_track_dto_1.CreateTrackDto !== "undefined" && create_track_dto_1.CreateTrackDto) === "function" ? _d : Object]),
    tslib_1.__metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], TracksController.prototype, "createTrack", null);
exports.TracksController = TracksController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)('Tracks'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('tracks'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof tracks_service_1.TracksService !== "undefined" && tracks_service_1.TracksService) === "function" ? _a : Object])
], TracksController);


/***/ }),
/* 30 */
/***/ ((module) => {

module.exports = require("@nestjs/platform-express");

/***/ }),
/* 31 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateTrackDto = exports.CreateTrackFilesDto = void 0;
const tslib_1 = __webpack_require__(1);
const swagger_1 = __webpack_require__(21);
const class_validator_1 = __webpack_require__(32);
class CreateTrackFilesDto {
    constructor(partial) {
        Object.assign(this, partial);
    }
}
exports.CreateTrackFilesDto = CreateTrackFilesDto;
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', format: 'binary' }),
    tslib_1.__metadata("design:type", Array)
], CreateTrackFilesDto.prototype, "file", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', format: 'binary', required: false }),
    tslib_1.__metadata("design:type", Array)
], CreateTrackFilesDto.prototype, "image", void 0);
class CreateTrackDto {
    constructor(partial) {
        Object.assign(this, partial);
    }
}
exports.CreateTrackDto = CreateTrackDto;
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], CreateTrackDto.prototype, "title", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", Array)
], CreateTrackDto.prototype, "artistIds", void 0);


/***/ }),
/* 32 */
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),
/* 33 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TrackDto = void 0;
const tslib_1 = __webpack_require__(1);
const swagger_1 = __webpack_require__(21);
const track_artist_dto_1 = __webpack_require__(34);
class TrackDto {
    constructor(partial) {
        Object.assign(this, partial);
    }
}
exports.TrackDto = TrackDto;
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], TrackDto.prototype, "id", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], TrackDto.prototype, "title", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], TrackDto.prototype, "file", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    tslib_1.__metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], TrackDto.prototype, "date", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    tslib_1.__metadata("design:type", String)
], TrackDto.prototype, "image", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    tslib_1.__metadata("design:type", String)
], TrackDto.prototype, "color", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ type: track_artist_dto_1.TrackArtistDto, isArray: true }),
    tslib_1.__metadata("design:type", Array)
], TrackDto.prototype, "artists", void 0);


/***/ }),
/* 34 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TrackArtistDto = void 0;
const tslib_1 = __webpack_require__(1);
const swagger_1 = __webpack_require__(21);
class TrackArtistDto {
    constructor(partial) {
        Object.assign(this, partial);
    }
}
exports.TrackArtistDto = TrackArtistDto;
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], TrackArtistDto.prototype, "id", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], TrackArtistDto.prototype, "name", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], TrackArtistDto.prototype, "avatar", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], TrackArtistDto.prototype, "banner", void 0);


/***/ }),
/* 35 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthGuard = exports.Public = exports.IS_PUBLIC_KEY = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(2);
const token_service_1 = __webpack_require__(36);
const common_2 = __webpack_require__(2);
const core_1 = __webpack_require__(3);
exports.IS_PUBLIC_KEY = 'isPublic';
const Public = () => (0, common_2.SetMetadata)(exports.IS_PUBLIC_KEY, true);
exports.Public = Public;
let AuthGuard = exports.AuthGuard = class AuthGuard {
    constructor(tokenService, reflector) {
        this.tokenService = tokenService;
        this.reflector = reflector;
    }
    async canActivate(context) {
        const isPublic = this.reflector.getAllAndOverride(exports.IS_PUBLIC_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        if (isPublic) {
            return true;
        }
        const request = context.switchToHttp().getRequest();
        const token = this.extractTokenFromHeader(request) || request.query.accessToken;
        if (!token) {
            throw new common_1.UnauthorizedException();
        }
        try {
            request['user'] = await this.tokenService.verifyAccessToken(token);
        }
        catch {
            throw new common_1.UnauthorizedException();
        }
        return true;
    }
    extractTokenFromHeader(request) {
        const [type, token] = request.headers.authorization?.split(' ') ?? []; // Todo
        return type === 'Bearer' ? token : undefined;
    }
};
exports.AuthGuard = AuthGuard = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof token_service_1.TokenService !== "undefined" && token_service_1.TokenService) === "function" ? _a : Object, typeof (_b = typeof core_1.Reflector !== "undefined" && core_1.Reflector) === "function" ? _b : Object])
], AuthGuard);


/***/ }),
/* 36 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TokenService = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(2);
const jwt_1 = __webpack_require__(37);
const token_repository_1 = __webpack_require__(38);
const config_1 = __webpack_require__(20);
let TokenService = exports.TokenService = class TokenService {
    constructor(jwtService, tokenRepository, config) {
        this.jwtService = jwtService;
        this.tokenRepository = tokenRepository;
        this.config = config;
    }
    async saveRefreshToken(userId, refreshToken) {
        const existedToken = await this.tokenRepository.getRefreshToken(userId);
        return existedToken
            ? this.tokenRepository.updateRefreshToken(userId, refreshToken)
            : this.tokenRepository.createRefreshToken(userId, refreshToken);
    }
    removeRefreshToken(refreshToken) {
        return this.tokenRepository.removeRefreshToken(refreshToken);
    }
    generateAccessToken(payload) {
        return this.jwtService.signAsync(payload, {
            secret: this.config.get('JWT_ACCESS_SECRET'),
            expiresIn: '30m',
        });
    }
    generateRefreshToken(payload) {
        return this.jwtService.signAsync(payload, {
            secret: this.config.get('JWT_REFRESH_SECRET'),
            expiresIn: '30d',
        });
    }
    async verifyAccessToken(token) {
        try {
            return await this.jwtService.verifyAsync(token, {
                secret: this.config.get('JWT_ACCESS_SECRET'),
            });
        }
        catch {
            throw new common_1.UnauthorizedException();
        }
    }
    async verifyRefreshToken(token) {
        try {
            return await this.jwtService.verifyAsync(token, {
                secret: this.config.get('JWT_REFRESH_SECRET'),
            });
        }
        catch {
            throw new common_1.UnauthorizedException();
        }
    }
};
exports.TokenService = TokenService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _a : Object, typeof (_b = typeof token_repository_1.TokenRepository !== "undefined" && token_repository_1.TokenRepository) === "function" ? _b : Object, typeof (_c = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _c : Object])
], TokenService);


/***/ }),
/* 37 */
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),
/* 38 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TokenRepository = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(2);
const database_service_1 = __webpack_require__(13);
let TokenRepository = exports.TokenRepository = class TokenRepository {
    constructor(db) {
        this.db = db;
    }
    getRefreshToken(userId) {
        return this.db.token.findUnique({
            where: { userId },
        });
    }
    createRefreshToken(userId, refreshToken) {
        return this.db.token.create({
            data: { refreshToken, userId },
        });
    }
    updateRefreshToken(userId, refreshToken) {
        return this.db.token.update({
            data: { refreshToken },
            where: { userId },
        });
    }
    removeRefreshToken(refreshToken) {
        return this.db.token.delete({
            where: { refreshToken },
        });
    }
};
exports.TokenRepository = TokenRepository = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof database_service_1.DatabaseService !== "undefined" && database_service_1.DatabaseService) === "function" ? _a : Object])
], TokenRepository);


/***/ }),
/* 39 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DatabaseModule = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(2);
const database_service_1 = __webpack_require__(13);
let DatabaseModule = exports.DatabaseModule = class DatabaseModule {
};
exports.DatabaseModule = DatabaseModule = tslib_1.__decorate([
    (0, common_1.Module)({
        providers: [database_service_1.DatabaseService],
        exports: [database_service_1.DatabaseService],
    })
], DatabaseModule);


/***/ }),
/* 40 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FilestoreModule = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(2);
const filestore_service_1 = __webpack_require__(15);
const filestore_controller_1 = __webpack_require__(41);
const images_module_1 = __webpack_require__(45);
const config_1 = __webpack_require__(20);
let FilestoreModule = exports.FilestoreModule = class FilestoreModule {
};
exports.FilestoreModule = FilestoreModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [images_module_1.ImagesModule, config_1.ConfigModule],
        providers: [filestore_service_1.FilestoreService],
        exports: [filestore_service_1.FilestoreService],
        controllers: [filestore_controller_1.FilestoreController],
    })
], FilestoreModule);


/***/ }),
/* 41 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FilestoreController = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(2);
const express_1 = __webpack_require__(27);
const filestore_service_1 = __webpack_require__(15);
const platform_express_1 = __webpack_require__(30);
const swagger_1 = __webpack_require__(21);
const auth_guard_1 = __webpack_require__(35);
const upload_image_file_dto_1 = __webpack_require__(42);
const upload_audio_file_dto_1 = __webpack_require__(44);
const upload_image_params_dto_1 = __webpack_require__(43);
let FilestoreController = exports.FilestoreController = class FilestoreController {
    constructor(filestore) {
        this.filestore = filestore;
    }
    getImage(id, res) {
        res.contentType('webp');
        return new common_1.StreamableFile(this.filestore.getImage(id)).setErrorHandler(() => { });
    }
    uploadImage(file, params) {
        return this.filestore.saveImage(file, params);
    }
    async getAudio(id, res, headers) {
        const range = headers.range;
        const { length: size } = await this.filestore.getFileInfo(id);
        let params;
        if (range) {
            const parts = range.replace(/bytes=/, '').split('-');
            const start = parseInt(parts[0], 10);
            const end = parts[1] ? parseInt(parts[1], 10) : size - 1;
            const chunksize = end - start + 1;
            const head = {
                'Content-Range': `bytes ${start}-${end}/${size}`,
                'Content-Length': chunksize,
            };
            res.writeHead(common_1.HttpStatus.PARTIAL_CONTENT, head);
            params = { start, end: end + 1 };
        }
        else {
            res.writeHead(common_1.HttpStatus.OK, { 'Content-Length': size });
        }
        return new common_1.StreamableFile(this.filestore.getAudio(id, params));
    }
    uploadAudio(file) {
        return this.filestore.saveAudio(file);
    }
};
tslib_1.__decorate([
    (0, auth_guard_1.Public)(),
    (0, common_1.Header)('Cache-Control', 'max-age=3600'),
    (0, common_1.Get)('image/:id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__param(1, (0, common_1.Res)({ passthrough: true })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, typeof (_b = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], FilestoreController.prototype, "getImage", null);
tslib_1.__decorate([
    (0, common_1.Post)('image'),
    (0, swagger_1.ApiBody)({ type: upload_image_file_dto_1.UploadImageFileDto }),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    tslib_1.__param(0, (0, common_1.UploadedFile)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_d = typeof Express !== "undefined" && (_c = Express.Multer) !== void 0 && _c.File) === "function" ? _d : Object, typeof (_e = typeof upload_image_params_dto_1.UploadImageParamsDto !== "undefined" && upload_image_params_dto_1.UploadImageParamsDto) === "function" ? _e : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], FilestoreController.prototype, "uploadImage", null);
tslib_1.__decorate([
    (0, auth_guard_1.Public)(),
    (0, common_1.Get)('audio/:id'),
    (0, common_1.Header)('Accept-Ranges', 'bytes'),
    (0, common_1.Header)('Content-Type', 'audio/mpeg'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__param(1, (0, common_1.Res)({ passthrough: true })),
    tslib_1.__param(2, (0, common_1.Headers)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, typeof (_f = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _f : Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], FilestoreController.prototype, "getAudio", null);
tslib_1.__decorate([
    (0, common_1.Post)('audio'),
    (0, swagger_1.ApiBody)({ type: upload_audio_file_dto_1.UploadAudioFileDto }),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    tslib_1.__param(0, (0, common_1.UploadedFile)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_h = typeof Express !== "undefined" && (_g = Express.Multer) !== void 0 && _g.File) === "function" ? _h : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], FilestoreController.prototype, "uploadAudio", null);
exports.FilestoreController = FilestoreController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)('Filestore'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('filestore'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof filestore_service_1.FilestoreService !== "undefined" && filestore_service_1.FilestoreService) === "function" ? _a : Object])
], FilestoreController);


/***/ }),
/* 42 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UploadImageFileDto = void 0;
const tslib_1 = __webpack_require__(1);
const swagger_1 = __webpack_require__(21);
const upload_image_params_dto_1 = __webpack_require__(43);
class UploadImageFileDto extends upload_image_params_dto_1.UploadImageParamsDto {
}
exports.UploadImageFileDto = UploadImageFileDto;
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', format: 'binary' }),
    tslib_1.__metadata("design:type", typeof (_b = typeof Express !== "undefined" && (_a = Express.Multer) !== void 0 && _a.File) === "function" ? _b : Object)
], UploadImageFileDto.prototype, "file", void 0);


/***/ }),
/* 43 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UploadImageParamsDto = void 0;
const tslib_1 = __webpack_require__(1);
const swagger_1 = __webpack_require__(21);
class UploadImageParamsDto {
}
exports.UploadImageParamsDto = UploadImageParamsDto;
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    tslib_1.__metadata("design:type", Number)
], UploadImageParamsDto.prototype, "width", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    tslib_1.__metadata("design:type", Number)
], UploadImageParamsDto.prototype, "height", void 0);


/***/ }),
/* 44 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UploadAudioFileDto = void 0;
const tslib_1 = __webpack_require__(1);
const swagger_1 = __webpack_require__(21);
class UploadAudioFileDto {
}
exports.UploadAudioFileDto = UploadAudioFileDto;
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', format: 'binary' }),
    tslib_1.__metadata("design:type", typeof (_b = typeof Express !== "undefined" && (_a = Express.Multer) !== void 0 && _a.File) === "function" ? _b : Object)
], UploadAudioFileDto.prototype, "file", void 0);


/***/ }),
/* 45 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ImagesModule = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(2);
const images_service_1 = __webpack_require__(18);
let ImagesModule = exports.ImagesModule = class ImagesModule {
};
exports.ImagesModule = ImagesModule = tslib_1.__decorate([
    (0, common_1.Module)({
        providers: [images_service_1.ImagesService],
        exports: [images_service_1.ImagesService],
    })
], ImagesModule);


/***/ }),
/* 46 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(2);
const auth_service_1 = __webpack_require__(47);
const auth_controller_1 = __webpack_require__(51);
const users_module_1 = __webpack_require__(54);
const token_module_1 = __webpack_require__(56);
const auth_guard_1 = __webpack_require__(35);
const core_1 = __webpack_require__(3);
let AuthModule = exports.AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [users_module_1.UsersModule, token_module_1.TokenModule],
        providers: [
            auth_service_1.AuthService,
            {
                provide: core_1.APP_GUARD,
                useClass: auth_guard_1.AuthGuard,
            },
        ],
        controllers: [auth_controller_1.AuthController],
    })
], AuthModule);


/***/ }),
/* 47 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(2);
const users_service_1 = __webpack_require__(48);
const token_service_1 = __webpack_require__(36);
const bcrypt = tslib_1.__importStar(__webpack_require__(50));
const user_dto_1 = __webpack_require__(23);
let AuthService = exports.AuthService = class AuthService {
    constructor(usersService, tokenService) {
        this.usersService = usersService;
        this.tokenService = tokenService;
    }
    async signUp(data) {
        const hashPassword = await bcrypt.hash(data.password, 3);
        const user = await this.usersService.createUser({
            ...data,
            password: hashPassword,
        });
        return this.signIn(user);
    }
    async signIn(data) {
        const user = await this.usersService.getUserByEmail(data.email);
        if (!user) {
            throw new common_1.BadRequestException('Email not found');
        }
        const isEqualsPassword = await bcrypt.hash(data.password, user.password);
        if (!isEqualsPassword) {
            throw new common_1.BadRequestException('Wrong password');
        }
        const payload = {
            id: user.id,
            email: user.email,
            name: user.name,
        };
        const refreshToken = await this.tokenService.generateRefreshToken(payload);
        await this.tokenService.saveRefreshToken(user.id, refreshToken);
        return {
            access_token: await this.tokenService.generateAccessToken(payload),
            refresh_token: refreshToken,
        };
    }
    async logout(refreshToken) {
        return this.tokenService.removeRefreshToken(refreshToken);
    }
    async refreshAccessToken(refreshToken) {
        const user = new user_dto_1.UserDto(await this.tokenService.verifyRefreshToken(refreshToken));
        return this.tokenService.generateAccessToken({
            id: user.id,
            email: user.email,
            name: user.name,
        });
    }
};
exports.AuthService = AuthService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof users_service_1.UsersService !== "undefined" && users_service_1.UsersService) === "function" ? _a : Object, typeof (_b = typeof token_service_1.TokenService !== "undefined" && token_service_1.TokenService) === "function" ? _b : Object])
], AuthService);


/***/ }),
/* 48 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersService = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(2);
const users_repository_1 = __webpack_require__(49);
const user_dto_1 = __webpack_require__(23);
let UsersService = exports.UsersService = class UsersService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async createUser(data) {
        const existedUser = await this.usersRepository.getUserByEmail(data.email);
        if (existedUser)
            throw new common_1.ConflictException(`Пользователь ${data.email} зарегистрирован`);
        return this.usersRepository.createUser(data);
    }
    async getUserById(id) {
        const user = await this.usersRepository.getUserById(id);
        if (!user)
            throw new common_1.NotFoundException();
        return new user_dto_1.UserDto(user);
    }
    async getUserByEmail(email) {
        const user = await this.usersRepository.getUserByEmail(email);
        if (!user)
            throw new common_1.NotFoundException();
        return new user_dto_1.UserDto(user);
    }
};
exports.UsersService = UsersService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof users_repository_1.UsersRepository !== "undefined" && users_repository_1.UsersRepository) === "function" ? _a : Object])
], UsersService);


/***/ }),
/* 49 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersRepository = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(2);
const database_service_1 = __webpack_require__(13);
let UsersRepository = exports.UsersRepository = class UsersRepository {
    constructor(db) {
        this.db = db;
    }
    createUser(data) {
        return this.db.user.create({ data });
    }
    getUserByEmail(email) {
        return this.db.user.findUnique({
            where: {
                email,
            },
        });
    }
    getUserById(id) {
        return this.db.user.findUnique({
            where: {
                id,
            },
        });
    }
};
exports.UsersRepository = UsersRepository = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof database_service_1.DatabaseService !== "undefined" && database_service_1.DatabaseService) === "function" ? _a : Object])
], UsersRepository);


/***/ }),
/* 50 */
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),
/* 51 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthController = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(2);
const sign_up_dto_1 = __webpack_require__(52);
const auth_service_1 = __webpack_require__(47);
const swagger_1 = __webpack_require__(21);
const sign_in_dto_1 = __webpack_require__(53);
const auth_guard_1 = __webpack_require__(35);
const express_1 = __webpack_require__(27);
let AuthController = exports.AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async signUp(data, response) {
        const tokens = await this.authService.signUp(data);
        this.setRefreshTokenToCookie(response, tokens.refresh_token);
        return tokens.access_token;
    }
    async signIn(data, response, req) {
        const tokens = await this.authService.signIn(data);
        this.setRefreshTokenToCookie(response, tokens.refresh_token);
        return tokens.access_token;
    }
    async logout(request, response) {
        const refreshToken = request['cookies'].refreshToken;
        if (!refreshToken) {
            throw new common_1.UnauthorizedException();
        }
        // await this.authService.logout(refreshToken);
        response['clearCookie']('refreshToken');
    }
    async refresh(request) {
        const refreshToken = request['cookies'].refreshToken;
        if (!refreshToken) {
            throw new common_1.UnauthorizedException();
        }
        return this.authService.refreshAccessToken(refreshToken);
    }
    setRefreshTokenToCookie(response, token) {
        response['cookie']('refreshToken', token, {
            httpOnly: true,
            secure: false,
            expires: new Date(Date.now() + 30 * 24 * 60 * 1000),
        });
    }
};
tslib_1.__decorate([
    (0, auth_guard_1.Public)(),
    (0, swagger_1.ApiOkResponse)({ type: String }),
    (0, common_1.Post)('sign-up'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__param(1, (0, common_1.Res)({ passthrough: true })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof sign_up_dto_1.SignUpDto !== "undefined" && sign_up_dto_1.SignUpDto) === "function" ? _b : Object, typeof (_c = typeof Response !== "undefined" && Response) === "function" ? _c : Object]),
    tslib_1.__metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], AuthController.prototype, "signUp", null);
tslib_1.__decorate([
    (0, auth_guard_1.Public)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOkResponse)({ type: String }),
    (0, common_1.Post)('login'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__param(1, (0, common_1.Res)({ passthrough: true })),
    tslib_1.__param(2, (0, common_1.Req)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_e = typeof sign_in_dto_1.SignInDto !== "undefined" && sign_in_dto_1.SignInDto) === "function" ? _e : Object, typeof (_f = typeof Response !== "undefined" && Response) === "function" ? _f : Object, typeof (_g = typeof express_1.Request !== "undefined" && express_1.Request) === "function" ? _g : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthController.prototype, "signIn", null);
tslib_1.__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, common_1.Post)('logout'),
    tslib_1.__param(0, (0, common_1.Req)()),
    tslib_1.__param(1, (0, common_1.Res)({ passthrough: true })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_h = typeof express_1.Request !== "undefined" && express_1.Request) === "function" ? _h : Object, typeof (_j = typeof Response !== "undefined" && Response) === "function" ? _j : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthController.prototype, "logout", null);
tslib_1.__decorate([
    (0, auth_guard_1.Public)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOkResponse)({ type: String }),
    (0, common_1.Post)('refresh'),
    tslib_1.__param(0, (0, common_1.Req)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_k = typeof express_1.Request !== "undefined" && express_1.Request) === "function" ? _k : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthController.prototype, "refresh", null);
exports.AuthController = AuthController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)('Auth'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('auth'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], AuthController);


/***/ }),
/* 52 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SignUpDto = void 0;
const tslib_1 = __webpack_require__(1);
const class_validator_1 = __webpack_require__(32);
const swagger_1 = __webpack_require__(21);
class SignUpDto {
}
exports.SignUpDto = SignUpDto;
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsEmail)(),
    tslib_1.__metadata("design:type", String)
], SignUpDto.prototype, "email", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(8),
    tslib_1.__metadata("design:type", String)
], SignUpDto.prototype, "password", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(2),
    tslib_1.__metadata("design:type", String)
], SignUpDto.prototype, "name", void 0);


/***/ }),
/* 53 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SignInDto = void 0;
const tslib_1 = __webpack_require__(1);
const class_validator_1 = __webpack_require__(32);
const swagger_1 = __webpack_require__(21);
class SignInDto {
}
exports.SignInDto = SignInDto;
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ default: 'string@mail.com' }),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], SignInDto.prototype, "email", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ default: '88888888' }),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], SignInDto.prototype, "password", void 0);


/***/ }),
/* 54 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersModule = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(2);
const users_service_1 = __webpack_require__(48);
const users_repository_1 = __webpack_require__(49);
const database_module_1 = __webpack_require__(39);
const users_controller_1 = __webpack_require__(55);
let UsersModule = exports.UsersModule = class UsersModule {
};
exports.UsersModule = UsersModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        controllers: [users_controller_1.UsersController],
        providers: [users_service_1.UsersService, users_repository_1.UsersRepository],
        exports: [users_service_1.UsersService],
    })
], UsersModule);


/***/ }),
/* 55 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersController = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(2);
const swagger_1 = __webpack_require__(21);
const user_decorator_1 = __webpack_require__(22);
const user_dto_1 = __webpack_require__(23);
const users_service_1 = __webpack_require__(48);
let UsersController = exports.UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    // @UseInterceptors(ClassSerializerInterceptor)
    async getCurrentUser(user) {
        return this.usersService.getUserById(user.id);
    }
};
tslib_1.__decorate([
    (0, common_1.Get)('current'),
    (0, swagger_1.ApiOkResponse)({ type: user_dto_1.UserDto }),
    tslib_1.__param(0, (0, user_decorator_1.User)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof user_dto_1.UserDto !== "undefined" && user_dto_1.UserDto) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersController.prototype, "getCurrentUser", null);
exports.UsersController = UsersController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)('Users'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('users'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof users_service_1.UsersService !== "undefined" && users_service_1.UsersService) === "function" ? _a : Object])
], UsersController);


/***/ }),
/* 56 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TokenModule = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(2);
const token_service_1 = __webpack_require__(36);
const database_module_1 = __webpack_require__(39);
const jwt_1 = __webpack_require__(37);
const token_repository_1 = __webpack_require__(38);
const config_1 = __webpack_require__(20);
let TokenModule = exports.TokenModule = class TokenModule {
};
exports.TokenModule = TokenModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [jwt_1.JwtModule.register({}), database_module_1.DatabaseModule, config_1.ConfigModule],
        providers: [token_service_1.TokenService, token_repository_1.TokenRepository],
        exports: [token_service_1.TokenService],
    })
], TokenModule);


/***/ }),
/* 57 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ArtistsModule = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(2);
const artists_service_1 = __webpack_require__(58);
const artists_controller_1 = __webpack_require__(60);
const artists_repository_1 = __webpack_require__(59);
const database_module_1 = __webpack_require__(39);
const filestore_module_1 = __webpack_require__(40);
const images_module_1 = __webpack_require__(45);
let ArtistsModule = exports.ArtistsModule = class ArtistsModule {
};
exports.ArtistsModule = ArtistsModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule, filestore_module_1.FilestoreModule, images_module_1.ImagesModule],
        providers: [artists_service_1.ArtistsService, artists_repository_1.ArtistsRepository],
        controllers: [artists_controller_1.ArtistsController],
    })
], ArtistsModule);


/***/ }),
/* 58 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ArtistsService = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(2);
const artists_repository_1 = __webpack_require__(59);
const filestore_service_1 = __webpack_require__(15);
const images_service_1 = __webpack_require__(18);
let ArtistsService = exports.ArtistsService = class ArtistsService {
    constructor(artistsRepository, filestore, imagesService) {
        this.artistsRepository = artistsRepository;
        this.filestore = filestore;
        this.imagesService = imagesService;
    }
    async getArtistList() {
        return this.artistsRepository.getArtistList();
    }
    async getArtistById(id) {
        const artist = await this.artistsRepository.getArtistById(id);
        if (!artist)
            throw new common_1.NotFoundException();
        return artist;
    }
    async createArtist(name, images) {
        const [avatar, banner, color] = await Promise.all([
            images.avatar?.[0] &&
                this.filestore.saveImage(images.avatar[0], {
                    width: 640,
                    height: 640,
                }),
            images.banner?.[0] &&
                this.filestore.saveImage(images.banner[0], {
                    width: 2660,
                    height: 1140,
                }),
            images.avatar?.[0]?.buffer &&
                this.imagesService.getColorFromImage(images.avatar?.[0]?.buffer),
        ]);
        return this.artistsRepository.createArtist({
            name,
            banner,
            avatar,
            color,
        });
    }
};
exports.ArtistsService = ArtistsService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof artists_repository_1.ArtistsRepository !== "undefined" && artists_repository_1.ArtistsRepository) === "function" ? _a : Object, typeof (_b = typeof filestore_service_1.FilestoreService !== "undefined" && filestore_service_1.FilestoreService) === "function" ? _b : Object, typeof (_c = typeof images_service_1.ImagesService !== "undefined" && images_service_1.ImagesService) === "function" ? _c : Object])
], ArtistsService);


/***/ }),
/* 59 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ArtistsRepository = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(2);
const database_service_1 = __webpack_require__(13);
let ArtistsRepository = exports.ArtistsRepository = class ArtistsRepository {
    constructor(db) {
        this.db = db;
    }
    getArtistList() {
        return this.db.artist.findMany({
            select: {
                id: true,
                name: true,
                avatar: true,
                color: true,
            },
        });
    }
    getArtistById(id) {
        return this.db.artist.findUnique({
            where: { id },
            include: {
                tracks: {
                    select: {
                        id: true,
                        title: true,
                        date: true,
                        image: true,
                        artists: true,
                    },
                },
            },
        });
    }
    createArtist(data) {
        return this.db.artist.create({
            data,
            //Todo
            include: {
                tracks: {
                    select: {
                        id: true,
                        title: true,
                        date: true,
                        image: true,
                        artists: true,
                    },
                },
            },
        });
    }
};
exports.ArtistsRepository = ArtistsRepository = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof database_service_1.DatabaseService !== "undefined" && database_service_1.DatabaseService) === "function" ? _a : Object])
], ArtistsRepository);


/***/ }),
/* 60 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ArtistsController = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(2);
const artists_service_1 = __webpack_require__(58);
const platform_express_1 = __webpack_require__(30);
const create_artist_dto_1 = __webpack_require__(61);
const swagger_1 = __webpack_require__(21);
const artist_dto_1 = __webpack_require__(62);
const auth_guard_1 = __webpack_require__(35);
const artist_list_item_dto_1 = __webpack_require__(64);
let ArtistsController = exports.ArtistsController = class ArtistsController {
    constructor(artistsService) {
        this.artistsService = artistsService;
    }
    getArtistList() {
        return this.artistsService.getArtistList();
    }
    getArtistById(id) {
        return this.artistsService.getArtistById(id);
    }
    createArtist(files, body) {
        return this.artistsService.createArtist(body.name, files);
    }
};
tslib_1.__decorate([
    (0, common_1.Get)(),
    (0, auth_guard_1.Public)(),
    (0, swagger_1.ApiOkResponse)({ type: artist_list_item_dto_1.ArtistListItemDto, isArray: true }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], ArtistsController.prototype, "getArtistList", null);
tslib_1.__decorate([
    (0, common_1.Get)(':id'),
    (0, auth_guard_1.Public)(),
    (0, swagger_1.ApiOkResponse)({ type: artist_dto_1.ArtistDto }),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], ArtistsController.prototype, "getArtistById", null);
tslib_1.__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiCreatedResponse)({ type: artist_dto_1.ArtistDto }),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([
        { name: 'avatar', maxCount: 1 },
        { name: 'banner', maxCount: 1 },
    ])),
    tslib_1.__param(0, (0, common_1.UploadedFiles)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_d = typeof create_artist_dto_1.CreateArtistFilesDto !== "undefined" && create_artist_dto_1.CreateArtistFilesDto) === "function" ? _d : Object, typeof (_e = typeof create_artist_dto_1.CreateArtistDto !== "undefined" && create_artist_dto_1.CreateArtistDto) === "function" ? _e : Object]),
    tslib_1.__metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], ArtistsController.prototype, "createArtist", null);
exports.ArtistsController = ArtistsController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)('Artists'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('artists'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof artists_service_1.ArtistsService !== "undefined" && artists_service_1.ArtistsService) === "function" ? _a : Object])
], ArtistsController);


/***/ }),
/* 61 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateArtistDto = exports.CreateArtistFilesDto = void 0;
const tslib_1 = __webpack_require__(1);
const class_validator_1 = __webpack_require__(32);
const swagger_1 = __webpack_require__(21);
class CreateArtistFilesDto {
}
exports.CreateArtistFilesDto = CreateArtistFilesDto;
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', format: 'binary' }),
    tslib_1.__metadata("design:type", Array)
], CreateArtistFilesDto.prototype, "avatar", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', format: 'binary' }),
    tslib_1.__metadata("design:type", Array)
], CreateArtistFilesDto.prototype, "banner", void 0);
class CreateArtistDto {
}
exports.CreateArtistDto = CreateArtistDto;
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], CreateArtistDto.prototype, "name", void 0);


/***/ }),
/* 62 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ArtistDto = void 0;
const tslib_1 = __webpack_require__(1);
const swagger_1 = __webpack_require__(21);
const artist_track_dto_1 = __webpack_require__(63);
class ArtistDto {
}
exports.ArtistDto = ArtistDto;
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], ArtistDto.prototype, "id", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], ArtistDto.prototype, "name", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], ArtistDto.prototype, "avatar", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], ArtistDto.prototype, "banner", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], ArtistDto.prototype, "color", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ type: artist_track_dto_1.ArtistTrackDto, isArray: true }),
    tslib_1.__metadata("design:type", Array)
], ArtistDto.prototype, "tracks", void 0);


/***/ }),
/* 63 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ArtistTrackDto = void 0;
const tslib_1 = __webpack_require__(1);
const swagger_1 = __webpack_require__(21);
const track_artist_dto_1 = __webpack_require__(34);
class ArtistTrackDto {
}
exports.ArtistTrackDto = ArtistTrackDto;
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], ArtistTrackDto.prototype, "id", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], ArtistTrackDto.prototype, "title", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    tslib_1.__metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], ArtistTrackDto.prototype, "date", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], ArtistTrackDto.prototype, "image", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ type: track_artist_dto_1.TrackArtistDto, isArray: true }),
    tslib_1.__metadata("design:type", Array)
], ArtistTrackDto.prototype, "artists", void 0);


/***/ }),
/* 64 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ArtistListItemDto = void 0;
const tslib_1 = __webpack_require__(1);
const swagger_1 = __webpack_require__(21);
class ArtistListItemDto {
}
exports.ArtistListItemDto = ArtistListItemDto;
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], ArtistListItemDto.prototype, "id", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], ArtistListItemDto.prototype, "name", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], ArtistListItemDto.prototype, "avatar", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], ArtistListItemDto.prototype, "color", void 0);


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(2);
const core_1 = __webpack_require__(3);
const cookie_parser_1 = tslib_1.__importDefault(__webpack_require__(4));
const app_module_1 = __webpack_require__(5);
const swagger_1 = __webpack_require__(21);
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const globalPrefix = 'api';
    app.setGlobalPrefix(globalPrefix);
    const port = process.env.OPEN_PORT || 3000;
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Open api')
        .setVersion('1.0')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.use((0, cookie_parser_1.default)());
    app.enableCors({ credentials: true, origin: true });
    app.useGlobalInterceptors(new common_1.ClassSerializerInterceptor(app.get(core_1.Reflector)));
    await app.listen(port);
    common_1.Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
}
bootstrap();

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=index.js.map