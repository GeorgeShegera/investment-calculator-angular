import { AppModule } from './app/app.module';
import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { importProvidersFrom } from '@angular/core';

bootstrapApplication(App, { providers: [importProvidersFrom(AppModule)] });
