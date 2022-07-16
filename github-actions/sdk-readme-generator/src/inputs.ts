import {enumFromValue} from './enums';

export enum ProjectStatus {
  OFFICIAL = 'official',
  INCUBATING = 'incubating',
}

export function validateProjectStatus(status: string): ProjectStatus {
  return enumFromValue(ProjectStatus, status) as unknown as ProjectStatus;
}
