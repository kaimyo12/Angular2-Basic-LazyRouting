import { Crisis } from './crisis';
import { CRISES } from './crisis.data';

export class CrisisService
{
    getCrises(): Promise<Crisis[]>
    {
        return Promise.resolve(CRISES);
    }

    getCrisis(id:number)
    {
        return this.getCrises
        .then(crises => crises.find(crisis => crisis.id === id));
    }
}