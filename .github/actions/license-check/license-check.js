import * as modulesLicense from './license-used.json' assert { type: 'json' };

const unknownList = ['UNKNOWN', 'UNLICENSED'];

const invalidLicenses = [
  ...unknownList,
  'OSL-1.0',
  'OSL-1.1',
  'OSL-2.0',
  'OSL-2.1',
  'OSL-3.0',
  'GPL-2.0',
  'GPL-3.0',
  'AGPL-1.0',
  'AGPL-1.0-only',
  'AGPL-1.0-or-later',
  'AGPL-3.0',
  'AGPL-3.0-only',
  'AGPL-3.0-or-later',
  'CC-BY-SA-1.0',
  'CC-BY-SA-4.0',
  'CC-BY-SA-2.0',
  'CC-BY-SA-2.5',
  'CC-BY-SA-3.0',
  'LGPL-3.0-only',
  'LGPL-3.0',
  'LGPL-2.0',
  'GPL-1.0-or-later',
  'GPL-3.0-or-later',
  'GPL-2.0-or-later',
  'MPL-1.0',
  'MPL-1.1',
  'MPL-2.0',
  'MPL-2.0-no-copyleft-exception',
];

const invalidModules = [];

for (const [moduleName, moduleInfo] of Object.entries(modulesLicense.default)) {
  const licenses = moduleInfo.licenses;
  if (invalidLicenses.includes(licenses)) {
    invalidModules.push({ name: moduleName, moduleInfo });
  }
}

console.error('Invalid Modules:', invalidModules);
