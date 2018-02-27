// problem link: https://uva.onlinejudge.org/index.php?option=com_onlinejudge&Itemid=2&category=194&page=show_problem&problem=260

import java.math.BigInteger;
import java.util.Scanner;

class Main {
    public static void main(String args[]) {
        Scanner scanner = new Scanner(System.in);
        
        BigInteger fact[] = new BigInteger[367];
        BigInteger a = fact[0] = BigInteger.valueOf(1);
        BigInteger b = fact[1] = BigInteger.valueOf(1);

        int result[][] = new int[367][10];
        result[1][1]=1;
        
        int arr[] = new int[10];
        int i=2,j=0;
        String s;
        
        
        
        for(;i<1001;i++){
            fact[i] = b.multiply(BigInteger.valueOf(i));
            b = fact[i];
            
            s = String.valueOf(fact[i]);
            arr = new int[10];
            for(j=0;j<s.length();j++){
                if (s.charAt(j)=='0')
                    arr[0]++;
                else if (s.charAt(j)=='1')
                    arr[1]++;
                else if (s.charAt(j)=='2')
                    arr[2]++;
                else if (s.charAt(j)=='3')
                    arr[3]++;
                else if (s.charAt(j)=='4')
                    arr[4]++;
                else if (s.charAt(j)=='5')
                    arr[5]++;
                else if (s.charAt(j)=='6')
                    arr[6]++;
                else if (s.charAt(j)=='7')
                    arr[7]++;
                else if (s.charAt(j)=='8')
                    arr[8]++;
                else if (s.charAt(j)=='9')
                    arr[9]++;
            }
            
            
            result[i] =arr;
            
        }
        
        
        
        while(scanner.hasNext()){
            i = scanner.nextInt();
            if(i==0) break;
            System.out.println(i+"! --");
            System.out.println("    (0)    "+result[i][0]+"    (1)    "+result[i][1]+"    (2)    "+result[i][2]+"    (3)    "+result[i][3]+"    (4)    "+result[i][4]);
            System.out.println("    (5)    "+result[i][5]+"    (6)    "+result[i][6]+"    (7)    "+result[i][7]+"    (8)    "+result[i][8]+"    (9)    "+result[i][9]);
        }

        
    }
}
