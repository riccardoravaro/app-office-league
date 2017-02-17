import {NgModule} from '@angular/core';
import {PlayerListComponent} from '../common/player-list/player-list.component';
import {RouterModule, Routes} from '@angular/router';
import {GamesModule} from '../games/games.module';
import {CommonModule} from '../common/common.module';
import {PlayerProfileComponent} from './player-profile/player-profile.component';
import {PlayerStatsComponent} from './player-stats/player-stats.component';

const playersRoutes: Routes = [
    {path: 'players', component: PlayerListComponent, data: {autoLoad: true}},
    {path: 'players/:id', component: PlayerProfileComponent, data: {autoLoad: true}},
];

@NgModule({
    declarations: [
        PlayerProfileComponent,
        PlayerStatsComponent
    ],
    imports: [
        CommonModule,
        GamesModule,
        RouterModule.forChild(playersRoutes),
    ],
    exports: [],
    providers: [],
    bootstrap: []
})
export class PlayersModule {
}