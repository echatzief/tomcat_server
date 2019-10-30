import java.io.PrintWriter;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.sql.*; 

public class Login extends HttpServlet {
  protected void doPost(HttpServletRequest request,HttpServletResponse response) throws ServletException,IOException{
    try{    
      //Retrieve the request parameters
      String email = request.getParameter("email");
      String password = request.getParameter("password");

      //Search if the user exists with the same credentials
      Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/users","root","root");
      String searchQuery = "SELECT * FROM credentials WHERE email='"+email+"' and password='"+password+"'";
      
      Statement st = con.createStatement();
      ResultSet rs = st.executeQuery(searchQuery);
      
      
      rs.last();
      int size = rs.getRow();
      rs.beforeFirst();
      if(size > 0) {
	 con.close();
         response.setStatus(HttpServletResponse.SC_OK);
      }
      else {
        con.close();
        response.setStatus(HttpServletResponse.SC_ACCEPTED);
      }
    }  
    catch(Exception e){
      System.err.println(e.getMessage()); 
    }
  }
}

