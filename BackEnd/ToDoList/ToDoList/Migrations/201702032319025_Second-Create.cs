namespace ToDoList.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class SecondCreate : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.ToDoListEntries", "Priority", c => c.String());
        }
        
        public override void Down()
        {
            AlterColumn("dbo.ToDoListEntries", "Priority", c => c.Int(nullable: false));
        }
    }
}
