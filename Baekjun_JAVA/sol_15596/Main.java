package sol_15596;
//함수 구현해서 문제 문제 풀기: n개의 합
public class Main {
	public long sum(int[] a) {
		//a는 합을 구해야 하는 정수 n개가 저장되어 있는 배열 a[]
		long sum=0;
		for(int i=0; i<a.length;i++) {
			sum+=a[i];
		}
		return sum;
	}
}
