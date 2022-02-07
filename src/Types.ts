export type SkillItem = {
  id: number;
  title: string;
  level: number;
  memo: string;
  iconUrl: string;
};

export type WorkItem = {
  id: number;
  title: string;
  description: string;
  skills: string;
  url: string;
}