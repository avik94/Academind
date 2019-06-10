import { NgModule } from '@angular/core';
import { LearnComponent } from './learn.component';
import { TopicComponent } from './topic/topic.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        LearnComponent,       
        TopicComponent
    ],
    imports: [
        CommonModule
    ]
})
export class LearnModule{}