import { Router } from 'express';

import * as mainController from '../controllers/main.controller';
import * as miscController from '../controllers/misc.controller';
import * as PrototypeAuth from '../middlewares/authentication';
//
import * as demosController from '../controllers/ufs';

import { isDevelopment } from '../config/constants';

const router = Router();

/* Mount Authorisation to all prototype paths when in Prod.
   Requires credentials to match those in in Heroku env settings
*/
if (!isDevelopment()) {
  router.get('/prototypes*', PrototypeAuth.authenticationMiddleware);
}
// Misc routes
router.get('/robots.txt', mainController.robots);
router.get('/', mainController.index);

/* *************************************************************** *

    UFS ROUTES AND CONTROLLERS

 * *************************************************************** */

// Tiny MCE demo Introducer stuff (this is the noddy journey with the 0-10 scoring drop down)
router.get('/prototypes/example-journey/introducer', demosController.tinyMCEGet);
router.post('/prototypes/example-journey/introducer', demosController.tinyMCEPost);
router.get('/prototypes/example-journey/introducer/view', demosController.tinyMCEViewGet);

// Tiny MCE demo case for support
router.get('/prototypes/example-journey/application', demosController.tinyMCEApplicationIndexGet);
router.get('/prototypes/example-journey/application/start', demosController.tinyMCEApplicationGet);
router.post('/prototypes/example-journey/application/start', demosController.tinyMCEApplicationPost);

router.get('/prototypes/example-journey/application/case-for-support', demosController.caseForSupportGet);
router.post('/prototypes/example-journey/application/case-for-support', demosController.caseForSupportPost);

router.get('/prototypes/example-journey/application/view', demosController.tinyMCEApplicationViewGet);
router.get('/prototypes/example-journey/application/view-static', demosController.tinyMCEApplicationStaticViewGet);

// Application journey
router.get('/prototypes/example-journey/application/application-team', demosController.applicationTeamGet);
router.post('/prototypes/example-journey/application/application-team', demosController.applicationTeamPost);
router.get('/prototypes/example-journey/application/capability-to-deliver', demosController.capabilityToDeliverGet);
router.post('/prototypes/example-journey/application/capability-to-deliver', demosController.capabilityToDeliverPost);
router.get('/prototypes/example-journey/application/ethical-and-societal-issues', demosController.ethicalSocietalGet);
router.post('/prototypes/example-journey/application/ethical-and-societal-issues', demosController.ethicalSocietalPost);
router.get('/prototypes/example-journey/application/project-details', demosController.projectDetailsGet);
router.post('/prototypes/example-journey/application/project-details', demosController.projectDetailsPost);
router.get('/prototypes/example-journey/application/resources-and-cost', demosController.resourcesCostGet);
router.post('/prototypes/example-journey/application/resources-and-cost', demosController.resourcesCostPost);

// spreadsheet
router.get('/prototypes/example-journey/application/spreadsheet', demosController.spreadSheetGet);
router.post('/prototypes/example-journey/application/spreadsheet', demosController.spreadSheetPost);

// data from google docs
router.get('/prototypes/gds/data-from-docs', demosController.dataTestGet);
router.post('/prototypes/gds/data-from-docs', demosController.dataTestPost);

// upload script
router.get('/prototypes/uploadStuff', demosController.uploadStuffGet);
router.post('/prototypes/uploadStuff', demosController.uploadStuffPost);

// JWT
router.get('/prototypes/jwt', demosController.JWTGet);
router.post('/prototypes/jwt', demosController.JWTPost);

// Embedded PDF
router.get('/prototypes/example-journey/embedded-pdf', demosController.embeddedPDFGet);
router.post('/prototypes/example-journey/embedded-pdf', demosController.embeddedPDFPost);
router.get('/prototypes/example-journey/embedded-pdf/view', demosController.embeddedPDFViewGet);

router.get('/prototypes/example-journey/embedded-pdf/start', demosController.embeddedPDFStartGet);
router.post('/prototypes/example-journey/embedded-pdf/start', demosController.embeddedPDFStartPost);
// router.get('/prototypes/example-journey/embedded-pdf/start-uploaded', demosController.embeddedPDFStartGet);
// router.post('/prototypes/example-journey/embedded-pdf/start-uploaded', demosController.embeddedPDFStartPost);
router.get('/prototypes/example-journey/embedded-pdf/view-pdf', demosController.embeddedPDFViewPDFGet);

// Create new opportunity
router.get('/prototypes/opportunity/', demosController.opportunityGet);
router.get('/prototypes/opportunity/create', demosController.createOpportunityGet);
router.post('/prototypes/opportunity/create', demosController.createOpportunityPost);
router.get('/prototypes/opportunity/setup', demosController.opportunitySetupGet);
router.post('/prototypes/opportunity/setup', demosController.opportunitySetupPost);
router.get('/prototypes/opportunity/funders', demosController.opportunityFundersGet);
router.post('/prototypes/opportunity/funders', demosController.opportunityFundersPost);
router.get('/prototypes/opportunity/application', demosController.opportunityApplicationGet);
router.post('/prototypes/opportunity/application', demosController.opportunityApplicationPost);

/* *************************************************************** *

    Molecules random stuff

 * *************************************************************** */
// filters
router.get('/prototypes/molecules/filters', demosController.moleculesFiltersGet);

/* *************************************************************** *

    Create opportunity V2

 * *************************************************************** */
// Create new opportunity
router.get('/prototypes/opportunity-v2/', demosController.opportunityGetV2);
router.get('/prototypes/opportunity-v2/create', demosController.createOpportunityGetV2);
router.post('/prototypes/opportunity-v2/create', demosController.createOpportunityPostV2);
router.get('/prototypes/opportunity-v2/setup', demosController.opportunitySetupGetV2);
router.post('/prototypes/opportunity-v2/setup', demosController.opportunitySetupPostV2);
router.get('/prototypes/opportunity-v2/funders', demosController.opportunityFundersGetV2);
router.post('/prototypes/opportunity-v2/funders', demosController.opportunityFundersPostV2);
router.get('/prototypes/opportunity-v2/application', demosController.opportunityApplicationGetV2);
router.post('/prototypes/opportunity-v2/application', demosController.opportunityApplicationPostV2);
router.get('/prototypes/opportunity-v2/applicants', demosController.opportunityApplicantsGetV2);
router.post('/prototypes/opportunity-v2/applicants', demosController.opportunityApplicantsPostV2);
router.get('/prototypes/opportunity-v2/workflow-application', demosController.opportunityWorkflowApplicationGetV2);
router.post('/prototypes/opportunity-v2/workflow-application', demosController.opportunityWorkflowApplicationPostV2);
router.get('/prototypes/opportunity-v2/resources-and-costs', demosController.opportunityResourcesGetV2);
router.post('/prototypes/opportunity-v2/resources-and-costs', demosController.opportunityResourcesPostV2);
router.get('/prototypes/opportunity-v2/application-dates', demosController.opportunityApplicationsDatesGetV2);
router.post('/prototypes/opportunity-v2/application-dates', demosController.opportunityApplicationsDatesPostV2);
router.get('/prototypes/opportunity-v2/details', demosController.opportunityDetailsGetV2);
router.post('/prototypes/opportunity-v2/details', demosController.opportunityDetailsPostV2);
router.get('/prototypes/opportunity-v2/custom-section', demosController.opportunityCustomSectionGetV2);
router.post('/prototypes/opportunity-v2/custom-section', demosController.opportunityCustomSectionPostV2);

/* *************************************************************** *

    Create opportunity V3

 * *************************************************************** */
// Create new opportunity
router.get('/prototypes/opportunity-v3/', demosController.opportunityGetV3);
router.get('/prototypes/opportunity-v3/config', demosController.createOpportunityConfigGetV3);
router.post('/prototypes/opportunity-v3/config', demosController.createOpportunityConfigPostV3);
router.get('/prototypes/opportunity-v3/create', demosController.createOpportunityGetV3);
router.post('/prototypes/opportunity-v3/create', demosController.createOpportunityPostV3);
router.get('/prototypes/opportunity-v3/setup', demosController.opportunitySetupGetV3);
router.post('/prototypes/opportunity-v3/setup', demosController.opportunitySetupPostV3);
router.get('/prototypes/opportunity-v3/funders', demosController.opportunityFundersGetV3);
router.post('/prototypes/opportunity-v3/funders', demosController.opportunityFundersPostV3);
router.get('/prototypes/opportunity-v3/application', demosController.opportunityApplicationGetV3);
router.post('/prototypes/opportunity-v3/application', demosController.opportunityApplicationPostV3);
router.get('/prototypes/opportunity-v3/applicants', demosController.opportunityApplicantsGetV3);
router.post('/prototypes/opportunity-v3/applicants', demosController.opportunityApplicantsPostV3);
router.get('/prototypes/opportunity-v3/workflow-application', demosController.opportunityWorkflowApplicationGetV3);
router.post('/prototypes/opportunity-v3/workflow-application', demosController.opportunityWorkflowApplicationPostV3);
router.get('/prototypes/opportunity-v3/resources-and-costs', demosController.opportunityResourcesGetV3);
router.post('/prototypes/opportunity-v3/resources-and-costs', demosController.opportunityResourcesPostV3);
router.get('/prototypes/opportunity-v3/application-dates', demosController.opportunityApplicationsDatesGetV3);
router.post('/prototypes/opportunity-v3/application-dates', demosController.opportunityApplicationsDatesPostV3);
router.get('/prototypes/opportunity-v3/details', demosController.opportunityDetailsGetV3);
router.post('/prototypes/opportunity-v3/details', demosController.opportunityDetailsPostV3);
router.get('/prototypes/opportunity-v3/custom-section', demosController.opportunityCustomSectionGetV3);
router.post('/prototypes/opportunity-v3/custom-section', demosController.opportunityCustomSectionPostV3);
router.get('/prototypes/opportunity-v3/setup-complete', demosController.opportunitySetupCompleteGetV3);
router.post('/prototypes/opportunity-v3/setup-complete', demosController.opportunitySetupCompletePostV3);

/* *************************************************************** *

Register V1

* *************************************************************** */
router.get('/prototypes/register-v1/start', demosController.registerStartGetV1);
router.post('/prototypes/register-v1/start', demosController.registerStartPostV1);
router.get('/prototypes/register-v1/signin', demosController.signinGetV1);
router.post('/prototypes/register-v1/signin', demosController.signinPostV1);
router.get('/prototypes/register-v1/organisation', demosController.orgsGetV1);
router.post('/prototypes/register-v1/organisation', demosController.orgsPostV1);
router.get('/prototypes/register-v1/confirm-organisation', demosController.orgsConfirmGetV1);
router.post('/prototypes/register-v1/confirm-organisation', demosController.orgsConfirmPostV1);
router.get('/prototypes/register-v1/details', demosController.detailsGetV1);
router.post('/prototypes/register-v1/details', demosController.detailsPostV1);
router.get('/prototypes/register-v1/end', demosController.endGetV1);

/* *************************************************************** *

  Email testing

* *************************************************************** */
router.get('/prototypes/emails/', demosController.emailsGet);
router.post('/prototypes/emails/', demosController.emailsPost);
router.get('/prototypes/emails/email-rte', demosController.richTextEmailGet);
router.post('/prototypes/emails/email-rte', demosController.richTextEmailPost);

/* *************************************************************** *

  Applications v2

* *************************************************************** */
router.get('/prototypes/application-v2', demosController.appV2tinyMCEApplicationIndexGet);
router.post('/prototypes/application-v2', demosController.appV2tinyMCEApplicationIndexPost);
/*router.get('/prototypes/application-v2/start', demosController.appV2tinyMCEApplicationGet);
router.post('/prototypes/application-v2/start', demosController.appV2tinyMCEApplicationPost);*/
router.get('/prototypes/application-v2/case-for-support', demosController.appV2caseForSupportGet);
router.post('/prototypes/application-v2/case-for-support', demosController.appV2caseForSupportPost);
router.get('/prototypes/application-v2/view', demosController.appV2tinyMCEApplicationViewGet);
router.get('/prototypes/application-v2/admin-view', demosController.appV2AdminViewGet);
/*router.get('/prototypes/application-v2/view-static', demosController.appV2tinyMCEApplicationStaticViewGet);*/
// Application journey
/*router.get('/prototypes/application-v2/application-team', demosController.appV2applicationTeamGet);
router.post('/prototypes/application-v2/application-team', demosController.appV2applicationTeamPost);*/
/*router.get('/prototypes/application-v2/capability-to-deliver', demosController.appV2capabilityToDeliverGet);
router.post('/prototypes/application-v2/capability-to-deliver', demosController.appV2capabilityToDeliverPost);
router.get('/prototypes/application-v2/ethical-and-societal-issues', demosController.appV2ethicalSocietalGet);
router.post('/prototypes/application-v2/ethical-and-societal-issues', demosController.appV2ethicalSocietalPost);*/
router.get('/prototypes/application-v2/details', demosController.appV2DetailsGet);
router.post('/prototypes/application-v2/details', demosController.appV2DetailsPost);
router.get('/prototypes/application-v2/eligibility-applicant', demosController.appV2EligibilityApplicantGet);
router.post('/prototypes/application-v2/eligibility-applicant', demosController.appV2EligibilityApplicantPost);
router.get('/prototypes/application-v2/eligibility-research-area', demosController.appV2EligibilityResearchAreaGet);
router.post('/prototypes/application-v2/eligibility-research-area', demosController.appV2EligibilityResearchAreaPost);
router.get('/prototypes/application-v2/current-research-activity', demosController.appV2CurrentResearchActivityGet);
router.post('/prototypes/application-v2/current-research-activity', demosController.appV2CurrentResearchActivityPost);
router.get('/prototypes/application-v2/research-history', demosController.appV2ResearchHistoryGet);
router.post('/prototypes/application-v2/research-history', demosController.appV2ResearchHistoryPost);
router.get('/prototypes/application-v2/review', demosController.appV2ReviewGet);
router.post('/prototypes/application-v2/review', demosController.appV2ReviewPost);
router.get('/prototypes/application-v2/opportunity', demosController.appV2AHRCOpportunityGet);
router.post('/prototypes/application-v2/opportunity', demosController.appV2AHRCOpportunityPost);

// add data
router.get('/prototypes/application-v2/populate-data', demosController.appV2PopulateDataGet);

/*router.get('/prototypes/application-v2/ahrc-opportunity', demosController.appV2AHRCOpportunityGet);
router.post('/prototypes/application-v2/ahrc-opportunity', demosController.appV2AHRCOpportunityPost);*/
/*router.get('/prototypes/application-v2/resources-and-cost', demosController.appV2resourcesCostGet);
router.post('/prototypes/application-v2/resources-and-cost', demosController.appV2resourcesCostPost);
router.get('/prototypes/application-v2/add-applicant', demosController.appV2AddApplicantGet);
router.post('/prototypes/application-v2/add-applicant', demosController.appV2AddApplicantPost);*/

/* *************************************************************** *

  Various

* *************************************************************** */
router.get('/prototypes/molecules/auto-ping', demosController.autoPingGet);
router.post('/prototypes/molecules/auto-ping', demosController.autoPingPost);
router.get('/prototypes/molecules/rte-simple', demosController.rteSimpleGet);
router.post('/prototypes/molecules/rte-simple', demosController.rteSimplePost);
router.get('/prototypes/molecules/rte-simple-test', demosController.rteSimpleTestGet);
router.post('/prototypes/molecules/rte-simple-test', demosController.rteSimpleTestPost);
router.get('/prototypes/molecules/rte-complex', demosController.rteComplexGet);
router.post('/prototypes/molecules/rte-complex', demosController.rteComplexPost);
router.get('/prototypes/molecules/rte-complex-2', demosController.rteComplex2Get);
// router.post('/prototypes/molecules/rte-complex-old', demosController.rteComplexOLDPost);
router.get('/prototypes/molecules/mega-data', demosController.megaDataGet);
router.get('/prototypes/molecules/user-dashboard', demosController.userDashBoardGet);
router.get('/prototypes/molecules/user-dashboard-filters', demosController.userDashBoardFiltersGet);
router.get('/prototypes/molecules/top-nav', demosController.topNavGet);

/* *************************************************************** *

  Awards

* *************************************************************** */
router.get('/prototypes/awards', demosController.awardStartGet);
router.post('/prototypes/awards', demosController.awardStartPost);
router.get('/prototypes/awards/create', demosController.createAwardGet);
router.post('/prototypes/awards/create', demosController.createAwardPost);

/* *************************************************************** *

  MMO stuff

* *************************************************************** */
// router.get('/prototypes/champion', demosController.mmoIndexGet);
// router.post('/prototypes/champion', demosController.mmoIndexPost);
router.get('/prototypes/champion/confirm', demosController.mmoConfirmGet);
router.post('/prototypes/champion/confirm', demosController.mmoConfirmPost);
router.get('/prototypes/champion/create-password', demosController.mmoCreatePasswordGet);
router.post('/prototypes/champion/create-password', demosController.mmoCreatePasswordPost);
router.get('/prototypes/champion/data-test', demosController.mmoDataTestGet);
router.post('/prototypes/champion/data-test', demosController.mmoDataTestPost);
router.get('/prototypes/champion/data-display', demosController.mmoDataTestDisplayGet);

/* *************************************************************** *

  MMO stuff

* *************************************************************** */
router.get('/prototypes/multi-users', demosController.multiUsersGet);
router.post('/prototypes/multi-users', demosController.multiUsersPost);
/*router.get('/prototypes/multi-user/sign-in', demosController.multiUsersSignInGet);
router.post('/prototypes/multi-user/sign-in', demosController.multiUsersSignInPost);*/

router.get('/prototypes/multi-users/opportunity', demosController.multiUsersOpportunityGet);
// router.post('/prototypes/multi-users/opportunity', demosController.multiUsersSignInPost);

router.get('/prototypes/multi-users/home', demosController.multiUsersROHomeGet);
router.get('/prototypes/multi-users/applications-1', demosController.multiUsersROApplicationsListGet);
// router.post('/prototypes/multi-users/home', demosController.multiUsersROHomePost);

/*router.get('/prototypes/champion/confirm', demosController.multiUsersConfirmGet);
router.post('/prototypes/champion/confirm', demosController.multiUsersConfirmPost);
router.get('/prototypes/champion/create-password', demosController.multiUsersCreatePasswordGet);
router.post('/prototypes/champion/create-password', demosController.multiUsersCreatePasswordPost);*/
router.get('/prototypes/multi-users/data-test', demosController.multiUsersDataTestGet);
router.post('/prototypes/multi-users/data-test', demosController.multiUsersDataTestPost);
router.get('/prototypes/multi-users/data-display', demosController.multiUsersDataTestDisplayGet);

/* *************************************************************** *

  Multi-user applications, to work with MMO stuff above

* *************************************************************** */
router.get('/prototypes/multi-user-application', demosController.appV3tinyMCEApplicationIndexGet);
router.post('/prototypes/multi-user-application', demosController.appV3tinyMCEApplicationIndexPost);
router.get('/prototypes/multi-user-application/case-for-support', demosController.appV3caseForSupportGet);
router.post('/prototypes/multi-user-application/case-for-support', demosController.appV3caseForSupportPost);
router.get('/prototypes/multi-user-application/view', demosController.appV3tinyMCEApplicationViewGet);
router.get('/prototypes/multi-user-application/admin-view', demosController.appV3AdminViewGet);
router.get('/prototypes/multi-user-application/details', demosController.appV3DetailsGet);
router.post('/prototypes/multi-user-application/details', demosController.appV3DetailsPost);
router.get('/prototypes/multi-user-application/resources-and-costs', demosController.appV3ResourcesAndCostsGet);
router.post('/prototypes/multi-user-application/resources-and-costs', demosController.appV3ResourcesAndCostsPost);
router.get('/prototypes/multi-user-application/applicants', demosController.appV3ApplicantsGet);
router.post('/prototypes/multi-user-application/applicants', demosController.appV3ApplicantsPost);
router.get('/prototypes/multi-user-application/justification-of-resources', demosController.appV3JustificationGet);
router.post('/prototypes/multi-user-application/justification-of-resources', demosController.appV3JustificationPost);
router.get('/prototypes/multi-user-application/submitted', demosController.appV3SubmittedGet);
router.get('/prototypes/multi-user-application/read', demosController.appV3ReadGet);

/*
router.get('/prototypes/multi-user-application/eligibility-applicant', demosController.appV3EligibilityApplicantGet);
router.post('/prototypes/multi-user-application/eligibility-applicant', demosController.appV3EligibilityApplicantPost);
router.get('/prototypes/multi-user-application/eligibility-research-area', demosController.appV3EligibilityResearchAreaGet);
router.post('/prototypes/multi-user-application/eligibility-research-area', demosController.appV3EligibilityResearchAreaPost);
router.get('/prototypes/multi-user-application/current-research-activity', demosController.appV3CurrentResearchActivityGet);
router.post('/prototypes/multi-user-application/current-research-activity', demosController.appV3CurrentResearchActivityPost);
router.get('/prototypes/multi-user-application/research-history', demosController.appV3ResearchHistoryGet);
router.post('/prototypes/multi-user-application/research-history', demosController.appV3ResearchHistoryPost);
*/
/*router.get('/prototypes/multi-user-application/review', demosController.appV3ReviewGet);
router.post('/prototypes/multi-user-application/review', demosController.appV3ReviewPost);*/
router.get('/prototypes/multi-user-application/opportunity', demosController.appV3AHRCOpportunityGet);
router.post('/prototypes/multi-user-application/opportunity', demosController.appV3AHRCOpportunityPost);

// add data
// router.get('/prototypes/multi-user-application/populate-data', demosController.appV3PopulateDataGet);

/* *************************************************************** *

  Peer review

* *************************************************************** */
router.get('/prototypes/peer-review/', demosController.pvIndexGet);
router.post('/prototypes/peer-review/', demosController.pvIndexPost);
router.get('/prototypes/peer-review/opportunity-setup', demosController.pvOpportunitySetupGet);
router.post('/prototypes/peer-review/opportunity-setup', demosController.pvOpportunitySetupPost);
router.get('/prototypes/peer-review/applications-list', demosController.pvApplicationsListGet);
router.post('/prototypes/peer-review/applications-list', demosController.pvApplicationsListPost);
router.get('/prototypes/peer-review/application-overview', demosController.pvApplicationOverviewGet);
router.post('/prototypes/peer-review/applications-overview', demosController.pvApplicationOverviewPost);
router.get('/prototypes/peer-review/add-reviewer', demosController.pvAddReviewerGet);
router.post('/prototypes/peer-review/add-reviewer', demosController.pvAddReviewerPost);
router.get('/prototypes/peer-review/invitation-to-review', demosController.pvInvitationToReviewGet);
router.post('/prototypes/peer-review/invitation-to-review', demosController.pvInvitationToReviewPost);
router.get('/prototypes/peer-review/application-overview-2', demosController.pvApplicationOverview2Get);
router.post('/prototypes/peer-review/applications-overview-2', demosController.pvApplicationOverview2Post);
router.get('/prototypes/peer-review/review-and-acknowledge-response', demosController.pvReviewAndAcknowledgeResponseGet);
router.post('/prototypes/peer-review/review-and-acknowledge-response', demosController.pvReviewAndAcknowledgeResponsePost);
router.get('/prototypes/peer-review/invitation-to-review-extension', demosController.pvInvitationToReviewExtensionGet);
router.post('/prototypes/peer-review/invitation-to-review-extension', demosController.pvInvitationToReviewExtensionPost);
router.get('/prototypes/peer-review/manage-reviews', demosController.pvManageReviewsGet);
router.post('/prototypes/peer-review/manage-reviews', demosController.pvManageReviewsPost);
router.get('/prototypes/peer-review/review-and-return', demosController.pvReviewAndReturnGet);
router.post('/prototypes/peer-review/review-and-return', demosController.pvReviewAndReturnPost);
router.get('/prototypes/peer-review/add-note', demosController.pvAddNotesGet);
router.post('/prototypes/peer-review/add-note', demosController.pvAddNotesPost);

router.get('/prototypes/peer-review/expert-review', demosController.pvExpertReviewGet);
router.post('/prototypes/peer-review/expert-review', demosController.pvExpertReviewPost);

router.get('/prototypes/peer-review/send-reviews-to-applicant', demosController.pvSendReviewsGet);
router.post('/prototypes/peer-review/send-reviews-to-applicant', demosController.pvSendReviewsPost);

/* *************************************************************** *

  Peer review invite to expert

* *************************************************************** */
router.get('/prototypes/peer-review-external/', demosController.prResponseIndexGet);
router.post('/prototypes/peer-review-external/', demosController.prResponseIndexPost);
router.get('/prototypes/peer-review-external/respond-to-invite', demosController.prResponseRespondGet);
router.post('/prototypes/peer-review-external/respond-to-invite', demosController.prResponseRespondPost);
router.get('/prototypes/peer-review-external/invite-accept', demosController.prAcceptResponseGet);
router.post('/prototypes/peer-review-external/invite-accept', demosController.prAcceptResponsePost);
router.get('/prototypes/peer-review-external/invite-reject', demosController.prRejectResponseGet);
router.post('/prototypes/peer-review-external/invite-reject', demosController.prRejectResponsePost);
router.get('/prototypes/peer-review-external/invite-extend', demosController.prExtendResponseGet);
router.post('/prototypes/peer-review-external/invite-extend', demosController.prExtendResponsePost);
router.get('/prototypes/peer-review-external/thanks', demosController.prThanksGet);
router.post('/prototypes/peer-review-external/thanks', demosController.prThanksPost);
router.get('/prototypes/peer-review-external/user-home', demosController.prHomeGet);
router.post('/prototypes/peer-review-external/user-home', demosController.prHomePost);
router.get('/prototypes/peer-review-external/user-reviews', demosController.prReviewsGet);
router.post('/prototypes/peer-review-external/user-reviews', demosController.prReviewsPost);
router.get('/prototypes/peer-review-external/review-tabs', demosController.prReviewTabsGet);
router.post('/prototypes/peer-review-external/review-tabs', demosController.prReviewTabsPost);
router.get('/prototypes/peer-review-external/review-and-submit', demosController.prReviewAndSubmitGet);
router.post('/prototypes/peer-review-external/review-and-submit', demosController.prReviewAndSubmitPost);
router.get('/prototypes/peer-review-external/review-complete', demosController.prReviewCompleteGet);
router.get('/prototypes/peer-review-external/user-reviews-complete', demosController.prReviewsCompleteGet);
router.get('/prototypes/peer-review-external/applicant-review-tabs', demosController.prApplicantReviewTabsGet);
router.post('/prototypes/peer-review-external/applicant-review-tabs', demosController.prApplicantReviewTabsPost);
router.get('/prototypes/peer-review-external/applicant-review-and-submit', demosController.prApplicantReviewCommentsTabsGet);
router.post('/prototypes/peer-review-external/applicant-review-and-submit', demosController.prApplicantReviewCommentsTabsPost);
router.get('/prototypes/peer-review-external/applicant-review-tabs-complete', demosController.prApplicantReviewTabCompletesGet);

/* *************************************************************** *

  External users nav demo

* *************************************************************** */
router.get('/prototypes/external-users/applications', demosController.externalUsersApplicationsGet);
router.post('/prototypes/external-users/applications', demosController.externalUsersApplicationsPost);
router.get('/prototypes/external-users/reviews', demosController.externalUsersReviewsGet);
router.post('/prototypes/external-users/reviews', demosController.externalUsersReviewsPost);

/* *************************************************************** *

  EDI profile

* *************************************************************** */
router.get('/prototypes/edi', demosController.ediIndexGet);
router.post('/prototypes/edi', demosController.ediIndexPost);
router.get('/prototypes/edi/home', demosController.ediHomeGet);
router.post('/prototypes/edi/home', demosController.ediHomePost);
router.get('/prototypes/edi/profile', demosController.ediProfileGet);
router.post('/prototypes/edi/profile', demosController.ediProfilePost);
router.get('/prototypes/edi/edi', demosController.ediEDIGet);
router.post('/prototypes/edi/edi', demosController.ediEDIPost);

router.get('/prototypes/edi/edi-dob', demosController.ediDOBGet);
router.post('/prototypes/edi/edi-dob', demosController.ediDOBPost);
router.get('/prototypes/edi/edi-religion', demosController.ediReligionGet);
router.post('/prototypes/edi/edi-religion', demosController.ediReligionPost);
router.get('/prototypes/edi/edi-ethnic-group', demosController.ediEthnicGroupGet);
router.post('/prototypes/edi/edi-ethnic-group', demosController.ediEthnicGroupPost);
router.get('/prototypes/edi/edi-ethnic-group', demosController.ediEthnicAsianGet);
router.post('/prototypes/edi/edi-ethnic-group', demosController.ediEthnicAsianPost);

router.get('/prototypes/edi/edi-confirm', demosController.ediConfirmGet);
router.post('/prototypes/edi/edi-confirm', demosController.ediConfirmPost);

// Create route from view path
router.get('*', miscController.viewFileRoute);
export const allRoutes = router;
