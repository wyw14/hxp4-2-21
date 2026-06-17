export interface HexCoord {
  q: number;
  r: number;
}

export enum HexType {
  EMPTY = 'empty',
  NUTRIENT = 'nutrient',
  POLLUTED = 'polluted',
  MYCELIUM = 'mycelium',
  START = 'start',
}

export interface HexCell {
  coord: HexCoord;
  type: HexType;
  nutrientId?: string;
}

export interface GameState {
  id: string;
  level: number;
  gridRadius: number;
  cells: Record<string, HexCell>;
  nutrients: string[];
  connectedNutrients: string[];
  startCoord: HexCoord;
  myceliumCells: HexCoord[];
  steps: number;
  optimalSteps: number;
  status: 'playing' | 'won' | 'lost';
  createdAt: number;
  updatedAt: number;
}

export interface ApiResponse<T = void> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface PathValidationResult {
  isValid: boolean;
  isContinuous: boolean;
  hasPolluted: boolean;
  pollutedCoords: HexCoord[];
  discontinuousIndices: number[];
  stepCount: number;
  errors: string[];
}

export interface DraftState {
  isDraftMode: boolean;
  draftPath: HexCoord[];
  validationResult: PathValidationResult | null;
}
