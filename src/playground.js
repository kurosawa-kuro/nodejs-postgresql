import DatabaseConnector from './connectToDatabase.js';

async function main() {
    const dbConnector = new DatabaseConnector();
    await dbConnector.connectToDatabase();

}

main();