package silver_sol_4673;
//셀프넘버
public class Main {
	public static int d(int num) {
		int sum=num;
		while(num!=0) {
			sum=sum+(num%10);
			num/=10;
		}
		return sum;
	}//d();함수 생성
	public static void main(String[] args) {
		boolean[] numCheck=new boolean[10001];
		//생성자가 있으면 numcheck배열을 true로.
		for(int i=0; i<10001; i++) {
			int n=d(i);
			if(n<10001)
				numCheck[n]=true;
		}
		for(int i=0;i<10001;i++) {
			if(numCheck[i]==false) {
				System.out.println(i);
			}
		}

	}

}
