/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as assert from 'assert';
import { Counter, Histogram, UpDownCounter } from '../src/Instruments';
import { Meter } from '../src/Meter';
import { MeterProviderSharedState } from '../src/state/MeterProviderSharedState';
import { defaultInstrumentationLibrary, defaultResource } from './util';

describe('Meter', () => {
  describe('createCounter', () => {
    it('should create counter', () => {
      const meter = new Meter(new MeterProviderSharedState(defaultResource), defaultInstrumentationLibrary);
      const counter = meter.createCounter('foobar');
      assert(counter instanceof Counter);
    });
  });

  describe('createUpDownCounter', () => {
    it('should create up down counter', () => {
      const meter = new Meter(new MeterProviderSharedState(defaultResource), defaultInstrumentationLibrary);
      const counter = meter.createUpDownCounter('foobar');
      assert(counter instanceof UpDownCounter);
    });
  });

  describe('createHistogram', () => {
    it('should create histogram', () => {
      const meter = new Meter(new MeterProviderSharedState(defaultResource), defaultInstrumentationLibrary);
      const counter = meter.createHistogram('foobar');
      assert(counter instanceof Histogram);
    });
  });
});
