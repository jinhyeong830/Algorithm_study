package sol_4344;

import java.util.Scanner;
  
//평균은 넘겠지?
public class Main {

	public static void main(String[] args) {
		Scanner sc=new Scanner(System.in);
		int c=sc.nextInt();
		for(int i=0;i<c;i++) {
			int n=sc.nextInt();
			int[] score=new int[n+1];
			double sum=0;
			double avg=0;
			double cnt=0;
			for(int j=0;j<n;j++) {
				score[j]=sc.nextInt();
				sum=sum+score[j];
				avg=sum/n;
			}
			//avg 확정되고 비교해야 하기때문에 for문 따로써주기
			for(int j=0;j<n;j++) {
				if(avg<score[j]) cnt++;	
			}
			n=Math.round(n);
			double per=(cnt*100)/n;
			
			System.out.println(String.format("%.3f", per)+"%");
			//평균을 넘는 비율?
			
		}
		sc.close();

	}

}
