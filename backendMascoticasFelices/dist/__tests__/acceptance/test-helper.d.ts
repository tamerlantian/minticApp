import { Mascoticasfelicesv2Application } from '../..';
import { Client } from '@loopback/testlab';
export declare function setupApplication(): Promise<AppWithClient>;
export interface AppWithClient {
    app: Mascoticasfelicesv2Application;
    client: Client;
}
