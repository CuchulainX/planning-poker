export interface State {
    room?: RoomInformation;
    participants: Participant[];
    ongoingEstimation?: Estimation;
    estimationResult?: EstimationResult;
  }
  
  export interface RoomInformation {
    name: string;
    userName: string;
    isSpectator: boolean;
    showCats: boolean;
  }
  
  export interface Participant {
    name: string;
    isSpectator: boolean;
    hasEstimated: boolean;
    estimationValue?: string;
  }
  
  export interface Estimation {
    taskName: string;
    start: Date;
  }
  
  export interface EstimationResult {
    taskName: string;
    startDate: Date;
    endDate: Date;
    estimates: { userName: string; estimate: string }[];
  }