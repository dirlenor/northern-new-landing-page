export interface Destination {
  id: number;
  title: string;
  location: string;
  image: string;
  price: string;
  rating: number;
}

export interface TripRequest {
  destination: string;
  duration: string;
  budget: 'Budget' | 'Moderate' | 'Luxury';
  interests: string[];
}

export interface PlannerState {
  isLoading: boolean;
  result: string | null;
  error: string | null;
}
