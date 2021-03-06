import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { SamplePmsCFormDetailsModule } from './c-form-details/c-form-details.module';
import { SamplePmsCustomerModule } from './customer/customer.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        SamplePmsCFormDetailsModule,
        SamplePmsCustomerModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SamplePmsEntityModule {}
