Ext.data.JsonP.Spark_Core_Util_OSTools({"mixedInto":[],"parentMixins":[],"files":[],"alternateClassNames":[],"mixins":[],"requires":[],"uses":[],"aliases":{},"id":"class-Spark.Core.Util.OSTools","tagname":"class","name":"Spark.Core.Util.OSTools","extends":"","author":"","shortDoc":"","html":"\u003cdiv\u003e\u003cdiv class\u003d\"doc-contents\"\u003e\u003cp\u003eA static class with OS helper methods\u003c/p\u003e\n\u003c/div\u003e\u003cdiv class\u003d\"members\"\u003e\u003cdiv class\u003d\"members-section\"\u003e\u003cdiv class\u003d\"definedBy\"\u003eDefined By\u003c/div\u003e\u003ch3 class\u003d\"members-title icon-constructor\"\u003eConstructors\u003c/h3\u003e\u003cdiv class\u003d\"subsection\"\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv class\u003d\"members-section\"\u003e\u003cdiv class\u003d\"definedBy\"\u003eDefined By\u003c/div\u003e\u003ch3 class\u003d\"members-title icon-event\"\u003eEvents\u003c/h3\u003e\u003cdiv class\u003d\"subsection\"\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv class\u003d\"members-section\"\u003e\u003cdiv class\u003d\"definedBy\"\u003eDefined By\u003c/div\u003e\u003ch3 class\u003d\"members-title icon-property\"\u003eProperties\u003c/h3\u003e\u003cdiv class\u003d\"subsection\"\u003e\u003cdiv id\u003d\"property-configProjectDir\" class\u003d\"member first-child not-inherited\"\u003e\u003ca href\u003d\"#\" class\u003d\"side expandable\"\u003e\u003cspan\u003e\u0026nbsp;\u003c/span\u003e\u003c/a\u003e\u003cdiv class\u003d\"title\"\u003e\u003cdiv class\u003d\"meta\"\u003e\u003cspan class\u003d\"defined-in\" rel\u003d\"Spark.Core.Util.OSTools\"\u003eSpark.Core.Util.OSTools\u003c/span\u003e\u003cbr/\u003e\u003c/div\u003e\u003ca href\u003d\"#!/api/Spark.Core.Util.OSTools-property-configProjectDir\" class\u003d\"name expandable\"\u003econfigProjectDir\u003c/a\u003e : CHARACTER\u003cspan class\u003d\"signature\"\u003e\u003cspan class\u003d\"static\"\u003eSTATIC\u003c/span\u003e\u003c/span\u003e\u003c/div\u003e\u003cdiv class\u003d\"description\"\u003e\u003cdiv class\u003d\"short\"\u003eSets a custom subdirectory for config files, applicable under PASOE.\nNote that this could be a possi ...\u003c/div\u003e\u003cdiv class\u003d\"long\"\u003e\u003cp\u003eSets a custom subdirectory for config files, applicable under PASOE.\nNote that this could be a possible security risk, so the set method\nattempts to avoid setting the value if the string is deemed invalid.\u003c/p\u003e\n\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv id\u003d\"property-dlcdir\" class\u003d\"member  not-inherited\"\u003e\u003ca href\u003d\"#\" class\u003d\"side expandable\"\u003e\u003cspan\u003e\u0026nbsp;\u003c/span\u003e\u003c/a\u003e\u003cdiv class\u003d\"title\"\u003e\u003cdiv class\u003d\"meta\"\u003e\u003cspan class\u003d\"defined-in\" rel\u003d\"Spark.Core.Util.OSTools\"\u003eSpark.Core.Util.OSTools\u003c/span\u003e\u003cbr/\u003e\u003c/div\u003e\u003ca href\u003d\"#!/api/Spark.Core.Util.OSTools-property-dlcdir\" class\u003d\"name expandable\"\u003edlcdir\u003c/a\u003e : CHARACTER\u003cspan class\u003d\"signature\"\u003e\u003cspan class\u003d\"static\"\u003eSTATIC\u003c/span\u003e\u003c/span\u003e\u003c/div\u003e\u003cdiv class\u003d\"description\"\u003e\u003cdiv class\u003d\"short\"\u003eReturn the DLC directory\n\u003c/div\u003e\u003cdiv class\u003d\"long\"\u003e\u003cp\u003eReturn the DLC directory\u003c/p\u003e\n\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv id\u003d\"property-wrkdir\" class\u003d\"member  not-inherited\"\u003e\u003ca href\u003d\"#\" class\u003d\"side expandable\"\u003e\u003cspan\u003e\u0026nbsp;\u003c/span\u003e\u003c/a\u003e\u003cdiv class\u003d\"title\"\u003e\u003cdiv class\u003d\"meta\"\u003e\u003cspan class\u003d\"defined-in\" rel\u003d\"Spark.Core.Util.OSTools\"\u003eSpark.Core.Util.OSTools\u003c/span\u003e\u003cbr/\u003e\u003c/div\u003e\u003ca href\u003d\"#!/api/Spark.Core.Util.OSTools-property-wrkdir\" class\u003d\"name expandable\"\u003ewrkdir\u003c/a\u003e : CHARACTER\u003cspan class\u003d\"signature\"\u003e\u003cspan class\u003d\"static\"\u003eSTATIC\u003c/span\u003e\u003c/span\u003e\u003c/div\u003e\u003cdiv class\u003d\"description\"\u003e\u003cdiv class\u003d\"short\"\u003eReturn the current working directory of the app server agent\nUnder PASOE, this will be $CATALINA_BAS ...\u003c/div\u003e\u003cdiv class\u003d\"long\"\u003e\u003cp\u003eReturn the current working directory of the app server agent\nUnder PASOE, this will be $CATALINA_BASE/work\u003c/p\u003e\n\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv id\u003d\"property-tmpdir\" class\u003d\"member  not-inherited\"\u003e\u003ca href\u003d\"#\" class\u003d\"side expandable\"\u003e\u003cspan\u003e\u0026nbsp;\u003c/span\u003e\u003c/a\u003e\u003cdiv class\u003d\"title\"\u003e\u003cdiv class\u003d\"meta\"\u003e\u003cspan class\u003d\"defined-in\" rel\u003d\"Spark.Core.Util.OSTools\"\u003eSpark.Core.Util.OSTools\u003c/span\u003e\u003cbr/\u003e\u003c/div\u003e\u003ca href\u003d\"#!/api/Spark.Core.Util.OSTools-property-tmpdir\" class\u003d\"name expandable\"\u003etmpdir\u003c/a\u003e : CHARACTER\u003cspan class\u003d\"signature\"\u003e\u003cspan class\u003d\"static\"\u003eSTATIC\u003c/span\u003e\u003c/span\u003e\u003c/div\u003e\u003cdiv class\u003d\"description\"\u003e\u003cdiv class\u003d\"short\"\u003eReturn the current temp directory of the app server agent\nUnder PASOE, this will be $CATALINA_BASE/t ...\u003c/div\u003e\u003cdiv class\u003d\"long\"\u003e\u003cp\u003eReturn the current temp directory of the app server agent\nUnder PASOE, this will be $CATALINA_BASE/temp\u003c/p\u003e\n\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv id\u003d\"property-sparkConf\" class\u003d\"member  not-inherited\"\u003e\u003ca href\u003d\"#\" class\u003d\"side expandable\"\u003e\u003cspan\u003e\u0026nbsp;\u003c/span\u003e\u003c/a\u003e\u003cdiv class\u003d\"title\"\u003e\u003cdiv class\u003d\"meta\"\u003e\u003cspan class\u003d\"defined-in\" rel\u003d\"Spark.Core.Util.OSTools\"\u003eSpark.Core.Util.OSTools\u003c/span\u003e\u003cbr/\u003e\u003c/div\u003e\u003ca href\u003d\"#!/api/Spark.Core.Util.OSTools-property-sparkConf\" class\u003d\"name expandable\"\u003esparkConf\u003c/a\u003e : CHARACTER\u003cspan class\u003d\"signature\"\u003e\u003cspan class\u003d\"static\"\u003eSTATIC\u003c/span\u003e\u003c/span\u003e\u003c/div\u003e\u003cdiv class\u003d\"description\"\u003e\u003cdiv class\u003d\"short\"\u003eReturn the Spark configuration directory\n\u003c/div\u003e\u003cdiv class\u003d\"long\"\u003e\u003cp\u003eReturn the Spark configuration directory\u003c/p\u003e\n\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv id\u003d\"property-catalinaBase\" class\u003d\"member  not-inherited\"\u003e\u003ca href\u003d\"#\" class\u003d\"side expandable\"\u003e\u003cspan\u003e\u0026nbsp;\u003c/span\u003e\u003c/a\u003e\u003cdiv class\u003d\"title\"\u003e\u003cdiv class\u003d\"meta\"\u003e\u003cspan class\u003d\"defined-in\" rel\u003d\"Spark.Core.Util.OSTools\"\u003eSpark.Core.Util.OSTools\u003c/span\u003e\u003cbr/\u003e\u003c/div\u003e\u003ca href\u003d\"#!/api/Spark.Core.Util.OSTools-property-catalinaBase\" class\u003d\"name expandable\"\u003ecatalinaBase\u003c/a\u003e : CHARACTER\u003cspan class\u003d\"signature\"\u003e\u003cspan class\u003d\"static\"\u003eSTATIC\u003c/span\u003e\u003c/span\u003e\u003c/div\u003e\u003cdiv class\u003d\"description\"\u003e\u003cdiv class\u003d\"short\"\u003eReturn the $CATALINA_BASE OS environment variable if set\n\u003c/div\u003e\u003cdiv class\u003d\"long\"\u003e\u003cp\u003eReturn the $CATALINA_BASE OS environment variable if set\u003c/p\u003e\n\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv class\u003d\"members-section\"\u003e\u003cdiv class\u003d\"definedBy\"\u003eDefined By\u003c/div\u003e\u003ch3 class\u003d\"members-title icon-method\"\u003eMethods\u003c/h3\u003e\u003cdiv class\u003d\"subsection\"\u003e\u003cdiv id\u003d\"method-getFullPathname\" class\u003d\"member first-child not-inherited\"\u003e\u003ca href\u003d\"#\" class\u003d\"side expandable\"\u003e\u003cspan\u003e\u0026nbsp;\u003c/span\u003e\u003c/a\u003e\u003cdiv class\u003d\"title\"\u003e\u003cdiv class\u003d\"meta\"\u003e\u003cspan class\u003d\"defined-in\" rel\u003d\"Spark.Core.Util.OSTools\"\u003eSpark.Core.Util.OSTools\u003c/span\u003e\u003cbr/\u003e\u003c/div\u003e\u003ca href\u003d\"#!/api/Spark.Core.Util.OSTools-method-getFullPathname\" class\u003d\"name expandable\"\u003egetFullPathname\u003c/a\u003e(CHARACTER) : CHARACTER\u003cspan class\u003d\"signature\"\u003e\u003cspan class\u003d\"static\"\u003eSTATIC\u003c/span\u003e\u003c/span\u003e\u003c/div\u003e\u003cdiv class\u003d\"description\"\u003e\u003cdiv class\u003d\"short\"\u003eGet the full pathname of a file or directory\nWill return with \u0026quot;/\u0026quot; as the directory separat ...\u003c/div\u003e\u003cdiv class\u003d\"long\"\u003e\u003cp\u003eGet the full pathname of a file or directory\nWill return with \u0026quot;/\u0026quot; as the directory separator\nDirectories are returned with a trailing \u0026quot;/\u0026quot;\u003c/p\u003e\n\u003c/br\u003e\u003ch3 class\u003d\"pa\"\u003eParameters\u003c/h3\u003e\u003cul\u003e\u003cli\u003e\u003cspan class\u003d\"pre\"\u003epcFile\u003c/span\u003e : CHARACTER\u003cdiv class\u003d\"sub-desc\"\u003e\u003c/div\u003e\u003c/li\u003e\u003c/ul\u003e\u003ch3 class\u003d\"pa\"\u003eReturns\u003c/h3\u003e\u003cul\u003e\u003cli\u003e\u003cspan class\u003d\"pre\"\u003eCHARACTER\u003c/span\u003e\u003cdiv class\u003d\"sub-desc\"\u003e\u003c/div\u003e\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv id\u003d\"method-osCopyDir\" class\u003d\"member  not-inherited\"\u003e\u003ca href\u003d\"#\" class\u003d\"side expandable\"\u003e\u003cspan\u003e\u0026nbsp;\u003c/span\u003e\u003c/a\u003e\u003cdiv class\u003d\"title\"\u003e\u003cdiv class\u003d\"meta\"\u003e\u003cspan class\u003d\"defined-in\" rel\u003d\"Spark.Core.Util.OSTools\"\u003eSpark.Core.Util.OSTools\u003c/span\u003e\u003cbr/\u003e\u003c/div\u003e\u003ca href\u003d\"#!/api/Spark.Core.Util.OSTools-method-osCopyDir\" class\u003d\"name expandable\"\u003eosCopyDir\u003c/a\u003e(CHARACTER, CHARACTER)\u003cspan class\u003d\"signature\"\u003e\u003cspan class\u003d\"static\"\u003eSTATIC\u003c/span\u003e\u003c/span\u003e\u003c/div\u003e\u003cdiv class\u003d\"description\"\u003e\u003cdiv class\u003d\"short\"\u003e\u0026nbsp;\u003c/div\u003e\u003cdiv class\u003d\"long\"\u003e\u0026nbsp;\u003c/br\u003e\u003ch3 class\u003d\"pa\"\u003eParameters\u003c/h3\u003e\u003cul\u003e\u003cli\u003e\u003cspan class\u003d\"pre\"\u003epcFrom\u003c/span\u003e : CHARACTER\u003cdiv class\u003d\"sub-desc\"\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cspan class\u003d\"pre\"\u003epcTo\u003c/span\u003e : CHARACTER\u003cdiv class\u003d\"sub-desc\"\u003e\u003c/div\u003e\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv id\u003d\"method-recurseDir\" class\u003d\"member  not-inherited\"\u003e\u003ca href\u003d\"#\" class\u003d\"side expandable\"\u003e\u003cspan\u003e\u0026nbsp;\u003c/span\u003e\u003c/a\u003e\u003cdiv class\u003d\"title\"\u003e\u003cdiv class\u003d\"meta\"\u003e\u003cspan class\u003d\"defined-in\" rel\u003d\"Spark.Core.Util.OSTools\"\u003eSpark.Core.Util.OSTools\u003c/span\u003e\u003cbr/\u003e\u003c/div\u003e\u003ca href\u003d\"#!/api/Spark.Core.Util.OSTools-method-recurseDir\" class\u003d\"name expandable\"\u003erecurseDir\u003c/a\u003e(CHARACTER, LOGICAL) : JsonArray\u003cspan class\u003d\"signature\"\u003e\u003cspan class\u003d\"static\"\u003eSTATIC\u003c/span\u003e\u003c/span\u003e\u003c/div\u003e\u003cdiv class\u003d\"description\"\u003e\u003cdiv class\u003d\"short\"\u003e\u0026nbsp;\u003c/div\u003e\u003cdiv class\u003d\"long\"\u003e\u0026nbsp;\u003c/br\u003e\u003ch3 class\u003d\"pa\"\u003eParameters\u003c/h3\u003e\u003cul\u003e\u003cli\u003e\u003cspan class\u003d\"pre\"\u003epcFrom\u003c/span\u003e : CHARACTER\u003cdiv class\u003d\"sub-desc\"\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cspan class\u003d\"pre\"\u003eplOmitDirs\u003c/span\u003e : LOGICAL\u003cdiv class\u003d\"sub-desc\"\u003e\u003c/div\u003e\u003c/li\u003e\u003c/ul\u003e\u003ch3 class\u003d\"pa\"\u003eReturns\u003c/h3\u003e\u003cul\u003e\u003cli\u003e\u003cspan class\u003d\"pre\"\u003eJsonArray\u003c/span\u003e\u003cdiv class\u003d\"sub-desc\"\u003e\u003c/div\u003e\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv id\u003d\"method-drillDir\" class\u003d\"member  not-inherited\"\u003e\u003ca href\u003d\"#\" class\u003d\"side expandable\"\u003e\u003cspan\u003e\u0026nbsp;\u003c/span\u003e\u003c/a\u003e\u003cdiv class\u003d\"title\"\u003e\u003cdiv class\u003d\"meta\"\u003e\u003cspan class\u003d\"defined-in\" rel\u003d\"Spark.Core.Util.OSTools\"\u003eSpark.Core.Util.OSTools\u003c/span\u003e\u003cbr/\u003e\u003c/div\u003e\u003ca href\u003d\"#!/api/Spark.Core.Util.OSTools-method-drillDir\" class\u003d\"name expandable\"\u003edrillDir\u003c/a\u003e(CHARACTER)\u003cspan class\u003d\"signature\"\u003e\u003cspan class\u003d\"private\"\u003ePRIVATE\u003c/span\u003e\u003cspan class\u003d\"static\"\u003eSTATIC\u003c/span\u003e\u003c/span\u003e\u003c/div\u003e\u003cdiv class\u003d\"description\"\u003e\u003cdiv class\u003d\"short\"\u003e\u0026nbsp;\u003c/div\u003e\u003cdiv class\u003d\"long\"\u003e\u0026nbsp;\u003c/br\u003e\u003ch3 class\u003d\"pa\"\u003eParameters\u003c/h3\u003e\u003cul\u003e\u003cli\u003e\u003cspan class\u003d\"pre\"\u003epcFrom\u003c/span\u003e : CHARACTER\u003cdiv class\u003d\"sub-desc\"\u003e\u003c/div\u003e\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv id\u003d\"method-processDir\" class\u003d\"member  not-inherited\"\u003e\u003ca href\u003d\"#\" class\u003d\"side expandable\"\u003e\u003cspan\u003e\u0026nbsp;\u003c/span\u003e\u003c/a\u003e\u003cdiv class\u003d\"title\"\u003e\u003cdiv class\u003d\"meta\"\u003e\u003cspan class\u003d\"defined-in\" rel\u003d\"Spark.Core.Util.OSTools\"\u003eSpark.Core.Util.OSTools\u003c/span\u003e\u003cbr/\u003e\u003c/div\u003e\u003ca href\u003d\"#!/api/Spark.Core.Util.OSTools-method-processDir\" class\u003d\"name expandable\"\u003eprocessDir\u003c/a\u003e(CHARACTER, CHARACTER)\u003cspan class\u003d\"signature\"\u003e\u003cspan class\u003d\"private\"\u003ePRIVATE\u003c/span\u003e\u003cspan class\u003d\"static\"\u003eSTATIC\u003c/span\u003e\u003c/span\u003e\u003c/div\u003e\u003cdiv class\u003d\"description\"\u003e\u003cdiv class\u003d\"short\"\u003e\u0026nbsp;\u003c/div\u003e\u003cdiv class\u003d\"long\"\u003e\u0026nbsp;\u003c/br\u003e\u003ch3 class\u003d\"pa\"\u003eParameters\u003c/h3\u003e\u003cul\u003e\u003cli\u003e\u003cspan class\u003d\"pre\"\u003epcFrom\u003c/span\u003e : CHARACTER\u003cdiv class\u003d\"sub-desc\"\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cspan class\u003d\"pre\"\u003epcTo\u003c/span\u003e : CHARACTER\u003cdiv class\u003d\"sub-desc\"\u003e\u003c/div\u003e\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv id\u003d\"method-osCopyFile\" class\u003d\"member  not-inherited\"\u003e\u003ca href\u003d\"#\" class\u003d\"side expandable\"\u003e\u003cspan\u003e\u0026nbsp;\u003c/span\u003e\u003c/a\u003e\u003cdiv class\u003d\"title\"\u003e\u003cdiv class\u003d\"meta\"\u003e\u003cspan class\u003d\"defined-in\" rel\u003d\"Spark.Core.Util.OSTools\"\u003eSpark.Core.Util.OSTools\u003c/span\u003e\u003cbr/\u003e\u003c/div\u003e\u003ca href\u003d\"#!/api/Spark.Core.Util.OSTools-method-osCopyFile\" class\u003d\"name expandable\"\u003eosCopyFile\u003c/a\u003e(CHARACTER, CHARACTER)\u003cspan class\u003d\"signature\"\u003e\u003cspan class\u003d\"static\"\u003eSTATIC\u003c/span\u003e\u003c/span\u003e\u003c/div\u003e\u003cdiv class\u003d\"description\"\u003e\u003cdiv class\u003d\"short\"\u003e\u0026nbsp;\u003c/div\u003e\u003cdiv class\u003d\"long\"\u003e\u0026nbsp;\u003c/br\u003e\u003ch3 class\u003d\"pa\"\u003eParameters\u003c/h3\u003e\u003cul\u003e\u003cli\u003e\u003cspan class\u003d\"pre\"\u003epcFrom\u003c/span\u003e : CHARACTER\u003cdiv class\u003d\"sub-desc\"\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cspan class\u003d\"pre\"\u003epcTo\u003c/span\u003e : CHARACTER\u003cdiv class\u003d\"sub-desc\"\u003e\u003c/div\u003e\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv id\u003d\"method-osCreateDirTree\" class\u003d\"member  not-inherited\"\u003e\u003ca href\u003d\"#\" class\u003d\"side expandable\"\u003e\u003cspan\u003e\u0026nbsp;\u003c/span\u003e\u003c/a\u003e\u003cdiv class\u003d\"title\"\u003e\u003cdiv class\u003d\"meta\"\u003e\u003cspan class\u003d\"defined-in\" rel\u003d\"Spark.Core.Util.OSTools\"\u003eSpark.Core.Util.OSTools\u003c/span\u003e\u003cbr/\u003e\u003c/div\u003e\u003ca href\u003d\"#!/api/Spark.Core.Util.OSTools-method-osCreateDirTree\" class\u003d\"name expandable\"\u003eosCreateDirTree\u003c/a\u003e(CHARACTER) : CHARACTER\u003cspan class\u003d\"signature\"\u003e\u003cspan class\u003d\"static\"\u003eSTATIC\u003c/span\u003e\u003c/span\u003e\u003c/div\u003e\u003cdiv class\u003d\"description\"\u003e\u003cdiv class\u003d\"short\"\u003e\u0026nbsp;\u003c/div\u003e\u003cdiv class\u003d\"long\"\u003e\u0026nbsp;\u003c/br\u003e\u003ch3 class\u003d\"pa\"\u003eParameters\u003c/h3\u003e\u003cul\u003e\u003cli\u003e\u003cspan class\u003d\"pre\"\u003epcDir\u003c/span\u003e : CHARACTER\u003cdiv class\u003d\"sub-desc\"\u003e\u003c/div\u003e\u003c/li\u003e\u003c/ul\u003e\u003ch3 class\u003d\"pa\"\u003eReturns\u003c/h3\u003e\u003cul\u003e\u003cli\u003e\u003cspan class\u003d\"pre\"\u003eCHARACTER\u003c/span\u003e\u003cdiv class\u003d\"sub-desc\"\u003e\u003c/div\u003e\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv id\u003d\"method-osErrorMsg\" class\u003d\"member  not-inherited\"\u003e\u003ca href\u003d\"#\" class\u003d\"side expandable\"\u003e\u003cspan\u003e\u0026nbsp;\u003c/span\u003e\u003c/a\u003e\u003cdiv class\u003d\"title\"\u003e\u003cdiv class\u003d\"meta\"\u003e\u003cspan class\u003d\"defined-in\" rel\u003d\"Spark.Core.Util.OSTools\"\u003eSpark.Core.Util.OSTools\u003c/span\u003e\u003cbr/\u003e\u003c/div\u003e\u003ca href\u003d\"#!/api/Spark.Core.Util.OSTools-method-osErrorMsg\" class\u003d\"name expandable\"\u003eosErrorMsg\u003c/a\u003e(INTEGER) : CHARACTER\u003cspan class\u003d\"signature\"\u003e\u003cspan class\u003d\"static\"\u003eSTATIC\u003c/span\u003e\u003c/span\u003e\u003c/div\u003e\u003cdiv class\u003d\"description\"\u003e\u003cdiv class\u003d\"short\"\u003e\u0026nbsp;\u003c/div\u003e\u003cdiv class\u003d\"long\"\u003e\u0026nbsp;\u003c/br\u003e\u003ch3 class\u003d\"pa\"\u003eParameters\u003c/h3\u003e\u003cul\u003e\u003cli\u003e\u003cspan class\u003d\"pre\"\u003epiOsError\u003c/span\u003e : INTEGER\u003cdiv class\u003d\"sub-desc\"\u003e\u003c/div\u003e\u003c/li\u003e\u003c/ul\u003e\u003ch3 class\u003d\"pa\"\u003eReturns\u003c/h3\u003e\u003cul\u003e\u003cli\u003e\u003cspan class\u003d\"pre\"\u003eCHARACTER\u003c/span\u003e\u003cdiv class\u003d\"sub-desc\"\u003e\u003c/div\u003e\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e","classIcon":"class","members":[{"id":"method-getFullPathname","name":"getFullPathname","owner":"Spark.Core.Util.OSTools","tagname":"method","signature":"getFullPathname(INPUT:character):CHARACTER","returnComment":"","meta":{"static":true}},{"id":"method-osCopyDir","name":"osCopyDir","owner":"Spark.Core.Util.OSTools","tagname":"method","signature":"osCopyDir(INPUT:character,INPUT:character)","returnComment":"","meta":{"static":true}},{"id":"method-recurseDir","name":"recurseDir","owner":"Spark.Core.Util.OSTools","tagname":"method","signature":"recurseDir(INPUT:character,INPUT:logical):JsonArray","returnComment":"","meta":{"static":true}},{"id":"method-drillDir","name":"drillDir","owner":"Spark.Core.Util.OSTools","tagname":"method","signature":"drillDir(INPUT:character)","returnComment":"","meta":{"private":true,"static":true}},{"id":"method-processDir","name":"processDir","owner":"Spark.Core.Util.OSTools","tagname":"method","signature":"processDir(INPUT:character,INPUT:character)","returnComment":"","meta":{"private":true,"static":true}},{"id":"method-osCopyFile","name":"osCopyFile","owner":"Spark.Core.Util.OSTools","tagname":"method","signature":"osCopyFile(INPUT:character,INPUT:character)","returnComment":"","meta":{"static":true}},{"id":"method-osCreateDirTree","name":"osCreateDirTree","owner":"Spark.Core.Util.OSTools","tagname":"method","signature":"osCreateDirTree(INPUT:character):CHARACTER","returnComment":"","meta":{"static":true}},{"id":"method-osErrorMsg","name":"osErrorMsg","owner":"Spark.Core.Util.OSTools","tagname":"method","signature":"osErrorMsg(INPUT:integer):CHARACTER","returnComment":"","meta":{"static":true}},{"id":"property-configProjectDir","name":"configProjectDir","owner":"Spark.Core.Util.OSTools","tagname":"property","datatype":"CHARACTER","meta":{"static":true}},{"id":"property-dlcdir","name":"dlcdir","owner":"Spark.Core.Util.OSTools","tagname":"property","datatype":"CHARACTER","meta":{"static":true}},{"id":"property-wrkdir","name":"wrkdir","owner":"Spark.Core.Util.OSTools","tagname":"property","datatype":"CHARACTER","meta":{"static":true}},{"id":"property-tmpdir","name":"tmpdir","owner":"Spark.Core.Util.OSTools","tagname":"property","datatype":"CHARACTER","meta":{"static":true}},{"id":"property-sparkConf","name":"sparkConf","owner":"Spark.Core.Util.OSTools","tagname":"property","datatype":"CHARACTER","meta":{"static":true}},{"id":"property-catalinaBase","name":"catalinaBase","owner":"Spark.Core.Util.OSTools","tagname":"property","datatype":"CHARACTER","meta":{"static":true}}],"superclasses":[],"subclasses":[],"meta":{}});