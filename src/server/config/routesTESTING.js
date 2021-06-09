/* *************************************************************** *

  MMO stuff

* *************************************************************** */
router.get('/prototypes/multi-users2', demosController.multiUsers2Get);
router.post('/prototypes/multi-users2', demosController.multiUsers2Post);
router.get('/prototypes/multi-users2/opportunity', demosController.multiUsers2OpportunityGet);
router.get('/prototypes/multi-users2/home', demosController.multiUsers2ROHomeGet);
router.get('/prototypes/multi-users2/applications-1', demosController.multiUsers2ROApplicationsListGet);
router.get('/prototypes/multi-users2/data-test', demosController.multiUsers2DataTestGet);
router.post('/prototypes/multi-users2/data-test', demosController.multiUsers2DataTestPost);
router.get('/prototypes/multi-users2/data-display', demosController.multiUsers2DataTestDisplayGet);

/* *************************************************************** *

  Multi-user applications, to work with MMO stuff above

* *************************************************************** */
router.get('/prototypes/multi-user-application2', demosController.appV3_2tinyMCEApplicationIndexGet);
router.post('/prototypes/multi-user-application2', demosController.appV3_2tinyMCEApplicationIndexPost);
router.get('/prototypes/multi-user-application2/case-for-support', demosController.appV3_2caseForSupportGet);
router.post('/prototypes/multi-user-application2/case-for-support', demosController.appV3_2caseForSupportPost);
router.get('/prototypes/multi-user-application2/view', demosController.appV3_2tinyMCEApplicationViewGet);
router.get('/prototypes/multi-user-application2/admin-view', demosController.appV3_2AdminViewGet);
router.get('/prototypes/multi-user-application2/details', demosController.appV3_2DetailsGet);
router.post('/prototypes/multi-user-application2/details', demosController.appV3_2DetailsPost);
router.get('/prototypes/multi-user-application2/resources-and-costs', demosController.appV3_2ResourcesAndCostsGet);
router.post('/prototypes/multi-user-application2/resources-and-costs', demosController.appV3_2ResourcesAndCostsPost);
router.get('/prototypes/multi-user-application2/applicants', demosController.appV3_2ApplicantsGet);
router.post('/prototypes/multi-user-application2/applicants', demosController.appV3_2ApplicantsPost);
router.get('/prototypes/multi-user-application2/justification-of-resources', demosController.appV3_2JustificationGet);
router.post('/prototypes/multi-user-application2/justification-of-resources', demosController.appV3_2JustificationPost);
router.get('/prototypes/multi-user-application2/submitted', demosController.appV3_2SubmittedGet);
router.get('/prototypes/multi-user-application2/read', demosController.appV3_2ReadGet);

router.get('/prototypes/multi-user-application2/opportunity', demosController.appV3_2AHRCOpportunityGet);
router.post('/prototypes/multi-user-application2/opportunity', demosController.appV3_2AHRCOpportunityPost);

// add data
// router.get('/prototypes/multi-user-application2/populate-data', demosController.appV3_2PopulateDataGet);
