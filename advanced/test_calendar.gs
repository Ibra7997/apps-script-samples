/**
 * Copyright Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Tests listCalendars function of calendar.gs
 */
function itShouldListCalendars() {
  Logger.log('> itShouldListCalendars');
  listCalendars();
}

/**
 * Tests createEvent function of calendars.gs
 */
function itShouldCreateEvent() {
  Logger.log('> itShouldCreateEvent');
  createEvent();
}

/**
 * Tests gerRelativeDate function of calendar.gs
 */
function itShouldGetRelativeDate() {
  Logger.log('> itShouldGetRelativeDate');
  Logger.log('no offset: ' + getRelativeDate(0, 0));
  Logger.log('4 hour offset: ' + getRelativeDate(0, 4));
  Logger.log('1 day offset: ' + getRelativeDate(1, 0));
  Logger.log('1 day and 3 hour off set: ' + getRelativeDate(1, 3));
}

/**
 * Tests listNext10Events function of calendar.gs
 */
function itShouldListNext10Events() {
  Logger.log('> itShouldListNext10Events');
  listNext10Events();
}

/**
 * Tests logSyncedEvents function of calendar.gs
 */
function itShouldLogSyncedEvents() {
  Logger.log('> itShouldLogSyncedEvents');
  logSyncedEvents('primary', true);
  logSyncedEvents('primary', false);
}

/**
 * Tests conditionalUpdate function of calendar.gs
 */
function itShouldConditionalUpdate() {
  Logger.log('> itShouldConditionalUpdate (takes 30 seconds)');
  conditionalUpdate();
}

/**
 * Tests conditionalFetch function of calendar.gs
 */
function itShouldConditionalFetch() {
  Logger.log('> itShouldConditionalFetch');
  conditionalFetch();
}

/**
 * Runs all the tests
 */
function RUN_ALL_TESTS() {
  itShouldListCalendars();
  itShouldCreateEvent();
  itShouldGetRelativeDate();
  itShouldListNext10Events();
  itShouldLogSyncedEvents();
  itShouldConditionalUpdate();
  itShouldConditionalFetch();
}
