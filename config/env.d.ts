type GetDir = (...paths: string[]) => string;
type Mode = "development" | "production";

type Env = { GET_DIR: GetDir; MODE: Mode };

declare const ENV: Env;

export = ENV;
