import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

public class Solution {

    // Complete the countingValleys function below.
    
	public static void main(String[] args) {
		System.out.println(countingValleys(8, "UUDDDDUU"));
		
	}
	
	
	static int countingValleys(int n, String s) {
        //int countu = 0;
        int countz = 0;
        int count = 0;
        for(int i = 0; i < n; i++){
            if(s.equals("U")){
                count++;
                 if(s.equals("D")){
                	 count--;
                	if(count <= 0){
                		countz++;
                		if(count >= 0) {
                			countz++;
                		}
                	}	
                 }
        }
    }
        
        return countz;
 
    }

}