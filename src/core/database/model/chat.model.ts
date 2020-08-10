import { BuildOptions, DataTypes, Model, Sequelize } from "sequelize";

export interface ChatAttributes {
    id: number;
    name: string;
    email: string;
    createdAt?: Date;
    updatedAt?: Date;
}
export interface UserModel extends Model<ChatAttributes>, ChatAttributes {}
export class User extends Model<UserModel, ChatAttributes> {}

export type ChatStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): UserModel;
};

export const ChatFactory = (sequelize: Sequelize): ChatStatic => {
    return <ChatStatic>sequelize.define("chat", {
        chat_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        chat_text: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        chat_created_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        }
    });


}