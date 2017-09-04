# @zgwnu/common-bonita
Common Typescript Classes and Types for Bonita Rest Api Development. 

# Install
## NPM
__npm install https://github.com/zgwnu/common-bonita.git --save__
## GIT
__git clone https://github.com/zgwnu/common-bonita.git (destination directory/folder)__

# Content
Datastructures en Parameters that can be used to create a Bonita Rest Api application with Typescript (Node, Angular, ...). Does NOT Contain Rest Api Services (JS-framework independant library).

## Authentication
Basic Bonita Rest Api Connection Parameters
* ZgwnuBonitaCredentials

## BDM
Bonita Rest Api Business Data Management Datastructures and Parameters
* ZgwnuBonitaBusinessDataQueryParms

## BPM
Bonita Rest Api Business Process Management Datastuctures and Parameters
* ZgwnuBonitaSearchParms
### BPM / Process
Deployment, Update and Instantiation
* * ZgwnuBonitaCreateCaseResponse
* * ZgwnuBonitaDeployProcessDefinitionResponse
* * ZgwnuBonitaProcessDefinition
* * ZgwnuBonitaProcessUpdateInput
* * ZgwnuBonitaProcessActivationStateType
* * ZgwnuBonitaProcessConfigurationStateType

## File Upload
* ZgwnuBonitaFileUploadResponse
