import { serverHttp } from "./app";

const myPortAccess = 8080;

serverHttp.listen(myPortAccess, () => console.log(`🚀 Server is running on PORT ${myPortAccess}`));