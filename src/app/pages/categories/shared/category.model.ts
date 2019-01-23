import { BaseResourceModel } from 'src/app/shared/models/base-resource.model';

export class Category extends BaseResourceModel {

        constructor( public id?: string,
                     public nome?: string,
                     public description?: string) {
                super();
        }
}
