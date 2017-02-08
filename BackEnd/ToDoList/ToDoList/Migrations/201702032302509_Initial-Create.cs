namespace ToDoList.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitialCreate : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.ToDoListEntries",
                c => new
                    {
                        ToDoListEntryId = c.Int(nullable: false, identity: true),
                        Task = c.String(),
                        Priority = c.Int(nullable: false),
                        CreateDate = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.ToDoListEntryId);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.ToDoListEntries");
        }
    }
}
