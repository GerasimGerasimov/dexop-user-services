import { userRouter } from "./UserRouter";
export class Routes {
    constructor(app) {
        app.use("/api", userRouter);
    }
}
//# sourceMappingURL=index.js.map