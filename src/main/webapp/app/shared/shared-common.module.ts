import { NgModule } from '@angular/core';

import { JhipsterSgtsSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [JhipsterSgtsSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [JhipsterSgtsSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class JhipsterSgtsSharedCommonModule {}
