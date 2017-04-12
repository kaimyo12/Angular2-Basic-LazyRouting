import { Crisis } from './crisis';
import { CRISES } from './crisis.data';

export class CrisisService
{
    getCrises(): Promise<Crisis[]>
    {
        return Promise.resolve(CRISES);
    }
}