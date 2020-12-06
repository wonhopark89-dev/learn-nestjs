import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateMovieDto {
  @IsString()
  readonly title: string;

  @IsNumber()
  readonly year: number;

  @IsOptional() // 변수 값 자체는 옵셔널한 의미
  @IsString({ each: true }) // 각 안에 있는 요소는 모두 체크한다는 의미
  readonly genres: string[];
}
