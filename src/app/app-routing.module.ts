import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './components/useless/dashboard/dashboard.component';
import { FormLayoutComponent } from './components/useless/formlayout/formlayout.component';
import { PanelsComponent } from './components/useless/panels/panels.component';
import { OverlaysComponent } from './components/useless/overlays/overlays.component';
import { MediaComponent } from './components/useless/media/media.component';
import { MessagesComponent } from './components/useless/messages/messages.component';
import { MiscComponent } from './components/useless/misc/misc.component';
import { EmptyComponent } from './components/useless/empty/empty.component';
import { ChartsComponent } from './components/useless/charts/charts.component';
import { FileComponent } from './components/useless/file/file.component';
import { DocumentationComponent } from './components/useless/documentation/documentation.component';
import { AppMainComponent } from './app.main.component';
import { InputComponent } from './components/useless/input/input.component';
import { ButtonComponent } from './components/useless/button/button.component';
import { TableComponent } from './components/useless/table/table.component';
import { ListComponent } from './components/useless/list/list.component';
import { TreeComponent } from './components/useless/tree/tree.component';
import { CrudComponent } from './components/useless/crud/crud.component';
import { BlocksComponent } from './components/useless/blocks/blocks.component';
import { FloatLabelComponent } from './components/useless/floatlabel/floatlabel.component';
import { InvalidStateComponent } from './components/useless/invalidstate/invalidstate.component';
import { TimelineComponent } from './components/useless/timeline/timeline.component';
import { IconsComponent } from './components/useless/icons/icons.component';
import { LandingComponent } from './components/useless/landing/landing.component';
import { LoginComponent } from './components/useless/login/login.component';
import { ErrorComponent } from './components/useless/error/error.component';
import { NotfoundComponent } from './components/useless/notfound/notfound.component';
import { AccessComponent } from './components/useless/access/access.component';
import {StoreComponent} from "./components/store/store.component";
import {BaseStationComponent} from "./components/base-station/base-station.component";
import {PriceTagComponent} from "./components/price-tag/price-tag.component";
import {CompanyComponent} from "./components/company/company.component";
import {ProductComponent} from "./components/product/product.component";
@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppMainComponent,
                children: [
                    {path: '', component: DashboardComponent},
                    {path: 'uikit/formlayout', component: FormLayoutComponent},
                    {path: 'uikit/input', component: InputComponent},
                    {path: 'uikit/floatlabel', component: FloatLabelComponent},
                    {path: 'uikit/invalidstate', component: InvalidStateComponent},
                    {path: 'uikit/button', component: ButtonComponent},
                    {path: 'uikit/table', component: TableComponent},
                    {path: 'uikit/list', component: ListComponent},
                    {path: 'uikit/tree', component: TreeComponent},
                    {path: 'uikit/panel', component: PanelsComponent},
                    {path: 'uikit/overlay', component: OverlaysComponent},
                    {path: 'uikit/media', component: MediaComponent},
                    {path: 'uikit/menu', loadChildren: () => import('./components/useless/menus/menus.module').then(m => m.MenusModule)},
                    {path: 'uikit/message', component: MessagesComponent},
                    {path: 'uikit/misc', component: MiscComponent},
                    {path: 'uikit/charts', component: ChartsComponent},
                    {path: 'uikit/file', component: FileComponent},
                    {path: 'pages/crud', component: CrudComponent},
                    {path: 'pages/timeline', component: TimelineComponent},
                    {path: 'pages/empty', component: EmptyComponent},
                    {path: 'icons', component: IconsComponent},
                    {path: 'blocks', component: BlocksComponent},
                    {path: 'documentation', component: DocumentationComponent},
                    {path: 'company', component: CompanyComponent},
                    {path: 'store', component: StoreComponent},
                    {path: 'basestation', component: BaseStationComponent},
                    {path: 'pricetag', component: PriceTagComponent},
                    {path: 'product', component: ProductComponent}
                ],
            },
            {path:'pages/landing', component: LandingComponent},
            {path:'pages/login', component: LoginComponent},
            {path:'pages/error', component: ErrorComponent},
            {path:'pages/notfound', component: NotfoundComponent},
            {path:'pages/access', component: AccessComponent},
            {path: '**', redirectTo: 'pages/notfound'},
        ], {scrollPositionRestoration: 'enabled', anchorScrolling:'enabled'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
