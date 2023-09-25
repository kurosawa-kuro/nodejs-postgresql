import { Client } from 'pg';
import DatabaseConnector from './connectToDatabase';

jest.mock('pg');

describe('DatabaseConnector', () => {
    let mockClient;
    let databaseConnector;

    beforeEach(() => {
        mockClient = {
            connect: jest.fn(),
            end: jest.fn(),
        };
        Client.mockImplementation(() => mockClient);
        databaseConnector = new DatabaseConnector();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should return true when connection is successful', async () => {
        const result = await databaseConnector.connectToDatabase();
        expect(result).toBe(true);
        expect(mockClient.connect).toHaveBeenCalled();
        expect(mockClient.end).toHaveBeenCalled();
    });

    it('should return false when connection fails', async () => {
        mockClient.connect.mockImplementationOnce(() => {
            throw new Error('Connection error');
        });

        const result = await databaseConnector.connectToDatabase();
        expect(result).toBe(false);
        expect(mockClient.connect).toHaveBeenCalled();
        expect(mockClient.end).toHaveBeenCalled();
    });
});
