const questions = [
  "Please write the name of your title",
  "PLease write your readme description.",
  "Please write the usage of this code.",
  "Please write installation instructions.",
  "Please write your table of cotents.",
  "Please write who conrtibuted.",
  "Please explain any tests included",
  "Please include and pertinent questions",
  "Please select license",
];

const licenses = {
  none: ["none", ""],
  Apache2: [
    "Apache 2.0 License",
    "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
  ],
  Boost: [
    "Boost Software License 1.0",
    "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
  ],
  Bsd3: [
    "BSD 3-Clause License",
    "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
  ],
  Bsd2: [
    "BSD 2-Clause License",
    "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)",
  ],
  CC0: [
    "CC0",
    "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)",
  ],
  Attribution4International: [
    "Attribution 4.0 International",
    "[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)",
  ],
  AttributionShareAlike4International: [
    "Attribution-ShareAlike 4.0 International",
    "[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC_BY--SA_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)",
  ],
  AttributionNonCommercial4International: [
    "Attribution-NonCommercial 4.0 International",
    "[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC_BY--NC_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc/4.0/)",
  ],
  AttributionNoDerivates4International: [
    "Attribution-NoDerivates 4.0 International",
    "[![License: CC BY-ND 4.0](https://img.shields.io/badge/License-CC_BY--ND_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nd/4.0/)",
  ],
  AttributionNonCommmercialShareAlike4International: [
    "Attribution-NonCommmercial-ShareAlike 4.0 International",
    "[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC_BY--NC--SA_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)",
  ],
  AttributionNonCommercialNoDerivatives4International: [
    "Attribution-NonCommercial-NoDerivatives 4.0 International",
    "[![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC_BY--NC--ND_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-nd/4.0/)",
  ],
  EclipsePublicLicense1: [
    "Eclipse Public License 1.0",
    "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)",
  ],
  GNUGPLv3: [
    "GNU GPL v3",
    "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
  ],
  GNUGPLv2: [
    "GNU GPL v2",
    "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)",
  ],
  GNUAGPLv3: [
    "GNU AGPL v3",
    "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)",
  ],
  GNULGPLv3: [
    "GNU LGPL v3",
    "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)",
  ],
  GNUFDLv13: [
    "GNU FDL v1.3",
    "[![License: FDL 1.3](https://img.shields.io/badge/License-FDL_v1.3-blue.svg)](https://www.gnu.org/licenses/fdl-1.3)",
  ],
  TheHippocraticLicense21: [
    "The Hippocratic License 2.1",
    "[![License: Hippocratic 2.1](https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)](https://firstdonoharm.dev)",
  ],
  TheHippocraticLicense3: [
    "The Hippocratic License 3.0",
    "[![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)](https://firstdonoharm.dev)",
  ],
  IBMPublicLicenseVersion1: [
    "IBM Public License Version 1.0",
    "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)",
  ],
  ISCLicense: [
    "ISC License",
    "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
  ],
  TheMITLicense: [
    "The MIT License",
    "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
  ],
  MozillaPublicLicense2: [
    "Mozilla Public License 2.0",
    "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
  ],
  AttributionLicense: [
    "Attribution License",
    "[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)",
  ],
  OpenDatabaseLicense: [
    "Open Database License",
    "[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)",
  ],
  PublicDomainDedicationandLicense: [
    "Public Domain Dedication and License",
    "[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)",
  ],
  ThePerlLicense: [
    "The Perl License",
    "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)",
  ],
  TheArtisticLicense2: [
    "The Artistic License 2.0",
    "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)",
  ],
  SILOpenFontLicense1: [
    "SIL Open Font License 1.1",
    "[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)",
  ],
  TheUnlicense: [
    "The Unlicense",
    "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)",
  ],
  WTFPL: [
    "WTFPL",
    "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)",
  ],
  Zlib: [
    "Zlib",
    "[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)",
  ],
};

module.exports = { licenses, questions };
