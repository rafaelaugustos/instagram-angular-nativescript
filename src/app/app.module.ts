import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "@nativescript/angular";

// import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
// import { ItemsComponent } from "./item/items.component";
// import { ItemDetailComponent } from "./item/item-detail.component";
import { TimelineComponent } from './pages/timeline/timeline.component'

// Components
import { ListComponent } from './components/timeline/list/list.component'
import { PostComponent } from './components/timeline/post/post.component'

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        // AppRoutingModule
    ],
    declarations: [
        AppComponent,
        TimelineComponent,
        ListComponent,
        PostComponent
        // ItemsComponent,
        // ItemDetailComponent
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
