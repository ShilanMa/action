const packageLicenses = require('./license-used.json');

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

const invalidPackages = [];

for (const [packageName, packageInfo] of Object.entries(packageLicenses)) {
  const licenses = packageInfo.licenses;
  if (invalidLicenses.includes(licenses)) {
    invalidPackages.push({ name: packageName, packageInfo });
  }
}

console.error('Invalid packages:', invalidPackages);
process.stderr.write('Error! Packages with invalid license were found');
