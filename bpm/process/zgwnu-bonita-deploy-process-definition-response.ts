import { ZgwnuBonitaProcessActivationStateType } from './zgwnu-bonita-process-activation-state.type'
import { ZgwnuBonitaProcessConfigurationStateType } from './zgwnu-bonita-process-configuration-state.type'

export class ZgwnuBonitaDeployProcessDefinitionResponse {
    id: string
    deploymentDate: string
    description: string
    activationState: ZgwnuBonitaProcessActivationStateType
    name: string
    displayName: string
    actorinitiatorid: string 
    last_update_date: string
    configurationState: ZgwnuBonitaProcessConfigurationStateType
    version: string
}