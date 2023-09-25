// nodejs-postgresql/src/server.js

import { app } from "./index.js";

const port = process.env.PORT || 3001;

app.listen(port, () =>
    console.log(`Server running in ${process.env.NODE_ENV} mode on port http://localhost:${port}`)
);
