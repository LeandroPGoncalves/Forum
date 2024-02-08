import { v4 as uuidv4 } from 'uuid';


abstract class entBase {
    protected id: string;
    
    constructor() {
        this.id = uuidv4();
    }
       
}

export default entBase;