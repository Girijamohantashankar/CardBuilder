import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VisitingCardService {
  private visitingCardDataSubject = new BehaviorSubject<any>(null);
  visitingCardData$ = this.visitingCardDataSubject.asObservable();

  setVisitingCardData(data: any): void {
    this.visitingCardDataSubject.next(data);
  }
}
