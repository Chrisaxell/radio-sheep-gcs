import {MavState} from "../enums/mav-state";
import {GpsFixType} from '../enums/gps-fix-type'

export interface DroneStatus {
    connected?: boolean,
    armed?: boolean,
    systemStatus?: MavState,
    latitude?: number;
    longitude?: number;
    altitude?: number;
    yaw?: number;
    vx?: number;
    vy?: number;
    vz?: number;
    battery?: number;
    batteryVoltage?: number;
    currentMissionItem?: number;
    gpsFixType?: GpsFixType,
    gpsHDOP?: number,
    gpsVDOP?: number,
    satellitesVisible?: number,
}
