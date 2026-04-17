export type Page = 'home' | 'bidding' | 'ai' | 'mybids' | 'profile';

export interface Project {
  id: string;
  title: string;
  category: string;
  budget: string;
  description: string;
  status: 'active' | 'pending' | 'completed';
  deadline: string;
  image?: string;
}

export interface BidStatus {
  id: string;
  title: string;
  code: string;
  status: string;
  time: string;
  color: string;
}
