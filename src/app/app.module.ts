import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from './shared/components/modal/modal.module';
import { PAPER_INFO } from './shared/models/paper-token';
import { ANIMATION_KEY_DURATION } from './shared/models/animation-tokens';
import { LetterPreviewModule } from './shared/components/letter-preview/letter-preview.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ModalModule,
    LetterPreviewModule
  ],
  providers: [
    {
      provide: PAPER_INFO,
      useValue: {
        color: '#efeed9',
        width: 775,
        height: 1115
      }
    },
    {
      provide: ANIMATION_KEY_DURATION,
      useValue: 0.05
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
